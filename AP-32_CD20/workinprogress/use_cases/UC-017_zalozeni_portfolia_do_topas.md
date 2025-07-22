# UC-017: Založení portfolia do TOPAS

## BIAN Section

### Domain Information
**BIAN Domain:** Investment_Portfolio_Management  
**Domain Description:** Provádí investiční/rebalancovací optimalizaci investičního portfolia

### BIAN Framework References
- **Business Object Model:** Investment Portfolio Management BOM - https://bian.org/servicelandscape-12-0-0/views/view_33540.html
- **Control Record:** Investment Portfolio Management Control Record - https://bian.org/servicelandscape-12-0-0/views/view_30094.html
- **Domain Reference:** Investment Management - https://bian.org/servicelandscape-12-0-0/object_25.html?object=131120

### BIAN Domain Description
Investment Portfolio Management provádí investiční a rebalancovací optimalizaci investičního portfolia, včetně správy alokace aktiv a implementace investičních strategií v souladu s definovanými principy portfolio planningu.

## Use Case Details

### Základní informace
- **Use Case ID:** UC-017
- **Name:** Založení portfolia do TOPAS
- **BRQ Process:** BRQ05.05 - Založení portfolia do TOPAS
- **Typ procesu:** Automated System Integration Process

### Systems
- **TOPAS:** Core portfolio management system J&T Banky
- **Investment Strategy Service:** Konfigurovaná investiční strategie
- **Customer Profile Service:** Zákaznický profil a preference
- **Integration Gateway:** Middleware pro komunikaci s TOPAS

### Actors
- **Investment Management System:** Automatizovaný systém pro správu portfolií
- **TOPAS Administrator:** Systémový správce TOPAS systému
- **Portfolio Manager:** Zodpovědný za portfolio setup

### Inputs
- **Activated investment strategy:** Aktivovaná a validovaná investiční strategie
- **Customer identification:** CRM ID a identifikační údaje klienta
- **Portfolio parameters:** Parametry portfolia (alokace, limity, preference)
- **Regulatory requirements:** Regulatorní požadavky pro portfolio setup

### Outputs
- **TOPAS portfolio ID:** Jedinečný identifikátor portfolia v TOPAS
- **Portfolio configuration:** Kompletní konfigurace portfolia
- **Account mappings:** Mapování na finanční účty
- **Activation confirmation:** Potvrzení úspěšného založení

### Data Requirements
- **Portfolio Data:** Strategy allocation, risk parameters, investment limits
- **Customer Data:** CRM integration data, regulatory status, preferences
- **System Data:** TOPAS configuration, account structures, reporting setup
- **Integration Data:** API mappings, error handling, transaction logging

## FIGMA Screens

### Primary screens
- **Screen Section 06:** Main Dashboard
  - **Figma URL:** https://www.figma.com/design/8vk3PJZQcBxXaFgGIr1GjV/CD-2.0--iOS-?node-id=59-2433
  - **Konkrétní screen:** Portfolio dashboard after strategy activation
  - **Propojení:** Zobrazení založeného portfolia s TOPAS integrací

### Background Process Indicators
- **Progress Indicators:** Indikátory průběhu zakládání portfolia
- **Status Updates:** Real-time statusy integration procesu
- **Error Notifications:** Notifikace v případě problémů s TOPAS

## Business Value & Metrics

### Key matrix
- **Portfolio Setup Success Rate:** Úspěšnost založení portfolia v TOPAS
- **Integration Processing Time:** Doba zpracování TOPAS integrace
- **Data Consistency Score:** Konzistence dat mezi systémy
- **System Availability:** Dostupnost TOPAS pro portfolio operace

### Expected business benefits
- **Automated Portfolio Management:** Automatizovaná správa investičních portfolií
- **Core System Integration:** Integrace s klíčovým bankovním systémem
- **Regulatory Compliance:** Splnění regulatorních požadavků na portfolio reporting
- **Operational Efficiency:** Efektivní zpracování portfoliových operací

### Acceptance criteria
- **AC-017.1:** Portfolio je úspěšně založeno v TOPAS systému
- **AC-017.2:** Všechny parametry strategie jsou správně mapovány
- **AC-017.3:** CRM ID je správně propojeno s TOPAS portfolio ID
- **AC-017.4:** Systém generuje jedinečný portfolio identifikátor
- **AC-017.5:** Konfigurace portfolia odpovídá aktivované strategii
- **AC-017.6:** V případě chyby je proces rollback zajištěn
- **AC-017.7:** Úspěšné založení je zalogováno pro audit účely

---
*Use Case created: 2025-07-22*  
*Project: AP-32 Clear Deal 2.0*  
*BIAN Framework: Investment Portfolio Management*