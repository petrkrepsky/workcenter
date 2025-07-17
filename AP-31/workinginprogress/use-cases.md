# AP-31 - FX Derivatives Portfolio Overview - Use Cases (Reviewed)

**Document Version:** 1.1  
**Date:** 2025-01-17  
**JIRA ID:** AP-31  
**GIT ID:** #2  
**Review Status:** Opponent Analysis Completed

## 1. View FX Derivatives in Portfolio Overview

**Description:** Client can view FX derivatives (spot, outright, swap) in their portfolio overview alongside other securities and investment products.

**BIAN Domain:** Customer_Portfolio  
**BIAN Pattern:** ANALYSE

**Priority:** High

**Business Requirement Mapping:** TO-BE State - "FX derivatives fully integrated into DKCZ client portfolio interface", Acceptance Criteria #1, #2

**Technical Component Impacts:**
- 1.001 **DKCZ Frontend** - Add FX derivatives display to portfolio overview page
- 1.002 **DKCZ Backend** - Implement FX derivatives data retrieval and aggregation
- 1.003 **EI Kafka** - Configure consumption of FX derivatives topic
- 1.004 **Portfolio Calculation Engine** - Include FX derivatives in portfolio value calculations

## 2. Access Dedicated FX Derivatives Tab

**Description:** Client can access a dedicated "FX Derivatives" tab within their portfolio to view only FX derivative positions.

**BIAN Domain:** Customer_Portfolio  
**BIAN Pattern:** ANALYSE

**Priority:** High

**Business Requirement Mapping:** TO-BE State - "Dedicated FX derivatives tab and overview within portfolio interface", Acceptance Criteria #2

**Technical Component Impacts:**
- 2.001 **DKCZ Frontend** - Create dedicated FX derivatives tab in portfolio interface
- 2.002 **DKCZ Backend** - Implement FX derivatives filtering and display logic
- 2.003 **EI Kafka** - Ensure FX derivatives topic data availability
- 2.004 **Authentication Service** - Verify client access rights to FX derivatives

## 3. Display FX Derivative Position Details

**Description:** Client can view detailed information for each FX derivative position including type, currency pair, trade direction, volume, and P&L.

**BIAN Domain:** Position_Keeping  
**BIAN Pattern:** TRACK

**Priority:** High

**Business Requirement Mapping:** TO-BE State - "Detailed FX derivative information accessible through drill-down functionality", Acceptance Criteria #3, #4

**Technical Component Impacts:**
- 3.001 **DKCZ Frontend** - Create FX derivative position detail display components
- 3.002 **DKCZ Backend** - Implement FX derivative position data formatting
- 3.003 **Blotter Integration** - Consume FX derivative position data from Blotter system
- 3.004 **RMR Integration** - Retrieve FX derivative valuations and P&L calculations

## 4. Process FX Derivative Transactions

**Description:** System processes FX derivative transactions (spot, outright, swap) and maintains accurate position records.

**BIAN Domain:** Transaction_Engine  
**BIAN Pattern:** FULFILL

**Priority:** High

**Business Requirement Mapping:** Business Process Impact - "Portfolio Valuation Process - Extended to include FX derivative valuations"

**Technical Component Impacts:**
- 4.001 **Blotter System** - Maintain FX derivative transaction records
- 4.002 **Transaction Processing Engine** - Process FX derivative trade settlements
- 4.003 **EI Kafka** - Publish FX derivative transaction updates
- 4.004 **Position Management System** - Update FX derivative positions in real-time

## 5. Calculate FX Derivative Valuations

**Description:** System calculates and updates FX derivative valuations daily including profit/loss calculations in CZK.

**BIAN Domain:** Financial_Market_Analysis  
**BIAN Pattern:** ANALYSE

**Priority:** High

**Business Requirement Mapping:** AS-IS State - "Valuations performed in RMR system (post-2021) and Quaestor system (pre-2021)", Acceptance Criteria #10, #12

**Technical Component Impacts:**
- 5.001 **RMR System** - Calculate FX derivative valuations (post-2021 trades)
- 5.002 **Quaestor System** - Provide historical FX derivative valuations (pre-2021 trades)
- 5.003 **Valuation Engine** - Perform profit/loss calculations in CZK
- 5.004 **EI Kafka** - Publish valuation updates to DKCZ

## 6. Include FX Derivatives in Portfolio Valuation

**Description:** System includes FX derivative valuations in total portfolio value calculations and performance metrics.

**BIAN Domain:** Investment_Portfolio_Analysis  
**BIAN Pattern:** ANALYSE

**Priority:** High

**Business Requirement Mapping:** TO-BE State - "FX derivatives included in portfolio valuation and composition calculations", Acceptance Criteria #6

**Technical Component Impacts:**
- 6.001 **Portfolio Valuation Engine** - Include FX derivative values in portfolio calculations
- 6.002 **Performance Analysis Service** - Calculate portfolio performance including FX derivatives
- 6.003 **Asset Allocation Engine** - Include FX derivatives in asset allocation calculations
- 6.004 **Risk Assessment Service** - Assess portfolio risk including FX derivative exposure

## 7. Display FX Derivatives in Portfolio Composition Charts

**Description:** System displays FX derivatives in portfolio composition charts (pie charts) by product type and currency.

**BIAN Domain:** Investment_Portfolio_Analysis  
**BIAN Pattern:** ANALYSE

**Priority:** Medium

**Business Requirement Mapping:** Acceptance Criteria #7

**Technical Component Impacts:**
- 7.001 **DKCZ Frontend** - Create chart visualization for FX derivatives
- 7.002 **Chart Generation Service** - Generate portfolio composition charts including FX derivatives
- 7.003 **Data Aggregation Service** - Aggregate FX derivative data for chart display
- 7.004 **Currency Conversion Service** - Convert FX derivative values to base currency

## 8. Handle FX Derivative Settlement Processing

**Description:** System processes FX derivative settlements and updates position status (settled vs. unsettled).

**BIAN Domain:** Market_Order_Execution  
**BIAN Pattern:** FULFILL

**Priority:** High

**Business Requirement Mapping:** Acceptance Criteria #5 - "Only unsettled FX derivatives are displayed", #17 - "Proper handling of FX swap legs"

**Technical Component Impacts:**
- 8.001 **Settlement Engine** - Process FX derivative settlements
- 8.002 **Position Status Manager** - Update FX derivative position status
- 8.003 **Nostro Account Management** - Handle settlement cash movements
- 8.004 **Settlement Reporting Service** - Generate settlement confirmations

## 9. Manage FX Derivative Position Keeping

**Description:** System maintains comprehensive transaction logs and position records for all FX derivative activities.

**BIAN Domain:** Position_Keeping  
**BIAN Pattern:** TRACK

**Priority:** High

**Business Requirement Mapping:** BIAN Business Object - "Financial Position (Position_Keeping) - FX derivative positions by currency pair"

**Technical Component Impacts:**
- 9.001 **Position Database** - Store FX derivative position records
- 9.002 **Transaction Log Service** - Maintain FX derivative transaction history
- 9.003 **Position Reconciliation Service** - Reconcile FX derivative positions
- 9.004 **Audit Trail Service** - Maintain audit trails for FX derivative activities

## 10. Authenticate Client Access to FX Derivatives

**Description:** System verifies client identity and authorization before displaying FX derivative information.

**BIAN Domain:** Customer_Portfolio  
**BIAN Pattern:** ASSESS

**Priority:** High

**Business Requirement Mapping:** Acceptance Criteria #1 - "displayed in client portfolios with proper authorization", Security Requirements

**Technical Component Impacts:**
- 10.001 **Authentication Service** - Verify client identity
- 10.002 **Authorization Service** - Check FX derivative access permissions
- 10.003 **Role-Based Access Control** - Implement FX derivative access rules
- 10.004 **Security Audit Service** - Log FX derivative access attempts

## 11. Handle FX Derivative Portfolio Assignment

**Description:** System assigns FX derivatives to appropriate client portfolios or tracks them as unassigned "Term Trades".

**BIAN Domain:** Investment_Portfolio_Management  
**BIAN Pattern:** ALLOCATE

**Priority:** Medium

**Business Requirement Mapping:** TO-BE State - "Business unit FX derivatives tracked separately as 'Term Trades'", Acceptance Criteria #8, #9

**Technical Component Impacts:**
- 11.001 **Portfolio Assignment Engine** - Assign FX derivatives to portfolios
- 11.002 **Portfolio Hierarchy Service** - Manage portfolio structure including FX derivatives
- 11.003 **Virtual Portfolio Manager** - Handle unassigned FX derivatives as "Term Trades"
- 11.004 **Portfolio Reporting Service** - Generate portfolio reports including FX derivatives

## 12. Process FX Derivative Market Data

**Description:** System processes and integrates external FX market data for pricing and valuation purposes.

**BIAN Domain:** Financial_Market_Analysis  
**BIAN Pattern:** MONITOR

**Priority:** Medium

**Business Requirement Mapping:** Business Process Impact - "Market Data Processing - Expanded to include FX derivative market data"

**Technical Component Impacts:**
- 12.001 **Market Data Gateway** - Consume external FX market data
- 12.002 **Data Quality Service** - Validate and cleanse FX market data
- 12.003 **Market Data Distribution** - Distribute FX market data to consuming systems
- 12.004 **Market Data Archive** - Store historical FX market data

## 13. Support FX Derivative Reporting and Compliance

**Description:** System provides FX derivative reporting capabilities for regulatory compliance and audit purposes.

**BIAN Domain:** Financial_Market_Analysis  
**BIAN Pattern:** ASSESS

**Priority:** Medium

**Business Requirement Mapping:** Regulatory Compliance - "MiFID II, Basel III, EMIR, AML/KYC", Acceptance Criteria #20

**Technical Component Impacts:**
- 13.001 **Regulatory Reporting Service** - Generate FX derivative regulatory reports
- 13.002 **Compliance Monitoring Service** - Monitor FX derivative compliance requirements
- 13.003 **Audit Data Service** - Provide FX derivative audit data
- 13.004 **Report Distribution Service** - Distribute FX derivative reports to regulators

## 14. Handle FX Derivative Error Processing

**Description:** System detects, logs, and resolves FX derivative processing errors and exceptions.

**BIAN Domain:** Transaction_Engine  
**BIAN Pattern:** PROCESS

**Priority:** Medium

**Business Requirement Mapping:** Reliability Requirements - "Automated error detection and alerting", Acceptance Criteria #20

**Technical Component Impacts:**
- 14.001 **Error Detection Service** - Detect FX derivative processing errors
- 14.002 **Exception Handling Service** - Handle FX derivative exceptions
- 14.003 **Error Notification Service** - Notify operations of FX derivative errors
- 14.004 **Error Resolution Service** - Provide tools for FX derivative error resolution

## 15. Manage FX Derivative Reference Data

**Description:** System maintains reference data for FX derivatives including currency pairs, product types, and market specifications.

**BIAN Domain:** Currency_Exchange  
**BIAN Pattern:** REGISTER

**Priority:** Low

**Business Requirement Mapping:** BIAN Business Object - "Currency Exchange - Currency pair definitions and rates"

**Technical Component Impacts:**
- 15.001 **Reference Data Service** - Maintain FX derivative reference data
- 15.002 **Currency Pair Management** - Manage FX currency pair definitions
- 15.003 **Product Catalog Service** - Maintain FX derivative product information
- 15.004 **Market Specification Service** - Maintain FX market specifications

## 16. Support FX Derivative Historical Data Access

**Description:** System provides access to historical FX derivative data for analysis and reporting purposes.

**BIAN Domain:** Investment_Portfolio_Analysis  
**BIAN Pattern:** ANALYSE

**Priority:** Low

**Business Requirement Mapping:** Acceptance Criteria #16 - "Historical valuation data is available for portfolio performance graphs"

**Technical Component Impacts:**
- 16.001 **Historical Data Service** - Provide FX derivative historical data
- 16.002 **Data Archive Service** - Archive FX derivative historical records
- 16.003 **Query Service** - Support FX derivative historical data queries
- 16.004 **Performance Analytics** - Analyze FX derivative historical performance

## 17. Monitor FX Derivative System Performance

**Description:** System monitors performance of FX derivative processing and provides alerts for degradation.

**BIAN Domain:** Position_Keeping  
**BIAN Pattern:** MONITOR

**Priority:** Medium

**Business Requirement Mapping:** Performance Requirements - "Portfolio loading time ≤ 3 seconds", "System response time ≤ 2 seconds"

**Technical Component Impacts:**
- 17.001 **Performance Monitoring Service** - Monitor FX derivative system performance
- 17.002 **Alert Service** - Generate FX derivative performance alerts
- 17.003 **Metrics Collection Service** - Collect FX derivative performance metrics
- 17.004 **Dashboard Service** - Display FX derivative system health dashboard

## 18. Handle FX Derivative Data Synchronization

**Description:** System ensures data consistency and synchronization between FX derivative systems.

**BIAN Domain:** Position_Keeping  
**BIAN Pattern:** FULFILL

**Priority:** High

**Business Requirement Mapping:** Acceptance Criteria #18 - "Data synchronization between Blotter, RMR, and DKCZ maintains 100% consistency"

**Technical Component Impacts:**
- 18.001 **Data Synchronization Service** - Synchronize FX derivative data between systems
- 18.002 **Consistency Check Service** - Verify FX derivative data consistency
- 18.003 **Reconciliation Service** - Reconcile FX derivative data discrepancies
- 18.004 **Data Recovery Service** - Recover FX derivative data in case of failures

## 19. Register Client for FX Derivatives Access

**Description:** System registers and maintains client eligibility and access rights for FX derivative services.

**BIAN Domain:** Customer_Portfolio  
**BIAN Pattern:** REGISTER

**Priority:** Medium

**Business Requirement Mapping:** Change Description - "enables approximately 200 clients to view their FX derivative positions", Security Requirements

**Technical Component Impacts:**
- 19.001 **Client Registration Service** - Register clients for FX derivative access
- 19.002 **Eligibility Assessment Service** - Assess client eligibility for FX derivatives
- 19.003 **Access Rights Management** - Manage FX derivative access permissions
- 19.004 **Client Profile Service** - Maintain client FX derivative profiles

## 20. Assess FX Derivative Risk and Compliance

**Description:** System assesses FX derivative positions for risk exposure and regulatory compliance requirements.

**BIAN Domain:** Financial_Market_Analysis  
**BIAN Pattern:** ASSESS

**Priority:** Medium

**Business Requirement Mapping:** Risk Management - "Market Risk, Operational Risk, Liquidity Risk, Credit Risk", Regulatory Compliance requirements

**Technical Component Impacts:**
- 20.001 **Risk Assessment Engine** - Assess FX derivative risk exposure
- 20.002 **Compliance Check Service** - Verify FX derivative regulatory compliance
- 20.003 **Risk Reporting Service** - Generate FX derivative risk reports
- 20.004 **Threshold Monitoring Service** - Monitor FX derivative risk thresholds

## 21. Administer FX Derivative Client Settings

**Description:** System provides administrative functions for managing client FX derivative settings and preferences.

**BIAN Domain:** Customer_Portfolio  
**BIAN Pattern:** ADMINISTER

**Priority:** Low

**Business Requirement Mapping:** Security Requirements - "Role-based access control for FX derivative information"

**Technical Component Impacts:**
- 21.001 **Settings Management Service** - Manage client FX derivative settings
- 21.002 **Preference Engine** - Handle client FX derivative preferences
- 21.003 **Configuration Service** - Configure FX derivative display options
- 21.004 **User Management Service** - Administer FX derivative user accounts

## 22. Operate FX Derivative System Infrastructure

**Description:** System operates the underlying infrastructure supporting FX derivative services including monitoring and maintenance.

**BIAN Domain:** Position_Keeping  
**BIAN Pattern:** OPERATE

**Priority:** Low

**Business Requirement Mapping:** Availability Requirements - "99.9% availability during business hours", "Recovery time objective (RTO): 4 hours"

**Technical Component Impacts:**
- 22.001 **Infrastructure Monitoring** - Monitor FX derivative system infrastructure
- 22.002 **System Maintenance Service** - Perform FX derivative system maintenance
- 22.003 **Backup and Recovery Service** - Handle FX derivative data backup and recovery
- 22.004 **Capacity Management Service** - Manage FX derivative system capacity

---

## Review Summary

### Changes Made:
- **Removed 2 irrelevant use cases:**
  - "Manage FX Derivative Currency Exchange" (trade execution, not portfolio viewing)
  - "Generate FX Derivative Confirmations" (handled by Blotter system, not DKCZ)

- **Added 4 missing use cases** based on BIAN functional patterns:
  - "Register Client for FX Derivatives Access" (REGISTER pattern)
  - "Assess FX Derivative Risk and Compliance" (ASSESS pattern)
  - "Administer FX Derivative Client Settings" (ADMINISTER pattern)
  - "Operate FX Derivative System Infrastructure" (OPERATE pattern)

### Final Statistics:
**Total Use Cases:** 22 (was 20)  
**High Priority:** 10 (was 11)  
**Medium Priority:** 9 (was 8)  
**Low Priority:** 3 (was 1)  

**BIAN Functional Patterns Covered:** 10
- ANALYSE (5 use cases)
- TRACK (2 use cases)
- FULFILL (3 use cases)
- ALLOCATE (1 use case)
- MONITOR (2 use cases)
- ASSESS (2 use cases)
- PROCESS (1 use case)
- REGISTER (2 use cases)
- ADMINISTER (1 use case)
- OPERATE (1 use case)

**Primary BIAN Domains Affected:** 8  
**Total Technical Components Impacted:** 88  

**Document Status:** Reviewed and Validated  
**Next Phase:** Technical Component Analysis