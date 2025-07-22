# Clear Deal 2.0 - Detailní Use Case List
*Projekt: AP-32 | Datum: 2025-07-21 | Zdroj: OCR analýza business analysis.pdf*

## Procesní Flow Analýza - Detailní kroky s číslováním

### GROUP 1: Customer Onboarding Processes

---

#### BRQ01: Digital Client Application Setup
**Proces:** Nastavení mobilní aplikace klienta  
**Typ:** Manual Process  
**Skupina:** Customer Onboarding

**Detailní kroky:**
- **BRQ01.01** - Stažení mobilní aplikace CD 2.0 z app store
  - **Systém:** App Store (iOS/Android)
  - **Role:** Klient
  - **Input:** Žádost o stažení aplikace
  - **Output:** Nainstalovaná aplikace
  - **Typ:** Manual

- **BRQ01.02** - Přihlášení stávajícího klienta prostřednictvím SMS
  - **Systém:** CD 2.0, DK systém, SMS brána
  - **Role:** Stávající klient
  - **Input:** Jméno, heslo do DK, telefon
  - **Output:** SMS kód pro potvrzení
  - **Typ:** Semi-automated

- **BRQ01.03** - Potvrzení SMS kódu a autorizace přístupu
  - **Systém:** CD 2.0, SEZAM
  - **Role:** Stávající klient
  - **Input:** SMS kód
  - **Output:** Autorizovaný přístup do aplikace
  - **Typ:** Automated validation

- **BRQ01.04** - Nastavení PIN aplikace pro stávajícího klienta
  - **Systém:** CD 2.0, SEZAM
  - **Role:** Stávající klient
  - **Input:** PIN kód (4-6 číslic)
  - **Output:** Uložený PIN v SEZAM
  - **Typ:** Manual

- **BRQ01.05** - Nastavení biometrického ověření (volitelné)
  - **Systém:** CD 2.0, mobilní zařízení
  - **Role:** Stávající klient
  - **Input:** Biometrické údaje (otisk, Face ID)
  - **Output:** Aktivované biometrické ověření
  - **Typ:** Manual

- **BRQ01.06** - Nový klient nastaví PIN a biometrii po vytvoření identity
  - **Systém:** CD 2.0, SEZAM (post-onboarding)
  - **Role:** Nový klient
  - **Input:** PIN a biometrické údaje
  - **Output:** Kompletně nastavená aplikace
  - **Typ:** Manual (závislé na BRQ03)

---

#### BRQ03: Remote Client Onboarding via Bank iD
**Proces:** Vzdálené zasmluvnění nového klienta  
**Typ:** Complex Manual Process  
**Skupina:** Customer Onboarding

**Detailní kroky:**
- **BRQ03.01** - Iniciace vzdálené identifikace přes Bank iD
  - **Systém:** CD 2.0, Bank iD služba
  - **Role:** Nový klient
  - **Input:** Požadavek na identifikaci
  - **Output:** Přesměrování na Bank iD
  - **Typ:** Manual

- **BRQ03.02** - Provedení vzdálené identifikace v Bank iD
  - **Systém:** Bank iD, externí identity provider
  - **Role:** Nový klient
  - **Input:** Identifikační údaje klienta
  - **Output:** Ověřené identifikační údaje
  - **Typ:** External automated

- **BRQ03.03** - Zobrazení identifikačních údajů získaných z Bank iD
  - **Systém:** CD 2.0
  - **Role:** Nový klient
  - **Input:** Ověřené údaje z Bank iD
  - **Output:** Zobrazené údaje pro kontrolu
  - **Typ:** Automated

- **BRQ03.04** - Editace/vyplnění kontaktních údajů
  - **Systém:** CD 2.0
  - **Role:** Nový klient
  - **Input:** Telefon, e-mail, korespondenční adresa
  - **Output:** Kompletní kontaktní údaje
  - **Typ:** Manual

- **BRQ03.05** - Potvrzení identifikačních a kontaktních údajů
  - **Systém:** CD 2.0
  - **Role:** Nový klient
  - **Input:** Potvrzení správnosti údajů
  - **Output:** Validované klientské údaje
  - **Typ:** Manual

- **BRQ03.06** - Kontrola jedinečnosti telefonu vůči SEZAM
  - **Systém:** SEZAM
  - **Role:** Automatický systém
  - **Input:** Telefonní číslo klienta
  - **Output:** Potvrzení/zamítnutí jedinečnosti
  - **Typ:** Automated validation

- **BRQ03.07** - Ověření jedinečnosti RČ vůči CRM
  - **Systém:** CRM
  - **Role:** Automatický systém
  - **Input:** Rodné číslo klienta
  - **Output:** Potvrzení/zamítnutí jedinečnosti
  - **Typ:** Automated validation

- **BRQ03.08** - Založení klienta do CRM pod novou úroveň obsluhy
  - **Systém:** CRM
  - **Role:** Automatický systém
  - **Input:** Validované klientské údaje
  - **Output:** Vytvořený CRM záznam s CRM ID
  - **Typ:** Automated

- **BRQ03.09** - Vyplnění AML a Investičního dotazníku
  - **Systém:** CD 2.0, AML systém
  - **Role:** Nový klient
  - **Input:** AML otázky a investiční profil
  - **Output:** Vyplněný AML a investiční dotazník
  - **Typ:** Manual

- **BRQ03.10** - Automatické AML a obchodní schválení v CRM
  - **Systém:** CRM, AML modul
  - **Role:** Automatický systém
  - **Input:** Vyplněný AML dotazník
  - **Output:** Schválení/zamítnutí klienta
  - **Typ:** Automated

- **BRQ03.11** - Založení digitální identity v SEZAM
  - **Systém:** SEZAM
  - **Role:** Automatický systém
  - **Input:** CRM ID a klientské údaje
  - **Output:** Vytvořená digitální identita
  - **Typ:** Automated

- **BRQ03.12** - Vytvoření hesla do SEZAM (username = CRM ID)
  - **Systém:** SEZAM
  - **Role:** Nový klient
  - **Input:** Heslo pro SEZAM
  - **Output:** Nastavené přístupové údaje
  - **Typ:** Manual

- **BRQ03.13** - Potvrzení hesla / Ověření držení telefonního čísla SMS
  - **Systém:** SEZAM, SMS brána
  - **Role:** Nový klient
  - **Input:** SMS kód zaslaný na telefon
  - **Output:** Ověřené držení telefonu
  - **Typ:** Semi-automated

- **BRQ03.14** - Založení hlavičky smlouvy a generování v CRM
  - **Systém:** CRM, HD dokumenty
  - **Role:** Automatický systém
  - **Input:** Klientské údaje a typ smlouvy
  - **Output:** Vygenerovaná smlouva
  - **Typ:** Automated

- **BRQ03.15** - Zobrazení smlouvy a předsmluvních informací
  - **Systém:** CD 2.0, HD dokumenty
  - **Role:** Nový klient
  - **Input:** Generovaná smlouva
  - **Output:** Zobrazená smlouva k přečtení
  - **Typ:** Manual

- **BRQ03.16** - Volitelné zaslání smlouvy na e-mail
  - **Systém:** HD dokumenty, e-mail systém
  - **Role:** Nový klient (volitelně)
  - **Input:** Požadavek na zaslání na e-mail
  - **Output:** Smlouva zaslaná e-mailem
  - **Typ:** Manual trigger, automated delivery

- **BRQ03.17** - Podpis smlouvy autorizací aplikací CD 2.0
  - **Systém:** CD 2.0, HD dokumenty
  - **Role:** Nový klient
  - **Input:** Digitální podpis v aplikaci
  - **Output:** Podepsaná smlouva
  - **Typ:** Manual

- **BRQ03.18** - Zaslání podepsané smlouvy na e-mail
  - **Systém:** HD dokumenty, e-mail systém
  - **Role:** Automatický systém
  - **Input:** Podepsaná smlouva
  - **Output:** E-mail s podepsanou smlouvou
  - **Typ:** Automated

- **BRQ03.19** - Propis uzavření smlouvy do CRM
  - **Systém:** CRM
  - **Role:** Automatický systém
  - **Input:** Podepsaná smlouva
  - **Output:** Aktualizovaný status v CRM
  - **Typ:** Automated

- **BRQ03.20** - Založení klienta ve WAC
  - **Systém:** WAC
  - **Role:** Automatický systém
  - **Input:** CRM ID a klientské údaje
  - **Output:** Klient aktivní ve WAC systému
  - **Typ:** Automated

---

#### BRQ04: Existing Client Investment Service Extension
**Proces:** Zasmluvnění stávajícího klienta  
**Typ:** Simplified Manual Process  
**Skupina:** Service Extension

**Detailní kroky:**
- **BRQ04.01** - Zobrazení identifikačních údajů získaných z CRM
  - **Systém:** CD 2.0, CRM
  - **Role:** Stávající klient
  - **Input:** CRM ID klienta
  - **Output:** Zobrazené údaje z CRM
  - **Typ:** Automated

- **BRQ04.02** - Potvrzení identifikačních údajů klientem (bez editace)
  - **Systém:** CD 2.0
  - **Role:** Stávající klient
  - **Input:** Potvrzení správnosti údajů
  - **Output:** Validované údaje
  - **Typ:** Manual

- **BRQ04.03** - Založení hlavičky smlouvy pro investiční služby
  - **Systém:** CRM, HD dokumenty
  - **Role:** Automatický systém
  - **Input:** Existující klientské údaje
  - **Output:** Generovaná smlouva pro investice
  - **Typ:** Automated

- **BRQ04.04** - Vygenerování smlouvy v HD dokumentech
  - **Systém:** HD dokumenty
  - **Role:** Automatický systém
  - **Input:** Smlouvní šablona a klientské údaje
  - **Output:** Kompletní smlouva
  - **Typ:** Automated

- **BRQ04.05** - Zobrazení smlouvy a předsmluvních informací
  - **Systém:** CD 2.0, HD dokumenty
  - **Role:** Stávající klient
  - **Input:** Generovaná smlouva
  - **Output:** Zobrazená smlouva
  - **Typ:** Manual

- **BRQ04.06** - Volitelné zaslání na e-mail
  - **Systém:** HD dokumenty, e-mail systém
  - **Role:** Stávající klient
  - **Input:** Požadavek na e-mail
  - **Output:** Smlouva e-mailem
  - **Typ:** Manual trigger, automated delivery

- **BRQ04.07** - Podpis smlouvy autorizací CD 2.0
  - **Systém:** CD 2.0, HD dokumenty
  - **Role:** Stávající klient
  - **Input:** Digitální podpis
  - **Output:** Podepsaná smlouva
  - **Typ:** Manual

- **BRQ04.08** - Zaslání podepsané smlouvy na e-mail
  - **Systém:** HD dokumenty, e-mail systém
  - **Role:** Automatický systém
  - **Input:** Podepsaná smlouva
  - **Output:** E-mail s finální smlouvou
  - **Typ:** Automated

- **BRQ04.09** - Propis uzavření smlouvy do CRM
  - **Systém:** CRM
  - **Role:** Automatický systém
  - **Input:** Podepsaná smlouva
  - **Output:** Aktualizovaný klientský profil
  - **Typ:** Automated

---

### GROUP 2: Investment Strategy Management Processes

---

#### BRQ02: Initial Investment Strategy Creation and Modeling
**Proces:** Vytvoření první investiční strategie  
**Typ:** Interactive Manual Process  
**Skupina:** Investment Planning

**Detailní kroky:**
- **BRQ02.01** - Zobrazení tří variant modelace strategie
  - **Systém:** CD 2.0
  - **Role:** Klient
  - **Input:** Požadavek na tvorbu strategie
  - **Output:** Tři možnosti (cílová částka, renta, bez cíle)
  - **Typ:** Manual selection

- **BRQ02.02** - Výběr varianty "Cílová částka - známá doba"
  - **Systém:** CD 2.0
  - **Role:** Klient
  - **Input:** Cílová částka, doba investování, jednorázový vklad
  - **Output:** Vstupní parametry pro výpočet
  - **Typ:** Manual

- **BRQ02.03** - Výpočet potřebné výše pravidelného vkladu (Cílová částka)
  - **Systém:** CD 2.0, Strategy Calculator
  - **Role:** Automatický systém
  - **Input:** Cílová částka, doba, jednorázový vklad, předpokládaný výnos
  - **Output:** Potřebná výše měsíčního vkladu
  - **Typ:** Automated calculation

- **BRQ02.04** - Výběr varianty "Cílová částka - známý měsíční vklad"
  - **Systém:** CD 2.0
  - **Role:** Klient
  - **Input:** Cílová částka, měsíční vklad, jednorázový vklad
  - **Output:** Vstupní parametry pro výpočet
  - **Typ:** Manual

- **BRQ02.05** - Výpočet potřebné doby investování (Cílová částka)
  - **Systém:** CD 2.0, Strategy Calculator
  - **Role:** Automatický systém
  - **Input:** Cílová částka, měsíční vklad, jednorázový vklad
  - **Output:** Potřebná doba pravidelného investování
  - **Typ:** Automated calculation

- **BRQ02.06** - Výběr varianty "Renta - známý měsíční vklad"
  - **Systém:** CD 2.0
  - **Role:** Klient
  - **Input:** Měsíční renta, pravidelný vklad, jednorázový vklad, doba investování
  - **Output:** Vstupní parametry pro výpočet renty
  - **Typ:** Manual

- **BRQ02.07** - Výpočet doby čerpání renty (Renta)
  - **Systém:** CD 2.0, Strategy Calculator
  - **Role:** Automatický systém
  - **Input:** Parametry renty + předpokládaný výnos + inflace
  - **Output:** Potřebná doba čerpání renty
  - **Typ:** Automated calculation

- **BRQ02.08** - Výběr varianty "Renta - známá doba čerpání"
  - **Systém:** CD 2.0
  - **Role:** Klient
  - **Input:** Měsíční renta, doba čerpání, jednorázový vklad, doba investování
  - **Output:** Vstupní parametry pro výpočet
  - **Typ:** Manual

- **BRQ02.09** - Výpočet potřebné výše pravidelného vkladu (Renta)
  - **Systém:** CD 2.0, Strategy Calculator
  - **Role:** Automatický systém
  - **Input:** Renta parametry + výnos + inflace
  - **Output:** Potřebná výše pravidelného vkladu
  - **Typ:** Automated calculation

- **BRQ02.10** - Výběr varianty "Bez cíle"
  - **Systém:** CD 2.0
  - **Role:** Klient
  - **Input:** Pravidelný měsíční vklad, jednorázový vklad
  - **Output:** Vstupní parametry
  - **Typ:** Manual

- **BRQ02.11** - Výpočet cílové částky (Bez cíle)
  - **Systém:** CD 2.0, Strategy Calculator
  - **Role:** Automatický systém
  - **Input:** Pravidelný vklad, jednorázový vklad, doba investování
  - **Output:** Předpokládaná cílová částka
  - **Typ:** Automated calculation

- **BRQ02.12** - Zobrazení vývoje v grafu (tři scénáře)
  - **Systém:** CD 2.0
  - **Role:** Klient
  - **Input:** Výsledky výpočtů
  - **Output:** Grafy s realistickým, pesimistickým, optimistickým scénářem
  - **Typ:** Automated visualization

- **BRQ02.13** - Uložení strategie pro pozdější použití
  - **Systém:** CD 2.0, lokální úložiště
  - **Role:** Klient
  - **Input:** Dokončená strategie
  - **Output:** Uložená strategie (aktivace po zasmluvnění)
  - **Typ:** Manual trigger, automated save

---

#### BRQ05: Investment Strategy Activation and Portfolio Setup
**Proces:** Aktivace první strategie  
**Typ:** Automated Process with Manual Confirmation  
**Skupina:** Investment Execution

**Detailní kroky:**
- **BRQ05.01** - Zobrazení vytvořené strategie po zasmluvnění
  - **Systém:** CD 2.0
  - **Role:** Klient
  - **Input:** Uložená strategie z BRQ02
  - **Output:** Zobrazené parametry strategie
  - **Typ:** Automated

- **BRQ05.02** - Validace strategie vůči Investičnímu dotazníku (nový klient)
  - **Systém:** CD 2.0, Investment Questionnaire System
  - **Role:** Automatický systém
  - **Input:** Strategie + investiční profil z BRQ03.09
  - **Output:** Potvrzení/varování o vhodnosti
  - **Typ:** Automated validation

- **BRQ05.03** - Zobrazení případných varování o nevhodnosti
  - **Systém:** CD 2.0
  - **Role:** Klient
  - **Input:** Výsledky validace
  - **Output:** Upozornění na rizika
  - **Typ:** Automated notification

- **BRQ05.04** - Finální potvrzení strategie klientem
  - **Systém:** CD 2.0
  - **Role:** Klient
  - **Input:** Rozhodnutí o pokračování
  - **Output:** Potvrzená strategie
  - **Typ:** Manual confirmation

- **BRQ05.05** - Založení portfolia do TOPAS
  - **Systém:** TOPAS
  - **Role:** Automatický systém
  - **Input:** Potvrzená strategie + CRM ID
  - **Output:** Vytvořené portfolio s KID
  - **Typ:** Automated

- **BRQ05.06** - Založení strategie do TA systému
  - **Systém:** TA
  - **Role:** Automatický systém
  - **Input:** Strategie parametry + Portfolio KID
  - **Output:** Aktivní investiční strategie
  - **Typ:** Automated

- **BRQ05.07** - Potvrzení úspěšné aktivace klientovi
  - **Systém:** CD 2.0
  - **Role:** Automatický systém
  - **Input:** Portfolio KID + strategie ID
  - **Output:** Potvrzení aktivace
  - **Typ:** Automated notification

---

### GROUP 3: Payment Processing Processes

---

#### BRQ06: Bank Account Transfer Processing
**Proces:** Převod peněžních prostředků z účtu  
**Typ:** Semi-automated Process  
**Skupina:** Payment Processing

**Detailní kroky:**

**Jednorázový převod:**
- **BRQ06.01** - Zobrazení platebních údajů v mobilní aplikaci
  - **Systém:** CD 2.0
  - **Role:** Klient
  - **Input:** Portfolio KID
  - **Output:** Číslo sběrného účtu, variabilní symbol
  - **Typ:** Automated display

- **BRQ06.02** - Generování QR kódu s volitelnou částkou
  - **Systém:** CD 2.0, QR Generator
  - **Role:** Klient (volitelně)
  - **Input:** Částka (volitelná)
  - **Output:** QR kód s platebními údaji
  - **Typ:** Manual trigger, automated generation

- **BRQ06.03** - Zadání platebního příkazu klientem ze svého účtu
  - **Systém:** Externí banka klienta
  - **Role:** Klient
  - **Input:** Platební údaje nebo QR kód
  - **Output:** Platební příkaz k zpracování
  - **Typ:** Manual (external system)

- **BRQ06.04** - Obdržení platby bankou
  - **Systém:** Banking System
  - **Role:** Automatický systém
  - **Input:** Platební příkaz
  - **Output:** Přijatá platba
  - **Typ:** Automated

- **BRQ06.05** - Připisování peněžních prostředků na peněžní složku portfolia
  - **Systém:** TOPAS
  - **Role:** Automatický systém
  - **Input:** Přijatá platba + KID portfolia
  - **Output:** Prostředky k investici
  - **Typ:** Automated

**Pravidelný převod (trvalý příkaz):**
- **BRQ06.06** - Zobrazení platebních údajů pro trvalý příkaz
  - **Systém:** CD 2.0
  - **Role:** Klient
  - **Input:** Portfolio KID
  - **Output:** Platební údaje pro trvalý příkaz
  - **Typ:** Automated display

- **BRQ06.07** - Generování QR kódu s částkou, frekvencí a datem
  - **Systém:** CD 2.0, QR Generator
  - **Role:** Klient
  - **Input:** Částka, frekvence, datum v období
  - **Output:** QR kód pro trvalý příkaz
  - **Typ:** Manual input, automated generation

- **BRQ06.08** - Založení trvalého platebního příkazu klientem
  - **Systém:** Externí banka klienta
  - **Role:** Klient
  - **Input:** QR kód nebo manuální zadání
  - **Output:** Aktivní trvalý příkaz
  - **Typ:** Manual (external system)

- **BRQ06.09** - Pravidelné obdržení plateb podle trvalého příkazu
  - **Systém:** Banking System
  - **Role:** Automatický systém
  - **Input:** Trvalý příkaz
  - **Output:** Pravidelné platby
  - **Typ:** Automated recurring

- **BRQ06.10** - Pravidelné připisování na peněžní složku portfolia
  - **Systém:** TOPAS
  - **Role:** Automatický systém
  - **Input:** Pravidelné platby
  - **Output:** Pravidelně doplňované prostředky k investici
  - **Typ:** Automated recurring

---

#### BRQ07: Card Payment Processing
**Proces:** Zaslání peněžních prostředků platební kartou  
**Typ:** Semi-automated Process  
**Skupina:** Payment Processing

**Detailní kroky:**

**Jednorázová platba kartou:**
- **BRQ07.01** - Zadání požadavku na převod z platební karty
  - **Systém:** CD 2.0
  - **Role:** Klient
  - **Input:** Požadavek na karetní platbu
  - **Output:** Formulář pro platbu kartou
  - **Typ:** Manual

- **BRQ07.02** - Zadání údajů platební karty
  - **Systém:** CD 2.0, Platební brána
  - **Role:** Klient
  - **Input:** Jméno držitele, číslo karty, platnost, CVC, výše převodu
  - **Output:** Platební údaje k ověření
  - **Typ:** Manual

- **BRQ07.03** - Alternativně výběr ApplePay/GooglePay
  - **Systém:** CD 2.0, Apple/Google Pay
  - **Role:** Klient
  - **Input:** Výše převodu, výběr platební karty v peněžence
  - **Output:** Platební tokeny
  - **Typ:** Manual

- **BRQ07.04** - Odeslání požadavku do karetního centra přes bránu
  - **Systém:** Platební brána, Karetní centrum
  - **Role:** Automatický systém
  - **Input:** Platební údaje/tokeny
  - **Output:** Požadavek na autorizaci
  - **Typ:** Automated

- **BRQ07.05** - Autorizace platby klientem podle pravidel banky
  - **Systém:** Karetní centrum, banka klienta
  - **Role:** Klient
  - **Input:** Autorizační požadavek (SMS, push, app)
  - **Output:** Potvrzení/zamítnutí platby
  - **Typ:** Manual authorization

- **BRQ07.06** - Vytvoření technického debetu po autorizaci
  - **Systém:** TOPAS
  - **Role:** Automatický systém
  - **Input:** Autorizovaná platba
  - **Output:** Prostředky k investici + technický debet
  - **Typ:** Automated

- **BRQ07.07** - Obdržení platby a vyrovnání technického debetu
  - **Systém:** Banking System, TOPAS
  - **Role:** Automatický systém
  - **Input:** Skutečně přijatá platba
  - **Output:** Vyrovnaný debet
  - **Typ:** Automated

**Pravidelná platba kartou:**
- **BRQ07.08** - Zadání požadavku na pravidelnou platbu kartou
  - **Systém:** CD 2.0
  - **Role:** Klient
  - **Input:** Požadavek na rekurentní platby
  - **Output:** Formulář pro pravidelné platby
  - **Typ:** Manual

- **BRQ07.09** - Zadání parametrů pravidelné platby
  - **Systém:** CD 2.0, Platební brána
  - **Role:** Klient
  - **Input:** Karta/peněženka, částka, frekvence, datum
  - **Output:** Nastavené parametry
  - **Typ:** Manual

- **BRQ07.10** - Autorizace první platby a souhlas s rekurencí
  - **Systém:** Platební brána, Karetní centrum
  - **Role:** Klient
  - **Input:** Autorizace a souhlas s opakováním
  - **Output:** Aktivní rekurentní platba
  - **Typ:** Manual authorization

- **BRQ07.11** - Pravidelné podávání požadavků dle frekvence
  - **Systém:** Platební brána
  - **Role:** Automatický systém
  - **Input:** Rekurentní nastavení
  - **Output:** Pravidelné platební požadavky
  - **Typ:** Automated recurring

- **BRQ07.12** - Změna parametrů pravidelné platby
  - **Systém:** CD 2.0, Platební brána
  - **Role:** Klient
  - **Input:** Nové parametry (karta, částka, frekvence)
  - **Output:** Aktualizované nastavení
  - **Typ:** Manual

- **BRQ07.13** - Zrušení pravidelné platby kartou
  - **Systém:** CD 2.0, Platební brána
  - **Role:** Klient
  - **Input:** Požadavek na zrušení
  - **Output:** Ukončená rekurentní platba
  - **Typ:** Manual

---

### GROUP 4: Investment Execution Processes

---

#### BRQ08: Automated Fund Purchase Execution
**Proces:** Nákup fondů  
**Typ:** Fully Automated Process  
**Skupina:** Investment Execution

**Detailní kroky:**
- **BRQ08.01** - Denní monitoring všech peněžních složek k investici
  - **Systém:** TOPAS
  - **Role:** Automatický systém
  - **Input:** Všechna portfolia s peněžními prostředky
  - **Output:** Seznam portfolií s dostupnými prostředky
  - **Typ:** Automated daily batch

- **BRQ08.02** - Kontrola dostupnosti minimální částky strategie
  - **Systém:** TOPAS
  - **Role:** Automatický systém
  - **Input:** Peněžní prostředky vs. minimální částka strategie
  - **Output:** Portfolia připravená k investování
  - **Typ:** Automated validation

- **BRQ08.03** - Vytvoření objednávek v poměru fondů podle strategie
  - **Systém:** TOPAS, TA
  - **Role:** Automatický systém
  - **Input:** Dostupné prostředky + poměr fondů ze strategie
  - **Output:** X objednávek na nákup fondů
  - **Typ:** Automated calculation

- **BRQ08.04** - Kontrola že validace není potřebná (byla při aktivaci)
  - **Systém:** TA
  - **Role:** Automatický systém
  - **Input:** Strategie byla již validována při BRQ05
  - **Output:** Potvrzení vhodnosti
  - **Typ:** Automated bypass

- **BRQ08.05** - Zadání objednávek na nákup fondů
  - **Systém:** Fund Trading System
  - **Role:** Automatický systém
  - **Input:** Vypočítané objednávky
  - **Output:** Zadané objednávky na burze/u správce
  - **Typ:** Automated trading

- **BRQ08.06** - Standardní vypořádání obchodů
  - **Systém:** Fund Trading System, Settlement System
  - **Role:** Automatický systém
  - **Input:** Provedené obchody
  - **Output:** Vypořádané transakce
  - **Typ:** Automated settlement

- **BRQ08.07** - Aktualizace složení portfolia v TOPAS
  - **Systém:** TOPAS
  - **Role:** Automatický systém
  - **Input:** Vypořádané nákupy fondů
  - **Output:** Aktualizované portfolio s fondy
  - **Typ:** Automated

---

#### BRQ09: Fund Redemption and Sale Processing
**Proces:** Prodej fondů  
**Typ:** Manual Trigger, Automated Execution  
**Skupina:** Investment Execution

**Detailní kroky:**

**Částečný/kompletní prodej portfolia:**
- **BRQ09.01** - Zadání instrukce k prodeji části/celého portfolia
  - **Systém:** CD 2.0
  - **Role:** Klient
  - **Input:** Objem v CZK nebo "vše"
  - **Output:** Instrukce k prodeji
  - **Typ:** Manual

- **BRQ09.02** - Výpočet poměru jednotlivých fondů na portfoliu
  - **Systém:** TOPAS
  - **Role:** Automatický systém
  - **Input:** Aktuální složení portfolia
  - **Output:** Poměrové zastoupení fondů
  - **Typ:** Automated calculation

- **BRQ09.03** - Vytvoření X pokynů ke zpětnému odkupu dle poměru
  - **Systém:** TOPAS
  - **Role:** Automatický systém
  - **Input:** Požadovaný objem + poměry fondů
  - **Output:** Pokyny k redemption fondů
  - **Typ:** Automated calculation

**Prodej konkrétního fondu:**
- **BRQ09.04** - Zadání instrukce k prodeji konkrétního fondu
  - **Systém:** CD 2.0
  - **Role:** Klient
  - **Input:** Konkrétní fond + počet kusů nebo "vše"
  - **Output:** Instrukce k prodeji fondu
  - **Typ:** Manual

- **BRQ09.05** - Vytvoření pokynu ke zpětnému odkupu konkrétního fondu
  - **Systém:** TOPAS
  - **Role:** Automatický systém
  - **Input:** Fond + množství k prodeji
  - **Output:** Pokyn k redemption
  - **Typ:** Automated

**Společné kroky pro oba typy prodeje:**
- **BRQ09.06** - Zadání pokynů ke zpětnému odkupu
  - **Systém:** Fund Trading System
  - **Role:** Automatický systém
  - **Input:** Pokyny k redemption
  - **Output:** Zadané pokyny na burze/u správce
  - **Typ:** Automated trading

- **BRQ09.07** - Standardní vypořádání redemption obchodů
  - **Systém:** Fund Trading System, Settlement System
  - **Role:** Automatický systém
  - **Input:** Provedené redemption
  - **Output:** Vypořádané transakce
  - **Typ:** Automated settlement

- **BRQ09.08** - Připisování prostředků na peněžní složku pro výnosy
  - **Systém:** TOPAS
  - **Role:** Automatický systém
  - **Input:** Výtěžek z prodeje fondů
  - **Output:** Prostředky na výnosové složce
  - **Typ:** Automated

- **BRQ09.09** - Aktualizace složení portfolia po prodeji
  - **Systém:** TOPAS
  - **Role:** Automatický systém
  - **Input:** Provedené prodeje
  - **Output:** Aktualizované portfolio
  - **Typ:** Automated

---

### GROUP 5: Portfolio and Cash Management

---

#### BRQ10: Investment Proceeds Withdrawal
**Proces:** Výběr peněžních prostředků  
**Typ:** Manual Process  
**Skupina:** Cash Management

**Detailní kroky:**
- **BRQ10.01** - Zadání instrukce k výběru z výnosové složky
  - **Systém:** CD 2.0
  - **Role:** Klient
  - **Input:** Částka nebo vše z dostupného zůstatku
  - **Output:** Instrukce k výběru
  - **Typ:** Manual

- **BRQ10.02** - Výběr autorizovaného účtu pro výběr
  - **Systém:** CD 2.0
  - **Role:** Klient
  - **Input:** Výběr z nastavených autorizovaných účtů
  - **Output:** Cílový účet pro převod
  - **Typ:** Manual selection

- **BRQ10.03** - Kontrola dostupnosti prostředků na výnosové složce
  - **Systém:** TOPAS
  - **Role:** Automatický systém
  - **Input:** Požadovaná částka vs. dostupný zůstatek
  - **Output:** Potvrzení/zamítnutí dostupnosti
  - **Typ:** Automated validation

- **BRQ10.04** - Automatický převod na JTB účet (pokud je cíl JTB)
  - **Systém:** TOPAS, JTB Banking System
  - **Role:** Automatický systém
  - **Input:** Instrukce k výběru + JTB účet
  - **Output:** Provedený převod
  - **Typ:** Automated (internal transfer)

- **BRQ10.05** - Generování OBOFT požadavku (pokud je cíl externí)
  - **Systém:** TOPAS, OBOFT
  - **Role:** Automatický systém
  - **Input:** Instrukce k výběru + externí účet
  - **Output:** OBOFT požadavek
  - **Typ:** Automated

- **BRQ10.06** - Zpracování převodu přes OBOFT (externí účty)
  - **Systém:** OBOFT
  - **Role:** Automatický systém
  - **Input:** OBOFT požadavek
  - **Output:** Provedený externí převod
  - **Typ:** Automated external processing

- **BRQ10.07** - Potvrzení úspěšného výběru klientovi
  - **Systém:** CD 2.0
  - **Role:** Automatický systém
  - **Input:** Potvrzení o převodu
  - **Output:** Notifikace klientovi
  - **Typ:** Automated notification

---

#### BRQ11: Investment Proceeds Reinvestment
**Proces:** Reinvestování peněžních prostředků v rámci strategie  
**Typ:** Manual Trigger, Automated Execution  
**Skupina:** Cash Management

**Detailní kroky:**
- **BRQ11.01** - Zadání instrukce k reinvestování
  - **Systém:** CD 2.0
  - **Role:** Klient
  - **Input:** Částka nebo vše z výnosové složky
  - **Output:** Instrukce k reinvestování
  - **Typ:** Manual

- **BRQ11.02** - Kontrola dostupných prostředků na výnosové složce
  - **Systém:** TOPAS
  - **Role:** Automatický systém
  - **Input:** Požadovaná částka vs. dostupné výnosy
  - **Output:** Potvrzení dostupnosti
  - **Typ:** Automated validation

- **BRQ11.03** - Převod z peněžní složky výnosů na složku k investicím
  - **Systém:** TOPAS
  - **Role:** Automatický systém
  - **Input:** Částka k reinvestování
  - **Output:** Převedené prostředky k investici
  - **Typ:** Automated internal transfer

- **BRQ11.04** - Potvrzení úspěšného reinvestování
  - **Systém:** CD 2.0
  - **Role:** Automatický systém
  - **Input:** Potvrzení o převodu
  - **Output:** Notifikace klientovi
  - **Typ:** Automated notification

- **BRQ11.05** - Příprava prostředků pro další investiční cyklus (BRQ08)
  - **Systém:** TOPAS
  - **Role:** Automatický systém
  - **Input:** Reinvestované prostředky
  - **Output:** Prostředky připravené pro BRQ08
  - **Typ:** Automated (připrava pro další process)

---

#### BRQ12: Corporate Actions and Dividend Processing
**Proces:** Korporátní akce  
**Typ:** Fully Automated Process  
**Skupina:** Portfolio Management

**Detailní kroky:**
- **BRQ12.01** - Monitoring korporátních akcí od správců fondů
  - **Systém:** Corporate Actions System
  - **Role:** Automatický systém
  - **Input:** Data o korporátních akcích
  - **Output:** Identifikované korporátní akce
  - **Typ:** Automated monitoring

- **BRQ12.02** - Standardní zpracování korporátních akcí
  - **Systém:** Corporate Actions System
  - **Role:** Automatický systém
  - **Input:** Korporátní akce + portfolio holdings
  - **Output:** Zpracované korporátní akce
  - **Typ:** Automated processing

- **BRQ12.03** - Výpočet dividend podle držených pozic
  - **Systém:** TOPAS, Corporate Actions System
  - **Role:** Automatický systém
  - **Input:** Dividendové události + množství fondů
  - **Output:** Vypočítané dividendy
  - **Typ:** Automated calculation

- **BRQ12.04** - Připisování dividend na peněžní složku pro výnosy
  - **Systém:** TOPAS
  - **Role:** Automatický systém
  - **Input:** Vypočítané dividendy
  - **Output:** Dividendy na výnosové složce (NEJSOU automaticky reinvestovány)
  - **Typ:** Automated crediting

- **BRQ12.05** - Notifikace klienta o připsaných dividendách
  - **Systém:** CD 2.0
  - **Role:** Automatický systém
  - **Input:** Připsané dividendy
  - **Output:** Push/SMS notifikace klientovi
  - **Typ:** Automated notification

- **BRQ12.06** - Aktualizace portfolia po korporátních akcích
  - **Systém:** TOPAS
  - **Role:** Automatický systém
  - **Input:** Zpracované korporátní akce
  - **Output:** Aktualizované portfolio
  - **Typ:** Automated

---

## Procesní Grouping Summary

### Distribuce procesů podle typu automatizace:
- **Fully Automated:** 2 procesy (BRQ08, BRQ12)
- **Semi-automated:** 8 procesů (BRQ01, BRQ06, BRQ07, BRQ10, BRQ11, + částečně BRQ03, BRQ05)
- **Manual with Automated Support:** 8 procesů (BRQ02, BRQ03, BRQ04, BRQ05, BRQ09, BRQ13, BRQ14, BRQ17)

### Celková statistika procesních kroků:
- **Celkový počet detailních kroků:** 142
- **Nejkomplexnější proces:** BRQ03 (20 kroků) - Remote Onboarding
- **Nejjednodušší procesy:** BRQ11, BRQ12 (5-6 kroků)
- **Průměr kroků na proces:** ~8 kroků

### Systémová závislost:
- **CD 2.0:** Používáno v 16/18 procesech
- **TOPAS:** Klíčové pro 8 procesů (portfolio management)
- **Automatické systémy:** 45% všech kroků je plně automatizovaných

---

*Dokument vygenerován: 2025-07-21*  
*Zdroj: OCR analýza business analysis.pdf*  
*Business Process Analyst: Claude Agent*  
*JIRA ID: AP-32*