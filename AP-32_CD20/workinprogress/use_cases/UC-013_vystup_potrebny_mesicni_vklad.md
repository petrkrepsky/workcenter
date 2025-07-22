# UC-013: Výpočet potřebné výše pravidelného vkladu (Cílová částka)

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
- **Use Case ID:** UC-013
- **Name:** Výpočet potřebné výše pravidelného vkladu (Cílová částka)
- **BRQ Process:** BRQ02.03 - Výpočet potřebné výše pravidelného vkladu (Cílová částka)
- **Typ procesu:** Automated Calculation Process

### Systems
- **Mathematical Calculation Engine:** Advanced financial mathematics
- **Market Data Service:** Expected returns a volatility data
- **Risk Assessment Engine:** Risk-adjusted return calculations
- **Currency Conversion Service:** Multi-currency support

### Actors
- **Calculation Engine:** Automatický výpočetní systém
- **Market Data Provider:** Poskytovatel tržních dat
- **Risk Assessment System:** Hodnotitel rizik

### Inputs
- **Target amount:** Cílová částka z předchozího kroku
- **Investment period:** Doba investování v letech
- **Initial deposit:** Jednorázový počáteční vklad (pokud zadán)
- **Expected return rate:** Očekávaný výnos podle risk profilu
- **Fees and charges:** Poplatky správy a transakční náklady

### Outputs
- **Required monthly payment:** Vypočítaná výše měsíčního vkladu
- **Total investment amount:** Celková investovaná částka za období
- **Expected final value:** Očekávaná konečná hodnota investice
- **Net return:** Čistý výnos po odečtení všech poplatků

### Data Requirements
- **Financial Formulas:** Present value of annuity, compound interest calculations
- **Market Assumptions:** Historical returns, volatility, correlation data
- **Product Data:** Fund performance, management fees, entry/exit charges
- **Regulatory Data:** Tax implications, investment limits, compliance rules

## FIGMA Screens

### Primary screens
- **Screen Section 07:** Investment Strategy Planning
  - **Figma URL:** https://www.figma.com/design/8vk3PJZQcBxXaFgGIr1GjV/CD-2.0--iOS-?node-id=1872-20026
  - **Konkrétní screen:** Active configuration state s real-time výpočty
  - **Propojení:** Zobrazení vypočítané částky v prominentním poli

### Calculation Display Elements
- **Monthly Payment Display:** Výsledná měsíční částka výrazně zobrazená
- **Calculation Breakdown:** Rozklad výpočtu pro transparentnost
- **Scenario Comparison:** Porovnání optimistického/realistického/pesimistického scénáře
- **Adjustment Controls:** Možnost úpravy parametrů a okamžitý přepočet

## Business Value & Metrics

### Key matrix
- **Calculation Performance:** Rychlost a přesnost finančních výpočtů
- **Customer Acceptance Rate:** Přijetí vypočítané výše vkladu
- **Parameter Sensitivity:** Citlivost na změny vstupních parametrů
- **Mathematical Accuracy:** Přesnost složitých finančních kalkulací

### Expected business benefits
- **Transparent Financial Planning:** Transparentní finanční plánování
- **Realistic Goal Setting:** Realistické nastavení investičních cílů
- **Mathematical Precision:** Matematická přesnost výpočtů
- **Informed Investment Decisions:** Informované investiční rozhodování

### Acceptance criteria
- **AC-013.1:** Výpočet zohledňuje časovou hodnotu peněz (compound interest)
- **AC-013.2:** Zahrnuty jsou všechny relevantní poplatky a náklady
- **AC-013.3:** Výpočet probíhá v reálném čase při změnách parametrů
- **AC-013.4:** Zobrazí se breakdown výpočtu pro transparentnost
- **AC-013.5:** Systém kontroluje minimální a maximální limity vkladů
- **AC-013.6:** Výpočet respektuje vybraný rizikový profil investice
- **AC-013.7:** Výsledek je zobrazován se dvěma desetinnými místy

---
*Use Case created: 2025-07-22*  
*Project: AP-32 Clear Deal 2.0*  
*BIAN Framework: Investment Portfolio Planning*