//Nocta
var pvNoctaa = document.getElementById("pvNocta");
var pvNocta = 100;
var manaNocta = document.getElementById("manaNocta");
var imageNocta = document.getElementById("imageNocta");


//Dovah
var pvDovahh = document.getElementById("pvDovah");
var pvDovah = 150;
var manaDovah = document.getElementById("manaDovah");
var imageDovah = document.getElementById("imageDovah");


//Firiel
var pvFiriell = document.getElementById("pvFiriel");
var pvFiriel = 110;
var manaFiriel = document.getElementById("manaFiriel");
var imageFiriel = document.getElementById("imageFiriel");


//Iota
var pvIotaa = document.getElementById("pvIota");
var pvIota = 90;
var manaIota = document.getElementById("manaIota");
var imageIota = document.getElementById("imageIota");


//PV Monstres
var imageMonstre1 = document.getElementById("monstre")
var pvMonstre11 = document.getElementById("infomonstre");
var pvMonstre1 = 100;

var imageMonstre2 = document.getElementById("monstre2")
var pvMonstre22 = document.getElementById("infomonstre2");
var pvMonstre2 = 100;

var imageMonstre3 = document.getElementById("monstre3")
var pvMonstre33 = document.getElementById("infomonstre3");
var pvMonstre3 = 100;


//BOUTONS
var attaque = document.getElementById("attack");
var défense = document.getElementById("defendre");
var speciale = document.getElementById("speciale");


//Boite de dialogue
var dialogue = document.getElementById("info");

//Compteur de tour
var tourJoueur = 0

//Fonction riposte
function riposte(i) {
    setTimeout(function(){
        aleatoire = Math.floor(Math.random() * 4);
    if (aleatoire == 0) {
        pvNocta -= 5;
        dialogue.innerHTML = "Nocta a perdu 5PV !";
        if (pvNocta <= 0) {
            imageNocta.style.visibility = "hidden";
            dialogue.innerHTML = "Nocta est mort...";
        }
    }

    if (aleatoire == 1) {
        pvFiriel -= 5;
        dialogue.innerHTML = "Firiel a perdu 5PV !";
        if (pvFiriel <= 0) {
            imageFiriel.style.visibility = "hidden";
            dialogue.innerHTML = "Firiel est morte...";
        }
    }

    if (aleatoire == 2) {
        pvIota -= 5;
        dialogue.innerHTML = "Iota a perdu 5PV !";
        if (pvIota <= 0) {
            imageIota.style.visibility = "hidden";
            dialogue.innerHTML = "Iota est morte...";
        }
    }

    if (aleatoire == 3) {
        pvDovah -= 5;
        dialogue.innerHTML = "Dovah a perdu 5PV !";
        if (pvDovah <= 0) {
            imageDovah.style.visibility = "hidden";
            dialogue.innerHTML = "Dovah est mort...";
        }
    }

    pvNoctaa.innerHTML = pvNocta
    pvDovahh.innerHTML = pvDovah
    pvFiriell.innerHTML = pvFiriel
    pvIotaa.innerHTML = pvIota
    }, 2000 * (i+1));
}

attaque.onclick = function () {

    aleatoire = Math.floor(Math.random() * 3);
    if (aleatoire == 0) {
        pvMonstre1 -= 10;
        dialogue.innerHTML = "Monstre 1 a perdu 10PV !";
        if (pvMonstre1 <= 0) {
            imageMonstre1.style.visibility = "hidden";
            dialogue.innerHTML = "Monstre 1 a été terrassé";
        }
    }

    if (aleatoire == 1) {
        pvMonstre2 -= 10;
        dialogue.innerHTML = "Monstre 2 a perdu 10PV !";
        if (pvMonstre2 <= 0) {
            imageMonstre2.style.visibility = "hidden";
            dialogue.innerHTML = "Monstre 2 a été terrassé";
        }
    }

    if (aleatoire == 2) {
        pvMonstre3 -= 10;
        dialogue.innerHTML = "Monstre 3 a perdu 10PV !";
        if (pvMonstre3 <= 0) {
            imageMonstre3.style.visibility = "hidden";
            dialogue.innerHTML = "Monstre 3 a été terrassé";
        }
    }

    pvMonstre11.innerHTML = pvMonstre1;
    pvMonstre22.innerHTML = pvMonstre2;
    pvMonstre33.innerHTML = pvMonstre3;

    // Tour des joueurs et animation

    if (tourJoueur == 0) {
        imageIota.animate([
            { transform: 'translateX(0)' },
            { transform: 'translateX(-50px)' },
            { transform: 'translateX(0px)' },
        ], {
            duration: 200,

        });
    }

    if (tourJoueur == 1) {
        imageNocta.animate([
            { transform: 'translateX(0)' },
            { transform: 'translateX(-50px)' },
            { transform: 'translateX(0px)' },
        ], {
            duration: 200,
        });
    }

    if (tourJoueur == 2) {
        imageDovah.animate([
            { transform: 'translateX(0)' },
            { transform: 'translateX(-50px)' },
            { transform: 'translateX(0px)' },
        ], {
            duration: 200,
        });
    }

    if (tourJoueur == 3) {
        imageFiriel.animate([
            { transform: 'translateX(0)' },
            { transform: 'translateX(-50px)' },
            { transform: 'translateX(0px)' },
        ], {
            duration: 200,
        });
    }

    tourJoueur += 1
    if (tourJoueur > 3) {
        tourJoueur = 0;
        for (i=0;i<3;i++){
            riposte(i)
        }
    }
}


hero.onclick = function(){
  this.animate([
    {transform: 'translateX(0px)'},
    {transform: 'translateX(-100px)'}
  ],{
    duration: 1000,
  });
}