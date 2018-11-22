let Poubelle_Jaune = [
    "Carton de meuble", "Bouteille en Plastique", "Désodorisant", "Boîte de conserve",
    "Canette de Coca", "Gel Douche", "Bouteille de Lait", "Tableau blanc"
];
let Poubelle_Verte = [
    "Verre à boire", "Papier Gras", "Papier Souillé", "Pots de confitures",
    "Bouteille d'huile", "Boutaille de Vinaigre", "Bouteille de Vin", "Bouteille de Champomy"
];
let Poubelle_Bleue = [
    "Journaux", "Magazines", "Bulletin de vote", "Enveloppe",
    "Feuille", "Cahier", "Publicité Papier", "Programme Télé"
];
let Poubelle_Marron = [
    "Crayons gris", "Reste de Repas", "Couche", "Sous vétements",
    "Pansements", "Textile", "Coton", "CD cassés"
];

let vrai = 0;

let faux = 0;

function Reset() {

    Demarrer();

}

let DechetsJ = Poubelle_Jaune[Math.floor(Math.random() * Poubelle_Jaune.length)];

let DechetsV = Poubelle_Verte[Math.floor(Math.random() * Poubelle_Verte.length)];

let DechetsB = Poubelle_Bleue[Math.floor(Math.random() * Poubelle_Bleue.length)];

let DechetsM = Poubelle_Marron[Math.floor(Math.random() * Poubelle_Marron.length)];

let DechetsAlea = Math.floor(Math.random() * 4);

function Demarrer() {

    DechetsJ = Poubelle_Jaune[Math.floor(Math.random() * Poubelle_Jaune.length)];

    DechetsV = Poubelle_Verte[Math.floor(Math.random() * Poubelle_Verte.length)];

    DechetsB = Poubelle_Bleue[Math.floor(Math.random() * Poubelle_Bleue.length)];

    DechetsM = Poubelle_Marron[Math.floor(Math.random() * Poubelle_Marron.length)];


    DechetsAlea = Math.floor(Math.random() * 4);

    if (DechetsAlea == 0) {
        document.getElementById("DechetsAlea").innerHTML = DechetsJ;
    }

    if (DechetsAlea == 1) {
        document.getElementById("DechetsAlea").innerHTML = DechetsV;
    }

    if (DechetsAlea == 2) {
        document.getElementById("DechetsAlea").innerHTML = DechetsB;
    }

    if (DechetsAlea == 3) {
        document.getElementById("DechetsAlea").innerHTML = DechetsM;
    }

}

Demarrer();

document.getElementById("Jaune").addEventListener("click",

    function () {

        if (DechetsAlea == 0) {

            vrai++;
            document.getElementById("RPB").innerHTML += "<br>" + "Bravo tu as trouvé <br> la bonne poubelle";
            console.log(vrai);

        }

        if (DechetsAlea == 1) {

            faux++;
            document.getElementById("RPM").innerHTML += "<br>" + "Faux, La réponse était <br> " + DechetsJ;
            console.log(faux);

        }

        if (DechetsAlea == 2) {

            faux++;
            document.getElementById("RPM").innerHTML += "<br>" + "Faux, La réponse était <br> " + DechetsJ;
            console.log(faux);

        }

        if (DechetsAlea == 3) {

            faux++;
            document.getElementById("RPM").innerHTML += "<br>" + "Faux, La réponse était <br> " + DechetsJ;
            console.log(faux);

        }

        Demarrer();

        Reset();

    });

document.getElementById("Verte").addEventListener("click",

    function () {

        if (DechetsAlea == 1) {

            vrai++;
            document.getElementById("RPB").innerHTML += "<br>" + "Bravo tu as trouvé <br> la bonne poubelle";
            console.log(vrai);

        }

        if (DechetsAlea == 2) {

            faux++;
            document.getElementById("RPM").innerHTML += "<br>" + "Faux, La réponse était <br> " + DechetsV;
            console.log(faux);

        }

        if (DechetsAlea == 3) {

            faux++;
            document.getElementById("RPM").innerHTML += "<br>" + "Faux, La réponse était <br> " + DechetsV;
            console.log(faux);

        }

        if (DechetsAlea == 0) {

            faux++;
            document.getElementById("RPM").innerHTML += "<br>" + "Faux, La réponse était <br> " + DechetsV;
            console.log(faux);

        }

        Demarrer();

        Reset();

    });

document.getElementById("Bleue").addEventListener("click",

    function () {

        if (DechetsAlea == 2) {

            vrai++;
            document.getElementById("RPB").innerHTML += "<br>" + "Bravo tu as trouvé <br> la bonne poubelle";
            console.log(vrai);

        }

        if (DechetsAlea == 1) {

            faux++;
            document.getElementById("RPM").innerHTML += "<br>" + "Faux, La réponse était <br> " + DechetsB;
            console.log(faux);

        }

        if (DechetsAlea == 0) {

            faux++;
            document.getElementById("RPM").innerHTML += "<br>" + "Faux, La réponse était <br> " + DechetsB;
            console.log(faux);

        }

        if (DechetsAlea == 3) {

            faux++;
            document.getElementById("RPM").innerHTML += "<br>" + "Faux, La réponse était <br> " + DechetsB;
            console.log(faux);

        }

        Demarrer();

        Reset();

    });

document.getElementById("Marron").addEventListener("click",

    function () {

        if (DechetsAlea == 3) {

            vrai++;
            document.getElementById("RPB").innerHTML += "<br>" + "Bravo tu as trouvé <br> la bonne poubelle";
            console.log(vrai);

        }

        if (DechetsAlea == 1) {

            faux++;
            document.getElementById("RPM").innerHTML += "<br>" + "Faux, La réponse était <br> " + DechetsM;
            console.log(faux);

        }

        if (DechetsAlea == 2) {

            faux++;
            document.getElementById("RPM").innerHTML += "<br>" + "Faux, La réponse était <br> " + DechetsM;
            console.log(faux);

        }

        if (DechetsAlea == 0) {

            faux++;
            document.getElementById("RPM").innerHTML += "<br>" + "Faux, La réponse était <br> " + DechetsM;
            console.log(faux);

        }

        Demarrer();

        Reset();

    });





