# UC-020: Zadání instrukce k prodeji části/celého portfolia

## BIAN Section

### Domain Information
**BIAN Domain:** Consumer_Investments  
**Domain Description:** Iniciované zákaznické aktivity v oblasti investic a obchodování s cennými papíry

### BIAN Framework References
- **Business Object Model:** Consumer Investments BOM - https://bian.org/servicelandscape-12-0-0/views/view_52659.html
- **Control Record:** Consumer Investments Control Record - https://bian.org/servicelandscape-12-0-0/views/view_38618.html
- **Domain Reference:** Investment Management - https://bian.org/servicelandscape-12-0-0/object_25.html?object=131120

### BIAN Domain Description
Consumer Investments spravuje zákaznické iniciované aktivity v oblasti investic a obchodování s cennými papíry. Koordinuje všechny aspekty consumer-driven investičních rozhodnutí v rámci Clear Deal 2.0 platformy.

## Use Case Details

### Základní informace
- **Use Case ID:** UC-020
- **Name:** Zadání instrukce k prodeji části/celého portfolia
- **BRQ Process:** BRQ09.01 - Zadání instrukce k prodeji části/celého portfolia
- **Typ procesu:** Customer-initiated Transaction Process

### Systems
- **CD 2.0 Mobile App:** UI pro zadání prodejní instrukce
- **TOPAS:** Portfolio management system pro zobrazení aktuálních pozic
- **Investment Management System:** Zpracování prodejních instrukcí
- **TA systém:** Transaction processing pro fond redemptions

### Actors
- **Klient:** Iniciuje prodej části nebo celého portfolia
- **Portfolio Manager:** Zpracovává prodejní instrukce
- **Investment Transaction System:** Automatizuje zpracování prodeje

### Inputs
- **Sale instruction type:** Částečný nebo úplný prodej portfolia
- **Sale amount:** Částka k prodeji (v Kč nebo %)
- **Portfolio positions:** Aktuální pozice v portfoliu
- **Customer authorization:** Autorizace klienta pro prodej

### Outputs
- **Processed sale instruction:** Zpracovaná prodejní instrukce
- **Portfolio rebalancing plan:** Plán rebalancování po prodeji
- **Transaction confirmations:** Potvrzení jednotlivých transakcí
- **Updated portfolio status:** Aktualizovaný stav portfolia

### Data Requirements
- **Portfolio Data:** Current holdings, values, allocation percentages
- **Market Data:** Current NAV prices, redemption conditions
- **Transaction Data:** Sale instructions, processing status, confirmations
- **Customer Data:** Authorization levels, transaction limits, preferences

## FIGMA Screens

### Primary screens
- **Screen Section 06:** Main Dashboard
  - **Figma URL:** https://www.figma.com/design/8vk3PJZQcBxXaFgGIr1GjV/CD-2.0--iOS-?node-id=59-2433
  - **Konkrétní screen:** Portfolio overview s možnostmi prodeje
  - **Propojení:** "Prodat" nebo "Vybrat prostředky" akce

### Portfolio Sale Interface
- **Sale Amount Selection:** Slider nebo input pro výběr částky k prodeji
- **Portfolio Breakdown:** Zobrazení aktuálních pozic před prodejem
- **Impact Preview:** Preview dopadu prodeje na portfolio
- **Confirmation Screen:** Finální potvrzení prodejní instrukce

## Business Value & Metrics

### Key matrix
- **Sale Instruction Success Rate:** Úspěšnost zpracování prodejních instrukcí
- **Portfolio Liquidation Speed:** Rychlost zpracování částečných/úplných prodejů
- **Customer Satisfaction:** Spokojenost s prodejním procesem
- **Transaction Execution Quality:** Kvalita provedení prodejních transakcí

### Expected business benefits
- **Liquidity Access:** Snadný přístup k likviditě z investic
- **Flexible Portfolio Management:** Flexibilní správa portfolia
- **Customer Control:** Plná kontrola nad investičními rozhodnutími
- **Transparent Process:** Transparentní proces prodeje a výběru

### Acceptance criteria
- **AC-020.1:** Klient může vybrat částečný nebo úplný prodej portfolia
- **AC-020.2:** Zobrazí se preview dopadu prodeje na portfolio složení
- **AC-020.3:** Systém kalkuluje poplatky za předčasný výběr
- **AC-020.4:** Proces vyžaduje silnou autentizaci klienta
- **AC-020.5:** Potvrzení transakce je odesláno na email a do app
- **AC-020.6:** Status zpracování je sledovatelný v real-time
- **AC-020.7:** Partial sale respektuje minimum fund holdings requirements

---
*Use Case created: 2025-07-22*  
*Project: AP-32 Clear Deal 2.0*  
*BIAN Framework: Consumer Investments*