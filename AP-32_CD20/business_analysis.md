# Clear Deal 2.0 - Comprehensive Business Analysis
*Projekt: AP-32 | Datum analýzy: 2025-07-21*

## Executive Summary

Clear Deal 2.0 představuje komplexní mobilní investiční platformu pro retailové klienty banky. Projekt zahrnuje digitalizaci investičních služeb, vzdálené zasmluvnění klientů přes Bank iD, automatizaci portfolio managementu a vytvoření mobile-first přístupu k investičním službám.

## 1. High-Level Komponenty

### 1.1 Strategie (Strategic Goals)
- **Digitalizace investičních služeb**: Přechod od tradičních pobočkových služeb k mobilní aplikaci
- **Vzdálené zasmluvnění**: Implementace Bank iD pro onboarding nových klientů
- **Automatizace portfolio managementu**: AI-driven investiční strategie s automatickým rebalancováním
- **Mobile-first přístup**: Nativní mobilní aplikace jako primární kanál

### 1.2 Lokace (Operational Locations)
- **Primární**: Mobilní aplikace (iOS/Android)
- **Sekundární**: Webové back-office systémy pro správu
- **Integrační body**: Pobočkové systémy pro legacy data

### 1.3 Capability (Core Business Capabilities)
- **Klientská autentifikace a správa identit**
- **Modelování a realizace investičních strategií**
- **Portfolio management a rebalancování**
- **Multi-kanálové platební zpracování**
- **Compliance a regulatorní reporting**
- **Správa dokumentů a digitální podpisy**

### 1.4 Processy (Main Impacted Processes)
1. **Onboarding procesů** - digitální zasmluvnění
2. **Investiční procesy** - strategie a portfolio management  
3. **Platební procesy** - převody a výběry prostředků
4. **Trading procesy** - nákup a prodej fondů
5. **Compliance procesy** - AML a investiční dotazníky
6. **Reporting procesy** - výpisy a konfirmace

### 1.5 Akteři (Key Stakeholders)
- **Noví klienti**: Uživatelé onboardující přes Bank iD
- **Stávající klienti**: Současní klienti banky rozšiřující služby
- **Banka**: Automatizované i manuální operační role
- **Externí systémy**: Bank iD, platební brány, fond managery

### 1.6 Aplikace (Impacted Systems)
- **CRM JTB**: Správa klientských vztahů
- **SEZAM**: Autentifikace a správa identit
- **TOPAS**: Portfolio management
- **TA**: Strategy management
- **WAC**: Webové aplikační komponenty
- **Bank iD**: Identifikační služba
- **OBOFT**: Zpracování převodů peněz
- **HD Dokumenty**: Správa dokumentů
- **Platební brána**: Zpracování karet
- **CD 2.0**: Mobilní aplikace

## 2. Standardizované Business Requirements

### 2.1 Client Onboarding Process Group

#### BRQ01: Nastavení mobilní aplikace klienta
**Standardizovaný název**: Digital Client Application Setup  
**Typ procesu**: Customer Onboarding

**Detailní kroky:**
- **BRQ01.01**: Stažení mobilní aplikace z app store
- **BRQ01.02**: Přihlášení stávajícího klienta (jméno, heslo DK, SMS potvrzení)
- **BRQ01.03**: Nastavení PIN aplikace pro stávajícího klienta
- **BRQ01.04**: Nastavení biometrického ověření (volitelné)
- **BRQ01.05**: Nový klient nastaví PIN a biometrii po vytvoření identity v SEZAM

**Systémy**: CD 2.0, DK, SEZAM  
**Role**: Klient (nový/stávající), Autentifikační služby

#### BRQ03: Vzdálené zasmluvnění nového klienta
**Standardizovaný název**: Remote Client Onboarding via Bank iD  
**Typ procesu**: Customer Onboarding

**Detailní kroky:**
- **BRQ03.01**: Vzdálená identifikace přes Bank iD službu
- **BRQ03.02**: Zobrazení a validace identifikačních údajů z Bank iD
- **BRQ03.03**: Editace/doplnění kontaktních údajů (telefon, email, adresa)
- **BRQ03.04**: Potvrzení identifikačních údajů klientem
- **BRQ03.05**: Kontrola jedinečnosti telefonu vůči SEZAM
- **BRQ03.06**: Ověření jedinečnosti RČ vůči CRM
- **BRQ03.07**: Založení klienta do CRM pod novou úroveň obsluhy
- **BRQ03.08**: Vyplnění AML a Investičního dotazníku
- **BRQ03.09**: Automatické AML a obchodní schválení v CRM
- **BRQ03.10**: Založení digitální identity v SEZAM
- **BRQ03.11**: Vytvoření hesla do SEZAM (username = CRM ID)
- **BRQ03.12**: Potvrzení hesla a ověření držení tel. čísla (SMS kód)
- **BRQ03.13**: Založení hlavičky smlouvy a generování v CRM (HD dokumenty)
- **BRQ03.14**: Zobrazení smlouvy a předsmluvních informací
- **BRQ03.15**: Digitální podpis smlouvy (autorizace CD 2.0), zaslání na email
- **BRQ03.16**: Propis uzavření smlouvy do CRM
- **BRQ03.17**: Založení klienta ve WAC

**Systémy**: Bank iD, CRM, SEZAM, HD Dokumenty, WAC, CD 2.0  
**Role**: Nový klient, Bank Operations, Compliance

#### BRQ04: Zasmluvnění stávajícího klienta
**Standardizovaný název**: Existing Client Investment Service Extension  
**Typ procesu**: Service Extension

**Detailní kroky:**
- **BRQ04.01**: Zobrazení identifikačních údajů z CRM
- **BRQ04.02**: Potvrzení identifikačních údajů klientem
- **BRQ04.03**: Založení hlavičky smlouvy a generování v CRM
- **BRQ04.04**: Zobrazení smlouvy a předsmluvních informací
- **BRQ04.05**: Digitální podpis smlouvy (autorizace CD 2.0)
- **BRQ04.06**: Propis uzavření smlouvy do CRM

**Systémy**: CRM, HD Dokumenty, CD 2.0  
**Role**: Stávající klient, Bank Operations

### 2.2 Investment Strategy Management Process Group

#### BRQ02: Vytvoření investiční strategie
**Standardizovaný název**: Investment Strategy Creation and Modeling  
**Typ procesu**: Investment Planning

**Detailní kroky:**
- **BRQ02.01**: Výběr typu strategie (Cílová částka/Renta/Bez cíle)
- **BRQ02.02**: Zadání vstupních parametrů od klienta
- **BRQ02.03**: Výpočet výnosů pomocí bankových modelů
- **BRQ02.04**: Modelování scénářů (optimistický/realistický/pesimistický)
- **BRQ02.05**: Vizualizace a prezentace strategie klientovi
- **BRQ02.06**: Uložení strategie pro pozdější aktivaci

**Varianty modelování:**
1. **Cílová částka - známá doba**: vstup (cílová částka, doba, jednorázový vklad) → výstup (pravidelný vklad)
2. **Cílová částka - známý vklad**: vstup (cílová částka, měsíční vklad, jednorázový vklad) → výstup (doba investování)
3. **Renta - známý vklad**: vstup (měsíční renta, pravidelný vklad, jednorázový vklad, doba) → výstup (doba čerpání)
4. **Renta - známá doba čerpání**: vstup (měsíční renta, doba čerpání, jednorázový vklad, doba) → výstup (pravidelný vklad)
5. **Bez cíle**: vstup (pravidelný vklad, jednorázový vklad) → výstup (cílová částka)

**Systémy**: Strategy Calculator, CD 2.0  
**Role**: Klient, Investment Advisory Engine

#### BRQ05: Aktivace investiční strategie
**Standardizovaný název**: Investment Strategy Activation and Portfolio Setup  
**Typ procesu**: Investment Execution

**Detailní kroky:**
- **BRQ05.01**: Zobrazení vytvořené strategie
- **BRQ05.02**: Validace strategie vůči Investičnímu dotazníku (pouze nový klient)
- **BRQ05.03**: Potvrzení strategie klientem
- **BRQ05.04**: Založení portfolia do TOPAS
- **BRQ05.05**: Založení strategie do TA

**Systémy**: TOPAS, TA, Investment Questionnaire System  
**Role**: Klient, Portfolio Management

#### BRQ13: Vytvoření dodatečné strategie
**Standardizovaný název**: Additional Investment Strategy Setup  
**Typ procesu**: Investment Planning

**Detailní kroky:**
- **BRQ13.01**: Modelování strategie (stejné možnosti jako první strategie)
- **BRQ13.02**: Validace strategie vůči Investičnímu dotazníku
- **BRQ13.03**: Potvrzení strategie klientem
- **BRQ13.04**: Vytvoření dodatečného portfolia v TOPAS
- **BRQ13.05**: Registrace strategie v TA systému

**Systémy**: TOPAS, TA, Investment Questionnaire System  
**Role**: Klient, Portfolio Management

#### BRQ14: Úprava parametrů strategie
**Standardizovaný název**: Investment Strategy Parameter Modification  
**Typ procesu**: Portfolio Management

**Detailní kroky:**
- **BRQ14.01**: Přehled současných parametrů strategie
- **BRQ14.02**: Zadání nových parametrů a validace
- **BRQ14.03**: Analýza dopadu na budoucí investice
- **BRQ14.04**: Aktualizace strategie v management systémech

**Systémy**: Strategy Management System  
**Role**: Klient, Portfolio Management

### 2.3 Payment Processing Process Group

#### BRQ06: Zpracování bankovních převodů
**Standardizovaný název**: Bank Account Transfer Processing  
**Typ procesu**: Payment Processing

**Detailní kroky:**
**Jednorázový převod:**
- **BRQ06.01**: Vygenerování platebních údajů (číslo účtu, variabilní symbol)
- **BRQ06.02**: Generování QR kódu pro snadnou platbu
- **BRQ06.03**: Provedení platby klientem z externího účtu
- **BRQ06.04**: Zpracování příchozí platby
- **BRQ06.05**: Alokace prostředků na peněžní složku portfolia

**Pravidelný převod:**
- **BRQ06.06**: Nastavení trvalého příkazu s QR kódem
- **BRQ06.07**: Definice výše, frekvence a data platby
- **BRQ06.08**: Automatické zpracování pravidelných plateb

**Systémy**: CD 2.0, Banking System, QR Generator  
**Role**: Klient, Bank Operations

#### BRQ07: Zpracování karetních plateb
**Standardizovaný název**: Payment Card Transfer Processing  
**Typ procesu**: Payment Processing

**Detailní kroky:**
**Jednorázová platba:**
- **BRQ07.01**: Iniciace žádosti o karetní platbu
- **BRQ07.02**: Zadání údajů karty nebo výběr digitální peněženky
- **BRQ07.03**: Zpracování přes platební bránu
- **BRQ07.04**: Autorizace v karetním centru
- **BRQ07.05**: Vytvoření technického debetu a jeho vyrovnání
- **BRQ07.06**: Alokace prostředků na peněžní složku portfolia

**Pravidelná platba:**
- **BRQ07.07**: Nastavení rekurentních karetních plateb
- **BRQ07.08**: Úprava parametrů pravidelných plateb
- **BRQ07.09**: Zrušení pravidelných plateb

**Systémy**: CD 2.0, Platební brána, Karetní centrum, Apple/Google Pay  
**Role**: Klient, Payment Processor, Bank Operations

#### BRQ10: Výběr investičních prostředků
**Standardizovaný název**: Investment Proceeds Withdrawal  
**Typ procesu**: Payment Processing

**Detailní kroky:**
- **BRQ10.01**: Podání žádosti o výběr
- **BRQ10.02**: Výběr částky a cílového účtu
- **BRQ10.03**: Zpracování interního převodu (pro JTB účty)
- **BRQ10.04**: Zpracování přes OBOFT (pro externí účty)
- **BRQ10.05**: Provedení převodu a potvrzení

**Systémy**: CD 2.0, OBOFT, JTB Banking System  
**Role**: Klient, Bank Operations, OBOFT

#### BRQ11: Reinvestování výnosů
**Standardizovaný název**: Investment Proceeds Reinvestment  
**Typ procesu**: Portfolio Management

**Detailní kroky:**
- **BRQ11.01**: Podání instrukce k reinvestování
- **BRQ11.02**: Specifikace částky
- **BRQ11.03**: Převod z výnosové na investiční složku

**Systémy**: CD 2.0, Portfolio Management System  
**Role**: Klient, Portfolio Management

### 2.4 Investment Execution Process Group

#### BRQ08: Automatizovaný nákup fondů
**Standardizovaný název**: Automated Investment Fund Purchase  
**Typ procesu**: Investment Execution

**Detailní kroky:**
- **BRQ08.01**: Denní monitoring peněžní složky
- **BRQ08.02**: Ověření minimálního investičního prahu
- **BRQ08.03**: Vytvoření proporcionálních objednávek fondů
- **BRQ08.04**: Provedení nákupu fondů
- **BRQ08.05**: Zpracování obchodního zúčtování

**Systémy**: Portfolio Management System, Fund Trading System  
**Role**: Automated Investment Engine

#### BRQ09: Prodej investičních fondů
**Standardizovaný název**: Investment Fund Redemption and Sale  
**Typ procesu**: Investment Execution

**Detailní kroky:**
- **BRQ09.01**: Příjem instrukce k prodeji (částečný/úplný/specifický fond)
- **BRQ09.02**: Výpočet redemptní objednávky
- **BRQ09.03**: Provedení redemption fondů
- **BRQ09.04**: Zpracování zúčtování
- **BRQ09.05**: Alokace výtěžku na výnosovou složku

**Systémy**: CD 2.0, Fund Management System  
**Role**: Klient, Fund Trading System

#### BRQ12: Zpracování korporátních akcí
**Standardizovaný název**: Corporate Actions and Dividend Processing  
**Typ procesu**: Portfolio Management

**Detailní kroky:**
- **BRQ12.01**: Příjem události korporátní akce
- **BRQ12.02**: Výpočet a zpracování dividend
- **BRQ12.03**: Alokace dividend na výnosovou složku

**Systémy**: Corporate Actions System, Portfolio Management System  
**Role**: Automated Corporate Actions Engine

### 2.5 Client Data Management Process Group

#### BRQ15: Správa autorizovaných účtů
**Standardizovaný název**: Authorized Account Management  
**Typ procesu**: Client Data Management

**Detailní kroky:**
- **BRQ15.01**: Zadání/úprava informací o účtu
- **BRQ15.02**: Validace a ověření účtu
- **BRQ15.03**: Uložení aktualizovaných informací

**Systémy**: Account Management System  
**Role**: Klient, Bank Operations

#### BRQ16: Aktualizace compliance dat
**Standardizovaný název**: Compliance and Suitability Data Update  
**Typ procesu**: Compliance Management

**Detailní kroky:**
- **BRQ16.01**: Přehled a aktualizace AML dotazníku
- **BRQ16.02**: Posouzení investiční vhodnosti
- **BRQ16.03**: Validace a uložení compliance dat

**Systémy**: AML System, Investment Questionnaire System  
**Role**: Klient, Compliance Operations

### 2.6 Reporting and Documentation Process Group

#### BRQ17: Investiční reporting a dokumentace
**Standardizovaný název**: Investment Reporting and Statement Generation  
**Typ procesu**: Reporting

**Detailní kroky:**
- **BRQ17.01**: Generování konfirmací obchodů
- **BRQ17.02**: Vytvoření měsíčních výpisů portfolia
- **BRQ17.03**: Roční reporting nákladů a pobídek
- **BRQ17.04**: Generování ročních výpisů dividend
- **BRQ17.05**: Doručení výpisů klientovi

**Systémy**: Reporting System, Statement Generation System  
**Role**: Automated Reporting Engine

#### BRQ18: Správa produktového katalogu
**Standardizovaný název**: Investment Product Catalog Management  
**Typ procesu**: Product Management

**Detailní kroky:**
- **BRQ18.01**: Monitoring dostupných strategií
- **BRQ18.02**: Správa dostupnosti fondů
- **BRQ18.03**: Aktualizace produktového katalogu

**Systémy**: Product Catalog System  
**Role**: Product Management

## 3. Integrační matice systémů

| Proces | CRM | SEZAM | TOPAS | TA | WAC | Bank iD | OBOFT | HD Dok | Platební brána | CD 2.0 |
|---------|-----|-------|-------|----|----- |---------|-------|--------|------------|--------|
| BRQ01   | -   | ✓     | -     | -  | -    | -       | -     | -      | -          | ✓      |
| BRQ02   | -   | -     | -     | -  | -    | -       | -     | -      | -          | ✓      |
| BRQ03   | ✓   | ✓     | -     | -  | ✓    | ✓       | -     | ✓      | -          | ✓      |
| BRQ04   | ✓   | -     | -     | -  | -    | -       | -     | ✓      | -          | ✓      |
| BRQ05   | -   | -     | ✓     | ✓  | -    | -       | -     | -      | -          | ✓      |
| BRQ06   | -   | -     | -     | -  | -    | -       | -     | -      | -          | ✓      |
| BRQ07   | -   | -     | -     | -  | -    | -       | -     | -      | ✓          | ✓      |
| BRQ08   | -   | -     | ✓     | -  | -    | -       | -     | -      | -          | -      |
| BRQ09   | -   | -     | ✓     | -  | -    | -       | -     | -      | -          | ✓      |
| BRQ10   | -   | -     | -     | -  | -    | -       | ✓     | -      | -          | ✓      |
| BRQ11   | -   | -     | -     | -  | -    | -       | -     | -      | -          | ✓      |
| BRQ12   | -   | -     | ✓     | -  | -    | -       | -     | -      | -          | -      |
| BRQ13   | -   | -     | ✓     | ✓  | -    | -       | -     | -      | -          | ✓      |
| BRQ14   | -   | -     | -     | -  | -    | -       | -     | -      | -          | ✓      |
| BRQ15   | -   | -     | -     | -  | -    | -       | -     | -      | -          | ✓      |
| BRQ16   | -   | -     | -     | -  | -    | -       | -     | -      | -          | ✓      |
| BRQ17   | -   | -     | -     | -  | -    | -       | -     | -      | -          | ✓      |
| BRQ18   | -   | -     | -     | -  | -    | -       | -     | -      | -          | ✓      |

## 4. Kategorie procesních toků

### 4.1 Klientské onboarding procesy
- BRQ01: Nastavení mobilní aplikace klienta
- BRQ03: Vzdálené zasmluvnění nového klienta  
- BRQ04: Zasmluvnění stávajícího klienta

### 4.2 Investiční management procesy
- BRQ02: Vytvoření investiční strategie
- BRQ05: Aktivace investiční strategie
- BRQ13: Vytvoření dodatečné strategie
- BRQ14: Úprava parametrů strategie

### 4.3 Platební a převodové procesy
- BRQ06: Zpracování bankovních převodů
- BRQ07: Zpracování karetních plateb  
- BRQ10: Výběr investičních prostředků
- BRQ11: Reinvestování výnosů

### 4.4 Investiční exekuční procesy
- BRQ08: Automatizovaný nákup fondů
- BRQ09: Prodej investičních fondů
- BRQ12: Zpracování korporátních akcí

### 4.5 Správa klientských dat a compliance
- BRQ15: Správa autorizovaných účtů
- BRQ16: Aktualizace compliance dat

### 4.6 Reporting a správa produktů
- BRQ17: Investiční reporting a dokumentace
- BRQ18: Správa produktového katalogu

## 5. Klíčová zjištění

### 5.1 Standardizace procesů
- Úspěšně standardizováno 18 business požadavků do jasných procesních názvů
- Identifikováno 6 hlavních procesních kategorií pokrývajících end-to-end investiční management
- Stanoveny jasné integrační vzory systémů

### 5.2 Architektura systémů
- **CD 2.0 mobilní aplikace** je primárním klientským rozhraním pro 16 z 18 procesů
- **CRM** a **SEZAM** jsou kritické pro klientské onboarding procesy
- **TOPAS** a **TA** jsou zásadní pro portfolio a správu strategií
- **Platební brána** je vyžadována pro karetní transakce

### 5.3 Distribuce rolí
- **Procesy iniciované klientem**: 14 z 18 procesů
- **Automatizované systémové procesy**: 4 procesy (BRQ08, BRQ12, BRQ17, BRQ18)
- **Smíšené klient-systémové procesy**: Všechny platební toky

### 5.4 Compliance integrační body
- AML validace integrovaná v onboarding procesech (BRQ03, BRQ16)
- Kontroly investiční vhodnosti ve strategických procesech (BRQ05, BRQ13)
- Regulatorní reporting automatizován v reportingových procesech (BRQ17)

## 6. Doporučení pro implementaci

1. **Orchestrace procesů**: Implementovat vrstvu orchestrace pro správu komplexních multi-systémových workflow
2. **Zpracování chyb**: Ustanovit komplexní mechanismy zpracování chyb a rollback pro platební procesy
3. **Audit trail**: Zajistit kompletní audit trails pro všechny klientské transakce
4. **Monitoring výkonu**: Implementovat real-time monitoring všech automatizovaných procesů
5. **Konzistence dat**: Ustanovit kontroly konzistence dat napříč CRM, SEZAM a TOPAS systémy

---

*Dokument vygenerován: 2025-07-21*  
*Zdroj: Analýza Clear Deal 2.0 Business Requirements*  
*Procesní analytik: Claude Agent*  
*JIRA ID: AP-32*