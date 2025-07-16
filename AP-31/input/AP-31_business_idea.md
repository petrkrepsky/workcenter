6855230 - Přehled FX derivátů v portfoliu
✍ Popis - Story
Jako klient chci vidět ve svém portfoliu přehled FX derivátů, které mám otevřené prostřednictvím banky. Za FX deriváty budeme považovat FX spot, FX outright, FX swap. Zároveň chci, aby byly FX deriváty součástí ocenění mého portfolia.
⭐ Epic name

💰 Business value
FX deriváty budou součástí klientova portfolia a jeho ohodnocení v rámci majetku a zároveň by měly být zohledněny v zajištění portfolia.
🚧 Risk
Riziko technologické:
Mitigace:
Riziko pro banku:
Mitigace:
⛔ Připravenost
Blotter - drží FX spoty, outrighty, swapy, vazbu na klienta, případně vazbu vazby na portfolia.
Ocenění probíhá v systému RMR (risk DB), Blotter ocenění přebírá 1x denně. - risk podle ID obchodu, zde jsou ocenění od cca 2021, starší ocenění jsou v Quaestoru.
Ocenění na risku a tedy i Blotteru je vždy v CZK MRM zajištění těchto derivátů nepočítá správně podle risku. - diskuze s Riskem - vede na jiný projekt
FX deriváty má na portfoliu nižší stovky klientů (cca 200)
Konfirmace a výpisy jsou již součástí konfirmací a výpisů z Xerox - jen ty na portfolio - konfirmace z Blotteru jdou na klienta emailem
FX deriváty jsou nakupované ze SÚ a mají tedy vazbu na portfolio nebo jsou nakupované z BÚ a tuto vazbu nemají -> dopad do US konfirmaci
🔷 Popis flow
Po přihlášení do DK klient v levém menu klient klikne na záložku Investice. Zobrazí se mu přehled vlastněných CP a pomocí záložky přehled se dostane na portfolio/a.
Klient klikne na vybrané portfolio a zobrazí se mu "Vlastněné produkty" záložka "Vše", kde se zobrazí se celé portfolio držených CP rozdělených do podsekcí dle druhu CP. Jedna ze sekcí jsou "FX deriváty". Zároveň bude samostatná záložka FX deriváty pro jejich zobrazení.

V "FX deriváty" klient vidí přehled otevřených pozic typu FX Spot, FX Outright a FX Swap, obsahuje informace (viz Popis polí) a kromě samotného přehledu je schopen si zobrazit hrubý Detail pozice.
🎨 Design formuláře
Přehled vše
Přehled FX deriváty
📑 Popis polí formuláře
Hrubý přehled
Typ - typ derivátu - FX spot. FX outright, FX swap
Měnový pár - sortovatelné
Směr obchodu (Prodej, nákup, resp. Prodej/Nákup nebo Nákup/Prodej) - sortovatelné
Objem v hlavní měně - první měna v měnovém páru
Zisk/ztráta - absolutní hodnota a % v CZK měně

Hrubý detail (po rozkliku)
společné atributy pro FX spot, outright i swap
Reference - ID obchodu (Blotter)
Datum a čas ocenění
Portfolio - pokud byl nákup proveden ze SÚ
datum obchodu

FX spot:
datum vypořádání
č. obchodu - pokud je na portfoliu (Topas ID)
pokud byl nákup proveden z BÚ pak zobrazujeme č. BÚ
FX kurz - zobchodovaný pro danou nohu
Objem v hlavní měně
Objem ve vedlejší měně

FX outright:
datum vypořádání
č. obchodu - pokud je na portfoliu (Topas ID)
pokud byl nákup proveden z BÚ pak zobrazujeme č. BÚ
FX kurz - zobchodovaný pro danou nohu
Objem v hlavní měně
Objem ve vedlejší měně

FX swap:
první noha - FX spot
datum vypořádání
č. obchodu - pokud je na portfoliu (Topas ID)
směr obchodu
pokud byl nákup proveden z BÚ pak zobrazujeme č. BÚ
FX kurz - zobchodovaný pro danou nohu
Objem v hlavní měně
Objem ve vedlejší měně
druhá noha - FX forward
datum vypořádání
č. obchodu - pokud je na portfoliu (Topas ID)
směr obchodu
pokud byl nákup proveden z BÚ pak zobrazujeme č. BÚ
FX kurz - zobchodovaný pro danou nohu
Objem v hlavní měně
Objem ve vedlejší měně
🔄 Popis business logiky

Seznam je iniciálně řazen podle měnového páru a podle datumu zobchodování (nejnovější nahoře)
Z risku (systém RMR do cca 2021) nebo Quaestoru (před r. 2021) budeme přebírat
ocenění jednotlivých nevypořádaných FX operací v měně CZK (tedy i zisk/ztráta pro danou pozici)
současnou hodnotu měn v CZK, které jsou zastoupeny v měnových párech FX pozice
pozice se přeceňují na risku (i Quaestoru) 1x denně
FX spot je FX derivát s datumem vypořádání T+2, vše ostatní je FX outright
zobrazujeme jen nevypořádané FX operace, u FX swapu do vypořádání druhé nohy (FX forwardu) zobrazujeme vypořádanou i nevypořádanou první nohu (FX spot)
Do zobchodované hodnoty portfolia (box vpravo na dashboard) započítáváme ohodnocení jednotlivých FX derivátů
započítáme pouze nevypořádané nohy
Do hodnoty nerealizovaného zisku/ztráty započítáváme ohodnocení jednotlivých FX derivátů
Zisk/Ztráta FX derivátu v % = ocenění nohy v CZK / ABS( zobchodovaná hodnota hlavní měny v CZK) * 100
započítáme pouze nevypořádané nohy
Do hodnoty investovaných aktiv se též započítává ohodnocení jednotlivých FX derivátů
obdobně jako u maržových portfolií bude rozložení na long a short složku podle současných hodnot měnových složek obsažených v měnovém páru FX pozice, zároveň s ohledem na směr obchodu
započítáme pouze nevypořádané nohy - s ohledem na směr obchodu pak kladné současné hodnoty dáme do long složky a záporné do short složky
Do grafu historického vývoje hodnoty portfolia není žádný dopad jelikož v současné zobrazuje pouze vypořádaný stav
Pro FX deriváty nakupované z BÚ nebude graf zobrazován (u virtuálních portfolií) jelikož nedává smysl
Dopad do koláčových grafů na detailu portfolia
rozložení portfolia podle typu
Součástí zobchodované hodnoty portfolia budou FX operace (jen nevypořádané nohy) a budou mít svoji výseč na grafu
bude zde stejný rozpad do long i short koláč. grafu jako u hodnot investovaných aktiv
rozložení portfolia podle měn
pro každou nevypořádanou nohu FX operace použiju současné hodnoty z páru a ty promítnu do jednotlivých koláčových grafu (long i short)
sečtu příslušné měnové složky párů a podle toho je dám na long nebo short stranu grafu
Dopad do poněženky
zobchodované zůstatky - bez dopadu
k obchodování - bez dopadu
k výběru - bez dopadu
Do historického vývoje ceny portolia budeme přebírat z Risku (od 2021) resp. Questoru (starší než 2021) historická ocenění FX nohou
Na portfoliu budou jen FX deriváty nakoupené přes SÚ (v Blotteru existují i nakoupené přes BÚ)
FX deriváty nakoupené z BÚ budou v DK vedené zvlášť
special dlaždice v přehledu portfolií (termínové obchody)
nebude peněženka a graf vývoje hodnoty jako u portfolií
výpisy a konfirmace - jdou emailem z Blotteru přímo na klienta.
Oceňování FX derivátů v bez portfolia probíhá jen v CZK
📄 Doménový model

✅ Akceptační kritéria
jsou zobrazeny FX operace na klientských portfoliích, ke kterým uživatel má oprávnění
uživatel může vybrat portfolio pro zobrazení a může přepínat mezi portfolií
Uživatel si může zobrazit hrubý detail zvoleného typu FX operace
v hrubém detailu jsou zobrazeny relevantní atributy pro daný typ FX operace
jsou zobrazeny nevypořádané nohy, resp. i vypořádaný spot, pokud je druhá noha ještě nevypořádaná
🔜 Datová migrace

💬 Seznam bodů k rozhodnutí / dodání
V Přehledu CP se zobrazuje pouze 2. noha swapu, neboť 1. noha je již zobchodovaná. Informace o 1. noze klient nalezne v Detailu příslušného FX swapu. - FX spot nemusi byt jeste vypořádán
Opravit výpočet zajištění pro deriváty v MRM
dopady do
dashboardu - hodnota investovaných aktiv ???
peněžní zůstatky na peněžence ???
blokací ???
pohyby a pokyny na zalozce detailu "neportfolia" - pohyby pro BU nedavaji smysl. Pokyny v Blotteru nejsou, zadavaji se osobne nebo telefonicky a do Blotteru se zadavaji rovnou obchody
