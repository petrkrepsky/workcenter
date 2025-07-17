# AP-31: FX Derivatives Data Model

## Overview

This document defines the data model for FX derivatives integration in the Digital Banking platform (DKCZ). The model supports three types of FX derivatives: FX Spot, FX Outright, and FX Swap, with their respective trade legs and valuation data.

## Core Entities

### 1. FX Trade

Base entity representing all FX derivative transactions.

```json
{
  "tradeId": "string",                    // Unique trade identifier from Blotter
  "clientId": "string",                   // Client identifier (J&T Bank ID)
  "portfolioId": "string",                // Portfolio ID (null for BU trades)
  "tradeType": "FX_SPOT|FX_OUTRIGHT|FX_SWAP",
  "tradeStatus": "ACTIVE|CANCELLED|SETTLED",
  "tradeDate": "2024-01-15T10:30:00Z",   // ISO 8601 timestamp
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:30:00Z",
  "businessUnit": "SU|BU",               // Sales Unit or Business Unit
  "topasId": "string",                    // Topas ID for portfolio trades
  "businessUnitNumber": "string",         // BU number for BU trades
  "legs": [                              // Array of trade legs
    // FxTradeLeg objects
  ]
}
```

### 2. FX Trade Leg

Represents individual legs of FX derivatives (single leg for spot/outright, two legs for swap).

```json
{
  "legId": "string",                      // Unique leg identifier
  "tradeId": "string",                    // Reference to parent trade
  "legType": "SPOT|FORWARD",              // Type of leg
  "legNumber": 1,                         // Leg sequence number (1 for spot/outright, 1-2 for swap)
  "currencyPair": "EUR/CZK",              // Currency pair
  "baseCurrency": "EUR",                  // Base currency (first in pair)
  "quoteCurrency": "CZK",                 // Quote currency (second in pair)
  "operationDirection": "BUY|SELL",       // Direction from bank perspective
  "clientDirection": "BUY|SELL",          // Direction from client perspective
  "fxRate": 25.450,                       // Traded FX rate
  "baseAmount": 100000.00,                // Amount in base currency
  "quoteAmount": 2545000.00,              // Amount in quote currency
  "tradeDate": "2024-01-15T10:30:00Z",
  "settlementDate": "2024-01-17T00:00:00Z",
  "settledDate": "2024-01-17T00:00:00Z",  // Null if not settled
  "isSettled": false,
  "valuationDate": "2024-01-16T00:00:00Z",
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:30:00Z"
}
```

### 3. FX Valuation

Contains valuation data for FX derivatives from RMR system.

```json
{
  "valuationId": "string",                // Unique valuation identifier
  "tradeId": "string",                    // Reference to FX trade
  "legId": "string",                      // Reference to specific leg
  "valuationDate": "2024-01-16T00:00:00Z",
  "referenceDate": "2024-01-16T00:00:00Z",
  "currentValue": 2547500.00,             // Current market value in CZK
  "tradedValue": 2545000.00,              // Original traded value in CZK
  "unrealizedPnL": 2500.00,               // Unrealized P&L in CZK
  "unrealizedPnLPercent": 0.098,          // Unrealized P&L percentage
  "baseCurrencyValue": 100000.00,         // Current base currency value
  "quoteCurrencyValue": 2547500.00,       // Current quote currency value
  "baseCurrencyValueCZK": 2547500.00,     // Base currency value in CZK
  "quoteCurrencyValueCZK": 2547500.00,    // Quote currency value in CZK
  "marketRate": 25.475,                   // Current market rate
  "valuationSource": "RMR|QUAESTOR",      // Source system for valuation
  "createdAt": "2024-01-16T00:00:00Z",
  "updatedAt": "2024-01-16T00:00:00Z"
}
```

## Derivative Type Specifications

### FX Spot

Single-leg derivative with T+2 settlement.

```json
{
  "tradeType": "FX_SPOT",
  "legs": [
    {
      "legType": "SPOT",
      "legNumber": 1,
      "settlementDate": "2024-01-17T00:00:00Z"  // T+2 from trade date
    }
  ]
}
```

### FX Outright

Single-leg derivative with settlement beyond T+2.

```json
{
  "tradeType": "FX_OUTRIGHT",
  "legs": [
    {
      "legType": "FORWARD",
      "legNumber": 1,
      "settlementDate": "2024-02-15T00:00:00Z"  // Beyond T+2
    }
  ]
}
```

### FX Swap

Two-leg derivative combining spot and forward transactions.

```json
{
  "tradeType": "FX_SWAP",
  "legs": [
    {
      "legType": "SPOT",
      "legNumber": 1,
      "operationDirection": "BUY",
      "settlementDate": "2024-01-17T00:00:00Z"
    },
    {
      "legType": "FORWARD",
      "legNumber": 2,
      "operationDirection": "SELL",
      "settlementDate": "2024-02-15T00:00:00Z"
    }
  ]
}
```

## Portfolio Integration Model

### Portfolio Position

Aggregated view of FX derivatives within a portfolio.

```json
{
  "portfolioId": "string",
  "clientId": "string",
  "positionDate": "2024-01-16T00:00:00Z",
  "totalPositions": 5,
  "totalValueCZK": 12737500.00,
  "totalUnrealizedPnL": 12500.00,
  "totalUnrealizedPnLPercent": 0.098,
  "positionsByCurrency": {
    "EUR": {
      "longPositionCZK": 7642500.00,
      "shortPositionCZK": 0.00,
      "netPositionCZK": 7642500.00
    },
    "USD": {
      "longPositionCZK": 0.00,
      "shortPositionCZK": 5095000.00,
      "netPositionCZK": -5095000.00
    }
  },
  "positionsByType": {
    "FX_SPOT": {
      "count": 2,
      "valueCZK": 5095000.00,
      "unrealizedPnL": 5000.00
    },
    "FX_OUTRIGHT": {
      "count": 1,
      "valueCZK": 2547500.00,
      "unrealizedPnL": 2500.00
    },
    "FX_SWAP": {
      "count": 2,
      "valueCZK": 5095000.00,
      "unrealizedPnL": 5000.00
    }
  }
}
```

### Virtual Portfolio (Term Trades)

Special portfolio for BU trades without portfolio association.

```json
{
  "portfolioId": "VIRTUAL_TERM_TRADES",
  "portfolioName": "Termínové obchody",
  "clientId": "string",
  "isVirtual": true,
  "businessUnit": "BU",
  "displayGraphs": false,
  "positions": [
    // FX trades without portfolio association
  ]
}
```

## Kafka Topic Data Models

### Topic: fx-derivatives-trade

```json
{
  "messageId": "string",
  "timestamp": "2024-01-15T10:30:00Z",
  "eventType": "TRADE_CREATED|TRADE_UPDATED|TRADE_CANCELLED|TRADE_SETTLED",
  "source": "BLOTTER",
  "version": "1.0",
  "data": {
    // FxTrade object
  }
}
```

### Topic: fx-derivatives-valuation

```json
{
  "messageId": "string",
  "timestamp": "2024-01-16T00:00:00Z",
  "eventType": "VALUATION_UPDATED",
  "source": "RMR",
  "version": "1.0",
  "data": {
    // FxValuation object
  }
}
```

## Database Schema

### Table: fx_trades

```sql
CREATE TABLE fx_trades (
    trade_id VARCHAR(50) PRIMARY KEY,
    client_id VARCHAR(50) NOT NULL,
    portfolio_id VARCHAR(50),
    trade_type VARCHAR(20) NOT NULL,
    trade_status VARCHAR(20) NOT NULL,
    trade_date TIMESTAMP NOT NULL,
    business_unit VARCHAR(10) NOT NULL,
    topas_id VARCHAR(50),
    business_unit_number VARCHAR(50),
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    INDEX idx_client_id (client_id),
    INDEX idx_portfolio_id (portfolio_id),
    INDEX idx_trade_date (trade_date)
);
```

### Table: fx_trade_legs

```sql
CREATE TABLE fx_trade_legs (
    leg_id VARCHAR(50) PRIMARY KEY,
    trade_id VARCHAR(50) NOT NULL,
    leg_type VARCHAR(20) NOT NULL,
    leg_number INT NOT NULL,
    currency_pair VARCHAR(10) NOT NULL,
    base_currency VARCHAR(3) NOT NULL,
    quote_currency VARCHAR(3) NOT NULL,
    operation_direction VARCHAR(10) NOT NULL,
    client_direction VARCHAR(10) NOT NULL,
    fx_rate DECIMAL(15,6) NOT NULL,
    base_amount DECIMAL(15,2) NOT NULL,
    quote_amount DECIMAL(15,2) NOT NULL,
    trade_date TIMESTAMP NOT NULL,
    settlement_date TIMESTAMP NOT NULL,
    settled_date TIMESTAMP,
    is_settled BOOLEAN NOT NULL DEFAULT FALSE,
    valuation_date TIMESTAMP,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    FOREIGN KEY (trade_id) REFERENCES fx_trades(trade_id),
    INDEX idx_trade_id (trade_id),
    INDEX idx_settlement_date (settlement_date),
    INDEX idx_currency_pair (currency_pair)
);
```

### Table: fx_valuations

```sql
CREATE TABLE fx_valuations (
    valuation_id VARCHAR(50) PRIMARY KEY,
    trade_id VARCHAR(50) NOT NULL,
    leg_id VARCHAR(50) NOT NULL,
    valuation_date TIMESTAMP NOT NULL,
    reference_date TIMESTAMP NOT NULL,
    current_value DECIMAL(15,2) NOT NULL,
    traded_value DECIMAL(15,2) NOT NULL,
    unrealized_pnl DECIMAL(15,2) NOT NULL,
    unrealized_pnl_percent DECIMAL(8,4) NOT NULL,
    base_currency_value DECIMAL(15,2) NOT NULL,
    quote_currency_value DECIMAL(15,2) NOT NULL,
    base_currency_value_czk DECIMAL(15,2) NOT NULL,
    quote_currency_value_czk DECIMAL(15,2) NOT NULL,
    market_rate DECIMAL(15,6) NOT NULL,
    valuation_source VARCHAR(20) NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    FOREIGN KEY (trade_id) REFERENCES fx_trades(trade_id),
    FOREIGN KEY (leg_id) REFERENCES fx_trade_legs(leg_id),
    INDEX idx_trade_id (trade_id),
    INDEX idx_leg_id (leg_id),
    INDEX idx_valuation_date (valuation_date)
);
```

## Business Rules

### Settlement Logic
- **FX Spot**: Settlement date = trade date + 2 business days
- **FX Outright**: Settlement date > trade date + 2 business days
- **FX Swap**: Two separate settlement dates for near and far legs

### Display Rules
- **Active Trades**: Show only unsettled legs
- **FX Swap**: Show both legs until far leg is settled
- **Portfolio Association**: SU trades linked to portfolio, BU trades in virtual portfolio

### Valuation Rules
- **Daily Valuation**: Updated once per day from RMR
- **Historical Data**: RMR (2021+), Quaestor (pre-2021)
- **Currency**: All valuations in CZK reference currency

### P&L Calculation
```
Unrealized P&L = Current Value - Traded Value
Unrealized P&L % = (Unrealized P&L / ABS(Traded Value)) * 100
```

### Long/Short Allocation
- **BUY Direction**: Base currency to LONG, Quote currency to SHORT
- **SELL Direction**: Base currency to SHORT, Quote currency to LONG

## Data Quality & Validation

### Trade Data Validation
- Trade ID uniqueness
- Currency pair format validation
- Amount precision (2 decimal places)
- Rate precision (6 decimal places)
- Date logical consistency

### Valuation Data Validation
- Valuation date not in future
- P&L calculations consistency
- Currency conversion accuracy
- Source system validation

### Portfolio Integration Validation
- Portfolio existence validation
- Client authorization validation
- Position aggregation accuracy
- Chart data consistency

## Error Handling

### Data Processing Errors
- Invalid trade data format
- Missing valuation data
- Kafka message processing failures
- Database constraint violations

### Business Logic Errors
- Unsupported currency pairs
- Invalid settlement dates
- Inconsistent leg data
- Portfolio association conflicts

## Performance Considerations

### Data Volume
- Estimated 200 clients with FX derivatives
- Average 5-10 trades per client
- Daily valuation updates
- Historical data retention

### Query Optimization
- Indexed queries on client_id, portfolio_id, trade_date
- Materialized views for portfolio aggregations
- Cached valuation calculations
- Efficient joins between trades and valuations

### Caching Strategy
- Portfolio position cache (1 hour TTL)
- Valuation data cache (daily refresh)
- Chart data cache (client-specific)
- Reference data cache (currency pairs, rates)