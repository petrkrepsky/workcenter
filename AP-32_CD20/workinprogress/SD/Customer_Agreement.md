# Customer_Agreement

## Popis domény
The Customer Agreement service domain captures and maintains the master legal terms of conditions in force for a customer (which as noted can be a complex multinational with many underlying product and service specific agreements).

## Manažerské shrnutí  
This service domain maintains the master customer agreement/legal contract. Note that a customer can be a complex corporate entity with many subsidiaries operating in different geopolitical areas. The customer agreement is linked to as many Sales Product Agreements as needed for all in-force products

## Klíčové funkce
Set-up and maintain the customer master agreement • Ensure legal, regulatory and corporate considerations are covered in agreement • Determine if proposed actions are covered by the agreement

## Use Case List - Implementované případy užití:

### BRQ03: Remote Client Onboarding via Bank iD
- **Impacted process:** BRQ03 - Vzdálené zasmluvnění nového klienta
- **Systém:** HD dokumenty, e-mail systém, CD 2.0, CRM
- **Role:** Nový klient, Automatický systém
- **Input:** Klientské údaje, typ smlouvy, digitální podpis
- **Output:** Vygenerovaná smlouva, podepsaná smlouva, aktualizovaný CRM
- **Typ:** Complex Manual Process

#### Detailní kroky pokryté doménou:
- **BRQ03.14** - Založení hlavičky smlouvy a generování v CRM
- **BRQ03.15** - Zobrazení smlouvy a předsmluvních informací
- **BRQ03.16** - Volitelné zaslání smlouvy na e-mail
- **BRQ03.17** - Podpis smlouvy autorizací aplikací CD 2.0
- **BRQ03.18** - Zaslání podepsané smlouvy na e-mail
- **BRQ03.19** - Propis uzavření smlouvy do CRM

### BRQ04: Existing Client Investment Service Extension
- **Impacted process:** BRQ04 - Zasmluvnění stávajícího klienta
- **Systém:** HD dokumenty, e-mail systém, CD 2.0, CRM
- **Role:** Stávající klient, Automatický systém
- **Input:** Existující klientské údaje, smlouva pro investiční služby
- **Output:** Generovaná investiční smlouva, podepsaná smlouva, aktualizovaný profil
- **Typ:** Simplified Manual Process

#### Detailní kroky pokryté doménou:
- **BRQ04.03** - Založení hlavičky smlouvy pro investiční služby
- **BRQ04.04** - Vygenerování smlouvy v HD dokumentech
- **BRQ04.05** - Zobrazení smlouvy a předsmluvních informací
- **BRQ04.06** - Volitelné zaslání na e-mail
- **BRQ04.07** - Podpis smlouvy autorizací CD 2.0
- **BRQ04.08** - Zaslání podepsané smlouvy na e-mail
- **BRQ04.09** - Propis uzavření smlouvy do CRM

## BIAN Framework Reference

### Business Object Model
**Customer Agreement BOM** - Obchodní objektový model definující strukturu hlavních smluvních podmínek se zákazníky.
- Reference: https://bian.org/servicelandscape-12-0-0/views/view_47447.html

### Control Record  
**Customer Agreement Control Record** - Řídící záznam pro správu a sledování zákaznických smluv a právních kontraktů.
- Reference: https://bian.org/servicelandscape-12-0-0/views/view_33982.html

### Domain Reference
**Customer Management** - Doména spravující všechny aspekty vztahů se zákazníky včetně smluvních ujednání.
- Reference: https://bian.org/servicelandscape-12-0-0/object_25.html?object=130142