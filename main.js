const kerdesek = [
    {
        kerdes: "Melyik a világ legnagyobb óceánja?",
        valaszok: [
            "Atlanti-óceán",
            "Indiai-óceán",
            "Csendes-óceán",
            "Jeges-tenger"
        ],
        helyesValasz: "Csendes-óceán"
    },
    {
        kerdes: "Melyik nyelv fut a böngészőben?",
        valaszok: [
            "Python",
            "Java",
            "C#",
            "JavaScript"
        ],
        helyesValasz: "JavaScript"
    },
    {
        kerdes: "Hány kontinens van a Földön?",
        valaszok: [
            "5",
            "6",
            "7",
            "8"
        ],
        helyesValasz: "7"
    }
];

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

    const aktualisKerdes = kerdesek[aktualisKerdesIndex];

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

    } else {
        gomb.classList.add("rossz");
    }

    kovetkezoGomb.style.display = "block";
}

kovetkezoGomb.addEventListener("click", () => {

    aktualisKerdesIndex++;

    if (aktualisKerdesIndex < kerdesek.length) {

        kerdesBetoltese();

        kovetkezoGomb.style.display = "none";

    } else {

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

kerdesBetoltese();