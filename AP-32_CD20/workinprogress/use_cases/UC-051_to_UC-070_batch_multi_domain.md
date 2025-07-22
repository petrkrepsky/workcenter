# UC-051 to UC-070: Multi-Domain Batch Use Cases

## Party Authentication Domain (UC-051 to UC-057)

### UC-051: Potvrzení SMS kódu a autorizace přístupu

**BIAN Domain:** Party_Authentication  
**BRQ Process:** BRQ01.03 - Potvrzení SMS kódu a autorizace přístupu  
**Systems:** SMS Gateway, Authentication Service, Session Management  
**FIGMA Screens:** Screen Section 03: Authentication Flow - SMS verification screen  
**Key Acceptance:** SMS kód platný 5 minut, max 3 pokusy, secure session creation

### UC-052: Nastavení PIN aplikace pro stávajícího klienta

**BIAN Domain:** Party_Authentication  
**BRQ Process:** BRQ01.04 - Nastavení PIN aplikace pro stávajícího klienta  
**Systems:** PIN Management Service, SEZAM, Encryption Service  
**FIGMA Screens:** Screen Section 04: PIN Setup - PIN creation flow  
**Key Acceptance:** 4-6 digit PIN, secure storage, biometric alternative setup

### UC-053: Nastavení biometrického ověření (volitelné)

**BIAN Domain:** Party_Authentication  
**BRQ Process:** BRQ01.05 - Nastavení biometrického ověření (volitelné)  
**Systems:** iOS/Android Biometric APIs, Secure Enclave, SEZAM  
**FIGMA Screens:** Screen Section 04: PIN Setup - Face ID/Touch ID enrollment  
**Key Acceptance:** Face ID/Touch ID/Fingerprint support, secure enrollment, fallback to PIN

### UC-054: Nový klient nastaví PIN a biometrii po vytvoření identity

**BIAN Domain:** Party_Authentication  
**BRQ Process:** BRQ01.06 - Nový klient nastaví PIN a biometrii po vytvoření identity  
**Systems:** Identity Management, PIN Service, Biometric Enrollment  
**FIGMA Screens:** Onboarding flow post-Bank iD - Security setup screens  
**Key Acceptance:** Mandatory PIN setup, optional biometric, security education

### UC-055: Provedení vzdálené identifikace v Bank iD

**BIAN Domain:** Party_Authentication  
**BRQ Process:** BRQ03.02 - Provedení vzdálené identifikace v Bank iD  
**Systems:** Bank iD Service, Identity Verification, Document OCR  
**FIGMA Screens:** External Bank iD interface integration  
**Key Acceptance:** Government ID verification, facial recognition, document authenticity

### UC-056: Vytvoření hesla do SEZAM (username = CRM ID)

**BIAN Domain:** Party_Authentication  
**BRQ Process:** BRQ03.12 - Vytvoření hesla do SEZAM (username = CRM ID)  
**Systems:** SEZAM Identity System, Password Management, CRM Integration  
**FIGMA Screens:** Background process during onboarding  
**Key Acceptance:** Strong password generation, CRM ID as username, secure storage

### UC-057: Potvrzení hesla / Ověření držení telefonního čísla SMS

**BIAN Domain:** Party_Authentication  
**BRQ Process:** BRQ03.13 - Potvrzení hesla / Ověření držení telefonního čísla SMS  
**Systems:** SMS Gateway, SEZAM, Phone Verification Service  
**FIGMA Screens:** Phone verification screen in onboarding flow  
**Key Acceptance:** SMS verification, phone ownership confirmation, secure activation

## Party Lifecycle Management Domain (UC-058 to UC-065)

### UC-058: Kontrola jedinečnosti telefonu vůči SEZAM

**BIAN Domain:** Party_Lifecycle_Management  
**BRQ Process:** BRQ03.06 - Kontrola jedinečnosti telefonu vůči SEZAM  
**Systems:** SEZAM Database, Phone Verification Service, Duplicate Detection  
**FIGMA Screens:** Background validation during onboarding  
**Key Acceptance:** Unique phone requirement, duplicate prevention, clear error messaging

### UC-059: Ověření jedinečnosti RČ vůči CRM

**BIAN Domain:** Party_Lifecycle_Management  
**BRQ Process:** BRQ03.07 - Ověření jedinečnosti RČ vůči CRM  
**Systems:** CRM Database, Identity Validation Service, Duplicate Check Engine  
**FIGMA Screens:** Background process during Bank iD verification  
**Key Acceptance:** Unique personal ID number, existing customer detection, merge process

### UC-060: Založení klienta do CRM pod novou úroveň obsluhy

**BIAN Domain:** Party_Lifecycle_Management  
**BRQ Process:** BRQ03.08 - Založení klienta do CRM pod novou úroveň obsluhy  
**Systems:** CRM System, Customer Hierarchy Management, Service Level Assignment  
**FIGMA Screens:** Background CRM integration during onboarding  
**Key Acceptance:** Clear Deal service level assignment, CRM profile creation, hierarchy setup

### UC-061: Vyplnění AML a Investičního dotazníku

**BIAN Domain:** Party_Lifecycle_Management  
**BRQ Process:** BRQ03.09 - Vyplnění AML a Investičního dotazníku  
**Systems:** AML Assessment Engine, Investment Questionnaire System, Risk Profiling  
**FIGMA Screens:** Questionnaire screens in onboarding flow  
**Key Acceptance:** Comprehensive AML questionnaire, MiFID investment assessment, risk profiling

### UC-062: Automatické AML a obchodní schválení v CRM

**BIAN Domain:** Party_Lifecycle_Management  
**BRQ Process:** BRQ03.10 - Automatické AML a obchodní schválení v CRM  
**Systems:** AML Engine, Risk Assessment System, CRM Approval Workflow  
**FIGMA Screens:** Approval status indicators in onboarding  
**Key Acceptance:** Automated AML scoring, business approval rules, exception handling

### UC-063: Založení digitální identity v SEZAM

**BIAN Domain:** Party_Lifecycle_Management  
**BRQ Process:** BRQ03.11 - Založení digitální identity v SEZAM  
**Systems:** SEZAM Identity Platform, Digital Identity Management, Security Framework  
**FIGMA Screens:** Background identity creation process  
**Key Acceptance:** Complete digital identity profile, security credentials setup, integration confirmation

### UC-064: Založení klienta ve WAC

**BIAN Domain:** Party_Lifecycle_Management  
**BRQ Process:** BRQ03.20 - Založení klienta ve WAC  
**Systems:** WAC Core Banking System, Account Management, Customer Setup  
**FIGMA Screens:** Background process completion confirmation  
**Key Acceptance:** Core banking account setup, WAC integration, account activation

## Document Directory Domain (UC-065 to UC-070)

### UC-065: Zobrazení smlouvy a předsmluvních informací

**BIAN Domain:** Document_Directory  
**BRQ Process:** BRQ03.15 / BRQ04.05 - Zobrazení smlouvy a předsmluvních informací  
**Systems:** HD dokumenty, Document Viewer, Contract Management System  
**FIGMA Screens:** Contract review screen with document viewer  
**Key Acceptance:** PDF document display, zoom/scroll functionality, terms highlighting

### UC-066: Volitelné zaslání smlouvy na e-mail

**BIAN Domain:** Document_Directory  
**BRQ Process:** BRQ03.16 / BRQ04.06 - Volitelné zaslání smlouvy na e-mail  
**Systems:** Email Service, Document Delivery System, HD dokumenty  
**FIGMA Screens:** Email delivery option in contract review  
**Key Acceptance:** Optional email delivery, PDF attachment, delivery confirmation

### UC-067: Podpis smlouvy autorizací aplikací CD 2.0

**BIAN Domain:** Document_Directory  
**BRQ Process:** BRQ03.17 / BRQ04.07 - Podpis smlouvy autorizací aplikací CD 2.0  
**Systems:** Digital Signature Service, Authorization Engine, Contract Management  
**FIGMA Screens:** Digital signature screen with authorization flow  
**Key Acceptance:** Strong authentication required, digital signature validity, legal compliance

### UC-068: Zaslání podepsané smlouvy na e-mail

**BIAN Domain:** Document_Directory  
**BRQ Process:** BRQ03.18 / BRQ04.08 - Zaslání podepsané smlouvy na e-mail  
**Systems:** Email Service, Signed Document Management, Delivery Tracking  
**FIGMA Screens:** Confirmation of signed contract email delivery  
**Key Acceptance:** Automatic email delivery, signed PDF format, delivery confirmation

### UC-069: Vygenerování smlouvy v HD dokumentech

**BIAN Domain:** Document_Directory  
**BRQ Process:** BRQ04.04 - Vygenerování smlouvy v HD dokumentech  
**Systems:** HD dokumenty, Document Generation Engine, Template Management  
**FIGMA Screens:** Document generation progress indicator  
**Key Acceptance:** Template-based generation, customer data merge, PDF output

### UC-070: Propis uzavření smlouvy do CRM

**BIAN Domain:** Document_Directory  
**BRQ Process:** BRQ03.19 / BRQ04.09 - Propis uzavření smlouvy do CRM  
**Systems:** CRM Integration, Contract Status Management, Customer Records  
**FIGMA Screens:** Contract completion confirmation  
**Key Acceptance:** Automatic CRM update, contract status change, customer notification

---
*Batch Use Cases 051-070 created: 2025-07-22*  
*Project: AP-32 Clear Deal 2.0*  
*BIAN Framework: Multi-Domain Coverage*