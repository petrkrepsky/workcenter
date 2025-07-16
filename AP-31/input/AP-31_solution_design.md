US 5901 - Přehled FX derivátů v portfoliu
Obsah
Obsah
Historie verzí
Zkratky, pojmy a formáty
User story
AS IS stav
Odůvodnění TO BE stavu
TO BE stav
Stav obchodu aktivní vs. zrušený
Nohy obchodu
Vypořádání obchodu
Hodnota ocenění zisku/ztráty v %
Přiřazení na portfólio
Ocenění majetku klienta
Hodnota portfólia
Graf vývoje hodnoty portfólia
Koláčové grafy
Integrace
DK-Kafka
Topic Deriváty
Topic Ocenění
DK-backend systém
Číselníky
Číselník směrů obchodu pro FX deriváty
Číselník typů obchodu pro FX deriváty 
Číselník typů nohou obchodu pro FX deriváty 
Doplňující informace
Historie verzí
Verze
Zveřejněno
Změnil
Komentář
AKTUÁLNÍ (v. 36)	led 17, 2025 12:29	
 Ikona uživatele: EX8101514	Škopová Markéta
v. 35	pro 02, 2024 15:39	
 Ikona uživatele: EX8101514	Škopová Markéta
v. 34	pro 02, 2024 15:31	
 Ikona uživatele: EX8101514	Škopová Markéta
přesunutí popisu kapitoly Stav obchodu aktivní vs. zrušený do SD Blotter
v. 33	říj 10, 2024 13:24	
 Ikona uživatele: JT0032076	Nejedlý Tadeáš
Oprava linků na confluence
v. 32	říj 10, 2024 13:17	
 Ikona uživatele: JT0032076	Nejedlý Tadeáš
Oprava linků na confluence
Přejít na historii stránky
Zkratky, pojmy a formáty
Nevyřešená část, která bude doplněna po získání informací
Název
Typ
Popis
XXX	Produkt	...



User story

productboard - Přehled FX derivátů v portfóliu
AS IS stav
Blotter - drží FX spoty, outrighty, swapy, vazbu na klienta, případně vazbu vazby na portfolia.
FX deriváty má na portfoliu nižší stovky klientů (cca 200)
Konfirmace a výpisy jsou již součástí konfirmací a výpisů z Xerox - jen ty na portfolio - konfirmace z Blotteru jdou na klienta emailem
FX deriváty jsou nakupované ze SÚ a mají tedy vazbu na portfolio nebo jsou nakupované z BÚ a tuto vazbu nemají
Ocenění probíhá v systému RMR (risk DB), zde jsou ocenění od cca 2021, starší ocenění jsou v Quaestoru MRM zajištění těchto derivátů nepočítá správně podle risku. - diskuze s Riskem - vede na jiný projekt
Všechny aktivní/otevřené FX deriváty jsou dostupné v Blotteru
doplnění historických dat do Blotteru Nelze nalézt Jira server pro toto makro. Může to být kvůli konfiguraci odkazu aplikace.  - zatím se neřeší
Odůvodnění TO BE stavu
V TO BE stavu budou DKCZ získávat údaje o FX derivátech z Blotteru formou Kafka topicu.  Ocenění derivátů budou DKCZ získávat pomocí Kafka topicu z RMR.
Dopady na jiné US
Výpisy, konfirmace - bez dopadu - FX deriváty nakupované z BÚ nemají vazbu na portfólio  - výpisy a konfirmace k nim - jdou emailem z Blotteru přímo na klienta (nebudou v DKCZ)
Součet hodnot portfólia US 5703 - Zobrazit detail investičního portfólia - Hodnota portfólia a investovaných aktiv 
je potřeba rozšířit o hodnoty FX derivátů (upravit výpočet, přidat nový zdroj - topic)
do ocenění portfólia je potřeba připočíst ocenění pozice a to je "zisk/ztráta" (počet kusů je 1) v referenční měně
nezařazené na portfólio budou započteny také - jsou přiděleny na "virtuální portfólio" nazývané Termínové obchody
Zobrazení grafu vývoje hodnoty US 5704 - Zobrazit vývoj hodnoty portfolia pomocí grafu )
pro FX deriváty nebude graf vývoje hodnoty zobrazován
Graf rozložení podle produktů a podle měn US 5703 - Zobrazit detail investičního portfólia - Koláčové grafy
Fx deriváty se budou zobrazovat, započtena bude položka zisk/ztráta z topicu Ocenění 
Pro graf měny se bude započítávat současná hodnota hlavní a vedlejší měny z topicu Ocenění
FX deriváty nejsou provázány na Produktový katalog - informace z PK proto DKCZ v této souvislosti nekonzumují.
Údaje o FX derivátech nejsou propisovány z eBrokeru do topiců PortfolioPosition a PortfolioValuationDaily 
TO BE stav

Vznikne nový topic ze zdrojového systému Blotter, který bude poskytovat údaje o FX derivátech (FXswap, FXspot, FXoutright)
Pro získání ocenění FX derivátů bude vytvořen nový topic z RMR.
Stav obchodu aktivní vs. zrušený
Zjistíme z topicu Trade, popsáno v kapitole Stav obchodu aktivní vs. zrušený na stránce Komunikace Blotter - solution design#Stav obchodu aktivní vs. zrušený
Nohy obchodu
Zjistíme z topicu Trade, popsáno v kapitole Nohy obchodu na stránce Komunikace Blotter - solution design#Nohyobchodu
Fx deriváty mají jednu nebo více nohou obchodu.
FX spot a FX outright mají jednu (první) nohu
FX swap má dvě nohy
Vypořádání obchodu
Zjistíme z topicu Trade, popsáno v kapitole Vypořádání obchodu a Vypořádání nohy obchodu na stránce Komunikace Blotter - solution design#Vypořádání obchodu
V rámci SD US 5761 - Přepínání vypořádaného a zobchodovaného stavu dochází ke změně způsobu zjištění zobchodování a vypořádání
Hodnota ocenění zisku/ztráty v %
Hodnota ocenění v % NEbude součástí topicu Ocenění. Výpočet je popsán na stránce Komunikace RDM - solution design#Výpočet zisku/ztráty z dat topicu TradeEvaluation

Struktura topiců bude ještě upravena, získání topicu je v řešení, nutná konsolidace dat v topicích s projektem ODZ
úprava topicu ocenění TradeEvaluation
zadáno do R24/06 PDSWF-9973 Rozšíření topicu TradeEvaluation
Realizace topicu Trade 
původní zadání PDSWF-2569 nyní zpracováváno pod PKBE-16
2023-11-10 Topic Trade - IA
2023-11-10 Topic Trade Evaluation


Přiřazení na portfólio
Né všechny FX deriváty jsou provázané na konkrétní portfólio. Identifikace portfólia v topicu FX Derivatives - Datový model  Trade proto nemusí být vyplněna. FX deriváty, které nejsou navázány na portfólio budou evidovány jako nezařazené.
Ocenění majetku klienta
Hodnotu FX derivátů je potřeba započíst do ocenění majetku klienta a do ocenění portfólia. Zdroj dat je jiný, než u ostatních CP, proto je potřeba jej do výpočtu doplnit.
Blotter i RMR zpracovávají data z pohledu banky, ne klienta,
kdy a jak je potřeba otočit znaménko
že záporné hodnoty přijdou se znaménkem mínus (nebo zda to, že se jedná o kladnou a zápornou hodnotu vyplývá z popisu atributu, případně to má další logiku - např. že záleží na směru obchodu...)
Hodnota portfólia
Součet hodnot portfólia US 5703 - Zobrazit detail investičního portfólia - Hodnota portfólia a investovaných aktiv 
je potřeba rozšířit o hodnoty FX derivátů (upravit výpočet, přidat nový zdroj - topic Ocenění viz Komunikace RDM - solution design v kapitole Kafka topics -  Ocenění derivátů)
do ocenění portfólia je potřeba připočíst ocenění pozice a to je "zisk/ztráta" (počet kusů je 1) v referenční měně
nezařazené na portfólio budou započteny také - jsou přiděleny na "virtuální portfólio" nazývané Termínové obchody
Graf vývoje hodnoty portfólia
Zobrazení grafu vývoje hodnoty US 5704 - Zobrazit vývoj hodnoty portfolia pomocí grafu )
pro FX deriváty nebude graf vývoje hodnoty zobrazován
V rámci SD US 5761 - Přepínání vypořádaného a zobchodovaného stavu dochází ke změně - zobrazení grafu i pro zobchodovaný stav, kde FX deriváty budou započteny
Koláčové grafy
Graf rozložení podle produktů a podle měn US 5703 - Zobrazit detail investičního portfólia - Koláčové grafy
 Graf typ
Fx deriváty se budou započítávat, započtena bude položka ocenění derivátu (zisk/ztráta)z topicu Ocenění (viz Komunikace RDM - solution design v kapitole Kafka topics -  Ocenění derivátů)

Graf Měny 
Pro graf měny se bude započítávat z topicu Ocenění (viz Komunikace RDM - solution design v kapitole Kafka topics -  Ocenění derivátů):
současná hodnota hlavní měny
současná hodnota vedlejší měny
V topicu budou současné hodnoty v granularitě na nohu obchodu. U vícenohých derivátů (swap) je potřeba započítat všechny nohy obchodu, pokud je alespoň jedna z nich (druhá noha) nevypořádaná
Počítáme s tím, že současné hodnoty budou vyjádřeny v kladných hodnotách. To, zda započíst hodnotu do long nebo short části grafu závisí na směru obchodu.
Pokud směr obchodu v topicu (atr. operationDirection) bude SELL (to znamená, že z pohledu klienta i DKCZ to je BUY) pak jde o nákup hlavní měny a prodej vedlejší měny.
současná hodnota hlavní měny bude započtena do long grafu
současná hodnota vedlejší měny  bude započtena do short grafu
Pokud směr obchodu v topicu (atr. operationDirection) bude BUY (to znamená, že z pohledu klienta i DKCZ to je SELL) pak jde o prodej hlavní měny a nákup vedlejší měny.
současná hodnota hlavní měny bude započtena do short grafu
současná hodnota vedlejší měny  bude započtena do long grafu
Architektura

Architektura tohoto solution designu je zajišťována pomocí topiců které jsou popsány jako podmnožina architektury
Komunikace Blotter - solution design
Komunikace RDM - solution design
Integrace
DK-Kafka
Topic Deriváty
Údaje o FX derivátech budou získávány prostřednictvím topicu (ze zdrojového systému Blotter) který je popsán na stránce Komunikace Blotter - solution design v kapitole Topic Trade
Topic Ocenění
Údaje o ocenění derivátů budou získávány prostřednictvím topicu (ze zdrojového systému RDM) který je popsán na stránce  Komunikace RDM - solution design v kapitole Ocenění derivátů
DK-backend systém
--
Číselníky
Číselník směrů obchodu pro FX deriváty
Nelze nalézt Jira server pro toto makro. Může to být kvůli konfiguraci odkazu aplikace.
Číselník typů obchodu pro FX deriváty 
Nelze nalézt Jira server pro toto makro. Může to být kvůli konfiguraci odkazu aplikace.
Číselník typů nohou obchodu pro FX deriváty 
Nelze nalézt Jira server pro toto makro. Může to být kvůli konfiguraci odkazu aplikace.
Doplňující informace
V této kapitole jsou doplňující informace, prolinky na externí dokumentace (ISO, bankovní asociace, formáty aj.).
