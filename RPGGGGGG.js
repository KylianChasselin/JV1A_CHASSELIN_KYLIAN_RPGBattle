var monstre1  = document.getElementsByClassName("monstre1");
var monstre1PV = 100;
var monstre2  = document.getElementsByClassName("monstre2");
var monstre3  = document.getElementsByClassName("monstre3");
var monstre4  = document.getElementsByClassName("monstre4");
var action = document.getElementsByClassName("action");
var hero = document.getElementsByClassName("hero");
var heroPV = 100;
var hero2 = document.getElementsByClassName("hero2");
var hero3 = document.getElementsByClassName("hero3");
var hero4 = document.getElementsByClassName("hero4");

function attack() {
  monstre1PV = monstre1PV - 25; 
  if (monstre1PV < 0) {
    document.getElementById("monstre").innerHTML="monstre mort";
  }
  document.getElementById("infomonstre").innerHTML="mechant 1 pv = " + monstre1PV; 
}

function defense() {
  heroPV = heroPV -5 ;
  document.getElementById("phHero1").innerHTML="Health:" + heroPV;
}

function magie() {
  
}

function tour() {
  document.getElementById("info").innerHTML="information : c'est au tour de Nocta";
  document.getElementById("info").innerHTML="information : c'est au tour de Dovah";
  document.getElementById("info").innerHTML="information : c'est au tour de Firiel";
  document.getElementById("info").innerHTML="information : c'est au tour de Iota";
}

hero.onclick = function(){
  this.animate([
    {transform: 'translateX(0px)'},
    {transform: 'translateX(-100px)'}
  ],{
    duration: 1000,
  });
}