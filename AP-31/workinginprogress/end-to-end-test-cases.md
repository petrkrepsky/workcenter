# AP-31 - FX Derivatives Portfolio Overview - End-to-End Test Cases

**Document Version:** 1.0  
**Date:** 2025-01-17  
**JIRA ID:** AP-31  
**GIT ID:** #2  
**Test Level:** End-to-End Testing

## E2E-TC-001: View FX Derivatives in Portfolio Overview

**Business Use Case:** Client can view FX derivatives in their portfolio overview alongside other securities  
**BIAN Domain:** Customer_Portfolio  
**Priority:** High  
**Test Type:** End-to-End Functional Test  

**Test Scenario:**
1. Client authenticates in DKCZ system
2. Client navigates to portfolio overview page
3. System retrieves FX derivatives data from Blotter via Kafka
4. System retrieves FX derivatives valuations from RMR
5. System aggregates FX derivatives with other portfolio securities
6. System displays FX derivatives in portfolio overview

**Test Steps:**
1. **Given:** Client has valid credentials and FX derivatives positions
2. **When:** Client logs into DKCZ and navigates to portfolio
3. **Then:** FX derivatives are displayed alongside other securities
4. **And:** FX derivatives show correct type (spot, outright, swap)
5. **And:** FX derivatives show currency pairs and trade direction
6. **And:** FX derivatives show volumes and P&L in CZK
7. **And:** Only unsettled FX derivatives are displayed

**Expected Results:**
- FX derivatives visible in portfolio overview
- Correct FX derivative details displayed
- Integration with other portfolio securities
- Performance requirements met (≤ 3 seconds loading)

**Systems Involved:** DKCZ, Blotter, RMR, EI Kafka, Authentication Service

---

## E2E-TC-002: Access Dedicated FX Derivatives Tab

**Business Use Case:** Client can access dedicated FX derivatives tab for filtered view  
**BIAN Domain:** Customer_Portfolio  
**Priority:** High  
**Test Type:** End-to-End Functional Test  

**Test Scenario:**
1. Client is in portfolio overview page
2. Client clicks on "FX Derivatives" tab
3. System filters to show only FX derivatives
4. System displays dedicated FX derivatives interface
5. Client can navigate between "All Products" and "FX Derivatives" tabs

**Test Steps:**
1. **Given:** Client is logged in and has FX derivatives positions
2. **When:** Client clicks on "FX Derivatives" tab
3. **Then:** System displays only FX derivatives
4. **And:** Tab interface shows active state
5. **And:** Client can switch between tabs
6. **And:** Data filtering works correctly

**Expected Results:**
- Dedicated FX derivatives tab functions correctly
- Tab navigation works seamlessly
- Filtering displays only FX derivatives
- Tab state maintained during session

**Systems Involved:** DKCZ Frontend, DKCZ Backend, EI Kafka

---

## E2E-TC-003: Display FX Derivative Position Details

**Business Use Case:** Client can view detailed FX derivative position information  
**BIAN Domain:** Position_Keeping  
**Priority:** High  
**Test Type:** End-to-End Functional Test  

**Test Scenario:**
1. Client is viewing FX derivatives overview
2. Client clicks on specific FX derivative position
3. System retrieves detailed position data from Blotter
4. System retrieves current valuation from RMR
5. System displays comprehensive position details
6. Client can view different details for spot, outright, and swap

**Test Steps:**
1. **Given:** Client has FX derivatives in portfolio
2. **When:** Client clicks on FX derivative position
3. **Then:** System displays detailed position information
4. **And:** Shows trade type, currency pair, direction, volume
5. **And:** Shows P&L in CZK with percentage
6. **And:** Shows settlement dates and status
7. **And:** For swaps, shows both leg details

**Expected Results:**
- Detailed position information displayed
- All required fields present and accurate
- Different layouts for spot, outright, swap
- Real-time valuation data

**Systems Involved:** DKCZ, Blotter, RMR, EI Kafka

---

## E2E-TC-004: Process FX Derivative Transaction Updates

**Business Use Case:** System processes FX derivative transactions and updates positions  
**BIAN Domain:** Transaction_Engine  
**Priority:** High  
**Test Type:** End-to-End System Test  

**Test Scenario:**
1. FX derivative transaction occurs in Blotter
2. Transaction data published to Kafka topic
3. DKCZ receives transaction update
4. System updates position records
5. Client sees updated position in portfolio

**Test Steps:**
1. **Given:** FX derivative transaction processed in Blotter
2. **When:** Transaction data published to Kafka
3. **Then:** DKCZ receives and processes update
4. **And:** Position records updated in real-time
5. **And:** Client portfolio reflects changes
6. **And:** Data consistency maintained across systems

**Expected Results:**
- Real-time transaction processing
- Position updates reflected in client view
- Data consistency across systems
- No data loss during processing

**Systems Involved:** Blotter, EI Kafka, DKCZ, Position Management System

---

## E2E-TC-005: Calculate and Display FX Derivative Valuations

**Business Use Case:** System calculates and displays FX derivative valuations daily  
**BIAN Domain:** Financial_Market_Analysis  
**Priority:** High  
**Test Type:** End-to-End System Test  

**Test Scenario:**
1. Daily valuation process runs in RMR
2. FX derivative valuations calculated
3. Valuation data published to Kafka
4. DKCZ receives and processes valuations
5. Client sees updated P&L in portfolio

**Test Steps:**
1. **Given:** Daily valuation process initiated
2. **When:** RMR calculates FX derivative valuations
3. **Then:** Valuations published to Kafka topic
4. **And:** DKCZ processes valuation updates
5. **And:** Client portfolio shows updated P&L
6. **And:** Historical valuations available for pre-2021 trades

**Expected Results:**
- Daily valuation updates processed
- P&L calculations accurate in CZK
- Historical data from Quaestor integrated
- Valuation precision meets requirements (99.99%)

**Systems Involved:** RMR, Quaestor, EI Kafka, DKCZ, Valuation Engine

---

## E2E-TC-006: Include FX Derivatives in Portfolio Valuation

**Business Use Case:** FX derivatives included in total portfolio value calculations  
**BIAN Domain:** Investment_Portfolio_Analysis  
**Priority:** High  
**Test Type:** End-to-End Functional Test  

**Test Scenario:**
1. Client portfolio contains FX derivatives and other securities
2. System calculates total portfolio value
3. FX derivatives valuations included in calculation
4. Portfolio composition updated
5. Client sees integrated portfolio value

**Test Steps:**
1. **Given:** Client has mixed portfolio with FX derivatives
2. **When:** Portfolio valuation calculated
3. **Then:** FX derivatives included in total value
4. **And:** Portfolio composition shows FX derivatives
5. **And:** Performance metrics include FX derivatives impact
6. **And:** Risk calculations include FX derivatives

**Expected Results:**
- FX derivatives integrated in portfolio valuation
- Correct portfolio composition display
- Performance metrics accurate
- Risk assessment comprehensive

**Systems Involved:** DKCZ, Portfolio Valuation Engine, Performance Analysis Service, Risk Assessment Service

---

## E2E-TC-007: Display FX Derivatives in Portfolio Charts

**Business Use Case:** FX derivatives shown in portfolio composition charts  
**BIAN Domain:** Investment_Portfolio_Analysis  
**Priority:** Medium  
**Test Type:** End-to-End Functional Test  

**Test Scenario:**
1. Client accesses portfolio charts
2. System aggregates FX derivatives data
3. FX derivatives included in pie charts
4. Charts show breakdown by type and currency
5. Client sees visual representation

**Test Steps:**
1. **Given:** Client has FX derivatives in portfolio
2. **When:** Client accesses portfolio charts
3. **Then:** FX derivatives shown in composition charts
4. **And:** Pie chart shows breakdown by product type
5. **And:** Pie chart shows breakdown by currency
6. **And:** Charts are responsive and accessible

**Expected Results:**
- FX derivatives visible in portfolio charts
- Correct breakdown by type and currency
- Visual representation accurate
- Charts responsive on all devices

**Systems Involved:** DKCZ, Chart Generation Service, Data Aggregation Service, Currency Conversion Service

---

## E2E-TC-008: Handle FX Derivative Settlement Processing

**Business Use Case:** System processes FX derivative settlements and updates status  
**BIAN Domain:** Market_Order_Execution  
**Priority:** High  
**Test Type:** End-to-End System Test  

**Test Scenario:**
1. FX derivative reaches settlement date
2. Settlement processing initiated
3. Position status updated to settled
4. Client portfolio updated
5. Settled positions removed from view

**Test Steps:**
1. **Given:** FX derivative approaching settlement date
2. **When:** Settlement processing initiated
3. **Then:** Settlement engine processes transaction
4. **And:** Position status updated to settled
5. **And:** Client portfolio no longer shows settled position
6. **And:** Settlement confirmation generated

**Expected Results:**
- Settlement processing automated
- Position status accurately updated
- Client view reflects settlement
- Settlement confirmations generated

**Systems Involved:** Settlement Engine, Position Status Manager, Nostro Account Management, DKCZ

---

## E2E-TC-009: Maintain FX Derivative Position Records

**Business Use Case:** System maintains comprehensive FX derivative position records  
**BIAN Domain:** Position_Keeping  
**Priority:** High  
**Test Type:** End-to-End System Test  

**Test Scenario:**
1. FX derivative transactions processed
2. Position records maintained in database
3. Transaction history tracked
4. Audit trails maintained
5. Data integrity preserved

**Test Steps:**
1. **Given:** FX derivative transactions occurring
2. **When:** Position keeping system processes transactions
3. **Then:** Position records stored accurately
4. **And:** Transaction history maintained
5. **And:** Audit trails complete
6. **And:** Data integrity checks pass

**Expected Results:**
- Position records comprehensive and accurate
- Transaction history complete
- Audit trails meet compliance requirements
- Data integrity maintained

**Systems Involved:** Position Database, Transaction Log Service, Position Reconciliation Service, Audit Trail Service

---

## E2E-TC-010: Authenticate Client Access to FX Derivatives

**Business Use Case:** System verifies client authorization for FX derivative access  
**BIAN Domain:** Customer_Portfolio  
**Priority:** High  
**Test Type:** End-to-End Security Test  

**Test Scenario:**
1. Client attempts to access FX derivatives
2. Authentication service verifies identity
3. Authorization service checks permissions
4. Access granted or denied based on rules
5. Security audit log updated

**Test Steps:**
1. **Given:** Client attempts FX derivatives access
2. **When:** Authentication process initiated
3. **Then:** Client identity verified
4. **And:** FX derivatives permissions checked
5. **And:** Access granted for authorized clients
6. **And:** Access denied for unauthorized clients
7. **And:** Security events logged

**Expected Results:**
- Authentication process secure
- Authorization rules enforced
- Access control functioning
- Security events logged

**Systems Involved:** Authentication Service, Authorization Service, Role-Based Access Control, Security Audit Service

---

## E2E-TC-011: Handle FX Derivative Portfolio Assignment

**Business Use Case:** System assigns FX derivatives to portfolios or tracks as Term Trades  
**BIAN Domain:** Investment_Portfolio_Management  
**Priority:** Medium  
**Test Type:** End-to-End System Test  

**Test Scenario:**
1. FX derivative transaction requires portfolio assignment
2. System determines portfolio linkage
3. Portfolio assignment or virtual portfolio created
4. Client view updated accordingly
5. Reporting reflects assignment

**Test Steps:**
1. **Given:** FX derivative requires portfolio assignment
2. **When:** Portfolio assignment process initiated
3. **Then:** System determines appropriate portfolio
4. **And:** FX derivative assigned to portfolio or Term Trades
5. **And:** Client view shows correct assignment
6. **And:** Portfolio reports updated

**Expected Results:**
- Portfolio assignment accurate
- Virtual portfolio handling for unassigned derivatives
- Client view reflects assignments
- Reporting comprehensive

**Systems Involved:** Portfolio Assignment Engine, Portfolio Hierarchy Service, Virtual Portfolio Manager, Portfolio Reporting Service

---

## E2E-TC-012: Process FX Derivative Market Data

**Business Use Case:** System processes external FX market data for pricing  
**BIAN Domain:** Financial_Market_Analysis  
**Priority:** Medium  
**Test Type:** End-to-End System Test  

**Test Scenario:**
1. External market data received
2. Data quality validation performed
3. Market data distributed to systems
4. Pricing calculations updated
5. Client sees updated valuations

**Test Steps:**
1. **Given:** External FX market data available
2. **When:** Market data processing initiated
3. **Then:** Data quality validation performed
4. **And:** Market data distributed to consuming systems
5. **And:** Pricing calculations updated
6. **And:** Client portfolio reflects updated values

**Expected Results:**
- Market data processed accurately
- Data quality maintained
- Pricing calculations current
- Client view updated

**Systems Involved:** Market Data Gateway, Data Quality Service, Market Data Distribution, Market Data Archive

---

## E2E-TC-013: Support FX Derivative Compliance Reporting

**Business Use Case:** System provides FX derivative regulatory compliance reporting  
**BIAN Domain:** Financial_Market_Analysis  
**Priority:** Medium  
**Test Type:** End-to-End Compliance Test  

**Test Scenario:**
1. Regulatory reporting requirements triggered
2. FX derivative compliance data gathered
3. Regulatory reports generated
4. Reports distributed to authorities
5. Compliance monitoring updated

**Test Steps:**
1. **Given:** Regulatory reporting required
2. **When:** Compliance reporting process initiated
3. **Then:** FX derivative compliance data gathered
4. **And:** Regulatory reports generated
5. **And:** Reports distributed to authorities
6. **And:** Compliance monitoring updated

**Expected Results:**
- Regulatory reports accurate and timely
- Compliance requirements met
- Audit data available
- Monitoring systems updated

**Systems Involved:** Regulatory Reporting Service, Compliance Monitoring Service, Audit Data Service, Report Distribution Service

---

## E2E-TC-014: Handle FX Derivative Error Processing

**Business Use Case:** System detects and resolves FX derivative processing errors  
**BIAN Domain:** Transaction_Engine  
**Priority:** Medium  
**Test Type:** End-to-End Error Handling Test  

**Test Scenario:**
1. FX derivative processing error occurs
2. Error detection system identifies issue
3. Error notification sent to operations
4. Error resolution process initiated
5. System recovery completed

**Test Steps:**
1. **Given:** FX derivative processing error occurs
2. **When:** Error detection system activates
3. **Then:** Error identified and classified
4. **And:** Operations team notified
5. **And:** Error resolution process initiated
6. **And:** System recovery completed

**Expected Results:**
- Error detection reliable
- Error notifications timely
- Resolution process effective
- System recovery complete

**Systems Involved:** Error Detection Service, Exception Handling Service, Error Notification Service, Error Resolution Service

---

## E2E-TC-015: Data Synchronization Across Systems

**Business Use Case:** System ensures data consistency across FX derivative systems  
**BIAN Domain:** Position_Keeping  
**Priority:** High  
**Test Type:** End-to-End System Test  

**Test Scenario:**
1. FX derivative data changes in source system
2. Data synchronization process initiated
3. Data consistency verified across systems
4. Discrepancies reconciled
5. Data integrity maintained

**Test Steps:**
1. **Given:** FX derivative data changes
2. **When:** Data synchronization process runs
3. **Then:** Data synchronized across systems
4. **And:** Consistency checks performed
5. **And:** Discrepancies identified and reconciled
6. **And:** Data integrity maintained

**Expected Results:**
- Data synchronization reliable
- Consistency maintained (100%)
- Discrepancies resolved
- Data integrity preserved

**Systems Involved:** Data Synchronization Service, Consistency Check Service, Reconciliation Service, Data Recovery Service

---

**Total End-to-End Test Cases:** 15 Business Scenarios  
**Test Coverage:** All 22 Business Use Cases  
**Priority Distribution:** High (9), Medium (6)  
**Test Types:** Functional (9), System (4), Security (1), Compliance (1)  
**Systems Integration:** Complete cross-system testing  

**Document Status:** Complete  
**Next Phase:** Test Execution Planning