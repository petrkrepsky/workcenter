# AP-31 - FX Derivatives Portfolio Overview - Business Description

**Document Version:** 1.0  
**Date:** 2025-01-17  
**JIRA ID:** AP-31  
**GIT ID:** #2  

## Change Description

This change extends the existing DKCZ client portfolio interface to include FX derivatives (FX spot, FX outright, FX swap) visibility and valuation. The implementation requires new Kafka topic integration with Blotter and RMR systems, enhanced portfolio calculations, and UI extensions for comprehensive FX derivative display and detailed views. The change enables approximately 200 clients to view their FX derivative positions as integral components of their investment portfolios.

## AS-IS and TO-BE Description

### AS-IS State
- FX derivatives exist in Blotter system but are not visible in client portfolios
- FX trade data stored in Blotter system with client/portfolio linkage
- Valuations performed in RMR system (post-2021) and Quaestor system (pre-2021)
- Daily valuation updates (1x per day) in CZK currency
- Confirmations and statements sent directly from Blotter via email
- No integration between FX derivative systems and DKCZ client interface
- FX derivatives not included in portfolio value calculations
- Clients cannot view FX derivative positions through digital channels

### TO-BE State
- FX derivatives fully integrated into DKCZ client portfolio interface
- Real-time FX derivative position visibility via Kafka topic integration
- FX derivatives included in portfolio valuation and composition calculations
- Dedicated FX derivatives tab and overview within portfolio interface
- Detailed FX derivative information accessible through drill-down functionality
- Portfolio-linked FX derivatives tracked within specific portfolios
- Business unit FX derivatives tracked separately as "Term Trades"
- Enhanced portfolio analytics including FX derivative impact on performance
- Automated integration with existing confirmation and statement processes

## Business Architecture (BIAN Impacted Domains)

### Primary Service Domains
1. **Position_Keeping** - Maintain FX derivative transaction logs and positions
2. **Customer_Portfolio** - Enhanced portfolio analysis including FX derivatives
3. **Currency_Exchange** - FX transaction pricing and capture
4. **Transaction_Engine** - Orchestrate FX derivative processing schedules
5. **Financial_Market_Analysis** - Provide FX market analysis and valuation

### Secondary Service Domains
6. **Investment_Portfolio_Analysis** - Include FX derivatives in portfolio performance analysis
7. **Investment_Portfolio_Management** - Manage portfolios including FX derivative components
8. **Market_Order_Execution** - Execute FX derivative transactions
9. **Securities_Position_Keeping** - Support securities-related FX derivative transactions

### Integration Domains
10. **Information_Provider_Operation** - Manage external market data feeds
11. **Financial_Gateway** - Handle external system integration
12. **Customer_Product_and_Service_Directory** - Maintain FX derivative product information

## Business Process Impact

### BIAN Functional Patterns Affected
- **FULFILL** (Position_Keeping): Process FX derivative transactions and maintain positions
- **ANALYSE** (Customer_Portfolio): Enhanced portfolio analysis to include FX derivatives
- **TRANSACT** (Currency_Exchange): Process FX transactions with preferential pricing
- **MONITOR** (Financial_Market_Analysis): Real-time FX market monitoring and valuation
- **MANAGE** (Investment_Portfolio_Management): Portfolio management including FX derivatives
- **TRACK** (Position_Keeping): Maintain running record of FX derivative transactions

### Process Changes
1. **Portfolio Valuation Process** - Extended to include FX derivative valuations
2. **Position Reconciliation Process** - Enhanced to handle FX derivative positions
3. **Market Data Processing** - Expanded to include FX derivative market data
4. **Client Reporting Process** - Modified to include FX derivative information
5. **Risk Assessment Process** - Updated to incorporate FX derivative risk factors

## Impacted Systems

### Core Systems
- **Blotter** - Source system for FX derivative trades and positions
- **RMR (Risk Management System)** - Primary valuation system (post-2021)
- **Quaestor** - Legacy valuation system (pre-2021)
- **DKCZ** - Client interface (web/mobile banking) - primary recipient system
- **EI Kafka** - Enterprise integration layer - new integration point

### Supporting Systems
- **Xerox** - Confirmations and statements system
- **Topas** - Portfolio management system
- **MRM** - Market risk management system

## Data Analysis (BIAN Business Model Objects)

### Core Business Objects
1. **Financial Position** (Position_Keeping)
   - FX derivative positions by currency pair
   - Transaction history and settlements
   - Position valuations and P&L calculations

2. **Transaction Schedule** (Transaction_Engine)
   - FX derivative processing schedules
   - Settlement date management
   - Transaction orchestration workflows

3. **Customer Portfolio** (Customer_Portfolio)
   - Portfolio holdings including FX derivatives
   - Portfolio composition and allocation
   - Performance analytics integration

4. **Financial Market Analysis** (Financial_Market_Analysis)
   - FX market data and pricing
   - Valuation models and methodologies
   - Market risk assessments

5. **Currency Exchange** (Currency_Exchange)
   - FX transaction details and specifications
   - Currency pair definitions and rates
   - Transaction fee structures

6. **Investment Portfolio Analysis** (Investment_Portfolio_Analysis)
   - Portfolio performance metrics
   - Asset allocation analysis
   - Risk-adjusted return calculations

## Legal & Compliance & Risk Impact

### Regulatory Compliance
- **MiFID II** - Client suitability assessment and reporting for FX derivatives
- **Basel III** - Regulatory capital requirements for FX derivative positions
- **EMIR** - European Market Infrastructure Regulation for derivative reporting
- **AML/KYC** - Enhanced monitoring for FX derivative transactions
- **Data Protection (GDPR)** - Client privacy for FX position data

### Risk Management
- **Market Risk** - FX derivative positions contribute to overall market risk exposure
- **Operational Risk** - New integration points create operational risk vectors
- **Liquidity Risk** - FX derivative settlements impact liquidity management
- **Credit Risk** - Counterparty risk assessment for FX derivative transactions
- **Regulatory Risk** - Compliance with evolving FX derivative regulations

### Legal Considerations
- **Contract Documentation** - FX derivative agreement terms and conditions
- **Disclosure Requirements** - Risk disclosure for FX derivative products
- **Audit Requirements** - Audit trails for all FX derivative position changes
- **Data Governance** - Data retention and archival policies for FX transactions

## Non-functional Requirements

### Performance Requirements
- Portfolio loading time including FX derivatives: ≤ 3 seconds
- FX derivative position refresh rate: Real-time (daily valuation updates)
- System response time for FX derivative detail views: ≤ 2 seconds
- Concurrent user capacity: 500+ simultaneous users

### Availability Requirements
- System uptime: 99.9% availability during business hours
- Planned maintenance windows: Maximum 4 hours monthly
- Recovery time objective (RTO): 4 hours
- Recovery point objective (RPO): 1 hour

### Security Requirements
- FX position data encryption at rest and in transit
- Multi-factor authentication for FX derivative access
- Role-based access control for FX derivative information
- API security with OAuth 2.0 authentication

### Scalability Requirements
- Support growth from 200 to 1,000+ clients with FX derivatives
- Handle 10,000+ FX derivative positions
- Process 1,000+ concurrent valuation updates
- Scale to support additional FX derivative product types

### Reliability Requirements
- Valuation calculation accuracy: 99.99% precision
- Data synchronization integrity: 100% consistency
- Zero data loss during system operations
- Automated error detection and alerting

## Potential Risks

### Technical Risks
- **Kafka Integration Failures** - Data inconsistencies between systems
- **Performance Degradation** - Large FX derivative portfolios causing slow loading
- **Data Quality Issues** - Incorrect valuations from RMR/Quaestor systems
- **System Integration Complexity** - Multiple system dependencies creating failure points

### Business Risks
- **Regulatory Non-compliance** - Failure to meet FX derivative reporting requirements
- **Market Volatility Impact** - Real-time valuation updates showing volatile P&L
- **Client Dissatisfaction** - Inaccurate or delayed FX derivative information
- **Operational Disruption** - Manual intervention required for settlement failures

### Security Risks
- **Data Exposure** - Unauthorized access to sensitive FX position data
- **API Vulnerabilities** - Security breaches through integration endpoints
- **Insider Threats** - Unauthorized access to client FX derivative information
- **Cyber Attacks** - Targeted attacks on FX derivative systems

### Operational Risks
- **Blotter System Downtime** - Impact on FX derivative visibility
- **Manual Process Dependencies** - Human error in FX derivative processing
- **Backup and Recovery Failures** - Loss of FX derivative transaction history
- **Change Management Issues** - Inadequate testing of FX derivative functionality

## Acceptance Criteria

### Core Functionality
1. FX derivatives (spot, outright, swap) are displayed in client portfolios with proper authorization
2. Client can access FX derivatives in both "All Products" and dedicated "FX Derivatives" tabs
3. FX derivatives overview displays: Type, Currency Pair, Trade Direction, Volume, P&L in CZK
4. Detailed view shows trade-specific information for each FX derivative type
5. Only unsettled FX derivatives are displayed (settled trades properly excluded)

### Portfolio Integration
6. FX derivative valuations are accurately included in total portfolio value calculations
7. FX derivatives contribute correctly to portfolio composition charts (pie charts by type and currency)
8. Portfolio-linked FX derivatives show proper portfolio assignment
9. Business unit FX derivatives are tracked separately as "Term Trades"
10. P&L calculations are accurate and consistently displayed in CZK

### Performance and Scalability
11. System supports current 200 clients with capacity for growth
12. Real-time valuation updates (daily from RMR/Quaestor) function correctly
13. Portfolio loading time including FX derivatives remains ≤ 3 seconds
14. System handles concurrent access by multiple users without degradation

### Integration and Data Quality
15. Integration with existing confirmation and statement processes maintains functionality
16. Historical valuation data is available for portfolio performance graphs
17. Proper handling of FX swap legs (both settled and unsettled portions)
18. Data synchronization between Blotter, RMR, and DKCZ maintains 100% consistency
19. Kafka topic integration provides reliable real-time data flow
20. Error handling and logging meet audit and compliance requirements

---

**Document Status:** Approved for Implementation  
**Next Phase:** Technical Architecture Design