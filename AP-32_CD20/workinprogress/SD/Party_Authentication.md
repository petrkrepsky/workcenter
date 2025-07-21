# Party_Authentication

## Popis domény
Customer/party authentication is a cross-channel/device capability that provides identity confirmation for customers accessing the bank through any interactive channel. The service may use a combination of one or more mechanisms to authenticate including issued tokens/devices, virtual mechanisms such as passwords and biometrics such as voice/face recognition. Different levels of authentication may be determined to support different types of access and there may be access permissions associated with the authentication mechanism used

## Manažerské shrnutí  
This service domain provides a customer identify authentication service covering all channels and devices to support access to the banks products and services

## Klíčové funkce
Capture and process authentication requests • Access issued device details to perform authentication • Support multiple device/additional tasks to raise authentication • Return access permissions associated with issued authentication devices

## Use Case List - Implementované případy užití:

### BRQ01: Digital Client Application Setup
- **Impacted process:** BRQ01 - Nastavení mobilní aplikace klienta
- **Systém:** CD 2.0, DK systém, SMS brána, SEZAM, mobilní zařízení
- **Role:** Stávající klient, Nový klient
- **Input:** Jméno, heslo, telefon, SMS kód, PIN, biometrické údaje
- **Output:** Autorizovaný přístup, uložený PIN, aktivované biometrické ověření
- **Typ:** Manual Process

#### Detailní kroky pokryté doménou:
- **BRQ01.02** - Přihlášení stávajícího klienta prostřednictvím SMS
- **BRQ01.03** - Potvrzení SMS kódu a autorizace přístupu
- **BRQ01.04** - Nastavení PIN aplikace pro stávajícího klienta
- **BRQ01.05** - Nastavení biometrického ověření (volitelné)
- **BRQ01.06** - Nový klient nastaví PIN a biometrii po vytvoření identity

### BRQ03: Remote Client Onboarding via Bank iD
- **Impacted process:** BRQ03 - Vzdálené zasmluvnění nového klienta
- **Systém:** CD 2.0, Bank iD služba, SEZAM, SMS brána
- **Role:** Nový klient
- **Input:** Požadavek na identifikaci, identifikační údaje, heslo, SMS kód
- **Output:** Ověřené identifikační údaje, vytvořená digitální identita, nastavené přístupové údaje
- **Typ:** Complex Manual Process

#### Detailní kroky pokryté doménou:
- **BRQ03.01** - Iniciace vzdálené identifikace přes Bank iD
- **BRQ03.02** - Provedení vzdálené identifikace v Bank iD
- **BRQ03.12** - Vytvoření hesla do SEZAM (username = CRM ID)
- **BRQ03.13** - Potvrzení hesla / Ověření držení telefonního čísla SMS

## BIAN Framework Reference

### Business Object Model
**Party Authentication BOM** - Obchodní objektový model definující strukturu procesů autentizace zákazníků a stran.
- Reference: https://bian.org/servicelandscape-12-0-0/views/view_37777.html

### Control Record  
**Party Authentication Control Record** - Řídící záznam pro správu autentizačních mechanizmů a přístupových oprávnění.
- Reference: https://bian.org/servicelandscape-12-0-0/views/view_38106.html

### Domain Reference
**Party** - Doména spravující ověřování identity stran přistupujících k bankovním službám přes různé kanály.
- Reference: https://bian.org/servicelandscape-12-0-0/object_25.html?object=131261