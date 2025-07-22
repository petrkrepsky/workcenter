# UC-023: Denní monitoring všech peněžních složek k investici

## BIAN Section

### Domain Information
**BIAN Domain:** Investment_Portfolio_Management  
**Domain Description:** Provádí investiční/rebalancovací optimalizaci investičního portfolia

### BIAN Framework References
- **Business Object Model:** Investment Portfolio Management BOM - https://bian.org/servicelandscape-12-0-0/views/view_33540.html
- **Control Record:** Investment Portfolio Management Control Record - https://bian.org/servicelandscape-12-0-0/views/view_30094.html
- **Domain Reference:** Investment Management - https://bian.org/servicelandscape-12-0-0/object_25.html?object=131120

### BIAN Domain Description
Investment Portfolio Management provádí investiční a rebalancovací optimalizaci investičního portfolia, včetně automatizovaného monitoringu peněžních prostředků dostupných pro investice a jejich automatické zpracování.

## Use Case Details

### Základní informace
- **Use Case ID:** UC-023
- **Name:** Denní monitoring všech peněžních složek k investici
- **BRQ Process:** BRQ08.01 - Denní monitoring všech peněžních složek k investici
- **Typ procesu:** Automated Daily Monitoring Process

### Systems
- **TOPAS:** Core portfolio management system pro monitoring balances
- **TA systém:** Transaction processing system pro cash positions
- **Automated Investment Engine:** Engine pro automated investment processing
- **WAC systém:** Core banking pro cash balance monitoring

### Actors
- **Investment Monitoring System:** Automatizovaný systém monitoringu
- **Portfolio Manager:** Systém správy portfolií
- **Cash Management System:** Systém správy peněžních pozic

### Inputs
- **Daily cash positions:** Denní peněžní pozice všech klientů
- **Portfolio configurations:** Konfigurace všech aktivních portfolií
- **Investment strategies:** Aktivní investiční strategie klientů
- **Market conditions:** Tržní podmínky pro investment timing

### Outputs
- **Investment-ready cash amounts:** Částky připravené k investování
- **Portfolio prioritization:** Prioritizace portfolií pro investování
- **Investment recommendations:** Doporučení pro automated investment
- **Monitoring reports:** Reporty z daily monitoring activity

### Data Requirements
- **Cash Position Data:** Real-time cash balances, pending transactions
- **Portfolio Data:** Active strategies, allocation targets, minimum thresholds
- **Market Data:** Trading schedules, cut-off times, market holidays
- **Customer Data:** Investment preferences, risk profiles, regulatory status

## FIGMA Screens

### Primary screens
- **Background Process:** Proces probíhá automaticky na pozadí
- **Administrative Dashboard:** Dashboard pro monitoring daily activities
- **Client Portfolio Views:** Zobrazení impact daily monitoring v client portfolios

### Monitoring Interface
- **Cash Position Overview:** Přehled peněžních pozic ready pro investment
- **Investment Queue:** Fronta portfolií připravených k investování
- **Processing Status:** Real-time status automated investment processing
- **Exception Reports:** Reporty exceptional situations requiring attention

## Business Value & Metrics

### Key matrix
- **Daily Processing Coverage:** Pokrytí daily monitoring všech portfolií
- **Investment Automation Rate:** Míra automatizace investment processing
- **Cash Utilization Efficiency:** Efektivita využití available cash
- **Processing Timeliness:** Včasnost daily monitoring execution

### Expected business benefits
- **Automated Investment Management:** Plně automatizovaná správa investic
- **Optimal Cash Utilization:** Optimální využití peněžních prostředků
- **Consistent Investment Timing:** Konzistentní timing investment execution
- **Reduced Manual Intervention:** Minimalizace manual intervention requirements

### Acceptance criteria
- **AC-023.1:** Daily monitoring runs automatically každý banking day
- **AC-023.2:** Všechny peněžní složky klientů jsou monitorovány
- **AC-023.3:** Systém identifikuje portfolia ready pro investment
- **AC-023.4:** Minimum thresholds pro investment jsou respektovány
- **AC-023.5:** Market holidays a cut-off times jsou zohledněny
- **AC-023.6:** Exception handling pro unusual cash positions
- **AC-023.7:** Comprehensive logging pro audit a compliance účely

---
*Use Case created: 2025-07-22*  
*Project: AP-32 Clear Deal 2.0*  
*BIAN Framework: Investment Portfolio Management*