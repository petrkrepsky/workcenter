# UC-019: Výpočet potřebné doby investování (Cílová částka)

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
- **Use Case ID:** UC-019
- **Name:** Výpočet potřebné doby investování (Cílová částka)
- **BRQ Process:** BRQ02.05 - Výpočet potřebné doby investování (Cílová částka)
- **Typ procesu:** Automated Financial Calculation Process

### Systems
- **Mathematical Calculation Engine:** Pokročilé finanční matematické výpočty
- **Market Data Service:** Historická data a očekávané výnosy
- **Risk Assessment Engine:** Risk-adjusted return calculations
- **Validation Service:** Kontrola realizovatelnosti výsledků

### Actors
- **Calculation Engine:** Automatický výpočetní systém
- **Market Data Provider:** Poskytovatel tržních dat pro modelování
- **Risk Analyzer:** Systém pro rizikové hodnocení

### Inputs
- **Target amount:** Cílová částka z předchozího kroku
- **Monthly payment:** Pravidelný měsíční vklad
- **Initial deposit:** Jednorázový počáteční vklad (pokud zadán)
- **Expected return rate:** Očekávaný výnos podle risk profilu
- **Risk parameters:** Parametry rizika a volatility

### Outputs
- **Required investment period:** Vypočítaná doba v letech a měsících
- **Total investment sum:** Celková investovaná částka za období
- **Expected growth:** Očekávaný růst investice v čase
- **Timeline milestones:** Mezní body na časové ose

### Data Requirements
- **Financial Formulas:** Future value of annuity, logarithmic time calculations
- **Market Models:** Historical performance data, volatility models
- **Risk Models:** Risk-adjusted return expectations, scenario modeling
- **Validation Rules:** Maximum investment periods, feasibility checks

## FIGMA Screens

### Primary screens
- **Screen Section 07:** Investment Strategy Planning
  - **Figma URL:** https://www.figma.com/design/8vk3PJZQcBxXaFgGIr1GjV/CD-2.0--iOS-?node-id=1872-20026
  - **Konkrétní screen:** Real-time calculation results display
  - **Propojení:** Dynamické zobrazení vypočítané doby investování

### Calculation Display Elements
- **Time Result Display:** Prominentní zobrazení výsledné doby
- **Progress Timeline:** Vizualizace časové osy investice
- **Milestone Indicators:** Klíčové body na cestě k cíli
- **Sensitivity Analysis:** Ukázka citlivosti na změny parametrů

## Business Value & Metrics

### Key matrix
- **Calculation Performance:** Rychlost a přesnost časových výpočtů
- **Result Feasibility:** Realizovatelnost vypočítaných časových rámců
- **Customer Satisfaction:** Spokojenost s transparentností výpočtů
- **Planning Accuracy:** Přesnost dlouhodobého finančního plánování

### Expected business benefits
- **Timeline Clarity:** Jasný časový rámec pro dosažení cíle
- **Mathematical Precision:** Přesné matematické modelování
- **Realistic Expectations:** Realistická očekávání časového horizontu
- **Investment Confidence:** Důvěra v dlouhodobé investiční plánování

### Acceptance criteria
- **AC-019.1:** Výpočet zohledňuje složené úročení (compound interest)
- **AC-019.2:** Zahrnuty jsou všechny poplatky a náklady do kalkulace
- **AC-019.3:** Výsledek je zobrazován v letech a měsících
- **AC-019.4:** Systém varuje při extrémně dlouhých dobách (>30 let)
- **AC-019.5:** Výpočet se aktualizuje v reálném čase při změnách
- **AC-019.6:** Zobrazí se breakdown výpočtu pro transparentnost
- **AC-019.7:** Respektují se různé scénáře výnosnosti (optimistický/realistický/pesimistický)

---
*Use Case created: 2025-07-22*  
*Project: AP-32 Clear Deal 2.0*  
*BIAN Framework: Investment Portfolio Planning*