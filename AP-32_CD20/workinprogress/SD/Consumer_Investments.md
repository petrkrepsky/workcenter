# Consumer_Investments

## Popis domény
This supports consumer initiated securities investment and trading activity for their self-managed securities investments. Trades will typically be blocked/netted against the bank's own securities position for subsequent market execution. Quotes/prices are based on the prevailing price at the time of the customer instruction to trade

## Manažerské shrnutí  
Handle the consumer front-end trading requests. These will typically be blocked/netted for market execution

## Klíčové funkce
Provide price quotes • Initiate market order for consumer customer • Update banks security position

## Use Case List - Implementované případy užití:

### BRQ09: Fund Redemption and Sale Processing
- **Impacted process:** BRQ09 - Prodej fondů
- **Systém:** CD 2.0, TOPAS, Fund Trading System
- **Role:** Klient, Automatický systém
- **Input:** Klientská instrukce k prodeji fondů
- **Output:** Provedené prodeje dle klientských instrukcí
- **Typ:** Manual Trigger, Automated Execution

#### Detailní kroky pokryté doménou:
- **BRQ09.01** - Zadání instrukce k prodeji části/celého portfolia
- **BRQ09.04** - Zadání instrukce k prodeji konkrétního fondu

### BRQ08: Automated Fund Purchase Execution
- **Impacted process:** BRQ08 - Nákup fondů  
- **Systém:** TOPAS, TA, Fund Trading System
- **Role:** Automatický systém (na základě klientské strategie)
- **Input:** Strategie poměry fondů, dostupné prostředky
- **Output:** Automatické nákupy fondů dle strategie
- **Typ:** Fully Automated Process

#### Detailní kroky pokryté doménou:
- **BRQ08.05** - Zadání objednávek na nákup fondů
- **BRQ09.06** - Zadání pokynů ke zpětnému odkupu

## BIAN Framework Reference

### Business Object Model
**Consumer Investments BOM** - Obchodní objektový model pro spotřebitelské investiční a obchodní aktivity.
- Reference: https://bian.org/servicelandscape-12-0-0/views/view_34743.html

### Control Record  
**Consumer Investments Control Record** - Řídící záznam pro správu front-end obchodních požadavků spotřebitelů.
- Reference: https://bian.org/servicelandscape-12-0-0/views/view_41312.html

### Domain Reference
**Consumer Services** - Doména spravující investiční služby pro spotřebitele včetně samoobslužného obchodování s cennými papíry.
- Reference: https://bian.org/servicelandscape-12-0-0/object_25.html?object=130111