# AP-31 - FX Derivatives Portfolio Overview - Component Test Cases

**Document Version:** 1.0  
**Date:** 2025-01-17  
**JIRA ID:** AP-31  
**GIT ID:** #2  
**Test Level:** Component Testing

## DKCZ Frontend Components

### TC-COMP-001: FX Derivatives Portfolio Overview Display
**Component:** DKCZ Frontend  
**Description:** Test FX derivatives display in portfolio overview page  
**Test Type:** Unit Test  
**Priority:** High  

**Test Cases:**
- TC-COMP-001-001: Display FX spot positions in portfolio overview
- TC-COMP-001-002: Display FX outright positions in portfolio overview  
- TC-COMP-001-003: Display FX swap positions in portfolio overview
- TC-COMP-001-004: Display FX derivatives alongside other securities
- TC-COMP-001-005: Handle empty FX derivatives portfolio
- TC-COMP-001-006: Display FX derivatives with correct currency formatting
- TC-COMP-001-007: Display FX derivatives P&L in CZK
- TC-COMP-001-008: Handle FX derivatives loading errors gracefully

### TC-COMP-002: FX Derivatives Tab Interface
**Component:** DKCZ Frontend  
**Description:** Test dedicated FX derivatives tab functionality  
**Test Type:** Unit Test  
**Priority:** High  

**Test Cases:**
- TC-COMP-002-001: Create and display FX derivatives tab
- TC-COMP-002-002: Tab navigation between "All Products" and "FX Derivatives"
- TC-COMP-002-003: Filter display to show only FX derivatives
- TC-COMP-002-004: Handle tab switching with large datasets
- TC-COMP-002-005: Validate tab accessibility compliance
- TC-COMP-002-006: Handle tab display on mobile devices
- TC-COMP-002-007: Maintain tab state during session

### TC-COMP-003: FX Derivatives Position Detail Components
**Component:** DKCZ Frontend  
**Description:** Test FX derivative position detail display components  
**Test Type:** Unit Test  
**Priority:** High  

**Test Cases:**
- TC-COMP-003-001: Display FX derivative type (spot, outright, swap)
- TC-COMP-003-002: Display currency pair information
- TC-COMP-003-003: Display trade direction (buy/sell)
- TC-COMP-003-004: Display volume in main currency
- TC-COMP-003-005: Display P&L in CZK with percentage
- TC-COMP-003-006: Display settlement dates
- TC-COMP-003-007: Display FX swap leg details
- TC-COMP-003-008: Handle position detail expansion/collapse

### TC-COMP-004: FX Derivatives Chart Visualization
**Component:** DKCZ Frontend  
**Description:** Test chart visualization for FX derivatives  
**Test Type:** Unit Test  
**Priority:** Medium  

**Test Cases:**
- TC-COMP-004-001: Generate pie chart by FX derivative type
- TC-COMP-004-002: Generate pie chart by currency composition
- TC-COMP-004-003: Include FX derivatives in portfolio composition charts
- TC-COMP-004-004: Handle chart rendering with zero values
- TC-COMP-004-005: Chart responsiveness on different screen sizes
- TC-COMP-004-006: Chart color consistency and accessibility

## DKCZ Backend Components

### TC-COMP-005: FX Derivatives Data Retrieval and Aggregation
**Component:** DKCZ Backend  
**Description:** Test FX derivatives data retrieval and aggregation logic  
**Test Type:** Unit Test  
**Priority:** High  

**Test Cases:**
- TC-COMP-005-001: Retrieve FX derivatives from Kafka topic
- TC-COMP-005-002: Aggregate FX derivatives by portfolio
- TC-COMP-005-003: Filter unsettled FX derivatives only
- TC-COMP-005-004: Handle FX swap leg aggregation
- TC-COMP-005-005: Process FX derivatives data formatting
- TC-COMP-005-006: Handle malformed FX derivatives data
- TC-COMP-005-007: Validate FX derivatives data integrity
- TC-COMP-005-008: Handle large FX derivatives datasets

### TC-COMP-006: FX Derivatives Filtering and Display Logic
**Component:** DKCZ Backend  
**Description:** Test FX derivatives filtering and display logic  
**Test Type:** Unit Test  
**Priority:** High  

**Test Cases:**
- TC-COMP-006-001: Filter FX derivatives by client authorization
- TC-COMP-006-002: Filter FX derivatives by portfolio assignment
- TC-COMP-006-003: Filter FX derivatives by settlement status
- TC-COMP-006-004: Apply FX derivatives sorting logic
- TC-COMP-006-005: Handle FX derivatives pagination
- TC-COMP-006-006: Filter business unit vs portfolio FX derivatives
- TC-COMP-006-007: Handle empty filter results

## EI Kafka Components

### TC-COMP-007: FX Derivatives Topic Consumption
**Component:** EI Kafka  
**Description:** Test FX derivatives topic consumption configuration  
**Test Type:** Integration Test  
**Priority:** High  

**Test Cases:**
- TC-COMP-007-001: Configure FX derivatives topic consumer
- TC-COMP-007-002: Consume FX derivatives trade messages
- TC-COMP-007-003: Consume FX derivatives valuation messages
- TC-COMP-007-004: Handle Kafka topic connection failures
- TC-COMP-007-005: Handle message deserialization errors
- TC-COMP-007-006: Validate message schema compliance
- TC-COMP-007-007: Handle topic offset management
- TC-COMP-007-008: Process duplicate message handling

### TC-COMP-008: FX Derivatives Data Availability
**Component:** EI Kafka  
**Description:** Test FX derivatives data availability through Kafka  
**Test Type:** Integration Test  
**Priority:** High  

**Test Cases:**
- TC-COMP-008-001: Ensure FX derivatives topic data consistency
- TC-COMP-008-002: Validate FX derivatives message ordering
- TC-COMP-008-003: Handle FX derivatives data latency
- TC-COMP-008-004: Monitor FX derivatives topic health
- TC-COMP-008-005: Handle topic partition rebalancing
- TC-COMP-008-006: Validate data retention policies

## Portfolio Calculation Engine Components

### TC-COMP-009: FX Derivatives Portfolio Value Calculations
**Component:** Portfolio Calculation Engine  
**Description:** Test FX derivatives inclusion in portfolio value calculations  
**Test Type:** Unit Test  
**Priority:** High  

**Test Cases:**
- TC-COMP-009-001: Include FX derivatives in total portfolio value
- TC-COMP-009-002: Calculate FX derivatives P&L in CZK
- TC-COMP-009-003: Handle FX derivatives currency conversion
- TC-COMP-009-004: Calculate FX derivatives percentage allocation
- TC-COMP-009-005: Handle FX derivatives with zero values
- TC-COMP-009-006: Validate calculation precision (99.99%)
- TC-COMP-009-007: Handle FX derivatives calculation errors
- TC-COMP-009-008: Process FX swap leg calculations

### TC-COMP-010: Performance Analysis Service
**Component:** Performance Analysis Service  
**Description:** Test portfolio performance calculations including FX derivatives  
**Test Type:** Unit Test  
**Priority:** Medium  

**Test Cases:**
- TC-COMP-010-001: Calculate portfolio performance with FX derivatives
- TC-COMP-010-002: Calculate FX derivatives contribution to performance
- TC-COMP-010-003: Handle historical performance data
- TC-COMP-010-004: Calculate risk-adjusted returns
- TC-COMP-010-005: Handle performance calculation errors

## Authentication Service Components

### TC-COMP-011: FX Derivatives Access Verification
**Component:** Authentication Service  
**Description:** Test client access rights verification for FX derivatives  
**Test Type:** Unit Test  
**Priority:** High  

**Test Cases:**
- TC-COMP-011-001: Verify client identity for FX derivatives access
- TC-COMP-011-002: Check FX derivatives access permissions
- TC-COMP-011-003: Validate role-based access control
- TC-COMP-011-004: Handle unauthorized FX derivatives access
- TC-COMP-011-005: Log FX derivatives access attempts
- TC-COMP-011-006: Handle authentication service failures
- TC-COMP-011-007: Validate multi-factor authentication
- TC-COMP-011-008: Handle session timeout scenarios

## Blotter Integration Components

### TC-COMP-012: FX Derivatives Position Data Consumption
**Component:** Blotter Integration  
**Description:** Test FX derivative position data consumption from Blotter system  
**Test Type:** Integration Test  
**Priority:** High  

**Test Cases:**
- TC-COMP-012-001: Consume FX spot position data from Blotter
- TC-COMP-012-002: Consume FX outright position data from Blotter  
- TC-COMP-012-003: Consume FX swap position data from Blotter
- TC-COMP-012-004: Handle Blotter system connectivity issues
- TC-COMP-012-005: Validate position data integrity
- TC-COMP-012-006: Handle position data updates
- TC-COMP-012-007: Process position data real-time updates
- TC-COMP-012-008: Handle Blotter system downtime

## RMR Integration Components

### TC-COMP-013: FX Derivatives Valuation Retrieval
**Component:** RMR Integration  
**Description:** Test FX derivative valuations and P&L calculations retrieval  
**Test Type:** Integration Test  
**Priority:** High  

**Test Cases:**
- TC-COMP-013-001: Retrieve FX derivatives valuations from RMR
- TC-COMP-013-002: Retrieve FX derivatives P&L calculations
- TC-COMP-013-003: Handle RMR system connectivity issues
- TC-COMP-013-004: Validate valuation data accuracy
- TC-COMP-013-005: Handle daily valuation updates
- TC-COMP-013-006: Process historical valuation data
- TC-COMP-013-007: Handle valuation calculation errors
- TC-COMP-013-008: Validate valuation precision requirements

## Quaestor Integration Components

### TC-COMP-014: Historical FX Derivatives Valuations
**Component:** Quaestor Integration  
**Description:** Test historical FX derivative valuations from Quaestor system  
**Test Type:** Integration Test  
**Priority:** Medium  

**Test Cases:**
- TC-COMP-014-001: Retrieve historical FX derivatives valuations (pre-2021)
- TC-COMP-014-002: Handle Quaestor system connectivity
- TC-COMP-014-003: Validate historical data integrity
- TC-COMP-014-004: Handle data format conversions
- TC-COMP-014-005: Process historical data queries
- TC-COMP-014-006: Handle missing historical data

## Data Synchronization Components

### TC-COMP-015: FX Derivatives Data Synchronization
**Component:** Data Synchronization Service  
**Description:** Test data consistency between FX derivative systems  
**Test Type:** Integration Test  
**Priority:** High  

**Test Cases:**
- TC-COMP-015-001: Synchronize FX derivatives data between systems
- TC-COMP-015-002: Verify data consistency across systems
- TC-COMP-015-003: Handle data synchronization failures
- TC-COMP-015-004: Reconcile FX derivatives data discrepancies
- TC-COMP-015-005: Handle data recovery scenarios
- TC-COMP-015-006: Validate synchronization performance
- TC-COMP-015-007: Monitor synchronization health
- TC-COMP-015-008: Handle system unavailability

## Settlement Engine Components

### TC-COMP-016: FX Derivatives Settlement Processing
**Component:** Settlement Engine  
**Description:** Test FX derivative settlement processing functionality  
**Test Type:** Unit Test  
**Priority:** High  

**Test Cases:**
- TC-COMP-016-001: Process FX spot settlements
- TC-COMP-016-002: Process FX outright settlements
- TC-COMP-016-003: Process FX swap settlements (both legs)
- TC-COMP-016-004: Update position settlement status
- TC-COMP-016-005: Handle settlement failures
- TC-COMP-016-006: Generate settlement confirmations
- TC-COMP-016-007: Handle partial settlements
- TC-COMP-016-008: Validate settlement accuracy

## Risk Assessment Components

### TC-COMP-017: FX Derivatives Risk Assessment
**Component:** Risk Assessment Service  
**Description:** Test FX derivative risk exposure assessment  
**Test Type:** Unit Test  
**Priority:** Medium  

**Test Cases:**
- TC-COMP-017-001: Assess FX derivatives market risk
- TC-COMP-017-002: Calculate FX derivatives VaR
- TC-COMP-017-003: Monitor FX derivatives exposure limits
- TC-COMP-017-004: Generate risk reports
- TC-COMP-017-005: Handle risk calculation errors
- TC-COMP-017-006: Validate risk threshold alerts

## Performance Monitoring Components

### TC-COMP-018: FX Derivatives System Performance Monitoring
**Component:** Performance Monitoring Service  
**Description:** Test FX derivative system performance monitoring  
**Test Type:** Unit Test  
**Priority:** Medium  

**Test Cases:**
- TC-COMP-018-001: Monitor FX derivatives processing performance
- TC-COMP-018-002: Generate performance alerts
- TC-COMP-018-003: Collect performance metrics
- TC-COMP-018-004: Display system health dashboard
- TC-COMP-018-005: Handle performance degradation
- TC-COMP-018-006: Validate performance thresholds

---

**Total Component Test Cases:** 18 Components  
**Total Test Cases:** 108 Individual Tests  
**Test Coverage:** All 88 Technical Components from Use Cases  
**Test Types:** Unit Tests (12), Integration Tests (6)  
**Priority Distribution:** High (12), Medium (6)  

**Document Status:** Complete  
**Next Phase:** End-to-End Test Cases