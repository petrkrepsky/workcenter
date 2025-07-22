# UC-016: Iniciace vzdálené identifikace přes Bank iD

## BIAN Section

### Domain Information
**BIAN Domain:** Party_Lifecycle_Management  
**Domain Description:** Poskytuje kompletní správu životního cyklu zákazníka od prvního kontaktu po ukončení vztahu s bankou

### BIAN Framework References
- **Business Object Model:** Party Lifecycle Management BOM - https://bian.org/servicelandscape-12-0-0/views/view_35622.html
- **Control Record:** Party Lifecycle Management Control Record - https://bian.org/servicelandscape-12-0-0/views/view_31142.html
- **Domain Reference:** Party - https://bian.org/servicelandscape-12-0-0/object_25.html?object=131261

### BIAN Domain Description
Party Lifecycle Management spravuje kompletní životní cyklus zákazníka, včetně onboardingu, relationship management, a customer exit procesů. Koordinuje všechny aspekty zákaznického vztahu během celé doby trvání partnerství s J&T Bankou.

## Use Case Details

### Základní informace
- **Use Case ID:** UC-016
- **Name:** Iniciace vzdálené identifikace přes Bank iD
- **BRQ Process:** BRQ03.01 - Iniciace vzdálené identifikace přes Bank iD
- **Typ procesu:** Manual Process with External Integration

### Systems
- **CD 2.0 Mobile App:** Uživatelské rozhraní pro iniciaci
- **Bank iD Service:** Externí služba pro vzdálenou identifikaci
- **Identity Management System:** Správa identity workflows
- **Session Management:** Sledování Bank iD sessions

### Actors
- **Nový klient:** Potenciální zákazník bez účtu v J&T Bance
- **Bank iD Operator:** Externí poskytovatel identifikační služby
- **Identity Manager:** Systém pro správu identifikačních procesů

### Inputs
- **Client request:** Požadavek klienta na vytvoření účtu
- **Personal consent:** Souhlas s použitím Bank iD služby
- **Device information:** Informace o mobilním zařízení
- **Session context:** Kontext současné aplikační relace

### Outputs
- **Bank iD session ID:** Identifikátor Bank iD session
- **Redirect URL:** URL pro přesměrování do Bank iD aplikace
- **Session token:** Token pro sledování procesu
- **Process status:** Stav identifikačního procesu

### Data Requirements
- **Session Data:** Bank iD session tracking, state management
- **Identity Data:** Client identification information from Bank iD
- **Integration Data:** API keys, service endpoints, configuration
- **Audit Data:** Process logs, compliance tracking, error handling

## FIGMA Screens

### Primary screens
- **Screen Section 02:** Login Entry Point
  - **Figma URL:** https://www.figma.com/design/8vk3PJZQcBxXaFgGIr1GjV/CD-2.0--iOS-?node-id=1885-18661
  - **Konkrétní screen:** "Chci J&T Banku" button
  - **Propojení:** Entry point pro nové klienty → Bank iD integration

### Bank iD Integration Screens
- **Bank iD Information:** Informace o Bank iD procesu
- **Consent Screen:** Souhlas s použitím externí služby
- **Redirect Preparation:** Příprava na přesměrování
- **Return Handling:** Zpracování návratu z Bank iD

## Business Value & Metrics

### Key matrix
- **Bank iD Success Rate:** Úspěšnost dokončení Bank iD identifikace
- **Time to Identification:** Průměrná doba identifikačního procesu
- **Drop-off Rate:** Míra opuštění procesu během Bank iD
- **Integration Reliability:** Spolehlivost integrace s Bank iD službou

### Expected business benefits
- **Regulatory Compliance:** Splnění požadavků na vzdálenou identifikaci
- **Customer Convenience:** Pohodlná identifikace bez návštěvy pobočky
- **Faster Onboarding:** Rychlejší proces založení účtu
- **Reduced Operational Costs:** Snížení nákladů na manuální identifikaci

### Acceptance criteria
- **AC-016.1:** Systém přesměruje na Bank iD aplikaci nebo webové rozhraní
- **AC-016.2:** Udržuje se kontext původní aplikace během Bank iD procesu
- **AC-016.3:** Po dokončení Bank iD se klient vrátí zpět do CD 2.0 aplikace
- **AC-016.4:** Systém obdrží ověřené identifikační údaje z Bank iD
- **AC-016.5:** V případě chyby je poskytnut alternativní postup
- **AC-016.6:** Proces je plně auditovatelný pro regulatorní účely
- **AC-016.7:** Timeout mechanismus pro neukončené Bank iD sessiony

---
*Use Case created: 2025-07-22*  
*Project: AP-32 Clear Deal 2.0*  
*BIAN Framework: Party Lifecycle Management*