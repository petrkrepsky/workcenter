# Payment_Initiation

## Popis domény
This service domain supports payment services for consumer and business customers. Payments are made to other accounts within the bank, other banks and possibly internationally using whatever payments mechanism is suited to the transaction (See Payments Order/Execution). The service domain can support single transactions, or manage repeating/scheduled payments if requested

## Manažerské shrnutí  
This service domain provides a customer payment service. It captures the payer and payee details and other key properties of the payment and orchestrates the transaction. It provides support for repeating/scheduled payments

## Klíčové funkce
Capture payment instruction details • Verify/validate payment transaction (check funds available) • Initiation payment order processing • Retain, apply and update repeating remittances

## Use Case List - Implementované případy užití:

### BRQ07: Card Payment Processing
- **Impacted process:** BRQ07 - Zaslání peněžních prostředků platební kartou
- **Systém:** CD 2.0, Platební brána, Karetní centrum, Apple/Google Pay, Banking System, TOPAS
- **Role:** Klient, Automatický systém
- **Input:** Údaje platební karty, výše převodu, autorizace, parametry rekurence
- **Output:** Autorizované platby, technický debet, rekurentní nastavení
- **Typ:** Semi-automated Process

#### Detailní kroky pokryté doménou:
**Jednorázová platba kartou:**
- **BRQ07.01** - Zadání požadavku na převod z platební karty
- **BRQ07.02** - Zadání údajů platební karty
- **BRQ07.03** - Alternativně výběr ApplePay/GooglePay
- **BRQ07.04** - Odeslání požadavku do karetního centra přes bránu
- **BRQ07.05** - Autorizace platby klientem podle pravidel banky
- **BRQ07.06** - Vytvoření technického debetu po autorizaci
- **BRQ07.07** - Obdržení platby a vyrovnání technického debetu

**Pravidelná platba kartou:**
- **BRQ07.08** - Zadání požadavku na pravidelnou platbu kartou
- **BRQ07.09** - Zadání parametrů pravidelné platby
- **BRQ07.10** - Autorizace první platby a souhlas s rekurencí
- **BRQ07.11** - Pravidelné podávání požadavků dle frekvence
- **BRQ07.12** - Změna parametrů pravidelné platby
- **BRQ07.13** - Zrušení pravidelné platby kartou

## BIAN Framework Reference

### Business Object Model
**Payment Initiation BOM** - Obchodní objektový model pro iniciaci platebních služeb pro spotřebitele a podniky.
- Reference: https://bian.org/servicelandscape-12-0-0/views/view_46403.html

### Control Record  
**Payment Initiation Control Record** - Řídící záznam pro správu a orchestraci platebních instrukcí.
- Reference: https://bian.org/servicelandscape-12-0-0/views/view_30409.html

### Domain Reference
**Payments** - Doména poskytující platební služby včetně jednorázových a pravidelných plateb v rámci i mimo banku.
- Reference: https://bian.org/servicelandscape-12-0-0/object_25.html?object=130771