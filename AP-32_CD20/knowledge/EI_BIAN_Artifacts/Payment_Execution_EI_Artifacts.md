# Payment Execution - EI Technical Artifacts

## BIAN Domain: Payment Execution
**Domain Description:** Back-end zpracování pohybu peněžních prostředků

## Technical Artifacts Inventory

### API Specifications

#### PTS Payment Processing API
- **Artifact Name:** PTS-Payment-Processing API
- **Type:** REST API
- **Description:** Core payment transaction processing through PTS (Payment Transaction System)
- **Technical Details:**
  - Integration with PTS CZ/SK systems
  - Support for domestic and international payments
  - SEPA transaction processing capabilities
  - Instant payment processing (Czech market)
- **Information Provided:** Payment execution status, settlement confirmations, transaction receipts
- **BIAN Context:** Direct implementation of Payment Execution Control Record

#### Direct Debit Management API
- **Artifact Name:** DDM-Processing API
- **Type:** REST API
- **Description:** SEPA Direct Debit mandate and collection processing
- **Technical Details:**
  - CORE and B2B scheme support
  - Mandate lifecycle management
  - Collection processing and settlement
- **Information Provided:** Mandate status, collection results, settlement confirmations
- **BIAN Context:** Direct Debit execution within Payment Execution domain

#### OBOFT Integration API
- **Artifact Name:** OBOFT-Integration API
- **Type:** REST API
- **Description:** External bank transfer processing through OBOFT system
- **Technical Details:**
  - Cross-border payment routing
  - Correspondent banking integration
  - SWIFT message processing
- **Information Provided:** Transfer confirmations, correspondent bank details, settlement status
- **BIAN Context:** International payment execution capabilities

### Event Streaming (Kafka)

#### Payment Event Stream
- **Artifact Name:** Payment Event Stream
- **Type:** Kafka Topic
- **Description:** Real-time payment transaction processing and status updates
- **Technical Details:**
  - Topics:
    - `JTB-CZ_PAYMENTS_PAYMENT_EVENT_GNR` (Czech payments)
    - `JTB-SK_PAYMENTS_PAYMENT_EVENT_GNR` (Slovak payments)
    - `JTB-CZ_PAYMENTS_PAYMENT_RCN_GNR` (Reconciliation)
    - `JTB-SK_PAYMENTS_PAYMENT_RCN_GNR` (Reconciliation)
  - Source: PTS (Payment Transaction System)
  - Target: Digital channels, reporting systems
  - Volume: ~3200 incoming, ~1510 outgoing payments/day (CZ)
- **Information Provided:** Payment initiation, execution, settlement, and reconciliation events
- **BIAN Context:** Real-time Payment Execution lifecycle events

#### Standing Order Event Stream
- **Artifact Name:** StandingOrder Event Stream
- **Type:** Kafka Topic
- **Description:** Recurring payment processing and management events
- **Technical Details:**
  - Automated standing order execution
  - Schedule management and processing
  - Failed payment handling
- **Information Provided:** Standing order creation, execution, cancellation events
- **BIAN Context:** Recurring payment execution within Payment Execution domain

### Business Object Model (BOM) Data

#### Payment Schema
- **Artifact Name:** Payment Data Model
- **Type:** JSON Schema
- **Description:** Comprehensive payment transaction structure
- **Technical Details:**
  - Schema location: `/knowledge/EI/attachments/17340548/`
  - Support for domestic and international payments
  - SEPA compliance validation rules
- **Information Provided:**
  - Payment identification and references
  - Debtor and creditor information
  - Amount and currency details
  - Execution date and urgency
  - Regulatory reporting data
- **BIAN Context:** Core Business Object Model for Payment Execution

#### DDM (Direct Debit Mandate) Schema
- **Artifact Name:** DDM Data Model
- **Type:** JSON Schema
- **Description:** SEPA Direct Debit mandate structure and processing rules
- **Technical Details:**
  - Required fields: ptsId, businessChangeDate, requestedExecutionDate
  - Scheme support: CORE, B2B
  - Mandate lifecycle management
- **Information Provided:**
  - Mandate identification and metadata
  - Debtor/creditor relationship details
  - Collection frequency and limits
  - Mandate status and validity
- **BIAN Context:** Direct Debit Mandate management within Payment Execution

#### Transaction Status Schema
- **Artifact Name:** TransactionStatus Data Model
- **Type:** JSON Schema
- **Description:** Payment transaction lifecycle status management
- **Technical Details:**
  - Status progression tracking
  - Error code and reason management
  - Settlement confirmation handling
- **Information Provided:**
  - Current transaction status
  - Status change history
  - Error details and recovery actions
  - Settlement timestamps
- **BIAN Context:** Transaction status management for Payment Execution monitoring

### Service Definitions

#### Payment Processing Orchestration
- **Artifact Name:** Payment-Processing-Orchestration
- **Type:** Service Definition
- **Description:** End-to-end payment processing workflow management
- **Technical Details:**
  - Pre-processing validation and compliance checks
  - Routing to appropriate payment rails
  - Post-processing reconciliation and reporting
- **Information Provided:** Payment processing status, routing decisions, completion confirmations
- **BIAN Context:** Orchestration service for Payment Execution workflows

#### Settlement Processing Service
- **Artifact Name:** Settlement-Processing-Service
- **Type:** Service Definition
- **Description:** Payment settlement and finality management
- **Technical Details:**
  - Real-time settlement processing
  - Batch settlement for bulk payments
  - Settlement failure handling and recovery
- **Information Provided:** Settlement confirmations, finality status, liquidity management
- **BIAN Context:** Settlement processing within Payment Execution domain

#### Reconciliation Service
- **Artifact Name:** Payment-Reconciliation-Service
- **Type:** Service Definition
- **Description:** Payment transaction reconciliation and exception management
- **Technical Details:**
  - Automated reconciliation processing
  - Exception identification and resolution
  - Nostro/Vostro account reconciliation
- **Information Provided:** Reconciliation status, exceptions, resolved items
- **BIAN Context:** Reconciliation support for Payment Execution quality assurance

### Integration Specifications

#### PTS System Integration
- **Artifact Name:** PTS-Integration
- **Type:** Integration Service
- **Description:** Comprehensive integration with Payment Transaction System
- **Technical Details:**
  - Real-time payment processing
  - Batch file processing capabilities
  - Status inquiry and reporting
- **Information Provided:**
  - Payment processing confirmations
  - Transaction status updates
  - Settlement notifications
- **BIAN Context:** Core system integration for Payment Execution

#### SWIFT Network Integration
- **Artifact Name:** SWIFT-Integration
- **Type:** Integration Service
- **Description:** SWIFT messaging for international payment processing
- **Technical Details:**
  - MT series message processing
  - STP (Straight Through Processing) support
  - Correspondent banking integration
- **Information Provided:**
  - SWIFT message confirmations
  - Correspondent bank routing
  - International settlement status
- **BIAN Context:** International payment capabilities within Payment Execution

#### Instant Payment Integration
- **Artifact Name:** InstantPayment-Integration
- **Type:** Integration Service
- **Description:** Czech instant payment system integration
- **Technical Details:**
  - 24/7 instant payment processing
  - Real-time settlement
  - Mobile payment support
- **Information Provided:**
  - Instant payment confirmations
  - Real-time settlement status
  - Mobile payment receipts
- **BIAN Context:** Instant payment execution capabilities

### Data Models and Schemas

#### Payment Instruction Schema
- **Artifact Name:** PaymentInstruction.json
- **Type:** Data Schema
- **Description:** Payment instruction format and validation rules
- **Technical Details:**
  - ISO 20022 compliance
  - Multi-currency support
  - Regulatory reporting fields
- **Information Provided:**
  - Payment instruction details
  - Validation results
  - Compliance markers
- **BIAN Context:** Payment instruction data model for execution processing

#### Settlement Schema
- **Artifact Name:** Settlement.json
- **Type:** Data Schema
- **Description:** Payment settlement data structure and confirmation
- **Technical Details:**
  - Settlement date and time tracking
  - Liquidity management integration
  - Finality confirmation processing
- **Information Provided:**
  - Settlement confirmations
  - Liquidity requirements
  - Finality timestamps
- **BIAN Context:** Settlement data model for Payment Execution completion

#### FX Rates Schema
- **Artifact Name:** FxRates Data Model
- **Type:** JSON Schema
- **Description:** Foreign exchange rates for multi-currency payment processing
- **Technical Details:**
  - Real-time and daily rate management
  - Multiple rate sources (ECB, CNB)
  - Historical rate maintenance
- **Information Provided:**
  - Current FX rates
  - Historical rate data
  - Rate source information
- **BIAN Context:** FX rate support for cross-currency payment execution

### Configuration and Management

#### Payment Routing Configuration
- **Artifact Name:** Payment-Routing-Config
- **Type:** Configuration Schema
- **Description:** Payment routing rules and correspondent bank management
- **Technical Details:**
  - Currency and country-based routing
  - Correspondent bank relationships
  - Cost optimization rules
- **Information Provided:**
  - Routing decisions
  - Correspondent bank details
  - Cost calculations
- **BIAN Context:** Routing configuration for Payment Execution optimization

#### Compliance Configuration
- **Artifact Name:** Payment-Compliance-Config
- **Type:** Configuration Schema
- **Description:** Regulatory compliance rules for payment processing
- **Technical Details:**
  - AML/CTF screening rules
  - Sanctions checking configuration
  - Regulatory reporting requirements
- **Information Provided:**
  - Compliance validation results
  - Regulatory reporting data
  - Sanctions screening outcomes
- **BIAN Context:** Compliance support for Payment Execution regulatory requirements

## Summary

The Payment Execution domain artifacts provide comprehensive support for:

- **Multi-Channel Payment Processing:** Domestic, international, instant, and recurring payments
- **Real-time Settlement:** Immediate payment finality and confirmation
- **SEPA Compliance:** Full SEPA Credit Transfer and Direct Debit support
- **International Payments:** SWIFT messaging and correspondent banking
- **Reconciliation Management:** Automated reconciliation and exception handling
- **Regulatory Compliance:** AML, sanctions screening, and regulatory reporting
- **Multi-Currency Support:** FX rate management and cross-currency processing
- **High-Volume Processing:** Scalable payment processing architecture

These technical artifacts enable a comprehensive payment execution platform within the BIAN framework, supporting high-volume, multi-currency payment processing with real-time settlement capabilities and full regulatory compliance.