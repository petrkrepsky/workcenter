# Screen Section 02: Login Entry Point

## Figma Reference
**URL:** https://www.figma.com/design/8vk3PJZQcBxXaFgGIr1GjV/CD-2.0--iOS-?node-id=1885-18661&t=DqlRwPfOVA0Blzzg-4  
**Node ID:** 1885:18661

## Screen Count
**Počet obrazovek:** 1 screen

## Screen Overview

### Screen 1: Login Entry Screen
- **Účel:** Vstupní bod pro přihlášení existujících i nových klientů
- **Implementuje BRQ:** BRQ01.02 (Přihlášení stávajícího klienta), BRQ03.01 (Iniciace vzdálené identifikace)
- **Typ:** Manual user interaction

## Screen Details

### UI Components:
- **Header:** J&T Kayro branding
- **Background:** Colorful gradient (orange/blue)
- **Buttons:**
  - "Přihlásit J&T Banku" (bílé tlačítko) - pro stávající klienty
  - "Chci J&T Banku" (tmavé tlačítko) - pro nové klienty

## Data Requirements

### Authentication Flow Data:
- **Existing Clients:**
  - Login credentials verification
  - SMS authentication setup
  - Digital identity validation

- **New Clients:**
  - Bank iD integration readiness
  - Remote onboarding flow initialization

### UI/Static Data:
- Bank branding elements
- Button labels and styling
- Background gradient configurations

## Technical Implementation

### Systémy involved:
- **CD 2.0 mobilní aplikace:** UI presentation layer
- **SEZAM:** Authentication backend (existing clients)
- **Bank iD služba:** Remote identification service (new clients)
- **CRM:** Customer data validation

### Process Flow:
1. **Screen Display:** User sees login options
2. **User Selection:** 
   - Existing client → Authentication flow
   - New client → Bank iD onboarding flow

## BRQ Requirements Mapping

### BRQ01.02: Přihlášení stávajícího klienta prostřednictvím SMS
- **Systém:** CD 2.0, DK systém, SMS brána
- **Role:** Stávající klient
- **Input:** Jméno, heslo do DK, telefon
- **Output:** SMS kód pro potvrzení
- **Typ:** Semi-automated

### BRQ03.01: Iniciace vzdálené identifikace přes Bank iD
- **Systém:** CD 2.0, Bank iD služba
- **Role:** Nový klient
- **Input:** Požadavek na identifikaci
- **Output:** Přesměrování na Bank iD
- **Typ:** Manual

## UX/UI Design Notes
- **Clear call-to-action:** Rozdělení pro existující vs nové klienty
- **Brand consistency:** J&T Kayro logo prominence
- **Visual hierarchy:** Bílé tlačítko pro existing clients je více prominent
- **Accessibility:** Vysoký kontrast pro čitelnost tlačítek
- **Color psychology:** Warm colors suggest trust and reliability

## Navigation Flow
- **"Přihlásit J&T Banku" →** Existing client authentication screens
- **"Chci J&T Banku" →** New client Bank iD onboarding flow

## Error Handling Considerations
- Network connectivity issues
- Bank iD service unavailability
- User session timeout scenarios

---
*Analýza vytvořena: 2025-07-22*  
*Projekt: AP-32 Clear Deal 2.0*