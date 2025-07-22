# Clear Deal 2.0 - Kompletní shrnutí use cases

## Přehled projektu
**Projekt:** AP-32 Clear Deal 2.0 - Mobilní investiční platforma J&T Banky  
**Datum vytvoření:** 2025-07-22  
**BIAN Framework:** Kompletní business architektura založená na 10 Service Domains

## Souhrn vytvořených use cases

Tento dokument poskytuje kompletní přehled všech individuálních use cases vytvořených pro Clear Deal 2.0 platformu. Každý use case byl vytvořen na základě systematické analýzy BIAN Service Domains a propojení s konkrétními Figma screen designs.

## Vytvořené use case soubory

### Investment Portfolio Planning Domain
| Use Case ID | Název | BRQ Process | Soubor |
|-------------|-------|-------------|---------|
| UC-011 | Zobrazení tří variant modelace strategie | BRQ02.01 | UC-011_tri_varianty_modelace_strategie.md |
| UC-012 | Výběr varianty "Cílová částka - známá doba" | BRQ02.02 | UC-012_cilova_castka_znama_doba.md |
| UC-013 | Výpočet potřebné výše pravidelného vkladu | BRQ02.03 | UC-013_vystup_potrebny_mesicni_vklad.md |
| UC-014 | Initial Investment Strategy Creation and Modeling | BRQ02 | UC-014_initial_investment_strategy_creation.md |

### Party Authentication Domain
| Use Case ID | Název | BRQ Process | Soubor |
|-------------|-------|-------------|---------|
| UC-010 | Digital Client Application Setup | BRQ01 | UC-010_digital_client_application_setup.md |
| UC-015 | Přihlášení stávajícího klienta prostřednictvím SMS | BRQ01.02 | UC-015_prihlaseni_stavajici_klient_sms.md |

### Party Lifecycle Management Domain
| Use Case ID | Název | BRQ Process | Soubor |
|-------------|-------|-------------|---------|
| UC-016 | Iniciace vzdálené identifikace přes Bank iD | BRQ03.01 | UC-016_iniciace_vzdalene_identifikace_bank_id.md |

### Investment Portfolio Management Domain
| Use Case ID | Název | BRQ Process | Soubor |
|-------------|-------|-------------|---------|
| UC-017 | Založení portfolia do TOPAS | BRQ05.05 | UC-017_zalozeni_portfolia_do_topas.md |

### Customer Offer Domain (Orchestration)
| Use Case ID | Název | BRQ Process | Soubor |
|-------------|-------|-------------|---------|
| UC-001 | Orchestrace strategické prezentace a tvorby nabídky | Cross-process | UC-001_orchestrace_strategicke_prezentace.md |
| UC-002 | Cross-Domain Data Orchestration | Cross-domain sync | UC-002_cross_domain_data_orchestration.md |
| UC-003 | Real-time Customer Journey Tracking | Journey monitoring | UC-003_real_time_customer_journey_tracking.md |
| UC-004 | Automated Compliance Coordination | Compliance orchestration | UC-004_automated_compliance_coordination.md |
| UC-005 | Intelligent Offer Personalization | AI personalization | UC-005_intelligent_offer_personalization.md |
| UC-006 | Omnichannel Experience Orchestration | Multi-channel | UC-006_omnichannel_experience_orchestration.md |

### Party Lifecycle Management Domain (Extended)
| Use Case ID | Název | BRQ Process | Soubor |
|-------------|-------|-------------|---------|
| UC-007 | Party Lifecycle Onboarding Management | BRQ03 | UC-007_party_lifecycle_onboarding.md |
| UC-008 | Customer Relationship Lifecycle Management | Long-term relationship | UC-008_customer_relationship_lifecycle.md |
| UC-009 | Customer Data Governance & Privacy Management | GDPR compliance | UC-009_customer_data_governance.md |

## Mapování na Figma screens

### Screen Section Coverage
Všechny vytvořené use cases jsou propojeny s relevantními Figma screen sections:

| Screen Section | Node ID | Počet Connected Use Cases | Klíčové Use Cases |
|----------------|---------|---------------------------|-------------------|
| 01: App Launch | 328:33726 | 2 | UC-010, UC-015 |
| 02: Login Entry | 1885:18661 | 3 | UC-010, UC-015, UC-016 |
| 03: Authentication Flow | 353:8000 | 2 | UC-010, UC-015 |
| 04: PIN Setup | 1766:13810 | 1 | UC-010 |
| 05: PIN Authentication | 72:5853 | 1 | UC-010 |
| 06: Main Dashboard | 59:2433 | 4 | UC-001, UC-005, UC-008, UC-017 |
| 07: Investment Strategy | 1872:20026 | 6 | UC-001, UC-005, UC-011, UC-012, UC-013, UC-014 |

## Kompletní inventář všech use cases z SD domain souborů

### Celkový přehled use cases podle domén
**Celkový počet identifikovaných use cases: 120**

| BIAN Domain | Počet Use Cases | Pokrytí soubory |
|-------------|-----------------|-----------------|
| Consumer_Investments | 4 | 0 |
| Customer_Agreement | 13 | 0 |
| Customer_Offer | 6 | 6 ✅ |
| Document_Directory | 10 | 0 |
| Investment_Portfolio_Management | 33 | 1 |
| Investment_Portfolio_Planning | 17 | 4 ✅ |
| Party_Authentication | 9 | 2 |
| Party_Lifecycle_Management | 9 | 4 ✅ |
| Payment_Execution | 12 | 0 |
| Payment_Initiation | 13 | 0 |

### Pokrytí BRQ procesů
**Implementované BRQ procesy:**
- **BRQ01:** Digital Client Application Setup - ✅ Pokryto (UC-010, UC-015)
- **BRQ02:** Initial Investment Strategy Creation - ✅ Pokryto (UC-011, UC-012, UC-013, UC-014)
- **BRQ03:** Remote Client Onboarding via Bank iD - ✅ Pokryto (UC-016)
- **BRQ05:** Investment Strategy Activation - ✅ Pokryto (UC-017)

**Nepokryté BRQ procesy pro další implementaci:**
- BRQ04: Existing Client Investment Service Extension
- BRQ06: Bank Account Transfer Processing
- BRQ07: Card Payment Processing
- BRQ08: Automated Fund Purchase Execution
- BRQ09: Fund Redemption and Sale Processing
- BRQ10: Investment Proceeds Withdrawal
- BRQ11: Investment Proceeds Reinvestment
- BRQ12: Corporate Actions and Dividend Processing

## Struktura use case souborů

Každý use case soubor obsahuje standardizovanou strukturu:

```markdown
# UC-XXX: [Název Use Case]

## BIAN Section
- Domain Information
- BIAN Framework References  
- BIAN Domain Description

## Use Case Details
- Základní informace
- Systems
- Actors  
- Inputs
- Outputs
- Data Requirements

## FIGMA Screens
- Primary screens s Figma URLs
- Screen connections a propojení

## Business Value & Metrics
- Key matrix
- Expected business benefits
- Acceptance criteria
```

## Technické požadavky pokryté use cases

### API Requirements
- **Authentication APIs:** Multi-factor authentication (UC-010, UC-015)
- **Strategy Planning APIs:** Mathematical calculations (UC-011, UC-012, UC-013)
- **Integration APIs:** TOPAS integration (UC-017), Bank iD integration (UC-016)
- **Orchestration APIs:** Cross-domain coordination (UC-001 through UC-006)

### Data Architecture
- **Customer Data:** Comprehensive customer profiles and lifecycle management
- **Investment Data:** Strategy configurations, portfolio management
- **Authentication Data:** Multi-factor security implementation
- **Integration Data:** External system connectivity (TOPAS, Bank iD, SEZAM)

### Security & Compliance
- **GDPR Compliance:** Data privacy management (UC-009)
- **MiFID Compliance:** Investment suitability (UC-004, UC-014)
- **Banking Security:** Authentication and fraud prevention (UC-010, UC-015)

## Business Value Summary

### Klíčové business benefits
1. **Mobile-first Investment Platform:** Kompletní mobilní investiční řešení
2. **Automated Portfolio Management:** Automatizovaná správa portfolií
3. **Regulatory Compliance:** Built-in compliance s bankovními regulacemi
4. **Customer Experience Orchestration:** Koordinovaná zákaznická cesta
5. **Real-time Personalization:** AI-driven personalizace nabídek

### Očekávané metriky
- **Customer Onboarding:** 85% completion rate přes Bank iD
- **Strategy Creation:** 70% conversion z dashboard na aktivní strategii
- **Authentication Success:** 98% úspěšnost SMS autentizace
- **Portfolio Setup:** 95% úspěšnost TOPAS integrace

## Implementační priorita

### Fáze 1: Core Authentication & Strategy Creation
- UC-010, UC-015 (Authentication)
- UC-011, UC-012, UC-013, UC-014 (Investment Strategy)
- **Business Impact:** Základní funkcionality pro launch

### Fáze 2: Onboarding & Portfolio Management  
- UC-016 (Bank iD Integration)
- UC-017 (TOPAS Integration)
- **Business Impact:** Kompletní customer journey

### Fáze 3: Advanced Orchestration & Personalization
- UC-001 through UC-006 (Customer Offer Orchestration)
- UC-007, UC-008, UC-009 (Lifecycle Management)
- **Business Impact:** Diferenciace a competitive advantage

## Status dokončení

**Vytvořeno:** 16 detailních use case souborů  
**Pokrytí:** 16 z 120 identifikovaných use cases (13.3%)  
**Domain Coverage:** 5 z 10 BIAN Service Domains  
**Screen Coverage:** Všech 7 Figma screen sections propojeno  
**BRQ Coverage:** 4 z 12 hlavních BRQ procesů implementováno

---
*Comprehensive Use Case Summary vytvořen: 2025-07-22*  
*Projekt: AP-32 Clear Deal 2.0*  
*Funkční analytik: BIAN-compliant business architecture*