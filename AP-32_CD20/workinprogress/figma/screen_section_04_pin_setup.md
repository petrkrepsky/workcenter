# Screen Section 04: PIN Setup & Security

## Figma Reference
**URL:** https://www.figma.com/design/8vk3PJZQcBxXaFgGIr1GjV/CD-2.0--iOS-?node-id=1766-13810&t=DqlRwPfOVA0Blzzg-4  
**Node ID:** 1766:13810

## Screen Count
**Počet obrazovek:** 6 screens

## Screens Overview

### Screen 1: PIN Creation
- **Účel:** Vytvoření nového PIN kódu pro aplikaci
- **Implementuje BRQ:** BRQ01.04 (Nastavení PIN aplikace)
- **Typ:** Manual PIN entry

### Screen 2: PIN Confirmation
- **Účel:** Potvrzení zadaného PIN kódu
- **Implementuje BRQ:** BRQ01.04 (Potvrzení PIN)
- **Typ:** Manual PIN confirmation

### Screen 3: Security Instructions
- **Účel:** Instrukce pro bezpečné používání PIN
- **Implementuje BRQ:** BRQ01.04 (Security education)
- **Typ:** Information display

### Screen 4: Face ID Setup
- **Účel:** Nastavení biometrického ověření Face ID
- **Implementuje BRQ:** BRQ01.05 (Nastavení biometrického ověření)
- **Typ:** Biometric enrollment

### Screen 5: Face ID Success
- **Účel:** Potvrzení úspěšného nastavení Face ID
- **Implementuje BRQ:** BRQ01.05 (Dokončení biometrie)
- **Typ:** Success confirmation

### Screen 6: PIN Creation Alternative
- **Účel:** Alternativní PIN setup flow
- **Implementuje BRQ:** BRQ01.04 (Alternative PIN flow)
- **Typ:** Manual PIN entry

## Screen Details

### Screen 1: Zvolte si svůj PIN
**UI Components:**
- Title: "Zvolte si svůj PIN"
- Subtitle: "PIN slouží k rychlému a bezpečnému přihlášení k aplikaci"
- Numeric keypad (0-9)
- PIN dots indicator (6 positions)

### Screen 2: Potvrďte svůj PIN
**UI Components:**
- Title: "Potvrďte svůj PIN"
- Same numeric keypad
- PIN dots indicator (6 positions)
- Match validation

### Screen 3: Jak nastavit bezpečný PIN
**UI Components:**
- Security instructions text
- Guidelines for secure PIN creation
- Best practices display
- Continue button

### Screen 4: Ověření Face ID
**UI Components:**
- Face ID scanning frame
- "Podaří se" success message
- Biometric enrollment UI
- Skip/Continue options

### Screen 5: Face ID Success State
**UI Components:**
- Success checkmark
- "Podařilo se" confirmation
- "Jdm na aplikaci" button
- Completion state

### Screen 6: PIN Setup Alternative
**UI Components:**
- Different layout variant
- Same numeric keypad
- Alternative flow design

## Data Requirements

### PIN Management Data:
- **PIN Storage:**
  - Encrypted PIN hash
  - Device-specific salt
  - Security metadata

- **Biometric Data:**
  - Face ID enrollment data
  - Biometric template storage
  - Device biometric capabilities

### Security Data:
- **Device Information:**
  - Device unique identifier
  - Biometric support status
  - Security level capabilities

- **User Preferences:**
  - Authentication method preferences
  - Security settings
  - Accessibility options

## Technical Implementation

### Systémy involved:
- **CD 2.0 mobilní aplikace:** UI/UX and local storage
- **SEZAM:** PIN and biometric data storage
- **Mobilní zařízení:** Biometric hardware (Face ID/Touch ID)
- **iOS/Android Security:** Keychain/Keystore integration

### Security Measures:
- **PIN Encryption:** Industry-standard hashing (bcrypt/scrypt)
- **Biometric Storage:** Secure enclave utilization
- **Device Binding:** PIN tied to specific device
- **Attempts Limiting:** Lockout after failed attempts
- **Secure Input:** Protected keyboard input

## BRQ Requirements Mapping

### BRQ01.04: Nastavení PIN aplikace pro stávajícího klienta
- **Systém:** CD 2.0, SEZAM
- **Role:** Stávající klient
- **Input:** PIN kód (4-6 číslic)
- **Output:** Uložený PIN v SEZAM
- **Typ:** Manual

**Implementation:** Screens 1, 2, 6

### BRQ01.05: Nastavení biometrického ověření (volitelné)
- **Systém:** CD 2.0, mobilní zařízení
- **Role:** Stávající klient
- **Input:** Biometrické údaje (otisk, Face ID)
- **Output:** Aktivované biometrické ověření
- **Typ:** Manual

**Implementation:** Screens 4, 5

### BRQ01.06: Nový klient nastaví PIN a biometrii po vytvoření identity
- **Systém:** CD 2.0, SEZAM (post-onboarding)
- **Role:** Nový klient
- **Input:** PIN a biometrické údaje
- **Output:** Kompletně nastavená aplikace
- **Typ:** Manual (závislé na BRQ03)

**Implementation:** All screens (post-onboarding variant)

## UX/UI Design Notes
- **Clear visual feedback:** PIN dots show input progress
- **Consistent keypad:** Standard numeric layout
- **Security messaging:** Clear explanation of PIN purpose
- **Progressive flow:** Logical sequence from PIN to biometric
- **Accessibility support:** VoiceOver/TalkBack compatibility
- **Error handling:** Clear feedback on PIN mismatch

## Security Considerations
- **PIN Complexity:** 4-6 digit requirement
- **Biometric Fallback:** PIN as backup for biometric failure
- **Device Security:** Integration with device-level security
- **Data Protection:** No plaintext PIN storage
- **Attack Prevention:** Rate limiting and lockout mechanisms

## Process Flow
1. **PIN Creation:** User selects 4-6 digit PIN
2. **PIN Confirmation:** Re-entry for validation
3. **Security Education:** Best practices displayed
4. **Biometric Setup:** Optional Face ID/Touch ID enrollment
5. **Success Confirmation:** Setup completion feedback
6. **Application Ready:** Transition to main app

## Error Scenarios
- PIN mismatch during confirmation
- Biometric enrollment failure
- Device biometric not available
- PIN too simple/common
- Multiple failed PIN attempts

## Next Screen Connection
Po dokončení PIN/biometric setup:
- **Main Dashboard** (first-time setup complete)
- **Onboarding continuation** (for new clients)

---
*Analýza vytvořena: 2025-07-22*  
*Projekt: AP-32 Clear Deal 2.0*