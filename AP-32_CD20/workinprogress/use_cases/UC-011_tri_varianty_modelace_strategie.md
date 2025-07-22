# UC-011: Zobrazení tří variant modelace strategie

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
- **Use Case ID:** UC-011
- **Name:** Zobrazení tří variant modelace strategie
- **BRQ Process:** BRQ02.01 - Zobrazení tří variant modelace strategie
- **Typ procesu:** Interactive Manual Process

### Systems
- **CD 2.0 Mobile App:** Zobrazení variant strategií v UI
- **Strategy Calculator Engine:** Matematické výpočty pro varianty
- **Investment Rules Engine:** Validace investičních parametrů
- **Customer Profile Service:** Zákaznický profil pro personalizaci

### Actors
- **Klient:** Vybírá strategickou variantu podle svých cílů
- **Strategy Presentation System:** Zobrazuje varianty strategií
- **Investment Advisor (AI):** Doporučuje nejvhodnější variantu

### Inputs
- **Customer investment goals:** Investiční cíle a preference klienta
- **Available capital:** Dostupný kapitál pro investování
- **Time horizon preferences:** Preferovaný časový horizont
- **Risk tolerance:** Rizikový profil a tolerance klienta

### Outputs
- **Three strategy variants:** Cílová částka, Renta, Bez cíle
- **Initial parameters:** Základní parametry pro každou variantu
- **Variant comparison:** Srovnání výhod jednotlivých variant
- **Selection interface:** UI pro výběr preferované varianty

### Data Requirements
- **Strategy Templates:** Tři základní typy strategií s parametry
- **Customer Data:** Profil klienta, investiční zkušenosti, cíle
- **Market Data:** Základní tržní parametry pro výpočty
- **UI Content:** Popisy variant, nápovědy, vysvětlení

## FIGMA Screens

### Primary screens
- **Screen Section 07:** Investment Strategy Planning
  - **Figma URL:** https://www.figma.com/design/8vk3PJZQcBxXaFgGIr1GjV/CD-2.0--iOS-?node-id=1872-20026
  - **Konkrétní screen:** "Jaký je váš cíl?" - Strategy type selection
  - **Propojení:** Zobrazuje tři hlavní varianty strategií s vizuálními ikonami

- **Screen Section 06:** Main Dashboard (Entry Point)
  - **Figma URL:** https://www.figma.com/design/8vk3PJZQcBxXaFgGIr1GjV/CD-2.0--iOS-?node-id=59-2433
  - **Konkrétní screen:** Empty Portfolio State
  - **Propojení:** "Založte investiční strategii" CTA přechází na výběr variant

### Strategy Variant Details
- **Cílová částka:** Target amount-based investment strategy
- **Renta:** Retirement income-focused strategy
- **Bez cíle:** Open-ended wealth accumulation strategy

## Business Value & Metrics

### Key matrix
- **Variant Selection Distribution:** Rozložení výběru mezi třemi variantami
- **Time to Decision:** Doba rozhodování o výběru varianty
- **Customer Satisfaction:** Spokojenost s jasností variant
- **Conversion Rate:** Konverze z výběru do konfigurace

### Expected business benefits
- **Clear Investment Direction:** Jasné směřování investiční strategie
- **Personalized Approach:** Přístup šitý na míru podle cílů
- **Simplified Decision Making:** Zjednodušení komplexního rozhodování
- **Higher Engagement:** Vyšší zapojení díky jasným možnostem

### Acceptance criteria
- **AC-011.1:** Zobrazí se všechny tři varianty strategií současně
- **AC-011.2:** Každá varianta má jasný popis a vizuální reprezentaci
- **AC-011.3:** Klient může vybrat jednu variantu pro další konfiguraci
- **AC-011.4:** Výběr pokračuje na detailní parametrizaci zvolené varianty
- **AC-011.5:** Systém si zapamatuje vybranou variantu pro další kroky

---
*Use Case created: 2025-07-22*  
*Project: AP-32 Clear Deal 2.0*  
*BIAN Framework: Investment Portfolio Planning*