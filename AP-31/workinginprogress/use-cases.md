# AP-31 - FX Derivatives Portfolio Overview - Use Cases

**Document Version:** 1.0  
**Date:** 2025-01-17  
**JIRA ID:** AP-31  
**GIT ID:** #2  

## 1. View FX Derivatives in Portfolio Overview

**Description:** Client can view FX derivatives (spot, outright, swap) in their portfolio overview alongside other securities and investment products.

**BIAN Domain:** Customer_Portfolio

**Priority:** High

**Technical Component Impacts:**
- 1.001 **DKCZ Frontend** - Add FX derivatives display to portfolio overview page
- 1.002 **DKCZ Backend** - Implement FX derivatives data retrieval and aggregation
- 1.003 **EI Kafka** - Configure consumption of FX derivatives topic
- 1.004 **Portfolio Calculation Engine** - Include FX derivatives in portfolio value calculations

## 2. Access Dedicated FX Derivatives Tab

**Description:** Client can access a dedicated "FX Derivatives" tab within their portfolio to view only FX derivative positions.

**BIAN Domain:** Customer_Portfolio

**Priority:** High

**Technical Component Impacts:**
- 2.001 **DKCZ Frontend** - Create dedicated FX derivatives tab in portfolio interface
- 2.002 **DKCZ Backend** - Implement FX derivatives filtering and display logic
- 2.003 **EI Kafka** - Ensure FX derivatives topic data availability
- 2.004 **Authentication Service** - Verify client access rights to FX derivatives

## 3. Display FX Derivative Position Details

**Description:** Client can view detailed information for each FX derivative position including type, currency pair, trade direction, volume, and P&L.

**BIAN Domain:** Position_Keeping

**Priority:** High

**Technical Component Impacts:**
- 3.001 **DKCZ Frontend** - Create FX derivative position detail display components
- 3.002 **DKCZ Backend** - Implement FX derivative position data formatting
- 3.003 **Blotter Integration** - Consume FX derivative position data from Blotter system
- 3.004 **RMR Integration** - Retrieve FX derivative valuations and P&L calculations

## 4. Process FX Derivative Transactions

**Description:** System processes FX derivative transactions (spot, outright, swap) and maintains accurate position records.

**BIAN Domain:** Transaction_Engine

**Priority:** High

**Technical Component Impacts:**
- 4.001 **Blotter System** - Maintain FX derivative transaction records
- 4.002 **Transaction Processing Engine** - Process FX derivative trade settlements
- 4.003 **EI Kafka** - Publish FX derivative transaction updates
- 4.004 **Position Management System** - Update FX derivative positions in real-time

## 5. Calculate FX Derivative Valuations

**Description:** System calculates and updates FX derivative valuations daily including profit/loss calculations in CZK.

**BIAN Domain:** Financial_Market_Analysis

**Priority:** High

**Technical Component Impacts:**
- 5.001 **RMR System** - Calculate FX derivative valuations (post-2021 trades)
- 5.002 **Quaestor System** - Provide historical FX derivative valuations (pre-2021 trades)
- 5.003 **Valuation Engine** - Perform profit/loss calculations in CZK
- 5.004 **EI Kafka** - Publish valuation updates to DKCZ

## 6. Manage FX Derivative Currency Exchange

**Description:** System handles FX derivative currency exchange operations including pricing, fee calculations, and transaction capture.

**BIAN Domain:** Currency_Exchange

**Priority:** Medium

**Technical Component Impacts:**
- 6.001 **FX Pricing Engine** - Provide real-time FX rates and pricing
- 6.002 **Fee Calculation Service** - Calculate transaction fees for FX derivatives
- 6.003 **Transaction Capture System** - Record FX derivative exchange transactions
- 6.004 **Market Data Service** - Consume external FX market data

## 7. Include FX Derivatives in Portfolio Valuation

**Description:** System includes FX derivative valuations in total portfolio value calculations and performance metrics.

**BIAN Domain:** Investment_Portfolio_Analysis

**Priority:** High

**Technical Component Impacts:**
- 7.001 **Portfolio Valuation Engine** - Include FX derivative values in portfolio calculations
- 7.002 **Performance Analysis Service** - Calculate portfolio performance including FX derivatives
- 7.003 **Asset Allocation Engine** - Include FX derivatives in asset allocation calculations
- 7.004 **Risk Assessment Service** - Assess portfolio risk including FX derivative exposure

## 8. Display FX Derivatives in Portfolio Composition Charts

**Description:** System displays FX derivatives in portfolio composition charts (pie charts) by product type and currency.

**BIAN Domain:** Investment_Portfolio_Analysis

**Priority:** Medium

**Technical Component Impacts:**
- 8.001 **DKCZ Frontend** - Create chart visualization for FX derivatives
- 8.002 **Chart Generation Service** - Generate portfolio composition charts including FX derivatives
- 8.003 **Data Aggregation Service** - Aggregate FX derivative data for chart display
- 8.004 **Currency Conversion Service** - Convert FX derivative values to base currency

## 9. Handle FX Derivative Settlement Processing

**Description:** System processes FX derivative settlements and updates position status (settled vs. unsettled).

**BIAN Domain:** Market_Order_Execution

**Priority:** High

**Technical Component Impacts:**
- 9.001 **Settlement Engine** - Process FX derivative settlements
- 9.002 **Position Status Manager** - Update FX derivative position status
- 9.003 **Nostro Account Management** - Handle settlement cash movements
- 9.004 **Settlement Reporting Service** - Generate settlement confirmations

## 10. Manage FX Derivative Position Keeping

**Description:** System maintains comprehensive transaction logs and position records for all FX derivative activities.

**BIAN Domain:** Position_Keeping

**Priority:** High

**Technical Component Impacts:**
- 10.001 **Position Database** - Store FX derivative position records
- 10.002 **Transaction Log Service** - Maintain FX derivative transaction history
- 10.003 **Position Reconciliation Service** - Reconcile FX derivative positions
- 10.004 **Audit Trail Service** - Maintain audit trails for FX derivative activities

## 11. Authenticate Client Access to FX Derivatives

**Description:** System verifies client identity and authorization before displaying FX derivative information.

**BIAN Domain:** Customer_Portfolio

**Priority:** High

**Technical Component Impacts:**
- 11.001 **Authentication Service** - Verify client identity
- 11.002 **Authorization Service** - Check FX derivative access permissions
- 11.003 **Role-Based Access Control** - Implement FX derivative access rules
- 11.004 **Security Audit Service** - Log FX derivative access attempts

## 12. Handle FX Derivative Portfolio Assignment

**Description:** System assigns FX derivatives to appropriate client portfolios or tracks them as unassigned "Term Trades".

**BIAN Domain:** Investment_Portfolio_Management

**Priority:** Medium

**Technical Component Impacts:**
- 12.001 **Portfolio Assignment Engine** - Assign FX derivatives to portfolios
- 12.002 **Portfolio Hierarchy Service** - Manage portfolio structure including FX derivatives
- 12.003 **Virtual Portfolio Manager** - Handle unassigned FX derivatives as "Term Trades"
- 12.004 **Portfolio Reporting Service** - Generate portfolio reports including FX derivatives

## 13. Process FX Derivative Market Data

**Description:** System processes and integrates external FX market data for pricing and valuation purposes.

**BIAN Domain:** Financial_Market_Analysis

**Priority:** Medium

**Technical Component Impacts:**
- 13.001 **Market Data Gateway** - Consume external FX market data
- 13.002 **Data Quality Service** - Validate and cleanse FX market data
- 13.003 **Market Data Distribution** - Distribute FX market data to consuming systems
- 13.004 **Market Data Archive** - Store historical FX market data

## 14. Generate FX Derivative Confirmations

**Description:** System generates and delivers FX derivative trade confirmations to clients.

**BIAN Domain:** Transaction_Engine

**Priority:** Medium

**Technical Component Impacts:**
- 14.001 **Confirmation Generation Service** - Generate FX derivative confirmations
- 14.002 **Document Template Engine** - Format FX derivative confirmation documents
- 14.003 **Delivery Service** - Deliver confirmations via email/portal
- 14.004 **Confirmation Archive** - Store confirmation delivery records

## 15. Support FX Derivative Reporting and Compliance

**Description:** System provides FX derivative reporting capabilities for regulatory compliance and audit purposes.

**BIAN Domain:** Financial_Market_Analysis

**Priority:** Medium

**Technical Component Impacts:**
- 15.001 **Regulatory Reporting Service** - Generate FX derivative regulatory reports
- 15.002 **Compliance Monitoring Service** - Monitor FX derivative compliance requirements
- 15.003 **Audit Data Service** - Provide FX derivative audit data
- 15.004 **Report Distribution Service** - Distribute FX derivative reports to regulators

## 16. Handle FX Derivative Error Processing

**Description:** System detects, logs, and resolves FX derivative processing errors and exceptions.

**BIAN Domain:** Transaction_Engine

**Priority:** Medium

**Technical Component Impacts:**
- 16.001 **Error Detection Service** - Detect FX derivative processing errors
- 16.002 **Exception Handling Service** - Handle FX derivative exceptions
- 16.003 **Error Notification Service** - Notify operations of FX derivative errors
- 16.004 **Error Resolution Service** - Provide tools for FX derivative error resolution

## 17. Manage FX Derivative Reference Data

**Description:** System maintains reference data for FX derivatives including currency pairs, product types, and market specifications.

**BIAN Domain:** Currency_Exchange

**Priority:** Low

**Technical Component Impacts:**
- 17.001 **Reference Data Service** - Maintain FX derivative reference data
- 17.002 **Currency Pair Management** - Manage FX currency pair definitions
- 17.003 **Product Catalog Service** - Maintain FX derivative product information
- 17.004 **Market Specification Service** - Maintain FX market specifications

## 18. Support FX Derivative Historical Data Access

**Description:** System provides access to historical FX derivative data for analysis and reporting purposes.

**BIAN Domain:** Investment_Portfolio_Analysis

**Priority:** Low

**Technical Component Impacts:**
- 18.001 **Historical Data Service** - Provide FX derivative historical data
- 18.002 **Data Archive Service** - Archive FX derivative historical records
- 18.003 **Query Service** - Support FX derivative historical data queries
- 18.004 **Performance Analytics** - Analyze FX derivative historical performance

## 19. Monitor FX Derivative System Performance

**Description:** System monitors performance of FX derivative processing and provides alerts for degradation.

**BIAN Domain:** Position_Keeping

**Priority:** Medium

**Technical Component Impacts:**
- 19.001 **Performance Monitoring Service** - Monitor FX derivative system performance
- 19.002 **Alert Service** - Generate FX derivative performance alerts
- 19.003 **Metrics Collection Service** - Collect FX derivative performance metrics
- 19.004 **Dashboard Service** - Display FX derivative system health dashboard

## 20. Handle FX Derivative Data Synchronization

**Description:** System ensures data consistency and synchronization between FX derivative systems.

**BIAN Domain:** Position_Keeping

**Priority:** High

**Technical Component Impacts:**
- 20.001 **Data Synchronization Service** - Synchronize FX derivative data between systems
- 20.002 **Consistency Check Service** - Verify FX derivative data consistency
- 20.003 **Reconciliation Service** - Reconcile FX derivative data discrepancies
- 20.004 **Data Recovery Service** - Recover FX derivative data in case of failures

---

**Total Use Cases:** 20  
**High Priority:** 11  
**Medium Priority:** 8  
**Low Priority:** 1  

**Primary BIAN Domains Affected:** 8  
**Total Technical Components Impacted:** 80  

**Document Status:** Complete  
**Next Phase:** Technical Component Analysis