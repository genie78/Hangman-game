"use strict";

var singerName = document.getElementById('singer-name');
var image = document.querySelector(".image-of-singer");
var wrongGuesses = document.querySelector(".wrong-guesses");
var guessesLeft = document.querySelector(".guesses-left");
var wins = document.querySelector(".wins");
var loses = document.querySelector(".loses");
var singers = ['blondie', 'genesis', 'inxs', 'journey', 'madonna', 'metallica', 'poison', 'queen', 'rush', 'toto', 'u2'];
var singersSongs = {}
var isReplaced = false;

for (let i of singers){
    singersSongs[i] = 'assets/images/' + i + ".jpg";
}
var randomSinger ;
function getRandomSinger(){
    randomSinger = singers[Math.floor(Math.random()*(singers.length -1))];
    image.src = singersSongs[randomSinger];
    singerName.innerHTML = "";
    for (let i = 0; i < randomSinger.length; i++){
        singerName.innerHTML += "_ ";
    }
}

getRandomSinger();


function playAgain(){
    guessesLeft.innerHTML = 9;
    wrongGuesses.innerHTML = "";
    getRandomSinger();
}

document.onkeyup = function (event){
    let guessedSinger = ""; 
    let altSinger = singerName.textContent.split(" ");
    let altWrongGuesses = wrongGuesses.textContent;
    let altGuessesLeft = parseInt(guessesLeft.textContent);
    for (let i = 0; i < randomSinger.length; i ++){
        if (event.key === randomSinger[i]){
            guessedSinger += event.key + " ";
            isReplaced = true;
        }else {
            guessedSinger += altSinger[i] + " ";
        }      
    }

    if (isReplaced == false){
        if (altWrongGuesses == ""){
            altWrongGuesses += event.key;
        }
        else {
            altWrongGuesses += ", " + event.key;
        }
        altGuessesLeft -= 1;
    }
    guessesLeft.innerHTML = altGuessesLeft;
    
    isReplaced = false;
    wrongGuesses.innerHTML = altWrongGuesses;
    singerName.innerHTML = guessedSinger;


    let altSingerToWin = "";
    for (let i of singerName.textContent.split(" ")){
        altSingerToWin += i;
    } 

    let altWins = parseInt(wins.textContent);
    let altLoses = parseInt( loses.textContent);
    if ((altSingerToWin != randomSinger) && (altGuessesLeft == 0)){
        playAgain();
        loses.innerHTML = altLoses + 1;
    }else if (altSingerToWin == randomSinger) {
        playAgain();
        wins.innerHTML = altWins +1;
    }
}

