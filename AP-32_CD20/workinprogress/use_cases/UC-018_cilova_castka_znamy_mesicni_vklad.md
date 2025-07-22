# UC-018: Výběr varianty "Cílová částka - známý měsíční vklad"

## BIAN Section

### Domain Information
**BIAN Domain:** Investment_Portfolio_Planning  
**Domain Description:** Dohodnutí principů řízení zákaznického investičního portfolia, risk appetite a cílového profilu portfolia

### BIAN Framework References
- **Business Object Model:** Investment Portfolio Planning BOM - https://bian.org/servicelandscape-12-0-0/views/view_33723.html
- **Control Record:** Investment Portfolio Planning Control Record - https://bian.org/servicelandscape-12-0-0/views/view_30176.html
- **Domain Reference:** Investment Management - https://bian.org/servicelandscape-12-0-0/object_25.html?object=131120

### BIAN Domain Description
Investment Portfolio Planning koordinuje stanovení principů řízení zákaznického investičního portfolia, včetně definice risk appetite a cílového profilu portfolia. Zajišťuje soulad s investičními cíli klienta a regulatorními požadavky pro investiční služby.

## Use Case Details

### Základní informace
- **Use Case ID:** UC-018
- **Name:** Výběr varianty "Cílová částka - známý měsíční vklad"
- **BRQ Process:** BRQ02.04 - Výběr varianty "Cílová částka - známý měsíční vklad"
- **Typ procesu:** Interactive Configuration Process

### Systems
- **CD 2.0 Mobile App:** UI pro zadávání parametrů strategie
- **Strategy Calculator Engine:** Future value calculations
- **Investment Rules Engine:** Validace minimálních a maximálních limitů
- **Risk Assessment Engine:** Rizikové hodnocení podle vkladu

### Actors
- **Klient:** Zadává měsíční vklad a cílovou částku
- **Calculation Engine:** Vypočítává potřebnou dobu investování
- **Validation System:** Kontroluje realnost a dosažitelnost parametrů

### Inputs
- **Monthly payment amount:** Výše pravidelného měsíčního vkladu
- **Target amount:** Požadovaná cílová částka
- **Initial deposit:** Volitelný počáteční jednorázový vklad
- **Risk tolerance:** Rizikový profil pro výběr investiční strategie

### Outputs
- **Required investment period:** Vypočítaná doba potřebná k dosažení cíle
- **Investment projection:** Projekce růstu investice v čase
- **Risk-return scenarios:** Optimistický, realistický, pesimistický scénář
- **Strategy validation:** Potvrzení realizovatelnosti strategie

### Data Requirements
- **Financial Mathematics:** Future value of annuity, compound interest calculations
- **Market Assumptions:** Expected returns, risk-adjusted performance projections
- **Product Constraints:** Minimum investment amounts, maximum periods, fund availability
- **Regulatory Limits:** Investment period restrictions, customer protection rules

## FIGMA Screens

### Primary screens
- **Screen Section 07:** Investment Strategy Planning
  - **Figma URL:** https://www.figma.com/design/8vk3PJZQcBxXaFgGIr1GjV/CD-2.0--iOS-?node-id=1872-20026
  - **Konkrétní screen:** "Vytvořte plán" configuration form
  - **Propojení:** Input fields pro měsíční vklad a cílovou částku

### Configuration Interface Elements
- **Monthly Payment Input:** Číselné pole pro měsíční vklad s validací
- **Target Amount Input:** Pole pro zadání cílové částky
- **Time Calculation Display:** Zobrazení vypočítané doby investování
- **Scenario Visualization:** Grafické znázornění různých scénářů

## Business Value & Metrics

### Key matrix
- **Calculation Accuracy:** Přesnost výpočtu potřebné doby investování
- **Parameter Validation Success:** Úspěšnost validace zadaných parametrů
- **Customer Acceptance Rate:** Přijetí vypočítané doby investování
- **Strategy Feasibility Score:** Míra realizovatelnosti navržené strategie

### Expected business benefits
- **Flexible Planning:** Flexibilní plánování podle dostupných prostředků
- **Realistic Timeline:** Realistické časové plánování investice
- **Customer Affordability:** Respektování finanční kapacity klienta
- **Goal Achievement Probability:** Vysoká pravděpodobnost dosažení cíle

### Acceptance criteria
- **AC-018.1:** Klient může zadat měsíční vklad od 500 Kč do 100.000 Kč
- **AC-018.2:** Cílová částka musí být minimálně 10.000 Kč
- **AC-018.3:** Systém vypočítá realistickou dobu investování
- **AC-018.4:** Maximální doba investování je omezena na 30 let
- **AC-018.5:** Zobrazí se tři scénáře vývoje investice
- **AC-018.6:** Varování při nerealistických kombinacích parametrů
- **AC-018.7:** Konfigurace může být uložena pro pozdější aktivaci

---
*Use Case created: 2025-07-22*  
*Project: AP-32 Clear Deal 2.0*  
*BIAN Framework: Investment Portfolio Planning*