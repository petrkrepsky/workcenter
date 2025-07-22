# Current Account Management - EI Technical Artifacts

## BIAN Domain: Current Account Management
**Domain Description:** Správa běžných účtů včetně životního cyklu, zůstatků a transakčních operací

## Technical Artifacts Inventory

### API Specifications

#### BISQ Account Management API
- **Artifact Name:** BISQ-Account-Management API
- **Type:** REST API
- **Description:** Core account management operations through BISQ system
- **Technical Details:**
  - Account creation, modification, and closure operations
  - Balance inquiry and transaction processing
  - Account status management and state transitions
  - Integration with BISQ Czech/Slovak core banking systems
- **Information Provided:** Account states, balance information, transaction confirmations
- **BIAN Context:** Direct implementation of Current Account Management Control Record

#### Account Balance API
- **Artifact Name:** Account-Balance API
- **Type:** REST API
- **Description:** Real-time account balance inquiry and balance management
- **Technical Details:**
  - Current balance retrieval
  - Available balance calculation
  - Balance hold and reservation management
  - Multi-currency balance support
- **Information Provided:** Current balances, available funds, reserved amounts, currency conversions
- **BIAN Context:** Balance management within Current Account lifecycle

#### PSD2 Account Information API
- **Artifact Name:** PSD2-AISP API
- **Type:** REST API (PSD2 Compliant)
- **Description:** PSD2 compliant account information service for third-party providers
- **Technical Details:**
  - GET /accounts (with pagination, sorting)
  - GET /accounts/{id}/balance
  - GET /accounts/{id}/transactions
  - Security: mTLS, user token authentication
  - OpenAPI specification compliant
- **Information Provided:** Account information, balance data, transaction history for TPPs
- **BIAN Context:** Regulatory API for account information sharing

### Event Streaming (Kafka)

#### Account Event Stream
- **Artifact Name:** Account Event Stream
- **Type:** Kafka Topic
- **Description:** Real-time account lifecycle and transaction events
- **Technical Details:**
  - Topics:
    - `JTB-CZ_CURRENT-ACCOUNTS_ACCOUNT_EVENT_GNR` (Czech accounts)
    - `JTB-SK_CURRENT-ACCOUNTS_ACCOUNT_EVENT_GNR` (Slovak accounts)
    - `JTB-CZ_CURRENT-ACCOUNTS_ACCOUNT_RCN_GNR` (Reconciliation)
    - `JTB-SK_CURRENT-ACCOUNTS_ACCOUNT_RCN_GNR` (Reconciliation)
  - Source: BISQ system
  - Target: DKCZ, DKSK digital channels
  - Data Schema: JSON with business identifiers (BID, BUSINESS_STATE, BCD)
- **Information Provided:** Account creation, modifications, balance changes, status updates
- **BIAN Context:** Real-time Current Account lifecycle events

#### Account Balance Event Stream
- **Artifact Name:** Account-Balance Event Stream
- **Type:** Kafka Topic
- **Description:** Real-time account balance changes and transaction impacts
- **Technical Details:**
  - Balance update events from transaction processing
  - Available balance recalculation triggers
  - Overdraft and limit monitoring events
- **Information Provided:** Balance updates, available funds changes, limit utilization
- **BIAN Context:** Balance management events within account operations

### Business Object Model (BOM) Data

#### Account Schema
- **Artifact Name:** Account Data Model
- **Type:** JSON Schema
- **Description:** Comprehensive account structure definition
- **Technical Details:**
  - Schema location: `/knowledge/EI/attachments/17340548/`
  - Account identification and metadata
  - Customer association and ownership
  - Product type and feature configuration
- **Information Provided:**
  - Account identification (IBAN, account number)
  - Customer relationship and ownership
  - Account type and product features
  - Status and lifecycle stage
  - Currency and market information
- **BIAN Context:** Core Business Object Model for Current Account Management

#### Account Balance Schema
- **Artifact Name:** AccountBalance Data Model
- **Type:** JSON Schema
- **Description:** Account balance structure and calculation methodology
- **Technical Details:**
  - Current balance and available balance definitions
  - Balance hold and reservation tracking
  - Multi-currency balance support
- **Information Provided:**
  - Current and available balances
  - Pending transactions and holds
  - Currency conversion rates
  - Balance calculation timestamps
- **BIAN Context:** Balance management data model for current accounts

#### Account Status Schema
- **Artifact Name:** AccountStatus Data Model
- **Type:** JSON Schema
- **Description:** Account status and state management
- **Technical Details:**
  - Status codes: A (Active), C (Closed), OO (Overdrawn), OB (Blocked), OC (Restricted), OD (Dormant)
  - State transition rules and validations
  - Status change audit trail
- **Information Provided:**
  - Current account status
  - Status change history
  - Restriction and block reasons
  - Reactivation procedures
- **BIAN Context:** Account status management within lifecycle operations

### Service Definitions

#### Account Lifecycle Management Service
- **Artifact Name:** Account-Lifecycle-Management
- **Type:** Service Definition
- **Description:** End-to-end account lifecycle orchestration
- **Technical Details:**
  - Account opening workflow and validation
  - Account maintenance and modification processing
  - Account closure and dormancy management
- **Information Provided:** Lifecycle stage updates, validation results, process confirmations
- **BIAN Context:** Lifecycle orchestration for Current Account Management

#### Balance Management Service
- **Artifact Name:** Balance-Management-Service
- **Type:** Service Definition
- **Description:** Account balance calculation and management
- **Technical Details:**
  - Real-time balance calculation
  - Available balance determination
  - Overdraft and limit management
- **Information Provided:** Balance calculations, available funds, limit utilization
- **BIAN Context:** Balance management within current account operations

#### Transaction Processing Service
- **Artifact Name:** Transaction-Processing-Service
- **Type:** Service Definition
- **Description:** Account transaction processing and impact calculation
- **Technical Details:**
  - Debit and credit transaction processing
  - Balance impact calculation
  - Transaction validation and authorization
- **Information Provided:** Transaction confirmations, balance impacts, authorization results
- **BIAN Context:** Transaction processing within Current Account Management

### Integration Specifications

#### BISQ System Integration
- **Artifact Name:** BISQ-Integration
- **Type:** Integration Service
- **Description:** Comprehensive integration with BISQ core banking system
- **Technical Details:**
  - Real-time account data synchronization
  - Transaction processing integration
  - Balance management and inquiry
- **Information Provided:**
  - Account data synchronization
  - Transaction processing results
  - Balance inquiry responses
- **BIAN Context:** Core system integration for Current Account Management

#### Digital Channel Integration
- **Artifact Name:** DigitalChannel-Account-Integration
- **Type:** Integration Service
- **Description:** Integration with digital banking channels for account services
- **Technical Details:**
  - Account information display
  - Transaction history presentation
  - Balance inquiry support
- **Information Provided:**
  - Account information for digital channels
  - Transaction data for customer display
  - Balance information for apps and web
- **BIAN Context:** Digital channel support for account management

#### PSD2 Third Party Integration
- **Artifact Name:** PSD2-TPP-Integration
- **Type:** Integration Service
- **Description:** PSD2 compliant integration for third-party providers
- **Technical Details:**
  - Secure API access for licensed TPPs
  - Account information sharing
  - Transaction data provision
- **Information Provided:**
  - PSD2 compliant account information
  - Authorized transaction data
  - Balance information for TPPs
- **BIAN Context:** Regulatory compliance integration for account information sharing

### Data Models and Schemas

#### Account Transaction Schema
- **Artifact Name:** AccountTransaction.json
- **Type:** Data Schema
- **Description:** Account transaction data structure and processing rules
- **Technical Details:**
  - Transaction identification and classification
  - Debit/credit processing rules
  - Balance impact calculation
- **Information Provided:**
  - Transaction details and metadata
  - Balance impact calculations
  - Processing timestamps and status
- **BIAN Context:** Transaction data model for account processing

#### Account Limit Schema
- **Artifact Name:** AccountLimit.json
- **Type:** Data Schema
- **Description:** Account limit and overdraft management
- **Technical Details:**
  - Credit limit and overdraft definitions
  - Usage tracking and monitoring
  - Limit breach detection and alerts
- **Information Provided:**
  - Account limits and overdraft facilities
  - Current usage and available credit
  - Breach detection and alerts
- **BIAN Context:** Limit management data model for account operations

#### Account Statement Schema
- **Artifact Name:** AccountStatement.json
- **Type:** Data Schema
- **Description:** Account statement generation and formatting
- **Technical Details:**
  - Statement period definitions
  - Transaction aggregation and summarization
  - Balance reconciliation and validation
- **Information Provided:**
  - Statement period data
  - Transaction summaries
  - Balance reconciliation information
- **BIAN Context:** Statement generation data model for account reporting

### Configuration and Management

#### Account Product Configuration
- **Artifact Name:** AccountProduct-Config
- **Type:** Configuration Schema
- **Description:** Account product definitions and feature configuration
- **Technical Details:**
  - Product type definitions
  - Feature enablement and restrictions
  - Fee and charge structure
- **Information Provided:**
  - Product configuration parameters
  - Feature availability
  - Fee and pricing structure
- **BIAN Context:** Product configuration for Current Account Management

#### Account Lifecycle Configuration
- **Artifact Name:** AccountLifecycle-Config
- **Type:** Configuration Schema
- **Description:** Account lifecycle stage definitions and progression rules
- **Technical Details:**
  - Lifecycle stage definitions
  - State transition rules
  - Automated action triggers
- **Information Provided:**
  - Lifecycle configuration parameters
  - State transition rules
  - Automation triggers
- **BIAN Context:** Lifecycle configuration for account management automation

## Summary

The Current Account Management domain artifacts provide comprehensive support for:

- **Complete Account Lifecycle:** From opening through closure with all intermediate states
- **Real-time Balance Management:** Current and available balance calculation with multi-currency support
- **Transaction Processing:** Debit/credit transaction handling with balance impact
- **PSD2 Compliance:** Regulatory compliant APIs for third-party access
- **Digital Channel Integration:** Seamless account information for mobile and web channels
- **Multi-Market Support:** Czech and Slovak market-specific implementations
- **Event-Driven Architecture:** Real-time account events and state changes
- **Comprehensive Reporting:** Account statements and transaction history

These technical artifacts enable a complete current account management platform within the BIAN framework, supporting high-volume transaction processing, regulatory compliance, and modern digital banking capabilities across multiple markets.