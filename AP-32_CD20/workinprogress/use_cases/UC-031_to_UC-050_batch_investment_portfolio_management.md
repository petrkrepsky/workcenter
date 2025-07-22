# UC-031 to UC-050: Investment Portfolio Management Domain - Batch Use Cases

## UC-031: Kontrola dostupnosti minimální částky strategie

### BIAN Section
**BIAN Domain:** Investment_Portfolio_Management  
**BRQ Process:** BRQ08.02 - Kontrola dostupnosti minimální částky strategie  
**Typ procesu:** Automated Threshold Validation Process

### Use Case Details
- **Systems:** TOPAS, Cash Management System, Strategy Configuration Service
- **Actors:** Automated Investment System, Threshold Validation Engine
- **Inputs:** Available cash balance, strategy minimum requirements, portfolio configuration
- **Outputs:** Threshold validation result, investment eligibility status, processing decision

### FIGMA Screens
- **Background Process:** Runs automatically as part of daily investment processing
- **Client Notifications:** Alert if insufficient funds for strategy execution

### Acceptance Criteria
- **AC-031.1:** Minimum strategy amounts are validated daily before investment
- **AC-031.2:** Multi-currency support for international strategies
- **AC-031.3:** Buffer calculations to account for fees and charges

---

## UC-032: Vytvoření objednávek v poměru fondů podle strategie

### BIAN Section
**BIAN Domain:** Investment_Portfolio_Management  
**BRQ Process:** BRQ08.03 - Vytvoření objednávek v poměru fondů podle strategie  
**Typ procesu:** Automated Order Generation Process

### Use Case Details
- **Systems:** Strategy Engine, Order Management System, Fund Allocation Calculator
- **Actors:** Automated Order Generation System, Portfolio Allocation Engine
- **Inputs:** Strategy allocation percentages, available investment amount, fund universe
- **Outputs:** Fund purchase orders, allocation breakdown, execution instructions

### FIGMA Screens
- **Portfolio Allocation View:** Visual representation of fund allocation per strategy
- **Order Status Tracking:** Real-time status of generated orders

### Acceptance Criteria
- **AC-032.1:** Orders respect exact strategy allocation percentages
- **AC-032.2:** Minimum fund purchase amounts are respected
- **AC-032.3:** Fractional share calculations for optimal allocation

---

## UC-033: Standardní vypořádání obchodů

### BIAN Section
**BIAN Domain:** Investment_Portfolio_Management  
**BRQ Process:** BRQ08.06 - Standardní vypořádání obchodů  
**Typ procesu:** Automated Trade Settlement Process

### Use Case Details
- **Systems:** TA systém, Settlement Engine, TOPAS
- **Actors:** Trade Settlement System, Fund Administrator, Custodian Services
- **Inputs:** Executed trades, settlement instructions, fund NAV prices
- **Outputs:** Settled positions, updated portfolio holdings, confirmation receipts

### FIGMA Screens
- **Settlement Status:** Real-time settlement status in portfolio view
- **Transaction History:** Detailed history of settled trades

### Acceptance Criteria
- **AC-033.1:** T+2 settlement for most fund transactions
- **AC-033.2:** Automatic reconciliation of settled positions
- **AC-033.3:** Exception handling for failed settlements

---

## UC-034: Aktualizace složení portfolia v TOPAS

### BIAN Section
**BIAN Domain:** Investment_Portfolio_Management  
**BRQ Process:** BRQ08.07 - Aktualizace složení portfolia v TOPAS  
**Typ procesu:** Automated Portfolio Update Process

### Use Case Details
- **Systems:** TOPAS, Portfolio Valuation Service, Position Management System
- **Actors:** Portfolio Update Engine, TOPAS Integration Service
- **Inputs:** New fund positions, pricing data, corporate actions
- **Outputs:** Updated portfolio composition, current valuations, allocation percentages

### FIGMA Screens
- **Portfolio Dashboard:** Real-time updated portfolio composition display
- **Performance Tracking:** Updated performance metrics after portfolio changes

### Acceptance Criteria
- **AC-034.1:** Real-time portfolio composition updates after settlement
- **AC-034.2:** Accurate valuation calculations using latest NAV prices
- **AC-034.3:** Historical tracking of portfolio composition changes

---

## UC-035: Výpočet poměru jednotlivých fondů na portfoliu

### BIAN Section
**BIAN Domain:** Investment_Portfolio_Management  
**BRQ Process:** BRQ09.02 - Výpočet poměru jednotlivých fondů na portfoliu  
**Typ procesu:** Portfolio Calculation Process

### Use Case Details
- **Systems:** Portfolio Analytics Engine, TOPAS, Valuation Service
- **Actors:** Portfolio Calculator, Fund Position Analyzer
- **Inputs:** Current fund holdings, NAV prices, total portfolio value
- **Outputs:** Fund allocation percentages, position weights, rebalancing recommendations

### FIGMA Screens
- **Portfolio Allocation Chart:** Pie chart showing fund allocation percentages
- **Asset Breakdown:** Detailed breakdown of portfolio composition

### Acceptance Criteria
- **AC-035.1:** Accurate percentage calculations based on current market values
- **AC-035.2:** Real-time updates when market prices change
- **AC-035.3:** Support for complex fund structures and derivatives

---

## UC-036: Vytvoření X pokynů ke zpětnému odkupu dle poměru

### BIAN Section
**BIAN Domain:** Investment_Portfolio_Management  
**BRQ Process:** BRQ09.03 - Vytvoření X pokynů ke zpětnému odkupu dle poměru  
**Typ procesu:** Automated Redemption Order Generation

### Use Case Details
- **Systems:** Redemption Engine, Order Management System, Portfolio Calculator
- **Actors:** Redemption Order Generator, Portfolio Liquidation System
- **Inputs:** Target redemption amount, current fund allocations, redemption rules
- **Outputs:** Multiple redemption orders, proportional redemption amounts, execution timeline

### FIGMA Screens
- **Redemption Preview:** Preview of funds to be redeemed and amounts
- **Execution Status:** Track status of multiple redemption orders

### Acceptance Criteria
- **AC-036.1:** Proportional redemption maintains target allocation ratios
- **AC-036.2:** Respect fund-specific redemption rules and minimums
- **AC-036.3:** Optimize for lowest total transaction costs

---

## UC-037: Vytvoření pokynu ke zpětnému odkupu konkrétního fondu

### BIAN Section
**BIAN Domain:** Investment_Portfolio_Management  
**BRQ Process:** BRQ09.05 - Vytvoření pokynu ke zpětnému odkupu konkrétního fondu  
**Typ procesu:** Specific Fund Redemption Process

### Use Case Details
- **Systems:** Fund Redemption Service, TA systém, Order Management
- **Actors:** Fund Redemption Manager, Specific Order Generator
- **Inputs:** Target fund identification, redemption amount, customer authorization
- **Outputs:** Specific fund redemption order, impact analysis, execution confirmation

### FIGMA Screens
- **Fund Selection:** Interface for selecting specific fund for redemption
- **Impact Analysis:** Show impact of specific fund redemption on portfolio

### Acceptance Criteria
- **AC-037.1:** Support for partial or full fund position redemption
- **AC-037.2:** Warning for portfolio imbalance after specific redemption
- **AC-037.3:** Validation of minimum holding requirements

---

## UC-038: Standardní vypořádání redemption obchodů

### BIAN Section
**BIAN Domain:** Investment_Portfolio_Management  
**BRQ Process:** BRQ09.07 - Standardní vypořádání redemption obchodů  
**Typ procesu:** Redemption Settlement Process

### Use Case Details
- **Systems:** TA systém, Settlement Engine, Cash Management System
- **Actors:** Redemption Settlement System, Fund Administrator
- **Inputs:** Executed redemption orders, settlement instructions, fund NAV
- **Outputs:** Cash proceeds, updated fund positions, settlement confirmations

### FIGMA Screens
- **Redemption Status:** Real-time redemption settlement tracking
- **Cash Receipt Confirmation:** Notification when cash proceeds are available

### Acceptance Criteria
- **AC-038.1:** T+3 settlement standard for fund redemptions
- **AC-038.2:** Automatic cash allocation to appropriate account components
- **AC-038.3:** Exception handling for redemption settlement failures

---

## UC-039: Připisování prostředků na peněžní složku pro výnosy

### BIAN Section
**BIAN Domain:** Investment_Portfolio_Management  
**BRQ Process:** BRQ09.08 - Připisování prostředků na peněžní složku pro výnosy  
**Typ procesu:** Cash Allocation Process

### Use Case Details
- **Systems:** Cash Management System, TOPAS, Account Management
- **Actors:** Cash Allocation Engine, Portfolio Cash Manager
- **Inputs:** Redemption proceeds, cash allocation rules, account structure
- **Outputs:** Updated cash balances, allocation confirmations, available cash for withdrawal

### FIGMA Screens
- **Cash Balance Update:** Real-time cash balance updates in portfolio view
- **Withdrawal Options:** Display of available cash for withdrawal

### Acceptance Criteria
- **AC-039.1:** Automatic allocation to designated cash component
- **AC-039.2:** Interest calculation on cash balances
- **AC-039.3:** Clear separation between investment cash and withdrawal cash

---

## UC-040: Aktualizace složení portfolia po prodeji

### BIAN Section
**BIAN Domain:** Investment_Portfolio_Management  
**BRQ Process:** BRQ09.09 - Aktualizace složení portfolia po prodeji  
**Typ procesu:** Post-Sale Portfolio Update Process

### Use Case Details
- **Systems:** TOPAS, Portfolio Rebalancing Engine, Valuation Service
- **Actors:** Portfolio Update Manager, Composition Calculator
- **Inputs:** Completed redemption transactions, updated fund positions, current valuations
- **Outputs:** Updated portfolio allocation, rebalancing recommendations, composition reports

### FIGMA Screens
- **Updated Portfolio View:** Refreshed portfolio composition after redemption
- **Rebalancing Suggestions:** Recommendations to restore target allocation

### Acceptance Criteria
- **AC-040.1:** Immediate portfolio composition update after redemption settlement
- **AC-040.2:** Trigger rebalancing alerts if deviation exceeds thresholds
- **AC-040.3:** Historical tracking of portfolio changes for reporting

---

*Batch Use Cases 031-040 created: 2025-07-22*  
*Project: AP-32 Clear Deal 2.0*  
*BIAN Framework: Investment Portfolio Management*