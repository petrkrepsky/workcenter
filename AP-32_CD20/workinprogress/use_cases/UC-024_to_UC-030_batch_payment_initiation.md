# UC-024 to UC-030: Payment Initiation Domain - Batch Use Cases

## UC-024: Zadání požadavku na převod z platební karty

### BIAN Section
**BIAN Domain:** Payment_Initiation  
**BRQ Process:** BRQ07.01 - Zadání požadavku na převod z platební karty  
**Typ procesu:** Customer-initiated Card Payment Process

### Use Case Details
- **Systems:** CD 2.0 Mobile App, Card Processing Gateway, Payment Authorization System
- **Actors:** Klient, Card Payment System, Authorization Engine
- **Inputs:** Card payment request, amount, portfolio identification
- **Outputs:** Payment authorization request, transaction ID, processing confirmation

### FIGMA Screens
- **Screen Section 06:** Main Dashboard - "Vložit peníze" → "Platba kartou" option
- **Payment Card Interface:** Card input form with secure card data entry

### Acceptance Criteria
- **AC-024.1:** Support pro Visa, MasterCard, American Express cards
- **AC-024.2:** Secure card data entry with PCI DSS compliance
- **AC-024.3:** Real-time card validation a authorization
- **AC-024.4:** Integration s J&T Bank card processing systems

---

## UC-025: Zadání údajů platební karty

### BIAN Section
**BIAN Domain:** Payment_Initiation  
**BRQ Process:** BRQ07.02 - Zadání údajů platební karty  
**Typ procesu:** Secure Card Data Entry Process

### Use Case Details
- **Systems:** Secure Card Entry Interface, PCI-compliant Processing, Encryption Service
- **Actors:** Klient, Card Data Encryption System, Security Validation Service
- **Inputs:** Card number, expiry date, CVV, cardholder name
- **Outputs:** Encrypted card data, validation status, secure token

### FIGMA Screens
- **Card Entry Form:** Secure form s card number masking a real-time validation
- **Security Indicators:** Visual indicators pro secure connection a PCI compliance

### Acceptance Criteria
- **AC-025.1:** Card number masking during entry (****-****-****-1234)
- **AC-025.2:** Real-time card type detection a validation
- **AC-025.3:** CVV field s appropriate security measures
- **AC-025.4:** Card data encryption before transmission

---

## UC-026: Alternativně výběr ApplePay/GooglePay

### BIAN Section
**BIAN Domain:** Payment_Initiation  
**BRQ Process:** BRQ07.03 - Alternativně výběr ApplePay/GooglePay  
**Typ procesu:** Digital Wallet Integration Process

### Use Case Details
- **Systems:** Apple Pay SDK, Google Pay API, Digital Wallet Gateway
- **Actors:** Klient, Digital Wallet Provider, Payment Processing System
- **Inputs:** Digital wallet selection, biometric authorization, payment amount
- **Outputs:** Wallet payment token, authorization confirmation, transaction ID

### FIGMA Screens
- **Digital Wallet Options:** ApplePay a GooglePay buttons with native styling
- **Biometric Authorization:** TouchID/FaceID nebo Android biometric prompts

### Acceptance Criteria
- **AC-026.1:** Native ApplePay integration pro iOS devices
- **AC-026.2:** Native GooglePay integration pro Android devices
- **AC-026.3:** Biometric authorization required pro wallet payments
- **AC-026.4:** Seamless fallback na card entry if wallet unavailable

---

## UC-027: Autorizace platby klientem podle pravidel banky

### BIAN Section
**BIAN Domain:** Payment_Initiation  
**BRQ Process:** BRQ07.05 - Autorizace platby klientem podle pravidel banky  
**Typ procesu:** Payment Authorization Validation Process

### Use Case Details
- **Systems:** Authorization Engine, J&T Bank Rules Engine, Fraud Detection System
- **Actors:** Klient, Authorization System, Fraud Prevention Service
- **Inputs:** Payment authorization request, customer authentication, bank rules
- **Outputs:** Authorization decision, fraud score, transaction approval

### FIGMA Screens
- **Authorization Screen:** Confirmation screen s payment details a authorization button
- **Strong Authentication:** SMS nebo app-based authorization depending on amount

### Acceptance Criteria
- **AC-027.1:** Strong customer authentication pro payments >1000 Kč
- **AC-027.2:** Fraud detection screening před authorization
- **AC-027.3:** Bank-specific rules pro payment limits a restrictions
- **AC-027.4:** Real-time authorization decision with clear messaging

---

## UC-028: Zadání požadavku na pravidelnou platbu kartou

### BIAN Section
**BIAN Domain:** Payment_Initiation  
**BRQ Process:** BRQ07.08 - Zadání požadavku na pravidelnou platbu kartou  
**Typ procesu:** Recurring Payment Setup Process

### Use Case Details
- **Systems:** Recurring Payment Engine, Card Token Management, Schedule Management
- **Actors:** Klient, Recurring Payment System, Card Management Service
- **Inputs:** Recurring payment parameters, frequency, start date, card details
- **Outputs:** Recurring payment schedule, secure card token, confirmation

### FIGMA Screens
- **Recurring Payment Setup:** Form pro nastavení frequency, amounts, dates
- **Schedule Preview:** Calendar view of upcoming recurring payments

### Acceptance Criteria
- **AC-028.1:** Support pro monthly, quarterly, annual frequencies
- **AC-028.2:** Secure card tokenization pro recurring payments
- **AC-028.3:** Flexible scheduling s custom dates a amounts
- **AC-028.4:** Easy modification a cancellation of recurring payments

---

## UC-029: Autorizace první platby a souhlas s rekurencí

### BIAN Section
**BIAN Domain:** Payment_Initiation  
**BRQ Process:** BRQ07.10 - Autorizace první platby a souhlas s rekurencí  
**Typ procesu:** Initial Recurring Payment Authorization Process

### Use Case Details
- **Systems:** Authorization Engine, Recurring Payment Service, Consent Management
- **Actors:** Klient, Authorization System, Consent Management Service
- **Inputs:** First payment authorization, recurring consent, payment schedule
- **Outputs:** Initial payment confirmation, recurring authorization, consent record

### FIGMA Screens
- **Recurring Consent:** Clear consent screen s recurring payment terms
- **First Payment Authorization:** Authorization pro initial payment with recurring setup

### Acceptance Criteria
- **AC-029.1:** Clear disclosure of recurring payment terms
- **AC-029.2:** Explicit consent pro recurring payment authorization
- **AC-029.3:** Strong authentication pro initial recurring setup
- **AC-029.4:** Consent can be withdrawn at any time

---

## UC-030: Změna parametrů pravidelné platby

### BIAN Section
**BIAN Domain:** Payment_Initiation  
**BRQ Process:** BRQ07.12 - Změna parametrů pravidelné platby  
**Typ procesu:** Recurring Payment Modification Process

### Use Case Details
- **Systems:** Recurring Payment Management, Schedule Update Service, Authorization System
- **Actors:** Klient, Payment Schedule Manager, Authorization Service
- **Inputs:** Modified payment parameters, authorization, effective date
- **Outputs:** Updated payment schedule, confirmation, new authorization

### FIGMA Screens
- **Payment Modification:** Interface pro změnu amounts, dates, frequency
- **Change Preview:** Preview of changes before confirmation

### Acceptance Criteria
- **AC-030.1:** Možnost změny amount, frequency, nebo end date
- **AC-030.2:** Changes effective from next scheduled payment
- **AC-030.3:** Authorization required pro significant changes
- **AC-030.4:** Notification of changes via email a app notification

---
*Batch Use Cases created: 2025-07-22*  
*Project: AP-32 Clear Deal 2.0*  
*BIAN Framework: Payment Initiation Domain*