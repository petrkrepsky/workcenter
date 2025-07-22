# Screen Section 05: PIN Authentication

## Figma Reference
**URL:** https://www.figma.com/design/8vk3PJZQcBxXaFgGIr1GjV/CD-2.0--iOS-?node-id=72-5853&t=DqlRwPfOVA0Blzzg-4  
**Node ID:** 72:5853

## Screen Count
**Počet obrazovek:** 4 screens (3 main + 1 error dialog)

## Screens Overview

### Screen 1: PIN Entry (Normal State)
- **Účel:** Standardní zadání PIN pro přihlášení
- **Implementuje BRQ:** BRQ01.04 (PIN authentication)
- **Typ:** Manual PIN authentication

### Screen 2: PIN Entry (Active State)
- **Účel:** PIN entry během aktivního zadávání
- **Implementuje BRQ:** BRQ01.04 (PIN input feedback)
- **Typ:** Active input state

### Screen 3: PIN Entry (Biometric Available)
- **Účel:** PIN s možností biometrického ověření
- **Implementuje BRQ:** BRQ01.05 (Biometric authentication option)
- **Typ:** Multi-modal authentication

### Screen 4: Error Dialog - Zapomenutý PIN
- **Účel:** Pomoc při zapomenutém PIN
- **Implementuje BRQ:** BRQ01.04 (PIN recovery)
- **Typ:** Error recovery dialog

## Screen Details

### Screen 1: Standard PIN Entry
**UI Components:**
- J&T BANKA header with Face ID indicator
- PIN indicator dots (6 positions)
- Numeric keypad (0-9)
- Biometric button (Face ID icon)
- "Zapomenutý PIN" link

### Screen 2: Active PIN Entry
**UI Components:**
- Same layout as Screen 1
- Active input indicators
- Visual feedback during entry
- Progress indication

### Screen 3: Biometric Focus
**UI Components:**
- Emphasized biometric authentication
- Face ID scanning indicator
- PIN as fallback option
- Clear authentication choice

### Screen 4: PIN Recovery Dialog
**UI Components:**
- Modal dialog overlay
- "Zapomenutý PIN" title
- Recovery options:
  - "Obnovit/nastavit nový"
  - "Znovu zadat/opět PIN"
  - "Přihlásit se na nastolné nebo PIN"
- Action buttons

## Data Requirements

### Authentication Data:
- **Stored PIN:**
  - Encrypted PIN hash in SEZAM
  - Device-specific binding
  - Attempt counter

- **Biometric Data:**
  - Face ID/Touch ID availability
  - Biometric authentication result
  - Fallback preferences

### Session Data:
- **Authentication State:**
  - Current session status
  - Authentication method used
  - Security level achieved

- **Device Context:**
  - Device registration status
  - Previous successful authentications
  - Security policy compliance

## Technical Implementation

### Systémy involved:
- **CD 2.0 mobilní aplikace:** Authentication UI
- **SEZAM:** PIN validation and storage
- **iOS/Android Biometric APIs:** Face ID/Touch ID
- **CRM:** User account validation
- **Security Framework:** Session management

### Authentication Flow:
1. **Method Selection:** PIN or biometric choice
2. **Input Capture:** Secure PIN input or biometric scan
3. **Validation:** Backend PIN hash comparison
4. **Session Creation:** Authenticated session establishment
5. **Access Grant:** Application unlock

## BRQ Requirements Mapping

### BRQ01.04: Nastavení PIN aplikace pro stávajícího klienta
- **Systém:** CD 2.0, SEZAM
- **Role:** Stávající klient
- **Input:** PIN kód (4-6 číslic)
- **Output:** Uložený PIN v SEZAM
- **Typ:** Manual

**Implementation:** Screens 1, 2 (PIN validation)

### BRQ01.05: Nastavení biometrického ověření (volitelné)
- **Systém:** CD 2.0, mobilní zařízení
- **Role:** Stávající klient
- **Input:** Biometrické údaje (otisk, Face ID)
- **Output:** Aktivované biometrické ověření
- **Typ:** Manual

**Implementation:** Screen 3 (biometric authentication)

## UX/UI Design Notes
- **Dual authentication:** Both PIN and biometric options visible
- **Clear hierarchy:** Biometric as primary, PIN as fallback
- **Visual feedback:** Real-time input indication
- **Error recovery:** Clear path for PIN recovery
- **Security indicators:** Visual cues for secure operations
- **Accessibility:** Support for alternative input methods

## Security Features
- **Attempt Limiting:** Lock after failed attempts
- **Secure Input:** Protected keyboard entry
- **Biometric Integration:** Device-level security utilization
- **Session Timeout:** Automatic logout after inactivity
- **PIN Masking:** No plaintext PIN display

## Error Handling
- **Wrong PIN:** Clear error feedback with retry option
- **Biometric Failure:** Automatic fallback to PIN
- **Account Lockout:** Recovery through alternative methods
- **Network Issues:** Offline PIN validation where possible

## Recovery Options (Screen 4)
- **"Obnovit/nastavit nový":** Full PIN reset process
- **"Znovu zadat/opět PIN":** Simple retry
- **"Přihlásit se na nastolné nebo PIN":** Alternative authentication

## Process Flow
1. **Authentication Request:** App requests user authentication
2. **Method Choice:** User selects PIN or biometric
3. **Input/Scan:** PIN entry or biometric capture
4. **Validation:** Backend authentication check
5. **Result Processing:** Success/failure handling
6. **Session Start:** Authenticated access granted

## Next Screen Connection
Po úspěšné autentizaci:
- **Main Dashboard** (authenticated user)
- **Last visited screen** (session restoration)

## Failure Paths
- **PIN Recovery Flow** (forgot PIN)
- **Account Unlock Process** (after lockout)
- **Alternative Authentication** (customer service)

---
*Analýza vytvořena: 2025-07-22*  
*Projekt: AP-32 Clear Deal 2.0*