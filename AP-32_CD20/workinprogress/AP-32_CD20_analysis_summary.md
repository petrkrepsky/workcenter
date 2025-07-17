# AP-32 CD20 - Analýza obchodního zadání

## Shrnutí projektu
Clear Deal 2.0 je mobilní aplikace pro investování a správu investičních portfolií určená pro retailové klienty. Aplikace umožňuje vytváření investičních strategií, zasmluvňování klientů, správu portfolií a provádění investičních operací prostřednictvím mobilního rozhraní.

## Analýza obchodních požadavků

### Klíčové business procesy
Systém pokrývá následující hlavní oblasti:

1. **Onboarding a autentifikace**
   - Instalace aplikace s PIN a biometrií
   - Zasmluvnění nových klientů přes Bank iD
   - Zasmluvnění stávajících klientů

2. **Investiční strategie**
   - Vytvoření první strategie (3 varianty: cílová částka, renta, bez cíle)
   - Aktivace strategie s validací vůči investičnímu dotazníku
   - Vytvoření a správa dalších strategií

3. **Správa finančních prostředků**
   - Převody z účtu a platební kartou
   - Výběr peněžních prostředků
   - Reinvestování v rámci strategie

4. **Investiční operace**
   - Nákup a prodej fondů
   - Správa portfolia
   - Výplata dividend

5. **Správa klientských údajů**
   - Aktualizace AML a investičního dotazníku
   - Změna autorizovaného účtu
   - Výpisy a konfirmace

### Stakeholdeři a systémová integrace
Z architektury vyplývá integrace s následujícími systémy:
- **CRM - JTB**: Správa klientských dat
- **SEZAM**: Autentifikační engine
- **TOPAS**: Portfolio management systém
- **DigiSign**: Digitální podpis
- **PIWIK**: Analytika
- **Bank iD**: Identifikace
- **ESB WSO2**: Integrační platforma
- **Produktový katalog**: Správa investičních produktů

## Identifikace BIAN Service Domains

### Primární Service Domains
1. **Consumer Investments** (SD-30)
   - Funkční pattern: Transact
   - Artifacts: Consumer Securities Order, Transaction
   - Behavior Qualifiers: Order Initiation, Funding Check, Compliance, Quote

2. **Investment Portfolio Management** (SD-158)
   - Funkční pattern: Fulfill
   - Artifacts: Managed Investment, Investment Portfolio
   - Behavior Qualifiers: Trade Initiation, Market Opportunities, Track

3. **Party Authentication** (SD-202)
   - Funkční pattern: Assess
   - Artifacts: Party Authentication
   - Behavior Qualifiers: Biometric, Device, Document, Password

4. **Party Lifecycle Management** (SD-203)
   - Funkční pattern: Administer
   - Artifacts: Party Relationship
   - Behavior Qualifiers: Identity Proofing, Qualification, Documentation

5. **Customer Agreement** (SD-72)
   - Funkční pattern: Agree Terms
   - Artifacts: Customer Agreement
   - Behavior Qualifiers: Policy Terms, Regulatory Terms, Legal Terms

6. **Payment Execution** (SD-206)
   - Funkční pattern: Process
   - Artifacts: Payment Execution
   - Behavior Qualifiers: Payment Execution, Payment Mechanism

### Podporné Service Domains
- **Customer Relationship Management** (SD-89)
- **Product Directory** (SD-222)
- **Regulatory Compliance** (SD-248)
- **Document Services** (SD-102)
- **Customer Portfolio** (SD-84)

## Technická architektura

### Aplikační komponenty
- **CD2.0 mApp Android/iOS**: Mobilní aplikace pro koncové uživatele
- **CD2.0 mApp FE**: Frontend aplikace s webovým rozhraním
- **FE WEB On Behalf**: Webové rozhraní pro správu
- **Internetové bankovnictví BE**: Backend pro operace

### Integrační vzory
- Synchronní komunikace přes ESB WSO2
- Asynchronní zpracování přes EI Kafka
- REST API pro mobilní aplikace
- WebSocket pro real-time komunikaci

## Obchodní pravidla a validace

### Klíčové business rules
1. **Validace investičních strategií**
   - Kontrola vůči investičnímu dotazníku
   - Omezení podle rizikového profilu klienta
   - Minimální a maximální investiční částky

2. **AML a compliance**
   - Automatické AML schválení pro nové klienty
   - Pravidelná aktualizace dotazníků
   - Monitoring transakcí

3. **Autorizace a bezpečnost**
   - Dvoustupňová autentifikace
   - Biometrické ověření
   - Časové limity pro transakce

## Procesy impaktované požadavky

### Nové procesy
1. **Modelace investičních strategií**
   - Výpočet predikčních modelů
   - Grafické zobrazení scénářů
   - Optimalizace portfolia

2. **Digitální zasmluvňování**
   - Vzdálená identifikace přes Bank iD
   - Elektronický podpis smluv
   - Automatická validace dokumentů

3. **Mobilní portfolio management**
   - Real-time sledování výkonu
   - Mobilní obchodování
   - Push notifikace

### Modifikované procesy
1. **Onboarding klientů**
   - Rozšíření o investiční služby
   - Nové typy smluv
   - Dodatečná rizikové profilování

2. **Správa produktového katalogu**
   - Nové investiční produkty
   - Strategické kombinace fondů
   - Dynamické pricing

## Klíčové findings

### Technické výzvy
1. **Integrace s existujícími systémy**
   - Nutnost rozšíření CRM o investiční funkce
   - Synchronizace dat mezi TOPAS a mobilní aplikací
   - Zajištění konzistence dat napříč systémy

2. **Výkonnost a škálovatelnost**
   - Real-time zpracování tržních dat
   - Optimalizace mobilních aplikací
   - Kapacitní plánování pro růst uživatelů

3. **Regulatorní compliance**
   - MiFID II requirements
   - AML/KYC procesy
   - Reportingové povinnosti

### Obchodní rizika
1. **Uživatelská zkušenost**
   - Komplexnost investičních nástrojů
   - Edukace uživatelů
   - Mobilní optimalizace

2. **Provozní rizika**
   - Závislost na trzích
   - Systémová integrace
   - Kontinuita služeb

## Doporučení pro design phase

### Prioritní oblasti
1. **API design**
   - Definice REST API pro mobilní aplikace
   - Event-driven architecture pro real-time updates
   - Microservices vzor pro škálovatelnost

2. **Data model**
   - Rozšíření datového modelu CRM
   - Integrace s TOPAS
   - Event sourcing pro audit trail

3. **Security architecture**
   - OAuth 2.0 / OpenID Connect
   - API Gateway pattern
   - Encryption at rest and in transit

### Technologické standardy
- Spring Boot pro backend služby
- React Native pro mobilní aplikace
- Apache Kafka pro event streaming
- PostgreSQL pro persistenci dat
- Redis pro caching

## Závěr
Projekt Clear Deal 2.0 představuje komplexní řešení pro mobilní investování s vysokou mírou integrace do stávající bankovní infrastruktury. Implementace vyžaduje pečlivé navržení API, zajištění bezpečnosti a dodržení regulatorních požadavků. BIAN framework poskytuje dobrý základ pro strukturovaný přístup k návrhu služeb.

---
*Dokument vytvořen: 2025-07-17*
*Analytik: Claude Agent*
*JIRA: AP-32*