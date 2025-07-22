# UC-015: Přihlášení stávajícího klienta prostřednictvím SMS

## BIAN Section

### Domain Information
**BIAN Domain:** Party_Authentication  
**Domain Description:** Poskytuje ověření identity zákazníků přistupujících k bance prostřednictvím jakéhokoli interaktivního kanálu

### BIAN Framework References
- **Business Object Model:** Party Authentication BOM - https://bian.org/servicelandscape-12-0-0/views/view_37777.html
- **Control Record:** Party Authentication Control Record - https://bian.org/servicelandscape-12-0-0/views/view_38106.html
- **Domain Reference:** Party - https://bian.org/servicelandscape-12-0-0/object_25.html?object=131261

### BIAN Domain Description
Party Authentication poskytuje ověření identity zákazníků přistupujících k bance prostřednictvím jakéhokoli interaktivního kanálu. Zajišťuje bezpečnost a soulad s regulatorními požadavky pro autentizaci uživatelů v mobilní aplikaci Clear Deal 2.0.

## Use Case Details

### Základní informace
- **Use Case ID:** UC-015
- **Name:** Přihlášení stávajícího klienta prostřednictvím SMS
- **BRQ Process:** BRQ01.02 - Přihlášení stávajícího klienta prostřednictvím SMS
- **Typ procesu:** Semi-automated Authentication Process

### Systems
- **CD 2.0 Mobile App:** Přihlašovací interface
- **DK systém:** Databáze stávajících klientů J&T Banky
- **SMS Gateway:** Odesílání a validace SMS kódů
- **SEZAM:** Digitální identita a autentizační backend
- **CRM systém:** Validace zákaznických údajů

### Actors
- **Stávající klient J&T Banky:** Vlastník účtu se stávajícími přihlašovacími údaji
- **Authentication System:** Automatizovaný autentizační systém
- **SMS Service:** Služba pro odesílání a validaci SMS kódů

### Inputs
- **Login credentials:** Jméno (username) a heslo do DK systému
- **Phone number:** Registrované telefonní číslo klienta
- **Device information:** Informace o mobilním zařízení
- **Session context:** Kontext přihlašovací relace

### Outputs
- **SMS verification code:** 6-místný verifikační kód zaslaný na telefon
- **Authentication token:** Dočasný autentizační token
- **Session establishment:** Vytvoření bezpečné uživatelské relace
- **Access grant:** Povolení přístupu do mobilní aplikace

### Data Requirements
- **Customer Authentication Data:** DK credentials, phone numbers, customer IDs
- **SMS Data:** Verification codes, delivery timestamps, validation status
- **Session Data:** Authentication tokens, session duration, security context
- **Audit Data:** Login attempts, success/failure rates, security events

## FIGMA Screens

### Primary screens
- **Screen Section 02:** Login Entry Point
  - **Figma URL:** https://www.figma.com/design/8vk3PJZQcBxXaFgGIr1GjV/CD-2.0--iOS-?node-id=1885-18661
  - **Konkrétní screen:** "Přihlásit J&T Banku" button
  - **Propojení:** Entry point pro existing clients → přechod na login form

- **Screen Section 03:** Authentication Flow
  - **Figma URL:** https://www.figma.com/design/8vk3PJZQcBxXaFgGIr1GjV/CD-2.0--iOS-?node-id=353-8000
  - **Konkrétní screen:** Login Form s poli pro username/password
  - **Propojení:** Zadání přihlašovacích údajů → SMS verification

### Authentication Flow Screens
- **Login Form:** Input fields pro jméno a heslo
- **SMS Verification:** Číselný input pro SMS kód s timerem
- **Error States:** Chybové stavy pro neplatné údaje nebo expired kódy
- **Loading States:** Indikátory průběhu autentizace

## Business Value & Metrics

### Key matrix
- **Authentication Success Rate:** Úspěšnost SMS autentizace stávajících klientů
- **Time to Authentication:** Celková doba přihlašovacího procesu
- **SMS Delivery Rate:** Úspěšnost doručení SMS kódů
- **Security Incident Rate:** Počet bezpečnostních incidentů při přihlašování

### Expected business benefits
- **Secure Access:** Bezpečný přístup založený na dvou faktorech
- **Familiar Process:** Známý proces pro stávající klienty J&T Banky
- **Mobile-first Experience:** Optimalizovaný mobilní přihlašovací zážitek
- **Fraud Prevention:** Prevence podvodů pomocí SMS verifikace

### Acceptance criteria
- **AC-015.1:** Systém validuje přihlašovací údaje proti DK databázi
- **AC-015.2:** SMS kód je odeslán na registrované telefonní číslo do 30 sekund
- **AC-015.3:** SMS kód je platný po dobu 5 minut od odeslání
- **AC-015.4:** Maximálně 3 pokusy o zadání nesprávného SMS kódu
- **AC-015.5:** Po úspěšné autentizaci je vytvořena bezpečná relace
- **AC-015.6:** Systém loguje všechny autentizační pokusy pro audit
- **AC-015.7:** V případě problémů je k dispozici možnost kontaktu podpory

---
*Use Case created: 2025-07-22*  
*Project: AP-32 Clear Deal 2.0*  
*BIAN Framework: Party Authentication*