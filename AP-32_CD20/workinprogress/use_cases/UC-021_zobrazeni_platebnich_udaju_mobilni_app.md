# UC-021: Zobrazení platebních údajů v mobilní aplikaci

## BIAN Section

### Domain Information
**BIAN Domain:** Payment_Execution  
**Domain Description:** Back-end zpracování pohybu peněžních prostředků

### BIAN Framework References
- **Business Object Model:** Payment Execution BOM - https://bian.org/servicelandscape-12-0-0/views/view_33094.html
- **Control Record:** Payment Execution Control Record - https://bian.org/servicelandscape-12-0-0/views/view_30038.html
- **Domain Reference:** Payment Processing - https://bian.org/servicelandscape-12-0-0/object_25.html?object=131235

### BIAN Domain Description
Payment Execution poskytuje back-end zpracování pohybu peněžních prostředků, včetně správy bankovních převodů, QR kódů a trvalých příkazů pro financování investičního portfolia v Clear Deal 2.0 platformě.

## Use Case Details

### Základní informace
- **Use Case ID:** UC-021
- **Name:** Zobrazení platebních údajů v mobilní aplikaci
- **BRQ Process:** BRQ06.01 - Zobrazení platebních údajů v mobilní aplikaci
- **Typ procesu:** Information Display Process

### Systems
- **CD 2.0 Mobile App:** UI pro zobrazení platebních údajů
- **WAC systém:** Core banking system pro account details
- **Payment Gateway:** Platební brána pro account information
- **QR Code Generator:** Generování QR kódů pro platby

### Actors
- **Klient:** Prohlíží si platební údaje pro vklad do portfolia
- **Payment Information System:** Poskytuje aktuální platební údaje
- **Account Management System:** Spravuje account details a IBAN

### Inputs
- **Customer portfolio ID:** Identifikátor zákaznického portfolia
- **Account configuration:** Konfigurace účtu pro příjem plateb
- **Payment preferences:** Platební preference klienta
- **Display language:** Jazyk pro zobrazení instrukcí

### Outputs
- **IBAN account number:** Číslo účtu pro bankovní převody
- **Variable symbol:** Variabilní symbol pro identifikaci platby
- **Payment instructions:** Instrukce pro provedení bankovního převodu
- **QR payment code:** QR kód s platebními údaji

### Data Requirements
- **Account Data:** IBAN numbers, account details, bank codes
- **Payment Metadata:** Variable symbols, specific symbols, payment references
- **Customer Data:** Portfolio identifiers, customer preferences
- **Display Data:** Formatted payment instructions, multilingual content

## FIGMA Screens

### Primary screens
- **Screen Section 06:** Main Dashboard
  - **Figma URL:** https://www.figma.com/design/8vk3PJZQcBxXaFgGIr1GjV/CD-2.0--iOS-?node-id=59-2433
  - **Konkrétní screen:** "Vložit peníze" nebo "Dobit portfolio" sekce
  - **Propojení:** Zobrazení platebních údajů pro bankovní převod

### Payment Information Display
- **Account Details Card:** IBAN, bank details, recipient information
- **Payment Reference:** Variable symbol and payment reference
- **QR Code Display:** Scannable QR code with payment data
- **Copy Actions:** One-tap copy funkcionalita pro account details

## Business Value & Metrics

### Key matrix
- **Payment Information Access:** Frekvence zobrazení platebních údajů
- **QR Code Usage:** Používání QR kódu pro platby
- **Copy Function Usage:** Využívání copy funkcionalit
- **Payment Completion Rate:** Úspěšnost dokončení plateb po zobrazení údajů

### Expected business benefits
- **Easy Portfolio Funding:** Snadné financování investičního portfolia
- **Multiple Payment Options:** Různé možnosti platby (bankovní převod, QR)
- **User Experience:** Intuitivní přístup k platebním informacím
- **Payment Accuracy:** Snížení chyb při zadávání platebních údajů

### Acceptance criteria
- **AC-021.1:** Zobrazí se kompletní platební údaje včetně IBAN
- **AC-021.2:** Variabilní symbol je jedinečný pro každé portfolio
- **AC-021.3:** QR kód obsahuje všechny potřebné platební informace
- **AC-021.4:** Copy-to-clipboard funkcionalita pro všechny údaje
- **AC-021.5:** Platební instrukce jsou v češtině a srozumitelné
- **AC-021.6:** Zobrazí se informace o době zpracování platby
- **AC-021.7:** Link na často kladené otázky o platbách

---
*Use Case created: 2025-07-22*  
*Project: AP-32 Clear Deal 2.0*  
*BIAN Framework: Payment Execution*