# Investment Portfolio Management - EI Technical Artifacts

## BIAN Domain: Investment Portfolio Management
**Domain Description:** Provádí investiční/rebalancovací optimalizaci investičního portfolia

## Technical Artifacts Inventory

### API Specifications

#### eBroker Portfolio API
- **Artifact Name:** eBroker-Portfolio-Management API
- **Type:** REST API
- **Description:** Comprehensive portfolio management operations through eBroker system
- **Technical Details:**
  - Integration with eBroker investment platform
  - Portfolio creation, modification, and closure operations
  - Real-time position management and valuations
- **Information Provided:** Portfolio states, holdings, valuations, performance metrics
- **BIAN Context:** Direct implementation of Investment Portfolio Management Control Record

#### Portfolio Valuation API
- **Artifact Name:** Portfolio-Valuation API
- **Type:** REST API
- **Description:** Real-time portfolio valuation and performance calculation
- **Technical Details:**
  - Integration with market data feeds
  - Multi-currency valuation support
  - Historical performance tracking
- **Information Provided:** Current portfolio values, P&L calculations, benchmark comparisons
- **BIAN Context:** Portfolio valuation and performance measurement services

### Event Streaming (Kafka)

#### Portfolio Overview Event Stream
- **Artifact Name:** PortfolioOverview Event Stream
- **Type:** Kafka Topic
- **Description:** Real-time portfolio state changes and position updates
- **Technical Details:**
  - Topic pattern: `JTB-{COUNTRY}_INVESTMENT_PORTFOLIO_EVENT_GNR`
  - Source: eBroker system
  - Target: Digital channels, reporting systems
- **Information Provided:** Portfolio creation/closure, position changes, valuation updates
- **BIAN Context:** Investment Portfolio Management lifecycle events

#### Investment Order Event Stream
- **Artifact Name:** InvestmentOrder Event Stream
- **Type:** Kafka Topic
- **Description:** Investment order execution and settlement events
- **Technical Details:**
  - Real-time order status updates
  - Settlement and confirmation processing
  - Failed order handling and notifications
- **Information Provided:** Order placement, execution, settlement status, trade confirmations
- **BIAN Context:** Order management within portfolio operations

#### Instrument Event Stream
- **Artifact Name:** Instrument Event Stream
- **Type:** Kafka Topic
- **Description:** Financial instrument master data and lifecycle events
- **Technical Details:**
  - Instrument creation, modification, delisting
  - Corporate actions processing
  - Market data updates
- **Information Provided:** Instrument definitions, corporate actions, market data changes
- **BIAN Context:** Securities master data management for portfolio holdings

#### Instrument Transaction Event Stream
- **Artifact Name:** InstrumentTransaction Event Stream
- **Type:** Kafka Topic
- **Description:** All investment transactions and position movements
- **Technical Details:**
  - Buy/sell transaction processing
  - Dividend and coupon payments
  - Corporate action executions
- **Information Provided:** Transaction details, settlement dates, cash movements, position updates
- **BIAN Context:** Transaction processing for portfolio management

#### Bond Event Stream
- **Artifact Name:** Bond Event Stream
- **Type:** Kafka Topic
- **Description:** Fixed income securities specific events and data
- **Technical Details:**
  - Bond pricing and yield calculations
  - Maturity and coupon processing
  - Credit rating changes
- **Information Provided:** Bond valuations, coupon payments, maturity processing
- **BIAN Context:** Fixed income portfolio management support

### Service Definitions

#### CRUD Operations - CreatePortfolio
- **Artifact Name:** CRUD-Operations-CreatePortfolio
- **Type:** Service Definition
- **Description:** Portfolio creation orchestration service
- **Technical Details:**
  - Customer KYC validation integration
  - Product suitability assessment
  - Account structure setup
- **Information Provided:** Portfolio setup confirmation, account linking, compliance validation
- **BIAN Context:** Portfolio initiation within Investment Portfolio Management

#### CRUD Operations - Trading
- **Artifact Name:** CRUD-Operations-Trading
- **Type:** Service Definition
- **Description:** Investment trading operations management
- **Technical Details:**
  - Order placement and routing
  - Execution management
  - Settlement processing
- **Information Provided:** Trade execution status, settlement confirmations, position updates
- **BIAN Context:** Trading operations within portfolio management context

#### CRUD Operations - FeesCalculation
- **Artifact Name:** CRUD-Operations-FeesCalculation
- **Type:** Service Definition
- **Description:** Investment fees and charges calculation service
- **Technical Details:**
  - Management fee calculations
  - Transaction cost computation
  - Performance fee processing
- **Information Provided:** Fee schedules, calculated charges, billing information
- **BIAN Context:** Fee management for portfolio administration

#### CRUD Operations - TransferOrder
- **Artifact Name:** CRUD-Operations-TransferOrder
- **Type:** Service Definition
- **Description:** Portfolio transfer and cash movement operations
- **Technical Details:**
  - Inter-portfolio transfers
  - Cash deposit/withdrawal processing
  - Currency conversion handling
- **Information Provided:** Transfer confirmations, cash positions, FX rates applied
- **BIAN Context:** Cash and position management within portfolios

#### CRUD Operations - CancelOrder
- **Artifact Name:** CRUD-Operations-CancelOrder
- **Type:** Service Definition
- **Description:** Investment order cancellation processing
- **Technical Details:**
  - Order status validation
  - Cancellation workflow management
  - Notification processing
- **Information Provided:** Cancellation confirmations, order status updates, customer notifications
- **BIAN Context:** Order lifecycle management within portfolio operations

### Business Object Model (BOM) Data

#### Portfolio Schema
- **Artifact Name:** Portfolio Data Model
- **Type:** JSON Schema
- **Description:** Comprehensive portfolio structure definition
- **Technical Details:**
  - Schema location: `/knowledge/EI/attachments/17340548/`
  - Versioned portfolio data model
  - Validation rules for portfolio consistency
- **Information Provided:**
  - Portfolio identification and metadata
  - Customer association and ownership
  - Investment strategy and objectives
  - Risk profile and constraints
  - Performance benchmarks
- **BIAN Context:** Core Business Object Model for Investment Portfolio Management

#### Position Schema
- **Artifact Name:** Position Data Model
- **Type:** JSON Schema
- **Description:** Investment position and holding definitions
- **Technical Details:**
  - Position-level data structure
  - Multi-currency position support
  - Unrealized P&L calculations
- **Information Provided:**
  - Security identification and quantities
  - Cost basis and current valuations
  - Unrealized gains/losses
  - Corporate action entitlements
- **BIAN Context:** Position keeping data model for portfolio holdings

#### Performance Schema
- **Artifact Name:** Performance Data Model
- **Type:** JSON Schema
- **Description:** Portfolio performance measurement data
- **Technical Details:**
  - Time-weighted return calculations
  - Benchmark comparison methodology
  - Attribution analysis structure
- **Information Provided:**
  - Historical performance metrics
  - Risk-adjusted returns
  - Benchmark comparison data
  - Performance attribution details
- **BIAN Context:** Performance measurement for Investment Portfolio Management

### Integration Specifications

#### eBroker System Integration
- **Artifact Name:** eBroker-Integration
- **Type:** Integration Service
- **Description:** Comprehensive integration with eBroker investment platform
- **Technical Details:**
  - Real-time position synchronization
  - Order routing and execution
  - Market data feed integration
- **Information Provided:**
  - Live portfolio positions
  - Market data and pricing
  - Order execution confirmations
- **BIAN Context:** Core system integration for Investment Portfolio Management

#### Market Data Integration
- **Artifact Name:** MarketData-Integration
- **Type:** Integration Service
- **Description:** Multi-source market data feed integration
- **Technical Details:**
  - Real-time price feeds
  - Corporate action data
  - Reference data management
- **Information Provided:**
  - Current market prices
  - Corporate action details
  - Instrument reference data
- **BIAN Context:** Market data support for portfolio valuation and management

### Data Models and Schemas

#### Investment Order Schema
- **Artifact Name:** InvestmentOrder.json
- **Type:** Data Schema
- **Description:** Investment order structure and workflow
- **Technical Details:**
  - Order lifecycle management
  - Execution and settlement tracking
  - Compliance validation rules
- **Information Provided:**
  - Order details and instructions
  - Execution status and confirmations
  - Settlement and delivery information
- **BIAN Context:** Order management data model for portfolio transactions

#### Corporate Actions Schema
- **Artifact Name:** CorporateActions.json
- **Type:** Data Schema
- **Description:** Corporate action processing and entitlement calculation
- **Technical Details:**
  - Event type classification
  - Entitlement calculation rules
  - Election processing workflow
- **Information Provided:**
  - Corporate action event details
  - Entitlement calculations
  - Customer election processing
- **BIAN Context:** Corporate action management for portfolio holdings

## Summary

The Investment Portfolio Management domain artifacts provide comprehensive support for:

- **Portfolio Lifecycle Management:** From creation through termination
- **Real-time Position Management:** Current holdings and valuations
- **Investment Order Processing:** Order placement, execution, and settlement
- **Performance Measurement:** Portfolio performance and attribution analysis
- **Corporate Action Processing:** Dividend, split, and merger handling
- **Fee and Charge Management:** Investment cost calculation and billing
- **Market Data Integration:** Real-time pricing and reference data
- **Risk Management:** Portfolio risk monitoring and compliance

These technical artifacts enable a complete investment portfolio management solution within the BIAN framework, supporting institutional-grade portfolio operations with real-time processing, comprehensive reporting, and regulatory compliance.