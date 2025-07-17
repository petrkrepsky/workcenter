# AP-31 - FX Derivatives Portfolio Overview - Complete Project Documentation

**JIRA ID:** AP-31  
**Project Name:** Přehled FX derivátů v portfoliu  
**Date:** 2025-01-17  
**Status:** Analysis and Design Completed  

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Project Overview](#project-overview)
3. [Business Analysis](#business-analysis)
4. [Business Architecture](#business-architecture)
5. [Functional Analysis](#functional-analysis)
6. [Test Strategy](#test-strategy)
7. [Implementation Roadmap](#implementation-roadmap)
8. [Appendices](#appendices)

---

## Executive Summary

### Project Objective
Extend the existing DKCZ client portfolio interface to include FX derivatives (FX spot, FX outright, FX swap) visibility and valuation, enabling approximately 200 clients to view their FX derivative positions as integral components of their investment portfolios.

### Key Benefits
- **Client Experience Enhancement:** Comprehensive portfolio view including FX derivatives
- **Portfolio Integration:** FX derivatives included in portfolio valuation and composition
- **Real-time Visibility:** Daily valuation updates via Kafka topic integration
- **Regulatory Compliance:** Meets MiFID II, Basel III, EMIR, AML/KYC requirements

### Project Scope
- Integration of FX derivatives data from Blotter and RMR systems
- Enhanced DKCZ portfolio interface with dedicated FX derivatives functionality
- Real-time data synchronization via Enterprise Integration (EI Kafka)
- Comprehensive testing strategy covering component and end-to-end scenarios

### Project Deliverables
- **Business Description Document** - Complete business requirements and architecture
- **Use Cases Portfolio** - 22 validated use cases covering 10 BIAN functional patterns
- **Test Strategy** - 108 component tests and 15 end-to-end test scenarios
- **Technical Architecture** - Integration design and system impacts

---

## Project Overview

### Background
Currently, FX derivatives exist in the Blotter system but are not visible to clients through the DKCZ portfolio interface. This creates a gap in client portfolio visibility and prevents comprehensive portfolio valuation including FX derivative positions.

### Business Need
- **Portfolio Completeness:** Clients need to see all their financial positions in one place
- **Valuation Accuracy:** Portfolio valuations must include FX derivative P&L
- **Regulatory Requirements:** MiFID II requires comprehensive position reporting
- **Client Satisfaction:** Enhanced digital banking experience with complete portfolio view

### Solution Approach
Implement Kafka-based integration between existing FX derivative systems (Blotter, RMR) and the DKCZ client interface, enabling real-time FX derivative position visibility and portfolio integration.

### Key Stakeholders
- **Business Stakeholders:** Private Banking, Digital Channels, Risk Management
- **Technical Stakeholders:** DKCZ Team, Integration Team, Risk Systems Team
- **Regulatory Stakeholders:** Compliance, Legal, Audit
- **End Users:** ~200 clients with FX derivative positions

---

## Business Analysis

### Current State (AS-IS)
- **FX Derivatives Management:** Exists in Blotter system with client/portfolio linkage
- **Valuation Processing:** Daily valuations in RMR (post-2021) and Quaestor (pre-2021)
- **Client Communication:** Confirmations sent directly from Blotter via email
- **Portfolio Interface:** DKCZ shows only traditional securities, excludes FX derivatives
- **Valuation Scope:** Portfolio calculations do not include FX derivative positions

### Future State (TO-BE)
- **Integrated Portfolio View:** FX derivatives fully integrated into DKCZ interface
- **Real-time Data Flow:** Kafka topic integration for position and valuation data
- **Enhanced Interface:** Dedicated FX derivatives tab with detailed position information
- **Complete Valuation:** Portfolio calculations include FX derivative P&L
- **Comprehensive Analytics:** Portfolio composition charts include FX derivatives
- **Unified Experience:** Seamless integration with existing confirmation processes

### Business Requirements

#### Core Functionality Requirements
1. **FX Derivatives Display:** Show FX spot, outright, and swap positions in portfolio
2. **Portfolio Integration:** Include FX derivatives in total portfolio valuation
3. **Detailed Information:** Provide comprehensive position details for each FX derivative
4. **Real-time Updates:** Daily valuation updates reflected in client interface
5. **Settlement Handling:** Display only unsettled FX derivatives, handle swap legs properly

#### Technical Requirements
1. **Kafka Integration:** Consume FX derivative data from Blotter and valuation data from RMR
2. **Data Synchronization:** Maintain 100% data consistency across systems
3. **Performance Standards:** Portfolio loading ≤ 3 seconds, position details ≤ 2 seconds
4. **Security Implementation:** Multi-factor authentication, role-based access control
5. **Scalability Support:** Handle growth from 200 to 1,000+ clients

#### Regulatory Requirements
1. **MiFID II Compliance:** Client suitability assessment and position reporting
2. **Basel III Adherence:** Regulatory capital requirements for FX positions
3. **EMIR Compliance:** European derivative reporting regulations
4. **AML/KYC Requirements:** Enhanced monitoring for FX derivative transactions
5. **GDPR Compliance:** Client data privacy for FX position information

### Acceptance Criteria (20 Criteria)

#### Core Functionality (5 Criteria)
1. FX derivatives (spot, outright, swap) displayed in client portfolios with proper authorization
2. Client access to both "All Products" and dedicated "FX Derivatives" tabs
3. Overview displays: Type, Currency Pair, Trade Direction, Volume, P&L in CZK
4. Detailed view shows trade-specific information for each FX derivative type
5. Only unsettled FX derivatives displayed (settled trades properly excluded)

#### Portfolio Integration (5 Criteria)
6. FX derivative valuations accurately included in total portfolio value calculations
7. FX derivatives contribute correctly to portfolio composition charts
8. Portfolio-linked FX derivatives show proper portfolio assignment
9. Business unit FX derivatives tracked separately as "Term Trades"
10. P&L calculations accurate and consistently displayed in CZK

#### Performance and Scalability (4 Criteria)
11. System supports current 200 clients with capacity for growth
12. Real-time valuation updates (daily from RMR/Quaestor) function correctly
13. Portfolio loading time including FX derivatives remains ≤ 3 seconds
14. System handles concurrent access by multiple users without degradation

#### Integration and Data Quality (6 Criteria)
15. Integration with existing confirmation and statement processes maintained
16. Historical valuation data available for portfolio performance graphs
17. Proper handling of FX swap legs (both settled and unsettled portions)
18. Data synchronization between Blotter, RMR, and DKCZ maintains 100% consistency
19. Kafka topic integration provides reliable real-time data flow
20. Error handling and logging meet audit and compliance requirements

---

## Business Architecture

### BIAN Service Domain Mapping

#### Primary Service Domains (5 Domains)
1. **Position_Keeping** - Maintain FX derivative transaction logs and positions
2. **Customer_Portfolio** - Enhanced portfolio analysis including FX derivatives
3. **Currency_Exchange** - FX transaction pricing and capture
4. **Transaction_Engine** - Orchestrate FX derivative processing schedules
5. **Financial_Market_Analysis** - Provide FX market analysis and valuation

#### Secondary Service Domains (4 Domains)
6. **Investment_Portfolio_Analysis** - Include FX derivatives in portfolio performance analysis
7. **Investment_Portfolio_Management** - Manage portfolios including FX derivative components
8. **Market_Order_Execution** - Execute FX derivative transactions
9. **Securities_Position_Keeping** - Support securities-related FX derivative transactions

#### Integration Domains (3 Domains)
10. **Information_Provider_Operation** - Manage external market data feeds
11. **Financial_Gateway** - Handle external system integration
12. **Customer_Product_and_Service_Directory** - Maintain FX derivative product information

### BIAN Functional Patterns Coverage

#### Core Patterns (6 Patterns)
- **FULFILL** - Process FX derivative transactions and maintain positions
- **ANALYSE** - Enhanced portfolio analysis to include FX derivatives
- **TRANSACT** - Process FX transactions with preferential pricing
- **MONITOR** - Real-time FX market monitoring and valuation
- **MANAGE** - Portfolio management including FX derivatives
- **TRACK** - Maintain running record of FX derivative transactions

#### Additional Patterns (4 Patterns)
- **REGISTER** - Client registration and FX derivative access rights
- **ASSESS** - Risk assessment and compliance validation
- **ADMINISTER** - Administrative functions for client settings
- **ALLOCATE** - Portfolio assignment and virtual portfolio management

### Impacted Systems Architecture

#### Core Systems
- **Blotter** - Source system for FX derivative trades and positions
- **RMR (Risk Management System)** - Primary valuation system (post-2021)
- **Quaestor** - Legacy valuation system (pre-2021)
- **DKCZ** - Client interface (web/mobile banking) - primary recipient system
- **EI Kafka** - Enterprise integration layer - new integration point

#### Supporting Systems
- **Xerox** - Confirmations and statements system
- **Topas** - Portfolio management system
- **MRM** - Market risk management system

### Data Architecture

#### Core Business Objects
1. **Financial Position (Position_Keeping)**
   - FX derivative positions by currency pair
   - Transaction history and settlements
   - Position valuations and P&L calculations

2. **Customer Portfolio (Customer_Portfolio)**
   - Portfolio holdings including FX derivatives
   - Portfolio composition and allocation
   - Performance analytics integration

3. **Currency Exchange (Currency_Exchange)**
   - FX transaction details and specifications
   - Currency pair definitions and rates
   - Transaction fee structures

---

## Functional Analysis

### Use Cases Portfolio Overview

**Total Use Cases:** 22  
**BIAN Domains Covered:** 8  
**Functional Patterns:** 10  
**Technical Components:** 88  

### Priority Distribution
- **High Priority:** 10 use cases (critical for core functionality)
- **Medium Priority:** 9 use cases (important for complete solution)
- **Low Priority:** 3 use cases (enhancement features)

### Core Use Cases (High Priority)

#### 1. View FX Derivatives in Portfolio Overview
- **Domain:** Customer_Portfolio | **Pattern:** ANALYSE
- **Description:** Client can view FX derivatives alongside other securities
- **Components:** DKCZ Frontend/Backend, EI Kafka, Portfolio Calculation Engine

#### 2. Access Dedicated FX Derivatives Tab
- **Domain:** Customer_Portfolio | **Pattern:** ANALYSE
- **Description:** Client can access dedicated FX derivatives interface
- **Components:** DKCZ Frontend/Backend, EI Kafka, Authentication Service

#### 3. Display FX Derivative Position Details
- **Domain:** Position_Keeping | **Pattern:** TRACK
- **Description:** Client can view detailed position information
- **Components:** DKCZ Frontend/Backend, Blotter Integration, RMR Integration

#### 4. Process FX Derivative Transactions
- **Domain:** Transaction_Engine | **Pattern:** FULFILL
- **Description:** System processes transactions and maintains positions
- **Components:** Blotter System, Transaction Processing Engine, EI Kafka

#### 5. Calculate FX Derivative Valuations
- **Domain:** Financial_Market_Analysis | **Pattern:** ANALYSE
- **Description:** System calculates daily valuations and P&L
- **Components:** RMR System, Quaestor System, Valuation Engine

### Integration Use Cases (Medium Priority)

#### 6. Include FX Derivatives in Portfolio Valuation
- **Domain:** Investment_Portfolio_Analysis | **Pattern:** ANALYSE
- **Description:** FX derivatives included in total portfolio calculations
- **Components:** Portfolio Valuation Engine, Performance Analysis Service

#### 7. Handle FX Derivative Settlement Processing
- **Domain:** Market_Order_Execution | **Pattern:** FULFILL
- **Description:** System processes settlements and updates status
- **Components:** Settlement Engine, Position Status Manager

#### 8. Handle FX Derivative Portfolio Assignment
- **Domain:** Investment_Portfolio_Management | **Pattern:** ALLOCATE
- **Description:** System assigns FX derivatives to portfolios or Term Trades
- **Components:** Portfolio Assignment Engine, Virtual Portfolio Manager

### Business Process Impacts

#### Portfolio Valuation Process
- **Change:** Extended to include FX derivative valuations
- **Impact:** Complete portfolio value calculations
- **Systems:** Portfolio Calculation Engine, RMR, Quaestor

#### Position Reconciliation Process
- **Change:** Enhanced to handle FX derivative positions
- **Impact:** Improved data accuracy and consistency
- **Systems:** Position Database, Reconciliation Service

#### Client Reporting Process
- **Change:** Modified to include FX derivative information
- **Impact:** Comprehensive client portfolio reporting
- **Systems:** DKCZ, Portfolio Reporting Service

---

## Test Strategy

### Test Coverage Overview

**Component Testing:**
- **Total Components:** 18
- **Total Test Cases:** 108
- **Test Types:** Unit Tests (12), Integration Tests (6)

**End-to-End Testing:**
- **Total Scenarios:** 15
- **Business Use Cases Covered:** 22 (100%)
- **Test Types:** Functional (9), System (4), Security (1), Compliance (1)

### Component Test Strategy

#### Frontend Components Testing (4 Groups)
1. **FX Derivatives Portfolio Overview Display** - 8 test cases
2. **FX Derivatives Tab Interface** - 7 test cases
3. **FX Derivatives Position Detail Components** - 8 test cases
4. **FX Derivatives Chart Visualization** - 6 test cases

#### Backend Components Testing (2 Groups)
1. **FX Derivatives Data Retrieval and Aggregation** - 8 test cases
2. **FX Derivatives Filtering and Display Logic** - 7 test cases

#### Integration Components Testing (6 Groups)
1. **EI Kafka FX Derivatives Topic Consumption** - 8 test cases
2. **Authentication Service FX Derivatives Access** - 8 test cases
3. **Blotter Integration Position Data** - 8 test cases
4. **RMR Integration Valuation Retrieval** - 8 test cases
5. **Quaestor Integration Historical Valuations** - 6 test cases
6. **Data Synchronization Service** - 8 test cases

#### Processing Components Testing (6 Groups)
1. **Portfolio Calculation Engine** - 8 test cases
2. **Settlement Engine** - 8 test cases
3. **Risk Assessment Service** - 6 test cases
4. **Performance Monitoring Service** - 6 test cases

### End-to-End Test Strategy

#### Critical E2E Scenarios (High Priority - 9 Scenarios)
1. **View FX Derivatives in Portfolio Overview** - Complete client workflow
2. **Access Dedicated FX Derivatives Tab** - Interface navigation
3. **Display FX Derivative Position Details** - Detail view functionality
4. **Process FX Derivative Transaction Updates** - Real-time processing
5. **Calculate and Display FX Derivative Valuations** - Valuation accuracy
6. **Include FX Derivatives in Portfolio Valuation** - Portfolio integration
7. **Handle FX Derivative Settlement Processing** - Settlement workflow
8. **Maintain FX Derivative Position Records** - Data integrity
9. **Authenticate Client Access to FX Derivatives** - Security validation

#### Supporting E2E Scenarios (Medium Priority - 6 Scenarios)
10. **Handle FX Derivative Portfolio Assignment** - Portfolio allocation
11. **Process FX Derivative Market Data** - Market data integration
12. **Support FX Derivative Compliance Reporting** - Regulatory compliance
13. **Handle FX Derivative Error Processing** - Error handling
14. **Data Synchronization Across Systems** - System consistency
15. **Cross-System Integration Validation** - Complete system testing

### Test Quality Assurance

#### Test Standards
- **Given/When/Then Format:** Standard test case structure
- **Business Traceability:** All tests linked to requirements
- **Priority Classification:** Based on business criticality
- **Coverage Validation:** 100% requirement coverage

#### Performance Testing
- **Portfolio Loading:** ≤ 3 seconds with FX derivatives
- **Position Details:** ≤ 2 seconds response time
- **Concurrent Users:** 500+ simultaneous users
- **Data Processing:** Real-time valuation updates

#### Security Testing
- **Authentication:** Multi-factor authentication validation
- **Authorization:** Role-based access control testing
- **Data Protection:** Encryption at rest and in transit
- **Audit Trails:** Complete security event logging

---

## Implementation Roadmap

### Phase 1: Core Functionality (High Priority)
**Duration:** 8-10 weeks  
**Scope:** Basic FX derivatives display and portfolio integration

#### Sprint 1-2: Foundation (Weeks 1-4)
- Kafka topic integration setup
- Basic FX derivatives data consumption
- DKCZ frontend portfolio overview extension

#### Sprint 3-4: Core Features (Weeks 5-8)
- Dedicated FX derivatives tab implementation
- Position detail display functionality
- Basic portfolio valuation integration

#### Sprint 5: Testing and Validation (Weeks 9-10)
- Component testing execution
- Core functionality validation
- Performance testing

### Phase 2: Integration and Enhancement (Medium Priority)
**Duration:** 6-8 weeks  
**Scope:** Complete portfolio integration and advanced features

#### Sprint 6-7: Portfolio Integration (Weeks 11-16)
- Complete portfolio valuation integration
- Chart visualization implementation
- Settlement processing integration

#### Sprint 8-9: Advanced Features (Weeks 17-20)
- Portfolio assignment functionality
- Historical data integration
- Risk assessment integration

### Phase 3: Optimization and Compliance (Low Priority)
**Duration:** 4-6 weeks  
**Scope:** Performance optimization and regulatory compliance

#### Sprint 10-11: Optimization (Weeks 21-26)
- Performance tuning and optimization
- Scalability enhancements
- Error handling improvements

#### Sprint 12: Compliance and Documentation (Weeks 27-30)
- Regulatory compliance validation
- Documentation completion
- User acceptance testing

### Risk Mitigation Strategy

#### Technical Risks
- **Kafka Integration Complexity:** Prototype integration early, establish data contracts
- **Performance Degradation:** Implement caching strategies, optimize queries
- **Data Quality Issues:** Establish data validation rules, implement monitoring

#### Business Risks
- **Regulatory Non-compliance:** Engage compliance team early, validate requirements
- **Client Dissatisfaction:** Implement user feedback loops, conduct UAT
- **Operational Disruption:** Plan phased rollout, maintain fallback procedures

### Success Criteria
- **Functional:** All 20 acceptance criteria met
- **Performance:** Response time targets achieved
- **Security:** Security audit passed
- **Compliance:** Regulatory requirements validated
- **User Satisfaction:** Client feedback positive

---

## Appendices

### Appendix A: Technical Architecture Diagrams
- **System Integration Architecture**
- **Data Flow Diagrams**
- **Security Architecture**
- **Deployment Architecture**

### Appendix B: Detailed Use Cases
- **Complete Use Cases Document** (22 use cases)
- **BIAN Pattern Mapping**
- **Technical Component Impact Analysis**

### Appendix C: Test Documentation
- **Component Test Cases** (108 test cases)
- **End-to-End Test Scenarios** (15 scenarios)
- **Test Execution Plan**
- **Performance Test Specifications**

### Appendix D: Regulatory Documentation
- **MiFID II Compliance Analysis**
- **Basel III Impact Assessment**
- **EMIR Reporting Requirements**
- **Data Protection Impact Assessment**

### Appendix E: Project Artifacts
- **Business Requirements Document**
- **Technical Solution Design**
- **Risk Assessment Matrix**
- **Implementation Timeline**

---

**Document Status:** Complete and Ready for Implementation  
**Next Steps:** Technical Architecture Design and Development Planning  
**Document Owner:** Business Analyst/Architect  
**Review Date:** 2025-01-17  

---

*This document provides comprehensive project documentation for AP-31 FX Derivatives Portfolio Overview implementation. For technical specifications and detailed implementation guidance, refer to the technical architecture documents.*