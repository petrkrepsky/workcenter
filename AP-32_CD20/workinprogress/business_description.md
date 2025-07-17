# AP-32 Clear Deal 2.0 - Business Description

## Change description (what is changing)

Clear Deal 2.0 představuje komplexní transformaci současných investičních služeb do mobilní aplikace pro retailové klienty. Projekt zahrnuje:

### Klíčové změny
- **Digitalizace investičních služeb**: Přechod od tradičních pobočkových investičních služeb k mobilní aplikaci
- **Nový onboarding proces**: Implementace vzdálené identifikace přes Bank iD pro nové klienty
- **Automatizace portfolio managementu**: Vytvoření systému pro automatické investiční strategie
- **Mobilní-first přístup**: Kompletní přepracování uživatelského rozhraní pro mobilní zařízení
- **Integrace s externími systémy**: Napojení na TOPAS (portfolio management), SEZAM (autentifikace), CRM JTB

### Impaktované oblasti
- Investiční produkty a služby
- Onboarding a KYC procesy
- Portfolio management
- Platební procesy a execution
- Dokumentační a compliance procesy

## AS-IS and TO-BE description (current vs future state)

### AS-IS (současný stav)
- **Investiční služby**: Poskytované primárně prostřednictvím poboček a internetového bankovnictví
- **Onboarding**: Manuální proces s fyzickou přítomností klienta
- **Portfolio management**: Spravované investičními poradci s omezenou automatizací
- **Platby**: Tradiční bankovní převody s manuálním zpracováním
- **Reporting**: Statické výpisy a reporty generované na požádání

### TO-BE (budoucí stav)
- **Mobilní aplikace**: Nativní iOS/Android aplikace s komplexním investičním portfolio
- **Digitální onboarding**: Vzdálená identifikace přes Bank iD s automatickým zasmluvněním
- **Automatizované strategie**: Systém pro vytváření a správu investičních strategií s AI podporou
- **Real-time platby**: Okamžité investiční transakce s automatickým settlement
- **Interaktivní reporting**: Real-time dashboardy s prediktivními modely a analýzami

## Business architecture (BIAN impacted domains with justification)

### Primární Service Domains

#### 1. Consumer Investments (SD-30)
- **Funkční pattern**: Transact
- **Artifacts**: Consumer Securities Order, Transaction
- **Behavior Qualifiers**: Order Initiation, Funding Check, Compliance, Quote
- **Justification**: Klíčová doména pro zpracování investičních objednávek retailových klientů
- **BOM referenční URL**: https://bian.org/servicelandscape-12-0-0/views/view_34743.html
- **Control Record URL**: https://bian.org/servicelandscape-12-0-0/views/view_41312.html

#### 2. Investment Portfolio Management (SD-158)
- **Funkční pattern**: Fulfill
- **Artifacts**: Managed Investment, Investment Portfolio
- **Behavior Qualifiers**: Trade Initiation, Market Opportunities, Track
- **Justification**: Správa investičních portfolií a implementace automatizovaných strategií
- **BOM referenční URL**: https://bian.org/servicelandscape-12-0-0/views/view_45014.html
- **Control Record URL**: https://bian.org/servicelandscape-12-0-0/views/view_30485.html

#### 3. Party Authentication (SD-202)
- **Funkční pattern**: Assess
- **Artifacts**: Party Authentication
- **Behavior Qualifiers**: Biometric, Device, Document, Password
- **Justification**: Kritická doména pro autentifikaci klientů v mobilní aplikaci
- **BOM referenční URL**: https://bian.org/servicelandscape-12-0-0/views/view_37777.html
- **Control Record URL**: https://bian.org/servicelandscape-12-0-0/views/view_38106.html

#### 4. Party Lifecycle Management (SD-203)
- **Funkční pattern**: Administer
- **Artifacts**: Party Relationship
- **Behavior Qualifiers**: Identity Proofing, Qualification, Documentation
- **Justification**: Správa životního cyklu klientských vztahů včetně onboardingu
- **BOM referenční URL**: https://bian.org/servicelandscape-12-0-0/views/view_41963.html
- **Control Record URL**: https://bian.org/servicelandscape-12-0-0/views/view_48338.html

#### 5. Customer Agreement (SD-72)
- **Funkční pattern**: Agree Terms
- **Artifacts**: Customer Agreement
- **Behavior Qualifiers**: Policy Terms, Regulatory Terms, Legal Terms
- **Justification**: Správa investičních smluv a smluvních podmínek
- **BOM referenční URL**: https://bian.org/servicelandscape-12-0-0/views/view_47447.html
- **Control Record URL**: https://bian.org/servicelandscape-12-0-0/views/view_33982.html

#### 6. Payment Execution (SD-206)
- **Funkční pattern**: Process
- **Artifacts**: Payment Execution
- **Behavior Qualifiers**: Payment Execution, Payment Mechanism
- **Justification**: Zpracování plateb pro investiční transakce
- **BOM referenční URL**: https://bian.org/servicelandscape-12-0-0/views/view_37510.html
- **Control Record URL**: https://bian.org/servicelandscape-12-0-0/views/view_43630.html

### Podporné Service Domains

#### 7. Customer Relationship Management (SD-89)
- **Funkční pattern**: Administer
- **Justification**: Správa klientských vztahů a integrace s CRM JTB

#### 8. Product Directory (SD-222)
- **Funkční pattern**: Catalog
- **Justification**: Katalog investičních produktů a fondů

#### 9. Regulatory Compliance (SD-248)
- **Funkční pattern**: Comply
- **Justification**: Dodržování MiFID II a dalších regulatorních požadavků

#### 10. Document Services (SD-102)
- **Funkční pattern**: Process
- **Justification**: Správa dokumentů a elektronických podpisů

## Business process impact (BIAN functional patterns and process changes)

### Nové procesy

#### 1. Digitální onboarding (Party Lifecycle Management)
- **Functional Pattern**: Administer
- **Process Changes**: 
  - Vzdálená identifikace přes Bank iD
  - Automatické KYC/AML kontroly
  - Elektronické podpisy smluv
  - Automatická validace investičních dotazníků

#### 2. Automatizované portfolio management (Investment Portfolio Management)
- **Functional Pattern**: Fulfill
- **Process Changes**:
  - AI-driven investiční strategie
  - Automatické rebalancování portfolia
  - Real-time monitoring tržních příležitostí
  - Prediktivní modelování výkonu

#### 3. Mobilní investiční transakce (Consumer Investments)
- **Functional Pattern**: Transact
- **Process Changes**:
  - Okamžité zpracování objednávek
  - Real-time pricing a quotes
  - Automatické compliance kontroly
  - Batch processing pro market execution

### Modifikované procesy

#### 1. Platební procesy (Payment Execution)
- **Functional Pattern**: Process
- **Process Changes**:
  - Integrace s platebními kartami
  - Automatické funding kontroly
  - Real-time settlement
  - Multi-currency support

#### 2. Klientská autentifikace (Party Authentication)
- **Functional Pattern**: Assess
- **Process Changes**:
  - Biometrické ověření
  - Multi-factor authentication
  - Device fingerprinting
  - Behavioral analytics

## Impacted systems (based on solution design description)

### Primární systémy
- **CRM JTB**: Rozšíření o investiční funkcionalitsy
- **TOPAS**: Portfolio management systém - nové API pro mobilní aplikace
- **SEZAM**: Autentifikační engine - rozšíření o biometrické ověření

### Integrační systémy
- **ESB WSO2**: Integrační platforma pro synchronní komunikaci
- **EI Kafka**: Event streaming pro asynchronní zpracování
- **DigiSign**: Systém pro elektronické podpisy

### Nové aplikační komponenty
- **CD2.0 mApp (iOS/Android)**: Mobilní aplikace pro koncové uživatele
- **CD2.0 mApp FE**: Frontend webová aplikace
- **CD2.0 Backend Services**: Mikroservisní architektura

### Externí systémy
- **Bank iD**: Identifikační služba pro nové klienty
- **PIWIK**: Analytická platforma
- **Produktový katalog**: Správa investičních produktů

## Data analysis (BIAN business model objects for impacted domains only)

### Consumer Investments
- **Business Objects**: Consumer Securities Order, Transaction
- **Data Attributes**:
  - Order ID, Customer ID, Security ID
  - Order type, quantity, price
  - Order status, execution details
  - Compliance flags, risk ratings

### Investment Portfolio Management
- **Business Objects**: Managed Investment, Investment Portfolio
- **Data Attributes**:
  - Portfolio ID, strategy type, risk profile
  - Asset allocation, performance metrics
  - Rebalancing triggers, trading rules
  - Market opportunity alerts

### Party Authentication
- **Business Objects**: Party Authentication
- **Data Attributes**:
  - Authentication ID, method type
  - Biometric data, device tokens
  - Authentication status, risk score
  - Session management data

### Party Lifecycle Management
- **Business Objects**: Party Relationship
- **Data Attributes**:
  - Party ID, relationship type, status
  - Identity proofing documents
  - Qualification scores, risk assessments
  - Lifecycle stage, documentation compliance

### Customer Agreement
- **Business Objects**: Customer Agreement
- **Data Attributes**:
  - Agreement ID, agreement type
  - Policy terms, regulatory terms
  - Legal terms, signatures
  - Amendment history, compliance status

### Payment Execution
- **Business Objects**: Payment Execution
- **Data Attributes**:
  - Payment ID, execution status
  - Payment method, amount, currency
  - Settlement details, routing information
  - Regulatory reporting data

## Legal & compliance & risk impact (regulatory requirements)

### Regulatorní požadavky

#### MiFID II (Markets in Financial Instruments Directive II)
- **Suitability Assessment**: Povinnost provádět vhodnostní testy před investičními doporučeními
- **Best Execution**: Povinnost zajistit nejlepší execution pro klientské objednávky
- **Product Governance**: Řízení životního cyklu investičních produktů
- **Transaction Reporting**: Reporting všech investičních transakcí

#### AML/KYC (Anti-Money Laundering/Know Your Customer)
- **Customer Due Diligence**: Povinnost ověřit identitu klientů
- **Ongoing Monitoring**: Kontinuální sledování transakcí
- **Suspicious Activity Reporting**: Hlášení podezřelých aktivit
- **Record Keeping**: Vedení záznamů po dobu 5 let

#### GDPR (General Data Protection Regulation)
- **Data Protection**: Ochrana osobních údajů klientů
- **Consent Management**: Správa souhlasů s využitím dat
- **Right to be Forgotten**: Právo na výmaz dat
- **Data Breach Notification**: Hlášení narušení zabezpečení dat

### Compliance opatření
- **Automatizované kontroly**: Implementace real-time compliance kontrol
- **Auditní stopy**: Kompletní auditní stopy všech transakcí
- **Risk scoring**: Automatické hodnocení rizik klientů a transakcí
- **Regulatory reporting**: Automatizované generování regulatorních reportů

## Non-functional requirements (performance, security, scalability, reliability)

### Performance Requirements
- **Response Time**: < 2 sekundy pro standardní operace
- **Throughput**: 1000 současných uživatelů
- **Market Data Latency**: < 100ms pro real-time quotes
- **Batch Processing**: Zpracování 10,000 transakcí za hodinu

### Security Requirements
- **Encryption**: AES-256 pro data at rest, TLS 1.3 pro data in transit
- **Authentication**: Multi-factor authentication pro všechny operace
- **Authorization**: Role-based access control (RBAC)
- **Audit**: Kompletní audit trail všech operací

### Scalability Requirements
- **Horizontal Scaling**: Mikroservisní architektura s auto-scaling
- **Database Scaling**: Distributed database s read replicas
- **Cache Strategy**: Multi-level caching (Redis, CDN)
- **Load Balancing**: Automatické rozložení zátěže

### Reliability Requirements
- **Availability**: 99.9% uptime (8.76 hodin downtime/rok)
- **Disaster Recovery**: RTO < 4 hodiny, RPO < 1 hodina
- **Backup Strategy**: Automatické zálohy každých 6 hodin
- **Monitoring**: 24/7 monitoring s alerting

## Potential risks (technical, business, security, operational)

### Technická rizika
- **Integrace s legacy systémy**: Složitost integrace s TOPAS a CRM JTB
- **Performance bottlenecks**: Riziko výkonnostních problémů při vysoké zátěži
- **Data synchronization**: Riziko nekonzistence dat mezi systémy
- **Mobile platform fragmentation**: Podpora různých verzí iOS/Android

### Business rizika
- **User adoption**: Riziko pomalého přijetí nové aplikace uživateli
- **Competitive pressure**: Konkurence může rychleji uvést podobné řešení
- **Regulatory changes**: Změny regulatorních požadavků během vývoje
- **Market volatility**: Dopad volatility trhů na investiční strategie

### Bezpečnostní rizika
- **Cyber attacks**: Riziko hackerských útoků na mobilní aplikaci
- **Data breaches**: Riziko úniku citlivých investičních dat
- **Authentication bypass**: Riziko obejití autentifikačních mechanismů
- **Malware**: Riziko malwaru na mobilních zařízeních

### Provozní rizika
- **System outages**: Riziko výpadků kritických systémů
- **Third-party dependencies**: Závislost na externích poskytovatelích
- **Staff training**: Potřeba školení personálu na nové procesy
- **Change management**: Rizika spojená s organizačními změnami

## Acceptance criteria (specific, measurable success criteria)

### Funkční kritéria
1. **Mobilní onboarding**: 95% úspěšnost vzdálené identifikace přes Bank iD
2. **Investiční transakce**: 100% úspěšnost zpracování standardních objednávek
3. **Portfolio management**: Automatické rebalancování portfolia do 24 hodin
4. **Platební procesy**: 99.9% úspěšnost platebních transakcí

### Performance kritéria
1. **Response time**: < 2 sekundy pro 95% dotazů
2. **Concurrent users**: Podpora 1000 současných uživatelů
3. **Market data**: Real-time quotes s latencí < 100ms
4. **Batch processing**: Zpracování 10,000 transakcí/hodina

### Security kritéria
1. **Authentication**: 100% úspěšnost multi-factor authentication
2. **Data encryption**: 100% dat šifrovaných AES-256
3. **Audit trail**: 100% transakcí auditovaných a logovacích
4. **Vulnerability assessment**: 0 high-severity vulnerabilities

### Compliance kritéria
1. **MiFID II**: 100% compliance s regulatorními požadavky
2. **AML/KYC**: 100% klientů prošlých KYC kontrolami
3. **GDPR**: 100% compliance s ochranou osobních údajů
4. **Audit**: Úspěšné prošlé všemi regulatory audit

### User Experience kritéria
1. **User satisfaction**: > 4.5/5 v app store ratings
2. **App adoption**: > 70% stávajících investičních klientů
3. **Support tickets**: < 5% uživatelů vyžadujících podporu
4. **Completion rate**: > 90% dokončených onboarding procesů

---

*Dokument vytvořen: 2025-07-17*
*Business Analytik: Claude Agent*
*JIRA: AP-32*
*Verze: 1.0*