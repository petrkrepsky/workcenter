# Screen Section 07: Investment Strategy Planning

## Figma Reference
**URL:** https://www.figma.com/design/8vk3PJZQcBxXaFgGIr1GjV/CD-2.0--iOS-?node-id=1872-20026&t=DqlRwPfOVA0Blzzg-4  
**Node ID:** 1872:20026

## Screen Count
**Počet obrazovek:** 4 screens

## Screens Overview

### Screen 1: Strategy Selection - "Jaký je váš cíl?"
- **Účel:** Výběr typu investiční strategie
- **Implementuje BRQ:** BRQ02.02, BRQ02.04, BRQ02.06, BRQ02.08, BRQ02.10 (Strategy variant selection)
- **Typ:** Strategy type selection interface

### Screen 2: Strategy Selection - Alternative Layout
- **Účel:** Alternativní design pro výběr strategie
- **Implementuje BRQ:** BRQ02.01 (Strategy variant display)
- **Typ:** Alternative selection interface

### Screen 3: Strategy Planning - "Vytvořte plán"
- **Účel:** Detailní plánování parametrů strategie
- **Implementuje BRQ:** BRQ02.03, BRQ02.05, BRQ02.07, BRQ02.09, BRQ02.11 (Parameter input)
- **Typ:** Strategy parameter configuration

### Screen 4: Strategy Planning - Active State
- **Účel:** Aktivní stav během vyplňování strategie
- **Implementuje BRQ:** BRQ02.12 (Strategy visualization)
- **Typ:** Active configuration with preview

## Screen Details

### Screen 1 & 2: Strategy Type Selection
**UI Components:**
- Title: "Jaký je váš cíl?"
- Strategy Options:
  - **"Cíčasta":** Věděte, kolik chcete dosáhnout
  - **"Investovat strast":** Investujte podle vlastních možností
  - **"Bez cíle":** Spořit za více možností
- Visual selection buttons with gradients
- "Pokračovat s vašo plán" button

### Screen 3 & 4: Strategy Planning
**UI Components:**
- Title: "Vytvořte plán"
- Configuration Options:
  - **"Cíčasta":** Target amount configuration
  - **"Pravda":** Regular payment setup
  - **"Bez cíle":** Flexible planning
- Interactive planning interface
- Progress indicators

## Data Requirements

### Strategy Configuration Data:
- **Target Amount Strategy:**
  - Target sum (CZK)
  - Time horizon (months/years)
  - Initial deposit amount
  - Monthly contribution amount

- **Renta Strategy:**
  - Monthly withdrawal amount
  - Withdrawal period duration
  - Initial investment amount
  - Accumulation period

- **Open-ended Strategy:**
  - Monthly contribution amount
  - Initial deposit
  - Flexible time horizon

### Calculation Data:
- **Expected Returns:**
  - Conservative scenario (3-5%)
  - Realistic scenario (5-7%)
  - Optimistic scenario (7-10%)

- **Risk Assessment:**
  - Client risk profile
  - Strategy risk compatibility
  - Regulatory suitability check

## Technical Implementation

### Systémy involved:
- **CD 2.0 mobilní aplikace:** User interface and input
- **Strategy Calculator:** Mathematical computation engine
- **Investment Questionnaire System:** Suitability checking
- **TA:** Strategy definition storage
- **TOPAS:** Portfolio setup preparation

### Calculation Engine:
- **Present Value Calculations:** Time value of money
- **Compound Interest:** Growth projections
- **Monte Carlo Simulations:** Scenario modeling
- **Risk-Return Optimization:** Portfolio theory application

## BRQ Requirements Mapping

### BRQ02.02: Výběr varianty "Cílová částka - známá doba"
- **Systém:** CD 2.0
- **Role:** Klient
- **Input:** Cílová částka, doba investování, jednorázový vklad
- **Output:** Vstupní parametry pro výpočet
- **Typ:** Manual

### BRQ02.04: Výběr varianty "Cílová částka - známý měsíční vklad"
- **Systém:** CD 2.0
- **Role:** Klient
- **Input:** Cílová částka, měsíční vklad, jednorázový vklad
- **Output:** Vstupní parametry pro výpočet
- **Typ:** Manual

### BRQ02.06: Výběr varianty "Renta - známý měsíční vklad"
- **Systém:** CD 2.0
- **Role:** Klient
- **Input:** Měsíční renta, pravidelný vklad, jednorázový vklad, doba investování
- **Output:** Vstupní parametry pro výpočet renty
- **Typ:** Manual

### BRQ02.08: Výběr varianty "Renta - známá doba čerpání"
- **Systém:** CD 2.0
- **Role:** Klient
- **Input:** Měsíční renta, doba čerpání, jednorázový vklad, doba investování
- **Output:** Vstupní parametry pro výpočet
- **Typ:** Manual

### BRQ02.10: Výběr varianty "Bez cíle"
- **Systém:** CD 2.0
- **Role:** Klient
- **Input:** Pravidelný měsíční vklad, jednorázový vklad
- **Output:** Vstupní parametry
- **Typ:** Manual

### BRQ02.12: Zobrazení vývoje v grafu (tři scénáře)
- **Systém:** CD 2.0
- **Role:** Klient
- **Input:** Výsledky výpočtů
- **Output:** Grafy s realistickým, pesimistickým, optimistickým scénářem
- **Typ:** Automated visualization

## UX/UI Design Notes
- **Clear choice architecture:** Three distinct strategy types
- **Visual differentiation:** Each option has distinct visual treatment
- **Progressive disclosure:** Step-by-step parameter input
- **Gradient aesthetics:** Consistent with brand visual identity
- **Accessibility:** Clear labels and touch-friendly interface
- **Decision support:** Clear descriptions of each strategy type

## Strategy Types Explained

### 1. Cílová částka (Target Amount)
- **Purpose:** Save specific amount by specific date
- **Best for:** Goal-oriented investors
- **Parameters:** Target amount, timeline, contributions
- **Calculation:** Required monthly payment or timeline

### 2. Investovat strast (Investment Renta)  
- **Purpose:** Create regular income stream
- **Best for:** Retirement/income planning
- **Parameters:** Monthly income needed, accumulation period
- **Calculation:** Required savings for desired income

### 3. Bez cíle (Open-ended)
- **Purpose:** Flexible wealth accumulation
- **Best for:** General wealth building
- **Parameters:** Regular contributions, flexible timeline
- **Calculation:** Projected growth scenarios

## Validation Rules
- **Minimum amounts:** Enforce investment minimums
- **Realistic timelines:** Prevent unrealistic expectations
- **Risk suitability:** Match strategy to client profile
- **Regulatory compliance:** Meet MiFID requirements

## Process Flow
1. **Strategy Selection:** User chooses investment approach
2. **Parameter Input:** Configure specific amounts and timelines
3. **Calculation:** Backend computes scenarios
4. **Visualization:** Display projected outcomes
5. **Review:** Client reviews and confirms
6. **Save:** Store strategy for later activation

## Next Screen Connection
After strategy creation:
- **Strategy Review Screen** (BRQ02.13)
- **Suitability Check** (BRQ05.02)
- **Strategy Activation Flow** (BRQ05)

---
*Analýza vytvořena: 2025-07-22*  
*Projekt: AP-32 Clear Deal 2.0*