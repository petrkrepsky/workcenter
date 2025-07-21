# Investment_Portfolio_Management

## Popis domény
Orchestrate the investment/ rebalancing of an investment portfolio to optimize gains remaining within the terms of the portfolio 'charter' or agreement

## Manažerské shrnutí  
Manage an investment portfolio, initiating trading to leverage market opportunities, remaining within portfolio trading policies

## Klíčové funkce
Monitor market for opportunities/threats • Match identified trading opportunity to investment portfolio policies • Initiate market trades to rebalance/improve portfolio make-up

## Use Case List - Implementované případy užití:

### BRQ05: Investment Strategy Activation and Portfolio Setup
- **Impacted process:** BRQ05 - Aktivace první strategie
- **Systém:** TOPAS, TA
- **Role:** Automatický systém
- **Input:** Potvrzená strategie, CRM ID, strategie parametry
- **Output:** Vytvořené portfolio s KID, aktivní investiční strategie
- **Typ:** Automated Process with Manual Confirmation

#### Detailní kroky pokryté doménou:
- **BRQ05.05** - Založení portfolia do TOPAS
- **BRQ05.06** - Založení strategie do TA systému
- **BRQ05.07** - Potvrzení úspěšné aktivace klientovi

### BRQ08: Automated Fund Purchase Execution
- **Impacted process:** BRQ08 - Nákup fondů
- **Systém:** TOPAS, TA, Fund Trading System, Settlement System
- **Role:** Automatický systém
- **Input:** Peněžní prostředky, strategie, fond poměry
- **Output:** Provedené nákupy fondů, aktualizované portfolio
- **Typ:** Fully Automated Process

#### Detailní kroky pokryté doménou:
- **BRQ08.01** - Denní monitoring všech peněžních složek k investici
- **BRQ08.02** - Kontrola dostupnosti minimální částky strategie
- **BRQ08.03** - Vytvoření objednávek v poměru fondů podle strategie
- **BRQ08.04** - Kontrola že validace není potřebná (byla při aktivaci)
- **BRQ08.05** - Zadání objednávek na nákup fondů
- **BRQ08.06** - Standardní vypořádání obchodů
- **BRQ08.07** - Aktualizace složení portfolia v TOPAS

### BRQ09: Fund Redemption and Sale Processing
- **Impacted process:** BRQ09 - Prodej fondů
- **Systém:** CD 2.0, TOPAS, Fund Trading System, Settlement System
- **Role:** Klient, Automatický systém
- **Input:** Instrukce k prodeji, aktuální složení portfolia
- **Output:** Provedené prodeje, prostředky na výnosové složce, aktualizované portfolio
- **Typ:** Manual Trigger, Automated Execution

#### Detailní kroky pokryté doménou:
- **BRQ09.01** - Zadání instrukce k prodeji části/celého portfolia
- **BRQ09.02** - Výpočet poměru jednotlivých fondů na portfoliu
- **BRQ09.03** - Vytvoření X pokynů ke zpětnému odkupu dle poměru
- **BRQ09.04** - Zadání instrukce k prodeji konkrétního fondu
- **BRQ09.05** - Vytvoření pokynu ke zpětnému odkupu konkrétního fondu
- **BRQ09.06** - Zadání pokynů ke zpětnému odkupu
- **BRQ09.07** - Standardní vypořádání redemption obchodů
- **BRQ09.08** - Připisování prostředků na peněžní složku pro výnosy
- **BRQ09.09** - Aktualizace složení portfolia po prodeji

### BRQ10: Investment Proceeds Withdrawal
- **Impacted process:** BRQ10 - Výběr peněžních prostředků
- **Systém:** CD 2.0, TOPAS
- **Role:** Klient, Automatický systém
- **Input:** Instrukce k výběru, dostupný zůstatek na výnosové složce
- **Output:** Připravené prostředky k převodu
- **Typ:** Manual Process

#### Detailní kroky pokryté doménou:
- **BRQ10.01** - Zadání instrukce k výběru z výnosové složky
- **BRQ10.02** - Výběr autorizovaného účtu pro výběr
- **BRQ10.03** - Kontrola dostupnosti prostředků na výnosové složce

### BRQ11: Investment Proceeds Reinvestment
- **Impacted process:** BRQ11 - Reinvestování peněžních prostředků v rámci strategie
- **Systém:** CD 2.0, TOPAS
- **Role:** Klient, Automatický systém
- **Input:** Instrukce k reinvestování, prostředky na výnosové složce
- **Output:** Prostředky převedené na investiční složku, připravené pro další cyklus
- **Typ:** Manual Trigger, Automated Execution

#### Detailní kroky pokryté doménou:
- **BRQ11.01** - Zadání instrukce k reinvestování
- **BRQ11.02** - Kontrola dostupných prostředků na výnosové složce
- **BRQ11.03** - Převod z peněžní složky výnosů na složku k investicím
- **BRQ11.04** - Potvrzení úspěšného reinvestování
- **BRQ11.05** - Příprava prostředků pro další investiční cyklus (BRQ08)

### BRQ12: Corporate Actions and Dividend Processing
- **Impacted process:** BRQ12 - Korporátní akce
- **Systém:** Corporate Actions System, TOPAS, CD 2.0
- **Role:** Automatický systém
- **Input:** Data o korporátních akcích, portfolio holdings
- **Output:** Zpracované korporátní akce, připsané dividendy, aktualizované portfolio
- **Typ:** Fully Automated Process

#### Detailní kroky pokryté doménou:
- **BRQ12.01** - Monitoring korporátních akcí od správců fondů
- **BRQ12.02** - Standardní zpracování korporátních akcí
- **BRQ12.03** - Výpočet dividend podle držených pozic
- **BRQ12.04** - Připisování dividend na peněžní složku pro výnosy
- **BRQ12.05** - Notifikace klienta o připsaných dividendách
- **BRQ12.06** - Aktualizace portfolia po korporátních akcích

## BIAN Framework Reference

### Business Object Model
**Investment Portfolio Management BOM** - Obchodní objektový model pro orchestraci správy investičních portfolií.
- Reference: https://bian.org/servicelandscape-12-0-0/views/view_45014.html

### Control Record  
**Investment Portfolio Management Control Record** - Řídící záznam pro správu a rebalancování investičních portfolií.
- Reference: https://bian.org/servicelandscape-12-0-0/views/view_30485.html

### Domain Reference
**Investment Management** - Doména spravující aktivní správu investičních portfolií s cílem optimalizace výnosů v rámci stanovených parametrů.
- Reference: https://bian.org/servicelandscape-12-0-0/object_25.html?object=131120