# Screen Section 01: App Launch & Initial Onboarding

## Figma Reference
**URL:** https://www.figma.com/design/8vk3PJZQcBxXaFgGIr1GjV/CD-2.0--iOS-?node-id=328-33726&t=TGVPeNPmJ0bDw4ql-4  
**Node ID:** 328:33726

## Screen Count
**Počet obrazovek:** 3 screens

## Screens Overview

### Screen 1: Splash Screen (Kayro branding)
- **Účel:** Brand introduction při spuštění aplikace
- **Implementuje BRQ:** BRQ01.01 (Stažení mobilní aplikace CD 2.0 z app store)
- **Typ:** Automated loading screen

### Screen 2: Loading Screen (K logo)
- **Účel:** Inicializace aplikace a načítání základních komponent
- **Implementuje BRQ:** BRQ01.01 (První spuštění po stažení)
- **Typ:** Automated loading with progress indicator

### Screen 3: Loading Screen Extended (K logo s časovačem)
- **Účel:** Extended loading pro komplexnější inicializaci
- **Implementuje BRQ:** BRQ01.01 (Příprava aplikace pro první použití)
- **Typ:** Automated loading

## Data Requirements

### Screen 1 - Splash Screen:
- **Statická data:**
  - Kayro logo a branding
  - Gradient background colors
  - "by JCT" text

### Screen 2 & 3 - Loading Screens:
- **Systémová data:**
  - Aplikační verze
  - Inicializační status
  - Loading progress (pro screen 3)
- **API připojení:**
  - Backend connectivity check
  - Basic configuration loading

## Technical Implementation

### Systémy involved:
- **CD 2.0 mobilní aplikace:** Primary container
- **App Store:** Source of download
- **Backend API:** Initial connectivity check

### Process Flow:
1. **App Launch:** User taps CD 2.0 icon
2. **Splash Display:** Kayro branding shown (2-3 seconds)
3. **Loading Phase 1:** Basic app initialization
4. **Loading Phase 2:** Extended loading with progress indicator
5. **Transition:** Move to main application flow

## BRQ Requirements Mapping

### BRQ01.01: Stažení mobilní aplikace CD 2.0 z app store
- **Systém:** App Store (iOS/Android)
- **Role:** Klient
- **Input:** Žádost o stažení aplikace
- **Output:** Nainstalovaná aplikace
- **Typ:** Manual

**Implementation:** 
- Splash screens potvrzují úspěšnou instalaci
- Inicializují základní aplikační komponenty
- Připravují prostředí pro authentication flow

## UX/UI Design Notes
- **Branding consistency:** Kayro logo prominent
- **Loading feedback:** Progress indicators where appropriate
- **Smooth transitions:** Between loading states
- **Dark theme:** Consistent with overall app design
- **Typography:** JCT branding visible

## Next Screen Connection
Po dokončení loading sekvence aplikace přechází na:
- **Authentication screens** (pokud není uživatel přihlášen)
- **Main dashboard** (pokud je uživatel již autentizován)

---
*Analýza vytvořena: 2025-07-22*  
*Projekt: AP-32 Clear Deal 2.0*