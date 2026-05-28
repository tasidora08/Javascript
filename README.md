# Projekt Dokumentáció: QuizMaster – Kvízjáték

## Az alkalmazás célja

A QuizMaster egy böngészőben futó interaktív kvízalkalmazás, amely különböző témakörökből teszteli a felhasználó tudását.

A felhasználó:

* kategóriát választhat,
* kérdésekre válaszolhat,
* pontokat gyűjthet,
* újrajátszhatja a kvízeket,
* illetve visszaléphet a főmenübe.

Az alkalmazás a böngésző LocalStorage funkcióját használja az adatok ideiglenes tárolására.

---

# Telepítés és futtatás

Az alkalmazás nem igényel telepítést.

1. Töltse le a projekt fájljait vagy klónozza a GitHub repository-t.
2. Keresse meg az `index.html` fájlt.
3. Kattintson rá duplán.
4. Az alkalmazás megnyílik az alapértelmezett böngészőben.

---

# Használati útmutató

## Kategória kiválasztása

A kezdőképernyőn válassza ki a kívánt kategóriát:

* Iskolatörténet
* Tablók
* Matematika

## Játék menete

* A rendszer betölti az aktuális kérdést.
* A felhasználó kiválaszt egy választ.
* A helyes válasz zöld színt kap.
* A hibás válasz piros színt kap.
* A játék automatikusan számolja a pontszámot.

## Következő kérdés

A „Következő kérdés” gombbal lehet továbblépni.

## Játék vége

A kérdések végén megjelenik:

* az elért pontszám,
* újraindítás lehetősége,
* visszalépés a kategóriaválasztó menübe.

## Adatok megőrzése

A pontszám LocalStorage segítségével kerül mentésre.

---

# Fejlesztői dokumentáció

# Rendszerarchitektúra

Az alkalmazás egy egyoldalas webalkalmazás (SPA), amely:

* HTML5,
* CSS3,
* JavaScript (ES6+)

technológiákkal készült.

Az alkalmazás kliensoldalon működik, szerver nélkül.

---

# Adatszerkezet

A kérdések objektumokat tartalmazó tömbökben vannak tárolva.

Példa:

```javascript
const kvizek = {
    matek: [
        {
            kerdes: "Mennyi 5 * 5?",
            valaszok: ["15", "25", "125", "625"],
            helyesValasz: "25"
        }
    ]
};
```

---

# Főbb függvények

## `kvizInditas(kategoria)`

Elindítja a kiválasztott kategória kérdéssorát.

Feladata:

* kategória betöltése,
* pontszám nullázása,
* kérdés betöltése,
* képernyők váltása.

---

## `kerdesBetoltese()`

Betölti az aktuális kérdést és a válaszlehetőségeket a DOM-ba.

DOM manipulációt használ:

* gombok létrehozása,
* szöveg frissítése,
* eseménykezelők hozzáadása.

---

## `valaszEllenorzes(gomb, helyesValasz)`

Ellenőrzi a kiválasztott választ.

Feladata:

* helyes válasz megjelölése,
* hibás válasz jelölése,
* pontszám növelése,
* gombok letiltása.

---

## `jatekVege()`

A játék végén:

* elrejti a kérdéseket,
* megjeleníti az eredményt,
* kiírja a végső pontszámot.

---

## `ujrainditas()`

Újraindítja az aktuális kategóriát.

---

## `vissza()`

Visszalép a főmenübe.

Feladata:

* eredményképernyő elrejtése,
* pontszám nullázása,
* kategóriaválasztó megjelenítése.

---

# Felhasznált technológiák

## HTML5

* szemantikus elemek,
* strukturált felépítés.

## CSS3

* Flexbox elrendezés,
* reszponzív kialakítás,
* hover effektek,
* animációk és színezések.

## JavaScript (ES6+)

* DOM manipuláció,
* eseménykezelés,
* objektumok és tömbök,
* LocalStorage használata,
* dinamikus tartalomkezelés.

---

# Reszponzivitás

Az alkalmazás mobilbarát kialakítású.

Használt technológiák:

* Flexbox
* Media Query-k

A felület:

* telefonon,
* tableten,
* asztali gépen

is megfelelően működik.

---

# Clean Code elvek

A projekt során:

* beszédes magyar változónevek,
* logikus függvényfelosztás,
* megfelelő indentálás,
* kommentek

kerültek alkalmazásra.

Példák:

* `aktualisKerdesek`
* `pontszamElem`
* `kerdesBetoltese()`
* `valaszEllenorzes()`

---

# Tesztelési jegyzőkönyv

A tesztelés manuálisan történt Google Chrome böngészőben.

| Teszteset ID | Tesztelt funkció          | Bemenet                      | Elvárt kimenet                  | Valós kimenet                | Eredmény |
| ------------ | ------------------------- | ---------------------------- | ------------------------------- | ---------------------------- | -------- |
| TC-01        | Kategória kiválasztása    | „Matematika” gomb            | A matek kérdések betöltődnek    | A kérdések megjelentek       | SIKERES  |
| TC-02        | Helyes válasz ellenőrzése | Helyes válasz kiválasztása   | A válasz zöld lesz, pontszám nő | Megfelelő működés            | SIKERES  |
| TC-03        | Hibás válasz kezelése     | Hibás válasz kiválasztása    | A válasz piros lesz             | Megfelelő működés            | SIKERES  |
| TC-04        | Következő kérdés gomb     | Gombra kattintás             | Következő kérdés jelenik meg    | Megjelent a következő kérdés | SIKERES  |
| TC-05        | Játék vége                | Utolsó kérdés megválaszolása | Eredményképernyő jelenik meg    | Megjelent az eredmény        | SIKERES  |
| TC-06        | Vissza gomb               | „Vissza a kategóriákhoz”     | Főmenü megjelenik               | Megjelent a főmenü           | SIKERES  |

---

# Git verziókövetés

A fejlesztés során Git verziókövetés került alkalmazásra.

Példa commit üzenetek:

```text
feat: create basic HTML structure
feat: implement quiz question rendering
feat: add category selection system
feat: add score tracking functionality
fix: repair category loading bug
feat: add LocalStorage score saving
docs: complete project documentation
```

---

# UI Terv (Drótváz)

```text
+----------------------------------+
|           KVÍZJÁTÉK              |
+----------------------------------+

      [ Iskolatörténet ]

      [ Tablók ]

      [ Matematika ]

+----------------------------------+

Kérdés: Mennyi 5 * 5?

[ 15 ]
[ 25 ]
[ 125 ]
[ 625 ]

Pontszám: 3

[ Következő kérdés ]

+----------------------------------+
```
