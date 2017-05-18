var pokeMonsters = [
    ["P", "I", "K", "A", "C", "H", "U"],
    ["B", "U", "L", "B", "A", "S", "A", "U", "R"],
    ["C", "H", "A", "R", "M", "A", "N", "D", "E", "R"],
    ["S", "Q", "U", "I", "R", "T", "L", "E"],
    ["M", "E", "W", "T", "W", "O"],

var random = Math.floor((Math.random() * (pokeMonsters.length-1))); 
var pokemon = pokeMonsters[random]; 
var pokeMon = new Array(pokeMonsters.length);
var error = 0;

for (var i = 0; i < pokeMon.length; i++){
    pokeMon[i] = "_ ";
}

function printpokeMon(){
    for (var i = 0; i < pokeMon.length; i++){
    var form = document.getElementById("form");
    var letter = document.createTextNode(pokeMon[i]);
    pokeMon.appendChild(letter);
    }
}


var checkMe = function(){
    var f = document.rateformular; 
    var b = f.elements["pokeSign"]; 
    var sign = b.value; 
    sign = sign.toUpperCase();
    for (var i = 0; i < pokemon.length; i++){
        if(pokemon[i] === sign){
            pokeMon[i] = sign + " ";
            var hit = true;
        }
    b.value = "";
    }
    
    var ratefeld = document.getElementById("ratefeld");
    ratefeld.innerHTML=""; 
    printRatewort();
    
    if(!hit){
        var guessedLetters = document.getElementById("gerateneBuchstaben");
        var letter = document.createTextNode(" " + character);
        guessedLetters.appendChild(letter); 
        error++;
        var hangman = document.getElementById("hangman");
    hangman.src = "http://www.writteninpencil.de/Projekte/Hangman/hangman" + fehler + ".png";
    }
    
    var finished = true;
    for (var i = 0; i < pokeMon.length; i++){
        if(pokeMon[i] === "_ "){
            finished = false;
        }
    }
    if(finished){
        window.alert("You are a Pokemon Master!");
    }
    
    
    if(fehler === 6){
        window.alert("Uh...I guess you're not a Pokemon Master.");
    }
}

function init(){
    printpokeMon();
}

window.onload = init;