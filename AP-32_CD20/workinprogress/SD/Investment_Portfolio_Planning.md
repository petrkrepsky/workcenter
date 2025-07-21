# Investment_Portfolio_Planning

## Popis domény
Agree the customer investment portfolio governing principles, risk appetite, management/trading guidelines and target portfolio profile. Identify any desired/target and 'out of bounds' securities/sectors. Ensure disclosures and related eligibility, suitability and other regulatory obligations are addressed and reflected in the agreement

## Manažerské shrnutí  
Agree the policies and required make-up of an investment portfolio and ensure all required bank and regulatory terms and conditions are addressed

## Klíčové funkce
Identify and agree investment portfolio properties and make-up (includes risk appetite) • Handle regulatory and bank requirements (e.g. disclosures, suitability, eligibility) • Identify any target and securities to avoid • Agree key roles and schedules for the investment portfolio handling

## Use Case List - Implementované případy užití:

### BRQ02: Initial Investment Strategy Creation and Modeling
- **Impacted process:** BRQ02 - Vytvoření první investiční strategie
- **Systém:** CD 2.0, Strategy Calculator, lokální úložiště
- **Role:** Klient, Automatický systém
- **Input:** Investiční parametry (cílová částka, doba, měsíční vklad), předpokládaný výnos
- **Output:** Vypočítané strategie, grafy s scénáři, uložená strategie
- **Typ:** Interactive Manual Process

#### Detailní kroky pokryté doménou:
- **BRQ02.01** - Zobrazení tří variant modelace strategie
- **BRQ02.02** - Výběr varianty "Cílová částka - známá doba"
- **BRQ02.03** - Výpočet potřebné výše pravidelného vkladu (Cílová částka)
- **BRQ02.04** - Výběr varianty "Cílová částka - známý měsíční vklad"
- **BRQ02.05** - Výpočet potřebné doby investování (Cílová částka)
- **BRQ02.06** - Výběr varianty "Renta - známý měsíční vklad"
- **BRQ02.07** - Výpočet doby čerpání renty (Renta)
- **BRQ02.08** - Výběr varianty "Renta - známá doba čerpání"
- **BRQ02.09** - Výpočet potřebné výše pravidelného vkladu (Renta)
- **BRQ02.10** - Výběr varianty "Bez cíle"
- **BRQ02.11** - Výpočet cílové částky (Bez cíle)
- **BRQ02.12** - Zobrazení vývoje v grafu (tři scénáře)
- **BRQ02.13** - Uložení strategie pro pozdější použití

### BRQ05: Investment Strategy Activation and Portfolio Setup
- **Impacted process:** BRQ05 - Aktivace první strategie
- **Systém:** CD 2.0, Investment Questionnaire System
- **Role:** Klient, Automatický systém
- **Input:** Uložená strategie, investiční profil z dotazníku
- **Output:** Validovaná strategie, potvrzení vhodnosti/varování
- **Typ:** Automated Process with Manual Confirmation

#### Detailní kroky pokryté doménou:
- **BRQ05.01** - Zobrazení vytvořené strategie po zasmluvnění
- **BRQ05.02** - Validace strategie vůči Investičnímu dotazníku (nový klient)
- **BRQ05.03** - Zobrazení případných varování o nevhodnosti
- **BRQ05.04** - Finální potvrzení strategie klientem

## BIAN Framework Reference

### Business Object Model
**Investment Portfolio Planning BOM** - Obchodní objektový model definující strukturu plánování investičních portfolií.
- Reference: https://bian.org/servicelandscape-12-0-0/views/view_33723.html

### Control Record  
**Investment Portfolio Planning Control Record** - Řídící záznam pro správu procesů plánování investičních portfolií.
- Reference: https://bian.org/servicelandscape-12-0-0/views/view_30176.html

### Domain Reference
**Investment Management** - Doména spravující všechny aspekty investičních služeb včetně plánování portfolií a správy rizik.
- Reference: https://bian.org/servicelandscape-12-0-0/object_25.html?object=131120