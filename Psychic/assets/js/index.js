'use strict';

var wins = document.querySelector(".wins");
var loses = document.querySelector(".loses");
var guessesLeft = document.querySelector(".guesses-left");
var wrongGuesses = document.querySelector(".wrong-guesses");
var guessedLetter = document.querySelector(".guessed-letter");
var letters = [];

for (let i = "a".charCodeAt(); i <= "z".charCodeAt(); i++){
    letters.push(String.fromCharCode(i));
}

function randomLetterChoose(){
    let letter = letters[Math.floor(Math.random()*letters.length)];
    guessedLetter.innerHTML = letter;
    return letter;
}

function play(){
    guessesLeft.innerHTML = 9;
    wrongGuesses.innerHTML = "";
    let letter = randomLetterChoose();
    let winNumber = parseInt(wins.textContent); 
    let loseNumber = parseInt(loses.textContent);
    let guessesLeftNumber = parseInt(guessesLeft.textContent);
    let wrongGuessesLetters = wrongGuesses.innerHTML;
    document.onkeyup = function (e){

        if (letters.indexOf(e.key) == -1){
            alert("Please press only letters to play game.");
            play();
        }
        else if (letter == e.key){
            winNumber += 1;
            wins.innerHTML = winNumber;
            play();
        }
        else {
            guessesLeftNumber -= 1;
            guessesLeft.innerHTML = guessesLeftNumber;
            if (wrongGuessesLetters.length == 0){
                wrongGuessesLetters += e.key;
            }else {
                wrongGuessesLetters += " ," + e.key;
            }
            wrongGuesses.innerHTML = wrongGuessesLetters;
            if (guessesLeftNumber == 0){
                loseNumber += 1;
                loses.innerHTML = loseNumber;
                play();
            }
        }
    }
}

play();