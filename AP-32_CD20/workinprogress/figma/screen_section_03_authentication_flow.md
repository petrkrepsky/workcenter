# Screen Section 03: Authentication Flow

## Figma Reference
**URL:** https://www.figma.com/design/8vk3PJZQcBxXaFgGIr1GjV/CD-2.0--iOS-?node-id=353-8000&t=DqlRwPfOVA0Blzzg-4  
**Node ID:** 353:8000

## Screen Count
**Počet obrazovek:** 5 screens

## Screens Overview

### Screen 1: Login Form (Bottom)
- **Účel:** Zadání přihlašovacích údajů existujícího klienta
- **Implementuje BRQ:** BRQ01.02 (Přihlášení stávajícího klienta)
- **Typ:** Manual form input

### Screen 2: SMS Verification - Timer Active
- **Účel:** Zobrazení aktivního časovače pro SMS kód
- **Implementuje BRQ:** BRQ01.03 (Potvrzení SMS kódu)
- **Typ:** Automated timer with manual input ready

### Screen 3: SMS Verification - Code Input
- **Účel:** Zadání SMS ověřovacího kódu
- **Implementuje BRQ:** BRQ01.03 (Potvrzení SMS kódu a autorizace přístupu)
- **Typ:** Manual code input

### Screen 4: Login Form - Enhanced (Middle)
- **Účel:** Pokročilý login formulář s dodatečnými možnostmi
- **Implementuje BRQ:** BRQ01.02 (Extended login options)
- **Typ:** Manual form input

### Screen 5: Login Form - Error State (Bottom with Error)
- **Účel:** Zobrazení chybových stavů při přihlášení
- **Implementuje BRQ:** BRQ01.02 (Error handling)
- **Typ:** Error feedback display

## Screen Details

### Screen 1: Login Form
**UI Components:**
- J&T BANKA header
- Username/Login field
- Password field
- "PŘIHLÁSIT SE" button
- "Zapomenuté heslo" link

### Screen 2 & 3: SMS Verification
**UI Components:**
- "Ověření přihlášení" title
- Circular timer (00:23 countdown)
- "SMS kód" input field
- "Odeslat" button
- Status messages

### Screen 4: Enhanced Login Form
**UI Components:**
- Extended form layout
- Additional authentication options
- Enhanced security features

### Screen 5: Error State
**UI Components:**
- Error message display
- Detailed error description in tooltip
- Recovery options

## Data Requirements

### Authentication Data:
- **User Credentials:**
  - Username/Login ID
  - Password
  - SMS verification code

- **Security Data:**
  - Session tokens
  - Device identification
  - Biometric data (if enabled)

### System Data:
- **SMS Service:**
  - Phone number validation
  - SMS delivery confirmation
  - Code generation and validation

- **Authentication Backend:**
  - User credential verification
  - Session management
  - Security policy enforcement

## Technical Implementation

### Systémy involved:
- **CD 2.0 mobilní aplikace:** UI/UX layer
- **SEZAM:** Digital identity and authentication
- **SMS brána:** SMS code delivery
- **CRM:** Customer data validation
- **DK systém:** Existing client database

### Security Measures:
- **Input Validation:** Credential format checking
- **Rate Limiting:** Protection against brute force
- **Session Management:** Secure token handling
- **Error Masking:** Generic error messages for security

## BRQ Requirements Mapping

### BRQ01.02: Přihlášení stávajícího klienta prostřednictvím SMS
- **Systém:** CD 2.0, DK systém, SMS brána
- **Role:** Stávající klient
- **Input:** Jméno, heslo do DK, telefon
- **Output:** SMS kód pro potvrzení
- **Typ:** Semi-automated

**Implementation:** Screens 1, 4, 5

### BRQ01.03: Potvrzení SMS kódu a autorizace přístupu
- **Systém:** CD 2.0, SEZAM
- **Role:** Stávající klient
- **Input:** SMS kód
- **Output:** Autorizovaný přístup do aplikace
- **Typ:** Automated validation

**Implementation:** Screens 2, 3

## UX/UI Design Notes
- **Progressive disclosure:** Login → SMS verification flow
- **Timer feedback:** Clear countdown for SMS validity
- **Error handling:** Specific error states and recovery
- **Accessibility:** High contrast, clear typography
- **Security indicators:** Visual feedback for secure operations
- **Mobile optimization:** Touch-friendly input fields

## Process Flow
1. **Credential Input:** User enters login details
2. **Form Validation:** Client-side input validation
3. **Backend Authentication:** Credential verification
4. **SMS Trigger:** Automatic SMS code generation
5. **Timer Display:** 23-second countdown shown
6. **Code Input:** User enters received SMS code
7. **Code Validation:** Backend verification
8. **Access Grant:** Successful authentication

## Error Scenarios
- Invalid credentials
- SMS delivery failure
- Code expiration
- Network connectivity issues
- Too many failed attempts

## Next Screen Connection
Po úspěšném přihlášení aplikace přechází na:
- **PIN Setup screen** (nový zařízení)
- **Main Dashboard** (známé zařízení)

---
*Analýza vytvořena: 2025-07-22*  
*Projekt: AP-32 Clear Deal 2.0*