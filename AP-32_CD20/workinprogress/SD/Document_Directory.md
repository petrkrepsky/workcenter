# Document_Directory

## Popis domény
The Document Services Service Domain support a range of document handling and verification functions. This Service Domain is used to register and record documents in a directory for ease of reference and is used in collaboration with Document Services

## Manažerské shrnutí  
This Service Domain provides a directory based categorization and storage mechanism for documents created and referenced by the bank

## Klíčové funkce
Capture the document content in suitable form • Capture document reference details • Capture, version, verification and amendment details • Capture document storage and archiving details

## Use Case List - Implementované případy užití:

### BRQ03: Remote Client Onboarding via Bank iD
- **Impacted process:** BRQ03 - Vzdálené zasmluvnění nového klienta
- **Systém:** HD dokumenty, e-mail systém, CD 2.0
- **Role:** Automatický systém, Nový klient
- **Input:** Smlouvní šablona, klientské údaje, digitální podpis
- **Output:** Vygenerovaná smlouva, podepsaná smlouva, archivovaný dokument
- **Typ:** Complex Manual Process

#### Detailní kroky pokryté doménou:
- **BRQ03.14** - Založení hlavičky smlouvy a generování v CRM
- **BRQ03.15** - Zobrazení smlouvy a předsmluvních informací
- **BRQ03.16** - Volitelné zaslání smlouvy na e-mail
- **BRQ03.17** - Podpis smlouvy autorizací aplikací CD 2.0
- **BRQ03.18** - Zaslání podepsané smlouvy na e-mail

### BRQ04: Existing Client Investment Service Extension
- **Impacted process:** BRQ04 - Zasmluvnění stávajícího klienta
- **Systém:** HD dokumenty, e-mail systém, CD 2.0
- **Role:** Automatický systém, Stávající klient
- **Input:** Smlouva pro investiční služby, digitální podpis
- **Output:** Generovaná investiční smlouva, podepsaná smlouva
- **Typ:** Simplified Manual Process

#### Detailní kroky pokryté doménou:
- **BRQ04.04** - Vygenerování smlouvy v HD dokumentech
- **BRQ04.05** - Zobrazení smlouvy a předsmluvních informací
- **BRQ04.06** - Volitelné zaslání na e-mail
- **BRQ04.07** - Podpis smlouvy autorizací CD 2.0
- **BRQ04.08** - Zaslání podepsané smlouvy na e-mail

## BIAN Framework Reference

### Business Object Model
**Document Directory BOM** - Obchodní objektový model pro kategorizaci a správu dokumentů vytvořených bankou.
- Reference: https://bian.org/servicelandscape-12-0-0/views/view_32239.html

### Control Record  
**Document Directory Control Record** - Řídící záznam pro evidenci a sledování dokumentů v adresářové struktuře.
- Reference: https://bian.org/servicelandscape-12-0-0/views/view_37490.html

### Domain Reference
**Document Management and Archive** - Doména spravující celý životní cyklus dokumentů včetně vytváření, ukládání a archivace.
- Reference: https://bian.org/servicelandscape-12-0-0/object_25.html?object=131585