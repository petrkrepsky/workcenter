# Party_Lifecycle_Management

## Popis domény
This service domain tracks the state of a party relationship with the bank from the initial checks made when establishing a new business relationship with a customer or partner and then that are performed as necessary over the duration of the relationship. The checks and the maintenance requirements will vary by party type (e.g. individual, company, partner) and jurisdiction. The checks cover bank specific and legal and regulatory considerations and may be updated based on a standard schedule or by request in specific circumstances.

## Manažerské shrnutí  
This service domain tracks the state of a party relationship with the bank from the initial checks made during the establishment of a new party connection and subsequently maintained as necessary over the duration of the relationship. The checks and the maintenance requirements will vary by party type and jurisdiction. The checks cover bank specific and legal and regulatory considerations and may be updated based on a standard schedule or by request in specific circumstances.

## Klíčové funkce
Perform party qualification/confirmation checks • Maintain a schedule and perform periodic re-assessments • Provide status reports and process status update notifications

## Use Case List - Implementované případy užití:

### BRQ03: Remote Client Onboarding via Bank iD
- **Impacted process:** BRQ03 - Vzdálené zasmluvnění nového klienta
- **Systém:** CD 2.0, Bank iD, SEZAM, CRM, AML systém
- **Role:** Nový klient, Automatický systém
- **Input:** Požadavek na identifikaci, identifikační údaje, kontaktní údaje, AML dotazník
- **Output:** Ověřená digitální identita, CRM záznam, AML schválení
- **Typ:** Complex Manual Process

#### Detailní kroky pokryté doménou:
- **BRQ03.01** - Iniciace vzdálené identifikace přes Bank iD
- **BRQ03.02** - Provedení vzdálené identifikace v Bank iD  
- **BRQ03.06** - Kontrola jedinečnosti telefonu vůči SEZAM
- **BRQ03.07** - Ověření jedinečnosti RČ vůči CRM
- **BRQ03.08** - Založení klienta do CRM pod novou úroveň obsluhy
- **BRQ03.09** - Vyplnění AML a Investičního dotazníku
- **BRQ03.10** - Automatické AML a obchodní schválení v CRM
- **BRQ03.11** - Založení digitální identity v SEZAM
- **BRQ03.20** - Založení klienta ve WAC

## BIAN Framework Reference

### Business Object Model
**Party Lifecycle Management BOM** - Obchodní objektový model definující strukturu a vztahy pro správu životního cyklu stran.
- Reference: https://bian.org/servicelandscape-12-0-0/views/view_41963.html

### Control Record  
**Party Lifecycle Management Control Record** - Řídící záznam pro sledování stavu a postupů správy životního cyklu stran.
- Reference: https://bian.org/servicelandscape-12-0-0/views/view_48338.html

### Domain Reference
**Party** - Doména spravující informace o stranách (klienti, partneři, dodavatelé) a jejich vztazích s bankou.
- Reference: https://bian.org/servicelandscape-12-0-0/object_25.html?object=131261