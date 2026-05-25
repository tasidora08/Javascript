let aktualisKerdesek = [];

const kvizek = {
    iskola: [
        {
            kerdes: "Ki volt az iskola első igazgatója?",
            valaszok: ["Kiszely Árpád", "Mechwart András", "Sztankay Farkas Béla", "Újvárosi Imre"],
            helyesValasz: "Sztankay Farkas Béla"
        },
        {
            kerdes: "Hány igazgatója volt a Mechwartnak eddig? (A jelenlegit is beleszámolva)",
            valaszok: ["9", "10", "13", "14"],
            helyesValasz: "10"
        },
        {
            kerdes: "Teljesítettek-e az iskola nevelői közül katonai szolgálatot az első világháború idején?",
            valaszok: ["Igen", "Nem"],
            helyesValasz: "Igen"
        },
        {
            kerdes: "Volt-e szerepe a Mechwartnak az első világháború idején?",
            valaszok: ["Igen, az iskola katonákat képzett az első világháború végéig", "Nem, pár nevelő és diák részt vett a háborúban, de a tanítás az iskolában folyt tovább", "Igen, az iskolában hadi kórház volt, és a tanműhelyekben haditermelés is folyt", "Az első világháború idején a Mechwart épülete csak üresen állt, mivel a diákok és a tanárok is harcoltak"],
            helyesValasz: "Igen, az iskolában hadi kórház volt, és a tanműhelyekben haditermelés is folyt"
        },
        {
            kerdes: "Mikor tért át iskolánk a hároméves képzésre? (1940 előtt)",
            valaszok: ["1924/25. tanévtől", "1935/36. tanévtől", "1938/39. tanévtől", "1940 előtt az iskolában nem volt hároméves képzés"],
            helyesValasz: "1924/25. tanévtől"
        },
        {
            kerdes: "Kapott-e iskolánk a második világháború idején súlyos bombatalálatot?",
            valaszok: ["Igen", "Nem"],
            helyesValasz: "Igen"
        },
        {
            kerdes: "Mely igazgatónk irányítása alatt épültek meg a mai 9-es, 19-es és 29-es tantermek?",
            valaszok: ["László Árpád", "Újvárosi Imre", "Dr. Kárpáti László", "Kövesdy László"],
            helyesValasz: "Kövesdy László"
        },
        {
            kerdes: "Melyik évben vette fel iskolánk Mechwart András nevét?",
            valaszok: ["1908", "1939", "1955", "1989"],
            helyesValasz: "1955"
        },
        {
            kerdes: "Volt-e iskolánk történelmében bármikor levelező képzés?",
            valaszok: ["Igen", "Nem"],
            helyesValasz: "Igen"
        },
        {
            kerdes: "Melyik tanévben lett tornaterme az iskolának?",
            valaszok: ["Már az 1. tanévben", "5. tanévben", "35. tanévben", "75. tanévben"],
            helyesValasz: "75. tanévben"
        },
        {
            kerdes: "Mikor indult német két tanítási nyelvű osztály?",
            valaszok: ["1989/90-es tanévtől", "2002/03-as tanévtől", "2008/09-es tanévtől", "2020/21-es tanévtől"],
            helyesValasz: "2002/03-as tanévtől"
        },
        {
            kerdes: "Melyik évben szerezte meg iskolánk az ECDL vizsgáztatási jogosultságot?",
            valaszok: ["1989-ben", "1990-ben", "1998-ban", "2002-ben"],
            helyesValasz: "1998-ban"
        },
        {
            kerdes: "Mikortól ECDL vizsgaközpont az iskola?",
            valaszok: ["1990-től", "1998-tól", "2005-től", "2018-tól"],
            helyesValasz: "2005-től"
        },
        {
            kerdes: "Mikortól használhatja iskolánk 'A Debreceni Egyetem Partneriskolája' címet?",
            valaszok: ["2004-től", "2008-tól", "2015-től", "2023-tól"],
            helyesValasz: "2004-től"
        },
        {
            kerdes: "Mikortól viseli iskolánk a Debreceni SZC Mechwart András Gépipari és Informatikai Szakgimnáziuma nevet?", 
            valaszok: ["2005. szeptember 1-től", "2010. szeptember 1-től", "2015. július 1-től", "2016. szeptember 1-től"],
            helyesValasz: "2016. szeptember 1-től"
        },
    ],

    tablok: [
        {
            kerdes: "Hány tablón szerepel Nagy Miklós tanár úr? (Ötre kerekítéssel",
            valaszok: ["30", "35", "40", "45"],
            helyesValasz: "45"
        },
        {
            kerdes: "Melyik a legrégebbi tabló (azt az évszámot nézve, amikor az az osztály elkezdett ide járni)?",
            valaszok: ["1949", "1974", "1956", "1951"],
            helyesValasz: "1951"
        },
        {
            kerdes: "Hány olyan tabló van, amely az iskola 100. tanévében elballagott osztályok tablója?  (2008-ban végeztek)",
            valaszok: ["2", "3", "4", "5"],
            helyesValasz: "4"
        },
        {
            kerdes: "Hány tablón szerepel Dr. Barcsa Lajos igazgató úr, még nem igazgatóként, hanem tanárként?",
            valaszok: ["18", "19", "20", "23"],
            helyesValasz: "20"
        },
        {
            kerdes: "Hány olyan tablót találatok, ahol a diákok levelező tagozaton végeztek?",
            valaszok: ["6", "7", "8", "9"],
            helyesValasz: "6"
        },
        {
            kerdes: "Hány tablón szerepel a Mechwart logó valamilyen formában? ",
            valaszok: ["30", "33", "36", "39"],
            helyesValasz: "36"
        },
        {
            kerdes: "Keressétek meg azt a tablót, ahol egy műszaki rajz a háttér, már kijavítva (a hibák pirossal jelölve). Ki volt az osztályfőnökük?",
            valaszok: ["Szőllősi Irén", "Bene Tibor", "Bánkné Zsebők Piroska", "Kiss Albert"],
            helyesValasz: "Bene Tibor"
        },
        {
            kerdes: "Keressétek meg azt a tablót, ahol egy igazolást ábrázol a háttér. Mikor találkozik újra az az osztály?",
            valaszok: ["2000-ben", "2005-ben", "2013-ban", "2014-ben"],
            helyesValasz: "2000-ben"
        },
        {
            kerdes: "Iskolánkba járt Komzsik János (Jani a TheVR-ból). Keressétek meg a tablójukat! Melyik két terem közötti falszakaszra van kirakva?",
            valaszok: ["A büfé mellett a lépcsőnél", "33-34-es termek között", "25-26-os termek között", "29-es terem mellett"],
            helyesValasz: "25-26-os termek között"
        },
        {
            kerdes: "Hány lány osztálytársa volt Papp Mihály tanár úrnak?",
            valaszok: ["Nem voltak lány osztálytársai", "1 lány", "3 lány", "5 lány"],
            helyesValasz: "1 lány"
        }
    ],

    matek: [
        {
            kerdes: "Mennyi 5 * 6?",
            valaszok: ["11", "25", "30", "35"],
            helyesValasz: "30"
        },
        {
            kerdes: "Mennyi 9 - 6?",
            valaszok: ["3", "5", "7", "8"],
            helyesValasz: "3"
        },
        {
            kerdes: "Mennyi 90 / 9?",
            valaszok: ["5", "9", "10", "11"],
            helyesValasz: "10"
        },
        {
            kerdes: "Mennyi 81 / 9?",
            valaszok: ["9", "10", "11", "30"],
            helyesValasz: "9"
        },
        {
            kerdes: "Mennyi 5 * 5?",
            valaszok: ["15", "25", "125", "625"],
            helyesValasz: "25"
        },
    ]
};

const kerdesElem = document.getElementById("kerdes");
const valaszokElem = document.getElementById("valaszok");
const kovetkezoGomb = document.getElementById("kovetkezo-gomb");
const pontszamElem = document.getElementById("pontszam");
const kerdesSzamElem = document.getElementById("kerdes-szam");
const eredmenyElem = document.getElementById("eredmeny");
const vegsoPontszamElem = document.getElementById("vegso-pontszam");
let aktualisKerdesIndex = 0;
let pontszam = 0;
const mentettPontszam = localStorage.getItem("pontszam");
if (mentettPontszam) {
    pontszam = Number(mentettPontszam);
    pontszamElem.textContent = pontszam;
}

function kerdesBetoltese() {
    valaszokElem.innerHTML = "";
    const aktualisKerdes = aktualisKerdesek[aktualisKerdesIndex];
    kerdesElem.textContent = aktualisKerdes.kerdes;
    kerdesSzamElem.textContent = aktualisKerdesIndex + 1;
    aktualisKerdes.valaszok.forEach(valasz => {
        const gomb = document.createElement("button");
        gomb.textContent = valasz;
        gomb.classList.add("valasz-gomb");
        gomb.addEventListener("click", () => {
            valaszEllenorzes(gomb, aktualisKerdes.helyesValasz);
        });
        valaszokElem.appendChild(gomb);
    });
}

function valaszEllenorzes(gomb, helyesValasz) {
    const osszesGomb = document.querySelectorAll(".valasz-gomb");
    osszesGomb.forEach(gombElem => {
        gombElem.disabled = true;
        if (gombElem.textContent === helyesValasz) {
            gombElem.classList.add("helyes");
        }
    });
    if (gomb.textContent === helyesValasz) {
        gomb.classList.add("helyes");
        pontszam++;
        pontszamElem.textContent = pontszam;
        localStorage.setItem("pontszam", pontszam);
    } 
    else {
        gomb.classList.add("rossz");
    }
    kovetkezoGomb.style.display = "block";
}
kovetkezoGomb.addEventListener("click", () => {
    aktualisKerdesIndex++;
    if (aktualisKerdesIndex < aktualisKerdesek.length) {
        kerdesBetoltese();
        kovetkezoGomb.style.display = "none";
    } 
    else {
        jatekVege();
    }
});

function jatekVege() {
    document.querySelector(".kviz-doboz").classList.add("rejtett");
    eredmenyElem.classList.remove("rejtett");
    vegsoPontszamElem.textContent = pontszam;
}

function ujrainditas() {
    localStorage.removeItem("pontszam");
    pontszam = 0;
    aktualisKerdesIndex = 0;
    pontszamElem.textContent = pontszam;
    eredmenyElem.classList.add("rejtett");
    document.querySelector(".kviz-doboz").classList.remove("rejtett");
    kerdesBetoltese();
    kovetkezoGomb.style.display = "none";
}

function kvizInditas(kategoria) {
    aktualisKerdesek = kvizek[kategoria];
    aktualisKerdesIndex = 0;
    pontszam = 0;
    pontszamElem.textContent = pontszam;
    document.querySelector(".kezdo-kepernyo").classList.add("rejtett");
    document.querySelector(".kviz-doboz").classList.remove("rejtett");
    kerdesBetoltese();
}

function vissza() {
    pontszam = 0;
    aktualisKerdesIndex = 0;
    pontszamElem.textContent = pontszam;
    eredmenyElem.classList.add("rejtett");
    document.querySelector(".kviz-doboz").classList.add("rejtett");
    document.querySelector(".kezdo-kepernyo").classList.remove("rejtett");
    localStorage.removeItem("pontszam");
}
