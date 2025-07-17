# AP-31: FX Derivatives Portfolio Overview - Architectural Overview

## Executive Summary

This document outlines the architectural approach for implementing FX derivatives overview functionality in the Digital Banking platform (DKCZ). The solution enables clients to view FX derivatives (FX spot, FX outright, FX swap) within their investment portfolios, including valuation and portfolio impact.

## Business Context

- **Story ID**: US 5901 - Přehled FX derivátů v portfoliu
- **Business Value**: Integration of FX derivatives into client portfolio valuation and risk management
- **Client Base**: Approximately 200 clients with FX derivatives
- **Derivative Types**: FX spot, FX outright, FX swap

## Current State (AS-IS)

### Systems Landscape
- **Blotter**: Primary system holding FX derivatives data with client/portfolio associations
- **RMR (Risk DB)**: Valuation system with pricing from 2021 onwards
- **Quaestor**: Historical pricing data (pre-2021)
- **Xerox**: Confirmation and statement generation

### Data Flow
1. FX derivatives are traded through Sales Unit (SU) or Business Unit (BU)
2. Trade data stored in Blotter with portfolio linkage (SU trades) or without (BU trades)
3. Daily valuation performed in RMR system
4. Confirmations sent directly from Blotter to clients via email

## Target State (TO-BE)

### Integration Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│     Client      │    │   DKCZ Web      │    │   DKCZ BE       │
│   (J&T Bank)    │◄──►│   Frontend      │◄──►│   Backend       │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                                         │
                                                         ▼
                       ┌─────────────────┐    ┌─────────────────┐
                       │   EI Kafka      │◄──►│   Topic         │
                       │ (Enterprise     │    │   Processing    │
                       │  Integrator)    │    │                 │
                       └─────────────────┘    └─────────────────┘
                                │                        │
                                ▼                        ▼
                  ┌──────────────────────┐    ┌─────────────────┐
                  │     Blotter         │    │      RMR        │
                  │   (Trade Data)      │    │  (Valuation)    │
                  └──────────────────────┘    └─────────────────┘
```

### Kafka Topics Integration

#### Topic Derivatives (from Blotter)
- **Purpose**: Provide FX derivatives trade data
- **Content**: Trade details, portfolio associations, trade status
- **Frequency**: Real-time updates

#### Topic Valuation (from RMR)
- **Purpose**: Provide FX derivatives valuations
- **Content**: Profit/Loss calculations, current values, mark-to-market
- **Frequency**: Daily updates

## Data Model

### FX Derivative Types

#### 1. FX Spot
- **Definition**: FX derivative with T+2 settlement
- **Legs**: Single leg transaction
- **Attributes**: Trade date, settlement date, FX rate, volumes

#### 2. FX Outright
- **Definition**: FX derivative with settlement beyond T+2
- **Legs**: Single leg transaction
- **Attributes**: Trade date, settlement date, FX rate, volumes

#### 3. FX Swap
- **Definition**: Combination of spot and forward transactions
- **Legs**: Two legs (spot + forward)
- **Attributes**: Near leg (spot), far leg (forward), each with separate rates and dates

### Portfolio Association
- **Portfolio-linked**: FX derivatives traded via Sales Unit (SU)
- **Unlinked**: FX derivatives traded via Business Unit (BU) - displayed in "Termínové obchody" (Term Trades)

## User Interface Design

### Portfolio Overview
- **Location**: Digital Banking → Investments → Portfolio → "Everything" tab
- **Section**: "FX Derivatives" subsection
- **Dedicated Tab**: "FX Derivatives" for filtered view

### Display Fields

#### Summary View
- **Type**: Derivative type (FX spot, FX outright, FX swap)
- **Currency Pair**: Trading currency pair (sortable)
- **Trade Direction**: Buy/Sell or Buy/Sell combination (sortable)
- **Volume**: Amount in base currency
- **P&L**: Profit/Loss in CZK (absolute and percentage)

#### Detail View (expandable)
- **Reference**: Trade ID from Blotter
- **Valuation Date**: Last valuation timestamp
- **Portfolio**: Portfolio association (if applicable)
- **Trade Date**: Original trade date
- **Settlement Date(s)**: Settlement dates per leg
- **Trade Number**: Topas ID for portfolio trades or BU number
- **FX Rate**: Traded rate per leg
- **Volumes**: Base and quote currency amounts

## Portfolio Impact

### Valuation Integration
- **Portfolio Value**: Include unsettled FX derivatives in total portfolio value
- **Unrealized P&L**: Include FX derivatives P&L in portfolio unrealized gains/losses
- **Invested Assets**: Include FX derivatives in total invested assets calculation

### Chart Integration

#### Pie Charts - Product Type Distribution
- **FX Derivatives Section**: Separate slice for FX derivatives
- **Long/Short Breakdown**: Based on current currency values and trade direction

#### Pie Charts - Currency Distribution
- **Base Currency**: Current value of base currency per leg
- **Quote Currency**: Current value of quote currency per leg
- **Long/Short Logic**: Based on trade direction and current values

### Historical Charts
- **Limitation**: Historical development chart not applicable for BU trades
- **Portfolio Charts**: Include FX derivatives in portfolio historical value (SU trades only)

## Technical Implementation

### Backend Services
- **Kafka Consumers**: Process derivatives and valuation topics
- **Data Transformation**: Convert Blotter/RMR data to DKCZ format
- **Portfolio Aggregation**: Include FX derivatives in portfolio calculations
- **API Layer**: Expose FX derivatives data to frontend

### Frontend Components
- **Portfolio Overview**: Enhanced with FX derivatives section
- **Detail Modal**: Expandable detail view for individual derivatives
- **Filtering/Sorting**: Currency pair and trade direction sorting
- **Chart Integration**: Update existing portfolio charts

### Data Consistency
- **Unsettled Positions**: Display only unsettled legs
- **Swap Handling**: For FX swaps, show both legs until far leg settlement
- **Portfolio Association**: Handle both portfolio-linked and unlinked derivatives

## Security & Compliance

### Data Access
- **Authorization**: Client access limited to own portfolios
- **Portfolio Permissions**: Respect existing portfolio access rights
- **Data Masking**: Apply standard banking data protection

### Audit Trail
- **Trade Tracking**: Maintain audit trail for FX derivatives access
- **Valuation History**: Track valuation changes and access

## Performance Considerations

### Data Volume
- **Client Base**: ~200 clients with FX derivatives
- **Transaction Volume**: Low to moderate volume
- **Real-time Updates**: Kafka-based real-time processing

### Caching Strategy
- **Portfolio Cache**: Cache portfolio aggregations
- **Valuation Cache**: Cache daily valuations
- **Chart Data Cache**: Cache chart calculations

## Testing Strategy

### Unit Testing
- **Data Transformation**: Test Kafka message processing
- **Portfolio Calculations**: Test P&L and aggregation logic
- **Chart Logic**: Test long/short allocation logic

### Integration Testing
- **Kafka Integration**: Test topic consumption and processing
- **API Testing**: Test frontend-backend integration
- **End-to-End**: Test complete user workflow

## Deployment & Rollout

### Phases
1. **Phase 1**: Backend Kafka integration and data processing
2. **Phase 2**: Frontend UI implementation and testing
3. **Phase 3**: Production deployment and monitoring

### Rollback Strategy
- **Feature Flags**: Control FX derivatives display
- **Data Rollback**: Maintain previous portfolio calculation logic
- **Monitoring**: Track system performance and user adoption

## Risks & Mitigation

### Technical Risks
- **Kafka Topic Availability**: Monitor topic health and implement fallback
- **Data Consistency**: Implement data validation and reconciliation
- **Performance Impact**: Monitor system performance with new data sources

### Business Risks
- **Valuation Accuracy**: Validate P&L calculations with Risk team
- **Regulatory Compliance**: Ensure proper client disclosures
- **User Experience**: Provide clear explanations for FX derivatives

## Success Metrics

### User Adoption
- **Portfolio Views**: Track FX derivatives section usage
- **Detail Views**: Monitor detail view engagement
- **User Feedback**: Collect user satisfaction feedback

### Technical Performance
- **System Performance**: Monitor response times and throughput
- **Data Accuracy**: Validate portfolio calculations
- **Error Rates**: Track and minimize processing errors

## Next Steps

1. **Data Model Design**: Detail FX derivatives data structures
2. **API Specification**: Define Kafka topic schemas and REST APIs
3. **UI/UX Design**: Create detailed mockups and user flows
4. **Implementation Planning**: Define development sprints and milestones
5. **Testing Strategy**: Develop comprehensive test plans
6. **Deployment Planning**: Define production rollout approach