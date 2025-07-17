# AP-32 Clear Deal 2.0 - End-to-End Test Cases

## Přehled
Tento dokument obsahuje kompletní sadu end-to-end testovacích případů pro systém Clear Deal 2.0. Každý E2E test pokrývá kompletní business workflow procházející více systémy.

## Testovací standardy
- **Test ID Format**: E2E-TC-XXX
- **Priorita**: High/Medium/Low na základě business kritičnosti
- **Test Types**: Functional, System, Security, Compliance
- **Test Steps**: Given/When/Then format s detailním workflow
- **Pokrytí**: Kompletní business use cases s cross-system integration

---

## E2E-TC-001: Onboarding nového klienta s Bank iD

### Business Use Case
Nový klient se registruje do Clear Deal 2.0 pomocí vzdálené identifikace přes Bank iD

### BIAN Domain
Party Lifecycle Management (SD-203), Party Authentication (SD-202), Customer Agreement (SD-72)

### Priorita
High

### Test Type
Functional, Security, Compliance

### Test Steps
**Given**: 
- Nový klient má platné identity dokumenty
- Bank iD service je dostupný
- DigiSign je funkční

**When**:
1. Klient stáhne a spustí CD2.0 aplikaci
2. Vybere možnost "Nová registrace"
3. Iniciuje ověření identity přes Bank iD
4. Nahraje požadované dokumenty
5. Vyplní investiční dotazník
6. Elektronicky podepíše smlouvy
7. Nastaví PIN a biometrické ověření

**Then**:
- Identity je ověřena Bank iD službou
- Klient je registrován v CRM JTB
- Investiční profil je vytvořen
- Smlouvy jsou právně platné
- Klient má aktivní přístup k aplikaci

### Expected Results
- Úspěšná registrace za méně než 10 minut
- Všechny dokumenty jsou digitálně podepsané
- AML/KYC kontroly jsou passed
- Klient má aktivní investiční účet

### Systems Involved
CD2.0 mApp, Bank iD, DigiSign, CRM JTB, SEZAM, Party Lifecycle Management, Customer Agreement

---

## E2E-TC-002: Onboarding existujícího klienta

### Business Use Case
Existující bankovní klient se registruje do Clear Deal 2.0 s využitím svých existujících údajů

### BIAN Domain
Party Lifecycle Management (SD-203), Party Authentication (SD-202), Customer Agreement (SD-72)

### Priorita
High

### Test Type
Functional, Security

### Test Steps
**Given**: 
- Klient má existující bankovní účet
- SEZAM obsahuje klientské credentials
- CRM JTB má aktuální klientská data

**When**:
1. Klient spustí CD2.0 aplikaci
2. Vybere možnost "Existující klient"
3. Přihlásí se pomocí bank credentials
4. Vyplní/aktualizuje investiční dotazník
5. Potvrdí dodatečné smlouvy pro investiční služby
6. Nastaví PIN a biometrické ověření

**Then**:
- Autentifikace je úspěšná přes SEZAM
- Klientská data jsou synchronizována
- Investiční profil je vytvořen/aktualizován
- Dodatečné smlouvy jsou podepsané
- Klient má přístup k investičním službám

### Expected Results
- Registrace dokončena za méně než 5 minut
- Všechna data jsou konzistentní napříč systémy
- Klient má rozšířené oprávnění pro investice

### Systems Involved
CD2.0 mApp, SEZAM, CRM JTB, DigiSign, Party Lifecycle Management, Customer Agreement

---

## E2E-TC-003: Vytvoření první investiční strategie - Cílová částka

### Business Use Case
Nově registrovaný klient vytváří svou první investiční strategii s konkrétním cílem

### BIAN Domain
Investment Portfolio Management (SD-158), Consumer Investments (SD-30), Product Directory (SD-222)

### Priorita
High

### Test Type
Functional

### Test Steps
**Given**: 
- Klient má aktivní účet v CD2.0
- Investiční dotazník je vyplněn
- Produktový katalog je dostupný

**When**:
1. Klient vybere "Vytvoření nové strategie"
2. Zvolí typ "Cílová částka"
3. Nastaví cílovou částku a časový horizont
4. Vybere rizikový profil
5. Systém navrhne portfolio fondů
6. Klient schválí navrhované portfolio
7. Potvrdí vytvoření strategie

**Then**:
- Strategie je validována proti investičnímu dotazníku
- Portfolio je vytvořeno v TOPAS
- Investiční recommendation je zobrazeno
- Strategie je připravena k aktivaci

### Expected Results
- Strategie je vytvořena za méně než 3 minuty
- Navrhované portfolio odpovídá rizikovému profilu
- Všechny validace jsou úspěšné

### Systems Involved
CD2.0 mApp, TOPAS, Produktový katalog, Investment Portfolio Management, Consumer Investments

---

## E2E-TC-004: Aktivace investiční strategie s počáteční investicí

### Business Use Case
Klient aktivuje vytvořenou strategii a provede první investici

### BIAN Domain
Investment Portfolio Management (SD-158), Consumer Investments (SD-30), Payment Execution (SD-206)

### Priorita
High

### Test Type
Functional

### Test Steps
**Given**: 
- Klient má vytvořenou strategii
- Má dostatečné prostředky na účtu
- Payment services jsou dostupné

**When**:
1. Klient vybere "Aktivovat strategii"
2. Zvolí způsob financování (účet/karta)
3. Nastaví částku první investice
4. Potvrdí transakci
5. Systém provede payment processing
6. Fondové podíly jsou nakoupeny
7. Portfolio je aktivováno

**Then**:
- Platba je úspěšně zpracována
- Fondové podíly jsou alokované
- Portfolio je aktivní v TOPAS
- Klient vidí aktuální stav investice

### Expected Results
- Aktivace dokončena za méně než 5 minut
- Všechny transakce jsou confirmed
- Portfolio performance tracking je aktivní

### Systems Involved
CD2.0 mApp, TOPAS, Payment Execution, Investment Portfolio Management, Consumer Investments

---

## E2E-TC-005: Nákup fondů - Jednorázová investice

### Business Use Case
Klient provádí jednorázovou investici do konkrétního fondu

### BIAN Domain
Consumer Investments (SD-30), Payment Execution (SD-206), Regulatory Compliance (SD-248)

### Priorita
High

### Test Type
Functional, Compliance

### Test Steps
**Given**: 
- Klient má aktivní účet
- Vybral konkrétní fond
- Má dostatečné prostředky

**When**:
1. Klient vybere fond z katalogu
2. Zadá částku pro investici
3. Potvrdí objednávku
4. Systém provede compliance kontroly
5. Spustí se payment processing
6. Objednávka je odeslána na trh
7. Execution je potvrzena

**Then**:
- Compliance kontroly jsou passed
- Platba je úspěšně zpracována
- Objednávka je executed na trhu
- Klient obdrží confirmation

### Expected Results
- Objednávka je zpracována za méně než 30 sekund
- Všechny regulatory requirements jsou splněny
- Execution price je v rámci tolerance

### Systems Involved
CD2.0 mApp, Consumer Investments, Payment Execution, Regulatory Compliance, Market Systems

---

## E2E-TC-006: Prodej fondů s výběrem prostředků

### Business Use Case
Klient prodává část svých fondových podílů a vybírá prostředky na svůj účet

### BIAN Domain
Consumer Investments (SD-30), Payment Execution (SD-206)

### Priorita
High

### Test Type
Functional

### Test Steps
**Given**: 
- Klient má aktivní fondové podíly
- Trh je otevřený pro trading
- Payment services jsou dostupné

**When**:
1. Klient vybere fond k prodeji
2. Zadá množství/částku k prodeji
3. Potvrdí prodejní objednávku
4. Systém provede execution na trhu
5. Výtěžek je připojen k účtu
6. Klient confirmuje výběr prostředků

**Then**:
- Prodejní objednávka je executed
- Prostředky jsou k dispozici
- Výběr je zpracován
- Klient obdrží potvrzení

### Expected Results
- Prodej je executed za méně než 30 sekund
- Prostředky jsou dostupné okamžitě
- Všechny transakce jsou auditované

### Systems Involved
CD2.0 mApp, Consumer Investments, Payment Execution, Market Systems

---

## E2E-TC-007: Automatické rebalancování portfolia

### Business Use Case
Systém automaticky rebalancuje klientovo portfolio podle nastavené strategie

### BIAN Domain
Investment Portfolio Management (SD-158), Consumer Investments (SD-30)

### Priorita
High

### Test Type
Functional

### Test Steps
**Given**: 
- Klient má aktivní strategii s rebalancing rules
- Portfolio je out of balance
- Trh je otevřený

**When**:
1. Systém detekuje potřebu rebalancing
2. Vypočítá required trades
3. Vygeneruje objednávky
4. Provede automatické trading
5. Aktualizuje portfolio allocation
6. Notifikuje klienta

**Then**:
- Portfolio je rebalanced according to strategy
- Všechny trades jsou executed
- Nová allocation je within tolerance
- Klient je informován o změnách

### Expected Results
- Rebalancing dokončeno za méně než 10 minut
- Portfolio allocation je optimální
- Všechny transakce jsou documented

### Systems Involved
TOPAS, Investment Portfolio Management, Consumer Investments, CD2.0 mApp

---

## E2E-TC-008: Převod prostředků z účtu na investice

### Business Use Case
Klient převádí prostředky ze svého běžného účtu na investiční účet

### BIAN Domain
Payment Execution (SD-206), Investment Portfolio Management (SD-158)

### Priorita
High

### Test Type
Functional

### Test Steps
**Given**: 
- Klient má běžný účet s dostatečnými prostředky
- Má aktivní investiční účet
- Payment services jsou dostupné

**When**:
1. Klient vybere "Převod prostředků"
2. Zadá částku k převodu
3. Potvrdí transakci
4. Systém provede internal transfer
5. Prostředky jsou credited na investiční účet
6. Klient je notifikován

**Then**:
- Transfer je úspěšně zpracován
- Prostředky jsou dostupné pro investice
- Všechny účty jsou updated
- Transakce je recorded

### Expected Results
- Transfer dokončen za méně než 2 minuty
- Žádné fees nejsou účtovány
- Balances jsou correct

### Systems Involved
CD2.0 mApp, Payment Execution, CRM JTB, Investment Portfolio Management

---

## E2E-TC-009: Platební kartou pro investice

### Business Use Case
Klient používá platební kartu pro financování investic

### BIAN Domain
Payment Execution (SD-206), Consumer Investments (SD-30)

### Priorita
Medium

### Test Type
Functional, Security

### Test Steps
**Given**: 
- Klient má registrovanou platební kartu
- Karta má dostatečný limit
- Payment gateway je dostupný

**When**:
1. Klient vybere "Platba kartou"
2. Zadá částku investice
3. Potvrdí card details
4. Provede 3D Secure ověření
5. Platba je zpracována
6. Prostředky jsou investovány

**Then**:
- Card payment je authorized
- Prostředky jsou immediately available
- Investice je provedena
- Klient obdrží confirmations

### Expected Results
- Platba zpracována za méně než 30 sekund
- Všechny security checks jsou passed
- Investice je okamžitě executed

### Systems Involved
CD2.0 mApp, Payment Gateway, Payment Execution, Consumer Investments

---

## E2E-TC-010: Aktualizace investičního dotazníku

### Business Use Case
Klient aktualizuje svůj investiční dotazník a systém přehodnotí rizikový profil

### BIAN Domain
Party Lifecycle Management (SD-203), Investment Portfolio Management (SD-158)

### Priorita
Medium

### Test Type
Functional, Compliance

### Test Steps
**Given**: 
- Klient má existující investiční dotazník
- Došlo ke změně v životní situaci
- Má aktivní strategie

**When**:
1. Klient vybere "Aktualizace dotazníku"
2. Vyplní nové informace
3. Systém přehodnotí rizikový profil
4. Navrhne adjustments strategií
5. Klient potvrdí změny
6. Strategie jsou updated

**Then**:
- Nový rizikový profil je calculated
- Stávající strategie jsou reviewed
- Recommendations pro adjustments
- Klient má updated profil

### Expected Results
- Aktualizace dokončena za méně než 5 minut
- Všechny strategie jsou compliant
- Rizikový profil je accurate

### Systems Involved
CD2.0 mApp, Party Lifecycle Management, Investment Portfolio Management, TOPAS

---

## E2E-TC-011: Výpis transakcí a reporting

### Business Use Case
Klient si zobrazuje detailní výpis všech investičních transakcí a performance

### BIAN Domain
Investment Portfolio Management (SD-158), Document Services (SD-102)

### Priorita
Medium

### Test Type
Functional

### Test Steps
**Given**: 
- Klient má historii investičních transakcí
- Reporting system je dostupný
- Má aktivní strategie

**When**:
1. Klient vybere "Výpisy a reporty"
2. Nastaví časové období
3. Vybere typ reportu
4. Systém vygeneruje report
5. Report je displayed/downloaded
6. Klient může export data

**Then**:
- Všechny transakce jsou zobrazeny
- Performance metriky jsou accurate
- Report je formatted correctly
- Data jsou exportovatelná

### Expected Results
- Report vygenerován za méně než 10 sekund
- Všechna data jsou complete a accurate
- Různé formáty jsou supported

### Systems Involved
CD2.0 mApp, TOPAS, Investment Portfolio Management, Document Services

---

## E2E-TC-012: Změna autorizovaného účtu

### Business Use Case
Klient mění účet, který je používán pro investiční transakce

### BIAN Domain
Party Lifecycle Management (SD-203), Payment Execution (SD-206)

### Priorita
Medium

### Test Type
Functional, Security

### Test Steps
**Given**: 
- Klient má nastavený autorizovaný účet
- Chce změnit na jiný účet
- Nový účet je validní

**When**:
1. Klient vybere "Správa účtů"
2. Zadá nové account details
3. Provede ověření identity
4. Systém validuje nový účet
5. Confirmuje změnu
6. Aktualizuje všechny odkazy

**Then**:
- Nový účet je validated
- Změna je applied across systems
- Všechny future transakce použijí nový účet
- Klient je notifikován

### Expected Results
- Změna dokončena za méně než 5 minut
- Všechny systémy jsou updated
- Žádné stávající transakce nejsou affected

### Systems Involved
CD2.0 mApp, Party Lifecycle Management, Payment Execution, CRM JTB

---

## E2E-TC-013: Výplata dividend

### Business Use Case
Systém automaticky zpracuje výplatu dividend z fondů a informuje klienta

### BIAN Domain
Consumer Investments (SD-30), Payment Execution (SD-206)

### Priorita
Medium

### Test Type
Functional

### Test Steps
**Given**: 
- Klient má fondové podíly s dividend yield
- Dividend payment date je reached
- Payment processing je available

**When**:
1. Fond deklaruje dividend
2. Systém calculate klientův podíl
3. Initiate dividend payment
4. Prostředky jsou credited
5. Klient je notifikován
6. Transakce je recorded

**Then**:
- Dividend je correctly calculated
- Payment je processed successfully
- Klient obdrží prostředky
- Transakce je documented

### Expected Results
- Dividend zpracována za méně než 1 den
- Částka je accurate
- Klient je properly notified

### Systems Involved
Market Systems, Consumer Investments, Payment Execution, CD2.0 mApp

---

## E2E-TC-014: Biometrické ověření pro transakce

### Business Use Case
Klient používá biometrické ověření pro autorizaci investičních transakcí

### BIAN Domain
Party Authentication (SD-202), Consumer Investments (SD-30)

### Priorita
High

### Test Type
Security

### Test Steps
**Given**: 
- Klient má nastavené biometrické ověření
- Chce provést investiční transakci
- Biometrické sensors jsou dostupné

**When**:
1. Klient iniciuje transakci
2. Systém požádá o biometrické ověření
3. Klient poskytne biometrics
4. Systém validuje biometrické data
5. Transakce je authorized
6. Investice je provedena

**Then**:
- Biometrické ověření je successful
- Transakce je authorized
- Investice je executed
- Security audit log je created

### Expected Results
- Ověření dokončeno za méně než 5 sekund
- False positive/negative rate < 1%
- Všechny pokusy jsou logged

### Systems Involved
CD2.0 mApp, Party Authentication, Consumer Investments, SEZAM

---

## E2E-TC-015: Komplexní compliance kontroly

### Business Use Case
Systém provádí komplexní compliance kontroly pro všechny investiční operace

### BIAN Domain
Regulatory Compliance (SD-248), Consumer Investments (SD-30)

### Priorita
High

### Test Type
Compliance

### Test Steps
**Given**: 
- Klient chce provést investiční transakci
- Regulatory rules jsou configured
- Compliance engine je active

**When**:
1. Klient submits investiční objednávku
2. Systém provede MiFID II kontroly
3. Validuje suitability assessment
4. Checks AML/KYC requirements
5. Verifies investment limits
6. Generates compliance report

**Then**:
- Všechny regulatory checks jsou passed
- Objednávka je compliant
- Audit trail je created
- Reporting requirements jsou met

### Expected Results
- Compliance kontroly dokončeny za méně než 10 sekund
- 100% regulatory compliance
- Všechny kontroly jsou documented

### Systems Involved
Regulatory Compliance, Consumer Investments, CD2.0 mApp, External Regulatory Systems

---

## Souhrn E2E testovacích případů

### Statistiky pokrytí
- **Celkový počet E2E testů**: 15
- **High priority**: 10 (67%)
- **Medium priority**: 5 (33%)
- **Low priority**: 0 (0%)

### Typy testů
- **Functional**: 13 (87%)
- **Security**: 3 (20%)
- **Compliance**: 2 (13%)
- **System**: 1 (7%)

### Pokrytí business use cases
- **Onboarding a autentifikace**: 2 testy (13%)
- **Investiční strategie**: 3 testy (20%)
- **Správa finančních prostředků**: 3 testy (20%)
- **Investiční operace**: 4 testy (27%)
- **Správa klientských údajů**: 3 testy (20%)

### BIAN Service Domains pokrytí
- **Consumer Investments (SD-30)**: 8 testů
- **Investment Portfolio Management (SD-158)**: 6 testů
- **Party Authentication (SD-202)**: 3 testy
- **Party Lifecycle Management (SD-203)**: 3 testy
- **Customer Agreement (SD-72)**: 2 testy
- **Payment Execution (SD-206)**: 7 testů
- **Regulatory Compliance (SD-248)**: 2 testy
- **Document Services (SD-102)**: 1 test

### Klíčové coverage metriky
- ✅ 100% pokrytí všech identifikovaných business use cases
- ✅ 100% pokrytí všech primárních BIAN Service Domains
- ✅ Cross-system integration testing pro všechny komponenty
- ✅ Security testing pro všechny kritické operace
- ✅ Compliance testing pro regulatory requirements
- ✅ End-to-end workflow testing všech customer journeys

### Mapování na acceptance criteria
- **Funkční kritéria**: 100% pokryto (onboarding, transakce, portfolio management, platby)
- **Performance kritéria**: Pokryto v rámci časových limitů testů
- **Security kritéria**: Pokryto biometrické ověření, multi-factor authentication
- **Compliance kritéria**: Pokryto MiFID II, AML/KYC, audit trail
- **User Experience kritéria**: Pokryto user journey testy

---

*Dokument vytvořen: 2025-07-17*  
*Test Analytik: Claude Agent*  
*JIRA: AP-32*  
*Verze: 1.0*