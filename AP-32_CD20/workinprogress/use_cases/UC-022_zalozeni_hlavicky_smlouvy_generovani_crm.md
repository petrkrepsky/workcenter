# UC-022: Založení hlavičky smlouvy a generování v CRM

## BIAN Section

### Domain Information
**BIAN Domain:** Customer_Agreement  
**Domain Description:** Správa master zákaznické smlouvy/právního kontraktu

### BIAN Framework References
- **Business Object Model:** Customer Agreement BOM - https://bian.org/servicelandscape-12-0-0/views/view_35540.html
- **Control Record:** Customer Agreement Control Record - https://bian.org/servicelandscape-12-0-0/views/view_31060.html
- **Domain Reference:** Agreement - https://bian.org/servicelandscape-12-0-0/object_25.html?object=130961

### BIAN Domain Description
Customer Agreement spravuje master zákaznickou smlouvu a právní kontrakty, včetně vytváření, údržby a správy všech smluvních vztahů mezi bankou a klientem v rámci investičních služeb Clear Deal 2.0.

## Use Case Details

### Základní informace
- **Use Case ID:** UC-022
- **Name:** Založení hlavičky smlouvy a generování v CRM
- **BRQ Process:** BRQ03.14 - Založení hlavičky smlouvy a generování v CRM
- **Typ procesu:** Automated Contract Generation Process

### Systems
- **CRM systém:** Master customer relationship management
- **HD dokumenty:** Document generation and management system
- **Contract Management System:** Správa smluvní dokumentace
- **Customer Profile Service:** Zákaznické profily a data

### Actors
- **Contract Generation System:** Automatické generování smluvní hlavičky
- **CRM Administrator:** Správa CRM kontraktů a template
- **Compliance Officer:** Kontrola souladu se smluvními požadavky

### Inputs
- **Customer onboarding data:** Kompletní onboarding data nového klienta
- **Identity verification results:** Výsledky Bank iD identifikace
- **Investment service requirements:** Požadavky na investiční služby
- **Regulatory compliance data:** Data pro regulatory compliance

### Outputs
- **Contract header ID:** Jedinečný identifikátor smluvní hlavičky
- **CRM contract record:** Záznam smlouvy v CRM systému
- **Contract template selection:** Výběr apropriate contract template
- **Document generation trigger:** Spuštění generování dokumentu

### Data Requirements
- **Customer Data:** Personal information, address, contact details
- **Contract Data:** Contract templates, terms, conditions, regulatory requirements
- **CRM Data:** Customer records, account structures, service configurations
- **Compliance Data:** AML status, investment suitability, regulatory approvals

## FIGMA Screens

### Primary screens
- **Background Process:** Proces probíhá na pozadí během onboarding flow
- **Status Indicators:** Progress indikátory během contract generation
- **Confirmation Screens:** Potvrzení úspěšného vytvoření contract header

### Contract Generation Flow
- **Contract Preparation:** Příprava contract data pro generování
- **Template Selection:** Automatický výběr appropriate contract template
- **Header Creation:** Vytvoření smluvní hlavičky v CRM
- **Generation Confirmation:** Potvrzení successful contract header creation

## Business Value & Metrics

### Key matrix
- **Contract Generation Success Rate:** Úspěšnost generování contract headers
- **Processing Time:** Doba zpracování contract header creation
- **Data Accuracy:** Přesnost dat v generated contract headers
- **Regulatory Compliance:** Compliance rate pro contract requirements

### Expected business benefits
- **Automated Contract Management:** Automatizovaná správa smluvní dokumentace
- **Regulatory Compliance:** Zajištění regulatory compliance pro contracts
- **Process Efficiency:** Efektivní zpracování contract generation
- **Data Consistency:** Konzistentní data napříč CRM a contract systems

### Acceptance criteria
- **AC-022.1:** Contract header je úspěšně vytvořen v CRM systému
- **AC-022.2:** Všechna customer data jsou správně mapována do contract
- **AC-022.3:** Appropriate contract template je automaticky vybrán
- **AC-022.4:** Unique contract ID je generován a zalogován
- **AC-022.5:** Process je plně auditovatelný pro compliance účely
- **AC-022.6:** Error handling pro failed contract generation attempts
- **AC-022.7:** Integration s HD dokumenty pro další document generation

---
*Use Case created: 2025-07-22*  
*Project: AP-32 Clear Deal 2.0*  
*BIAN Framework: Customer Agreement*