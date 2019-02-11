// Tableau pour tout ce qu'on peut mettre dans chaque poubelle

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

// Variable pour compter les bonnes réponse et mauvaise réponse
let vrai = 0;

let faux = 0;

// Variable pour le nombre d'essaie
let essaie = 0;

// Cacher la partie Resultats au démarrage de l'écran du jeu
document.getElementById("Bas").style.display = "none";


// Fonction Reset qui permets de réinitialiser le jeu
function Reset() {

    Demarrer();
    document.getElementById("Jaune").style.display = "block";
    document.getElementById("Verte").style.display = "block";
    document.getElementById("Bleue").style.display = "block";
    document.getElementById("Marron").style.display = "block";
    document.getElementById("Bas").style.display = "none";
    essaie = 0;
    faux = 0;
    vrai = 0;
    document.getElementById("RPB").innerHTML = "";
    document.getElementById("RPM").innerHTML = "";
    document.getElementById("DechetsAlea").style.display = "block";


}

// Variable pour générer un mot aléatoire dans chaque tableau
let DechetsJ = Poubelle_Jaune[Math.floor(Math.random() * Poubelle_Jaune.length)];

let DechetsV = Poubelle_Verte[Math.floor(Math.random() * Poubelle_Verte.length)];

let DechetsB = Poubelle_Bleue[Math.floor(Math.random() * Poubelle_Bleue.length)];

let DechetsM = Poubelle_Marron[Math.floor(Math.random() * Poubelle_Marron.length)];

// Variable pour faire un random de 4 car il y a 4 tableaux
let DechetsAlea = Math.floor(Math.random() * 4);


// Fonction pour Demarre le jeu
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

    // If pour les essaies a dire essai ca efface les boutons et ca fait
    // apparaitre la partie Resultats et ca efface le mot aléatoire
    if (essaie >= 10) {

        document.getElementById("Bas").style.display = "block";
        document.getElementById("Jaune").style.display = "none";
        document.getElementById("Verte").style.display = "none";
        document.getElementById("Bleue").style.display = "none";
        document.getElementById("Marron").style.display = "none";
        document.getElementById("DechetsAlea").style.display = "none";

    }
}

// Rappelle de la fonction demarrer
Demarrer();


document.getElementById("Jaune").addEventListener("click",

    function () {

        if (DechetsAlea == 0) {

            vrai++;
            document.getElementById("BR").innerHTML = "Tu as " + vrai + " bonne réponse";
            document.getElementById("RPB").innerHTML += "<br>" + "Bravo tu as trouvé <br> la bonne poubelle";
            console.log(vrai);
            essaie++;

        }

        if (DechetsAlea == 1) {

            faux++;
            document.getElementById("MR").innerHTML = "Tu as " + faux + " mauvaise réponse";
            document.getElementById("RPM").innerHTML += "<br>" + "Faux, L'objet qui était <br> " + DechetsV + " devait allez dans la <br> poubelle Verte";
            console.log(faux);
            essaie++;

        }

        if (DechetsAlea == 2) {

            faux++;
            document.getElementById("MR").innerHTML = "Tu as " + faux + " mauvaise réponse";
            document.getElementById("RPM").innerHTML += "<br>" + "Faux, L'objet qui était <br> " + DechetsB + " devait allez dans la <br> poubelle Bleue";
            console.log(faux);
            essaie++;

        }

        if (DechetsAlea == 3) {

            faux++;
            document.getElementById("MR").innerHTML = "Tu as " + faux + " mauvaise réponse";
            document.getElementById("RPM").innerHTML += "<br>" + "Faux, L'objet qui était <br> " + DechetsM + " devait allez dans la <br> poubelle Marron";
            console.log(faux);
            essaie++;

        }

        Demarrer();
        console.log(essaie);
    });

document.getElementById("Verte").addEventListener("click",

    function () {

        if (DechetsAlea == 1) {

            vrai++;
            document.getElementById("BR").innerHTML = "Tu as " + vrai + " bonne réponse";
            document.getElementById("RPB").innerHTML += "<br>" + "Bravo tu as trouvé <br> la bonne poubelle";
            console.log(vrai);
            essaie++;

        }

        if (DechetsAlea == 2) {

            faux++;
            document.getElementById("MR").innerHTML = "Tu as " + faux + " mauvaise réponse";
            document.getElementById("RPM").innerHTML += "<br>" + "Faux, L'objet qui était <br> " + DechetsB + " devait allez dans la <br> poubelle Bleue";
            console.log(faux);
            essaie++;

        }

        if (DechetsAlea == 3) {

            faux++;
            document.getElementById("MR").innerHTML = "Tu as " + faux + " mauvaise réponse";
            document.getElementById("RPM").innerHTML += "<br>" + "Faux, L'objet qui était <br> " + DechetsM + " devait allez dans la <br> poubelle Marron";
            console.log(faux);
            essaie++;

        }

        if (DechetsAlea == 0) {

            faux++;
            document.getElementById("MR").innerHTML = "Tu as " + faux + " mauvaise réponse";
            document.getElementById("RPM").innerHTML += "<br>" + "Faux, L'objet qui était <br> " + DechetsJ + " devait allez dans la <br> poubelle Jaune";
            console.log(faux);
            essaie++;

        }

        Demarrer();
        console.log(essaie);
    });

document.getElementById("Bleue").addEventListener("click",

    function () {

        if (DechetsAlea == 2) {

            vrai++;
            document.getElementById("BR").innerHTML = "Tu as " + vrai + " bonne réponse";
            document.getElementById("RPB").innerHTML += "<br>" + "Bravo tu as trouvé <br> la bonne poubelle";
            console.log(vrai);
            essaie++;

        }

        if (DechetsAlea == 1) {

            faux++;
            document.getElementById("MR").innerHTML = "Tu as " + faux + " mauvaise réponse";
            document.getElementById("RPM").innerHTML += "<br>" + "Faux, L'objet qui était <br> " + DechetsV + " devait allez dans la <br> poubelle Verte";
            console.log(faux);
            essaie++;

        }

        if (DechetsAlea == 0) {

            faux++;
            document.getElementById("MR").innerHTML = "Tu as " + faux + " mauvaise réponse";
            document.getElementById("RPM").innerHTML += "<br>" + "Faux, L'objet qui était <br> " + DechetsJ + " devait allez dans la <br> poubelle Jaune";
            console.log(faux);
            essaie++;

        }

        if (DechetsAlea == 3) {

            faux++;
            document.getElementById("MR").innerHTML = "Tu as " + faux + " mauvaise réponse";
            document.getElementById("RPM").innerHTML += "<br>" + "Faux, L'objet qui était <br> " + DechetsM + " devait allez dans la <br> poubelle Marron";
            console.log(faux);
            essaie++;

        }

        Demarrer();
        console.log(essaie);
    });

document.getElementById("Marron").addEventListener("click",

    function () {

        if (DechetsAlea == 3) {

            vrai++;
            document.getElementById("BR").innerHTML = "Tu as " + vrai + " bonne réponse";
            document.getElementById("RPB").innerHTML += "<br>" + "Bravo tu as trouvé <br> la bonne poubelle";
            console.log(vrai);
            essaie++;

        }

        if (DechetsAlea == 1) {

            faux++;
            document.getElementById("MR").innerHTML = "Tu as " + faux + " mauvaise réponse";
            document.getElementById("RPM").innerHTML += "<br>" + "Faux, L'objet qui était <br> " + DechetsV + " devait allez dans la <br> poubelle Verte";
            console.log(faux);
            essaie++;

        }

        if (DechetsAlea == 2) {

            faux++;
            document.getElementById("MR").innerHTML = "Tu as " + faux + " mauvaise réponse";
            document.getElementById("RPM").innerHTML += "<br>" + "Faux, L'objet qui était <br> " + DechetsB + " devait allez dans la <br> poubelle Bleue";
            console.log(faux);
            essaie++;

        }

        if (DechetsAlea == 0) {

            faux++;
            document.getElementById("MR").innerHTML = "Tu as " + faux + " mauvaise réponse";
            document.getElementById("RPM").innerHTML += "<br>" + "Faux, L'objet qui était <br> " + DechetsJ + " devait allez dans la <br> poubelle Jaune";
            console.log(faux);
            essaie++;

        }

        Demarrer();
        console.log(essaie);
    });

document.getElementById("Rejouer").addEventListener("click",

    function () {

        Reset();

    });







