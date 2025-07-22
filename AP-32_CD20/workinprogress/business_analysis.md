# Business Analýza - Clear Deal 2.0
## OCR Analýza PDF Dokumentu

---

## 1. HIGH-LEVEL KOMPONENTY

### 1.1 STRATEGIE (Strategy)
**Hlavní strategické cíle:**
- Modelace investičních strategií s třemi variantami:
  - **Cílová částka** - klient ví, kdy chce dosáhnout cílové částky
  - **Renta** - klient ví, jak dlouho chce čerpat rentu 
  - **Bez cíle** - klient si chce odkládat bez konkrétního časového horizontu
- Předpokládaný výnos stanovený na základě zvolené strategie
- Zobrazení vývoje v grafu (realistický, pesimistický, optimistický scénář)
- Pravidelný a jednorázový vklad do strategie
- Reinvestování výnosů v rámci strategie

### 1.2 LOKACE (Locations)
**Provozní lokace a kanály:**
- **Mobilní aplikace** - hlavní kanál pro klienty
- **Platební brána** - pro platby kartou a ApplePay/GooglePay
- **Bank iD** - vzdálená identifikace nových klientů
- **Karetní centrum** - autorizace plateb
- **E-mail komunikace** - zasílání smluv a dokumentů

### 1.3 CAPABILITY (Schopnosti)
**Hlavní business schopnosti:**
- **Modelace strategie** s výpočtem parametrů investování
- **Vzdálená identifikace** klientů přes Bank iD
- **Automatické AML a obchodní schválení** v CRM
- **Investování peněžních prostředků** do fondů
- **Nákup a prodej fondů** dle strategie
- **Převod peněžních prostředků** z různých zdrojů
- **Reinvestování výnosů** podle pokynů klienta
- **Výběr peněžních prostředků** na autorizované účty
- **Korporátní akce** - správa dividend a výnosů

### 1.4 PROCESY (Processes)
**Hlavní ovlivněné procesy:**
- **Zasmluvnění klientů** (nový i stávající)
- **Instalace a nastavení aplikace**
- **Aktivace a vytvoření investičních strategií**  
- **Validace strategie** vůči investičnímu dotazníku
- **Založení portfolia** v systémech TOPAS a TA
- **Změna parametrů** investičních strategií
- **Správa korporátních akcí** a dividend
- **Generování výpisů** a konfirmací

### 1.5 AKTEŘI (Actors)
**Klíčoví stakeholdeři a role:**
- **Klient** - zadává pokyny, potvrzuje strategie, autorizuje platby
- **Nový klient** - prochází procesem vzdálené identifikace
- **Stávající klient** - má zjednodušený proces zasmluvnění
- **Banka** - připisuje prostředky, zakládá portfolia, realizuje investice
- **Platební brána** - zpracovává platby kartou
- **CRM systém** - správa klientských dat a schválení

### 1.6 APLIKACE (Applications)
**Ovlivněné systémy:**
- **CRM** - správa klientů a smluv
- **SEZAM** - digitální identita a autentizace
- **TOPAS** - správa portfolií
- **TA** - správa investičních strategií
- **WAC** - klientský systém
- **HD dokumenty** - generování smluv
- **OBOFT** - převody peněžních prostředků
- **Mobilní aplikace CD 2.0** - hlavní klientské rozhraní
- **Platební brána** - zpracování plateb

---

## 2. BUSINESS REQUIREMENTS (BRQ)

### BRQ01: Instalace aplikace
**Oblast:** Aplikace  
**Popis:** Instalace mobilní aplikace, nastavení PIN kódu a biometrie  
**Klíčové kroky:**
- Stažení mobilní aplikace
- Přihlášení stávajícího klienta (SMS autorizace)
- Nastavení PIN aplikace a biometrie

### BRQ02: Vytvoření první strategie  
**Oblast:** Strategie  
**Popis:** Modelace investiční strategie s třemi variantami  
**Klíčové kroky:**
- Výběr typu strategie (cílová částka/renta/bez cíle)
- Zadání parametrů (částka, doba, vklady)
- Zobrazení vývojových scénářů v grafu
- Uložení strategie pro pozdější použití

### BRQ03: Zasmluvnění klienta - nový klient (Bank iD)
**Oblast:** Zasmluvnění klienta  
**Popis:** Vzdálená identifikace a zasmluvnění přes Bank iD  
**Klíčové kroky:**
- Vzdálená identifikace přes Bank iD
- Vyplnění a potvrzení údajů
- Vyplnění AML a investičního dotazníku
- Založení klienta v CRM, SEZAM, WAC
- Generování a podpis smlouvy

### BRQ04: Zasmluvnění stávajícího klienta
**Oblast:** Zasmluvnění klienta  
**Popis:** Zjednodušené zasmluvnění pro existující klienty  
**Klíčové kroky:**
- Zobrazení údajů z CRM
- Potvrzení identifikačních údajů
- Generování a podpis smlouvy

### BRQ05: Aktivace první strategie
**Oblast:** Strategie  
**Popis:** Aktivace vytvořené strategie po zasmluvnění  
**Klíčové kroky:**
- Zobrazení vytvořené strategie
- Validace vůči investičnímu dotazníku
- Potvrzení strategie klientem
- Založení portfolia v TOPAS a strategie v TA

### BRQ06: Převod peněžních prostředků - z účtu
**Oblast:** Převody peněžních prostředků  
**Popis:** Jednorázové a pravidelné převody z účtu klienta  
**Klíčové kroky:**
- Zobrazení platebních údajů/QR kód
- Zadání platebního příkazu klientem
- Připisování prostředků na peněžní složku portfolia

### BRQ07: Zaslání peněžních prostředků - platební kartou  
**Oblast:** Převody peněžních prostředků  
**Popis:** Platby kartou včetně ApplePay/GooglePay  
**Klíčové kroky:**
- Zadání údajů platební karty
- Autorizace v karetním centru
- Připisování na peněžní složku portfolia
- Správa pravidelných plateb (změna/zrušení)

### BRQ08: Nákup fondů
**Oblast:** Obchody s fondy  
**Popis:** Automatické investování prostředků dle strategie  
**Klíčové kroky:**
- Denní kontrola prostředků k investici
- Vytvoření objednávek dle poměru fondů ve strategii
- Vypořádání obchodů s fondy

### BRQ09: Prodej fondů  
**Oblast:** Obchody s fondy  
**Popis:** Prodej části/celého portfolia nebo konkrétních fondů  
**Klíčové kroky:**
- Pokyn klienta k prodeji (objem nebo vše)
- Zadání pokynů ke zpětnému odkupu
- Připisování výnosů na peněžní složku pro výnosy

### BRQ10: Výběr peněžních prostředků
**Oblast:** Převody peněžních prostředků  
**Popis:** Výběr prostředků na autorizované účty  
**Klíčové kroky:**
- Pokyn klienta k výběru (částka nebo vše)
- Výběr autorizovaného účtu
- Realizace převodu (JTB automaticky, mimo JTB přes OBOFT)

### BRQ11: Reinvestování peněžních prostředků v rámci strategie
**Oblast:** Převody peněžních prostředků  
**Popis:** Převod výnosů zpět k investicím  
**Klíčové kroky:**
- Pokyn klienta k reinvestování
- Převod z peněžní složky výnosů na složku k investicím

### BRQ12: Korporátní akce
**Oblast:** Korporátní akce  
**Popis:** Správa dividend a ostatních korporátních akcí  
**Klíčové kroky:**
- Automatické připisování dividend na peněžní složku výnosů
- Standardní zpracování korporátních akcí

### BRQ13: Vytvoření a aktivace další strategie
**Oblast:** Strategie  
**Popis:** Vytvoření dodatečných investičních strategií  
**Klíčové kroky:**
- Modelace další strategie (stejný proces jako BRQ02)
- Validace vůči investičnímu dotazníku
- Založení dalšího portfolia v systémech

### BRQ14: Změna parametrů investiční strategie
**Oblast:** Strategie  
**Popis:** Úprava parametrů existující strategie  
**Klíčové kroky:**
- Změna parametrů (neplatí pro už realizované investice)
- Zachování složení fondů ve strategii
- Modelace nových parametrů

### BRQ15: Zadání/změna autorizovaného účtu
**Oblast:** Klientské údaje  
**Popis:** Správa účtů pro výběry peněžních prostředků  

### BRQ16: Aktualizace AML a Investičního dotazníku  
**Oblast:** Klientské údaje  
**Popis:** Aktualizace klientských profilů a rizikových hodnocení  

### BRQ17: Výpisy a konfirmace
**Oblast:** Výpisy  
**Popis:** Generování potvrzení a výpisů  
**Obsahuje:**
- Konfirmace jednotlivých obchodů
- Měsíční výpis portfolia (stav, pohyby, vývoj)  
- Roční výpis nákladů a pobídek
- Roční výpis výnosů (dividend)

### BRQ18: Správa strategií a fondů dostupných ve strategiích
**Oblast:** Nabídka produktů  
**Popis:** Správa produktového katalogu investičních strategií  

---

## 3. PROCESNÍ KROKY

### 3.1 Proces Zasmluvnění (BRQ03/04)
1. **Identifikace klienta** (Bank iD pro nové / CRM pro stávající)
2. **Vyplnění/potvrzení údajů** (kontaktní a identifikační)
3. **AML a investiční dotazník** (pouze noví klienti)
4. **Založení v systémech** (CRM, SEZAM, WAC)
5. **Generování smlouvy** (HD dokumenty)
6. **Podpis smlouvy** (autorizace v aplikaci)
7. **Zaslání na e-mail** a propis do CRM

### 3.2 Proces Vytvoření Strategie (BRQ02/13)
1. **Výběr typu strategie** (cílová částka/renta/bez cíle)
2. **Zadání vstupních parametrů** od klienta
3. **Výpočet výstupních parametrů** bankou
4. **Zobrazení grafických scénářů** (3 varianty vývoje)
5. **Validace vůči investičnímu dotazníku**
6. **Potvrzení strategie** klientem
7. **Založení portfolia** (TOPAS) a strategie (TA)

### 3.3 Proces Plateb (BRQ06/07)
1. **Zobrazení platebních údajů** v aplikaci
2. **Generování QR kódu** (volitelně)
3. **Zadání platby** klientem (účet/karta)
4. **Autorizace platby** (SMS/karta/ApplePay)
5. **Připisování prostředků** na peněžní složku portfolia
6. **Automatické investování** při dostupnosti prostředků

### 3.4 Proces Investování (BRQ08)
1. **Denní kontrola** peněžní složky k investicím
2. **Ověření minimální částky** strategie
3. **Vytvoření objednávek** dle poměru fondů
4. **Vypořádání obchodů** standardně
5. **Aktualizace portfolia** v systémech

### 3.5 Proces Prodeje (BRQ09)
1. **Pokyn klienta** k prodeji (objem/vše/konkrétní fond)
2. **Výpočet poměru fondů** na portfoliu
3. **Zadání pokynů** ke zpětnému odkupu
4. **Vypořádání prodejů** standardně  
5. **Připisování výnosů** na peněžní složku pro výnosy

---

## 4. MAPOVÁNÍ NA BIAN FRAMEWORK

### 4.1 Service Domains
- **Customer Agreement** - BRQ03, BRQ04 (Zasmluvnění)
- **Product Portfolio** - BRQ02, BRQ05, BRQ13, BRQ14 (Strategie)
- **Payment Execution** - BRQ06, BRQ07 (Převody)
- **Investment Portfolio Management** - BRQ08, BRQ09, BRQ11 (Obchody s fondy)
- **Customer Relationship Management** - BRQ15, BRQ16 (Klientské údaje)
- **Document Services** - BRQ17 (Výpisy)

### 4.2 Business Objects
- **Investment Strategy** - investiční strategie s parametry
- **Portfolio** - klientské portfolio s fondy
- **Payment Instruction** - platební pokyny
- **Customer Profile** - klientský profil s AML
- **Fund Transaction** - transakce s fondy

### 4.3 Control Records
- **Strategy Management** - správa strategií
- **Portfolio Monitoring** - sledování portfolií
- **Payment Processing** - zpracování plateb
- **Compliance Checking** - kontroly AML/MiFID

---

## 5. ZÁVĚR ANALÝZY

Dokument obsahuje kompletní business požadavky pro finanční technologický projekt **Clear Deal 2.0**, který představuje komplexní řešení pro online investování. Systém pokrývá celý životní cyklus od registrace klienta přes vytvoření investičních strategií až po správu portfolií a výběr prostředků.

**Klíčové charakteristiky:**
- **18 Business Requirements** pokrývajících všechny aspekty služby
- **Mobilní aplikace** jako hlavní klientský kanál
- **Automatizované procesy** pro investování a správu portfolií
- **Integrace s existujícími bankovními systémy** (CRM, SEZAM, TOPAS)
- **Compliance** s AML a MiFID požadavky
- **Flexibilní investiční strategie** pro různé typy klientů

Analýza poskytuje strukturovaný základ pro implementaci podle BIAN frameworku s jasným mapováním na Service Domains a Business Objects.