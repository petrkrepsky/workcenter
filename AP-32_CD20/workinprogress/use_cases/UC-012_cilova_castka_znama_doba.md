# UC-012: Výběr varianty "Cílová částka - známá doba"

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
- **Use Case ID:** UC-012
- **Name:** Výběr varianty "Cílová částka - známá doba"
- **BRQ Process:** BRQ02.02 - Výběr varianty "Cílová částka - známá doba"
- **Typ procesu:** Interactive Configuration Process

### Systems
- **CD 2.0 Mobile App:** UI pro zadávání parametrů
- **Strategy Calculator Engine:** Present value calculations
- **Investment Rules Engine:** Validace parametrů a limitů
- **Market Data Service:** Očekávané výnosy pro výpočty

### Actors
- **Klient:** Zadává cílovou částku a časový horizont
- **Calculation Engine:** Vypočítává potřebný měsíční vklad
- **Validation System:** Kontroluje realnost zadaných parametrů

### Inputs
- **Target amount:** Cílová částka, kterou chce klient dosáhnout
- **Investment period:** Časový horizont v letech
- **Initial deposit:** Volitelný jednorázový počáteční vklad
- **Risk profile:** Rizikový profil pro výběr investiční strategie

### Outputs
- **Required monthly payment:** Vypočítaný potřebný měsíční vklad
- **Investment projection:** Projekce vývoje investice v čase
- **Risk-return scenarios:** Optimistický, realistický, pesimistický scénář
- **Strategy configuration:** Kompletní konfigurace strategie

### Data Requirements
- **Financial Mathematics:** Present value, compound interest formulas
- **Market Assumptions:** Expected returns, volatility estimates
- **Product Information:** Available funds, fees, minimum amounts
- **Customer Limits:** Maximum investment amounts, regulatory limits

## FIGMA Screens

### Primary screens
- **Screen Section 07:** Investment Strategy Planning
  - **Figma URL:** https://www.figma.com/design/8vk3PJZQcBxXaFgGIr1GjV/CD-2.0--iOS-?node-id=1872-20026
  - **Konkrétní screen:** "Vytvořte plán" configuration screen
  - **Propojení:** Formulář pro zadání cílové částky a doby investování

### Configuration Interface Elements
- **Target Amount Input:** Číselný input pro cílovou částku
- **Time Period Selector:** Slider nebo input pro roky investování
- **Initial Deposit Field:** Volitelný počáteční vklad
- **Real-time Calculation Display:** Okamžitý přepočet měsíčního vkladu

## Business Value & Metrics

### Key matrix
- **Calculation Accuracy:** Přesnost finančních výpočtů
- **Parameter Validation Rate:** Úspěšnost validace zadaných hodnot
- **Configuration Completion:** Dokončení konfigurace této varianty
- **Customer Understanding:** Pochopení výsledků výpočtů

### Expected business benefits
- **Goal-oriented Planning:** Jasný cíl pro investiční plánování
- **Realistic Expectations:** Realistické očekávání založené na matematice
- **Transparent Calculations:** Transparentní výpočty pro klienta
- **Informed Decision Making:** Rozhodování na základě dat

### Acceptance criteria
- **AC-012.1:** Klient může zadat cílovou částku minimálně 10.000 Kč
- **AC-012.2:** Lze vybrat časový horizont od 1 do 30 let
- **AC-012.3:** Systém vypočítá potřebný měsíční vklad v reálném čase
- **AC-012.4:** Zobrazí se tři scénáře vývoje (optimistický/realistický/pesimistický)
- **AC-012.5:** Konfigurace může být uložena pro pozdější aktivaci
- **AC-012.6:** Validace kontroluje minimum 500 Kč měsíční vklad

---
*Use Case created: 2025-07-22*  
*Project: AP-32 Clear Deal 2.0*  
*BIAN Framework: Investment Portfolio Planning*