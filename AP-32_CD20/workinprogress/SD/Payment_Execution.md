# Payment_Execution

## Popis domény
Payment Execution handles the back-end processing of a movement funds from a debtor account to a creditor account. Payments need to have been authorized and validated against customer/bank agreements before being instructed to Payment Execution. Payment Execution then determines whether debtor and creditor accounts are held within the bank and if not selects the appropriate payment mechanism/channel to use to complete the transfer. It is responsible for ensuring that both (or neither) sides of the exchange are completed successfully

## Manažerské shrnutí  
This service domains processes the movement of funds between accounts within the bank or to/from an account held with another bank, selecting the appropriate payment mechanism

## Klíčové funkce
Determine the appropriate payment mechanism • Retrieve counterparty payment instructions/preferences • Generate creditor and debtor instructions • Confirm (and report) both legs of the movement are completed

## Use Case List - Implementované případy užití:

### BRQ06: Bank Account Transfer Processing
- **Impacted process:** BRQ06 - Převod peněžních prostředků z účtu
- **Systém:** Banking System, TOPAS, CD 2.0, QR Generator
- **Role:** Klient, Automatický systém
- **Input:** Platební údaje, QR kód, platební příkazy
- **Output:** Přijaté platby, prostředky připisované na portfolio
- **Typ:** Semi-automated Process

#### Detailní kroky pokryté doménou:
- **BRQ06.01** - Zobrazení platebních údajů v mobilní aplikaci
- **BRQ06.02** - Generování QR kódu s volitelnou částkou
- **BRQ06.04** - Obdržení platby bankou
- **BRQ06.05** - Připisování peněžních prostředků na peněžní složku portfolia
- **BRQ06.06** - Zobrazení platebních údajů pro trvalý příkaz
- **BRQ06.07** - Generování QR kódu s částkou, frekvencí a datem
- **BRQ06.09** - Pravidelné obdržení plateb podle trvalého příkazu
- **BRQ06.10** - Pravidelné připisování na peněžní složku portfolia

### BRQ10: Investment Proceeds Withdrawal
- **Impacted process:** BRQ10 - Výběr peněžních prostředků
- **Systém:** TOPAS, JTB Banking System, OBOFT
- **Role:** Automatický systém
- **Input:** Instrukce k výběru, cílový účet, prostředky na výnosové složce
- **Output:** Provedený převod (interní nebo externí)
- **Typ:** Manual Process

#### Detailní kroky pokryté doménou:
- **BRQ10.04** - Automatický převod na JTB účet (pokud je cíl JTB)
- **BRQ10.05** - Generování OBOFT požadavku (pokud je cíl externí)
- **BRQ10.06** - Zpracování převodu přes OBOFT (externí účty)
- **BRQ10.07** - Potvrzení úspěšného výběru klientovi

## BIAN Framework Reference

### Business Object Model
**Payment Execution BOM** - Obchodní objektový model pro zpracování převodů peněžních prostředků mezi účty.
- Reference: https://bian.org/servicelandscape-12-0-0/views/view_37510.html

### Control Record  
**Payment Execution Control Record** - Řídící záznam pro back-end zpracování platebních transakcí.
- Reference: https://bian.org/servicelandscape-12-0-0/views/view_43630.html

### Domain Reference
**Payments** - Doména spravující celý životní cyklus platebních transakcí včetně výběru vhodných platebních mechanizmů.
- Reference: https://bian.org/servicelandscape-12-0-0/object_25.html?object=130771