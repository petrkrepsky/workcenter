# Screen Section 06: Main Dashboard & Portfolio Overview

## Figma Reference
**URL:** https://www.figma.com/design/8vk3PJZQcBxXaFgGIr1GjV/CD-2.0--iOS-?node-id=59-2433&t=DqlRwPfOVA0Blzzg-4  
**Node ID:** 59:2433

## Screen Count
**Počet obrazovek:** 5 screens

## Screens Overview

### Screen 1: Empty Portfolio State
- **Účel:** Zobrazení prázdného portfolia pro nového uživatele
- **Implementuje BRQ:** BRQ02.01 (Zobrazení možností vytvoření první strategie)
- **Typ:** Empty state with call-to-action

### Screen 2: Active Portfolio Dashboard
- **Účel:** Hlavní dashboard s aktivním portfoliem
- **Implementuje BRQ:** Portfolio overview, BRQ08 tracking
- **Typ:** Data visualization dashboard

### Screen 3: Empty Portfolio Alternative
- **Účel:** Alternativní zobrazení prázdného stavu
- **Implementuje BRQ:** BRQ02.01 (Strategy creation entry point)
- **Typ:** Alternative empty state

### Screen 4: Detailed Portfolio View
- **Účel:** Detailní pohled na portfolio s více strategiemi
- **Implementuje BRQ:** BRQ05, BRQ08, BRQ13 (Multiple strategy management)
- **Typ:** Complex data dashboard

### Screen 5: Portfolio Management View
- **Účel:** Rozšířený pohled pro správu portfolia
- **Implementuje BRQ:** BRQ14 (Strategy parameter modification)
- **Typ:** Management interface

## Screen Details

### Screen 1: Empty Portfolio
**UI Components:**
- Portfolio value: "0 CZK" (prominent display)
- Empty state message
- "Založte investiční strategii" call-to-action button
- Navigation sections: "Moje platby", "Zkusit jiné oblasti"

### Screen 2: Active Portfolio
**UI Components:**
- Portfolio value: "189 241 CZK" with performance chart
- Strategy information cards
- Performance metrics and graphs
- Action buttons: "Vložit peníze", "Vybrat peníze"
- Strategy list with individual values

### Screen 3: Empty Alternative
**UI Components:**
- Similar to Screen 1 but different visual treatment
- "Nepřijít bez investiční plán" CTA
- Alternative empty state messaging

### Screen 4: Multiple Strategies
**UI Components:**
- Total portfolio value display
- Multiple strategy cards
- Detailed performance charts
- Individual strategy actions
- "Více investiční plán" button

### Screen 5: Management Interface
**UI Components:**
- Portfolio overview with extended controls
- Strategy modification options
- Advanced portfolio management tools

## Data Requirements

### Portfolio Data:
- **Current Values:**
  - Total portfolio value (CZK)
  - Individual strategy values
  - Performance metrics (gains/losses)
  - Historical performance data

- **Strategy Information:**
  - Strategy names and types
  - Target amounts and timelines
  - Current allocation percentages
  - Expected returns vs actual

### Market Data:
- **Performance Charts:**
  - Historical price data
  - Performance trends
  - Market indicators
  - Comparative benchmarks

### Transaction Data:
- **Recent Activities:**
  - Last deposits/withdrawals
  - Recent fund purchases
  - Strategy modifications
  - Dividend receipts

## Technical Implementation

### Systémy involved:
- **CD 2.0 mobilní aplikace:** UI presentation layer
- **TOPAS:** Portfolio data and valuations
- **TA:** Strategy definitions and parameters
- **Fund Trading System:** Market data and prices
- **Corporate Actions System:** Dividend and performance data

### Data Flow:
1. **Portfolio Valuation:** Real-time calculation from TOPAS
2. **Strategy Data:** Current parameters from TA system
3. **Performance Metrics:** Historical data aggregation
4. **Chart Generation:** Time-series data visualization

## BRQ Requirements Mapping

### BRQ02.01: Zobrazení tří variant modelace strategie
- **Systém:** CD 2.0
- **Role:** Klient
- **Input:** Požadavek na tvorbu strategie
- **Output:** Tři možnosti (cílová částka, renta, bez cíle)
- **Typ:** Manual selection

**Implementation:** Screen 1, 3 (Empty state CTA)

### BRQ05: Strategy Activation Overview
- **Portfolio Display:** Active strategies shown
- **Implementation:** Screen 2, 4, 5

### BRQ08: Fund Purchase Tracking
- **Performance Monitoring:** Investment results visible
- **Implementation:** All active portfolio screens

### BRQ13: Additional Strategy Management
- **Multiple Strategies:** Shown in Screen 4
- **Implementation:** Strategy list and management

### BRQ14: Strategy Parameter Modification
- **Modification Interface:** Available in Screen 5
- **Implementation:** Strategy management tools

## UX/UI Design Notes
- **Progressive disclosure:** Empty state → Single strategy → Multiple strategies
- **Visual hierarchy:** Portfolio value prominently displayed
- **Action-oriented:** Clear CTAs for next steps
- **Data visualization:** Charts and graphs for performance
- **Quick access:** Primary actions easily accessible
- **Status indicators:** Clear portfolio health indicators

## Key Metrics Displayed
- **Portfolio Value:** Total current value in CZK
- **Performance:** Gains/losses with percentages
- **Strategy Count:** Number of active strategies
- **Recent Activity:** Latest transactions
- **Market Performance:** Comparative charts

## Navigation Options
- **"Vložit peníze":** Payment/deposit flow (BRQ06/BRQ07)
- **"Vybrat peníze":** Withdrawal flow (BRQ10)
- **"Založte investiční strategii":** Strategy creation (BRQ02)
- **Strategy Details:** Individual strategy management

## Empty State Strategy
- **Educational messaging:** Clear value proposition
- **Simple CTA:** Single action to get started
- **Visual appeal:** Engaging graphics to encourage action
- **Progress indication:** Show user where they are in journey

## Process Flow
1. **Dashboard Load:** Real-time portfolio data fetch
2. **Data Aggregation:** Combine strategy and performance data
3. **Chart Generation:** Create visual representations
4. **Action Processing:** Handle user interactions
5. **Navigation:** Route to appropriate flows

## Performance Considerations
- **Real-time Updates:** Live portfolio valuation
- **Caching Strategy:** Balance freshness vs performance
- **Chart Optimization:** Efficient data visualization
- **Progressive Loading:** Core data first, details later

---
*Analýza vytvořena: 2025-07-22*  
*Projekt: AP-32 Clear Deal 2.0*