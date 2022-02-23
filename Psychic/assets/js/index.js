'use strict';

// letters
var letters = [];
for (let i = "a".charCodeAt(); i <= "z".charCodeAt(); i++){
    letters.push(String.fromCharCode(i));
}

// object 
var data = {
    wins: document.querySelector(".wins"),
    loses: document.querySelector(".loses"),
    guessesLeft: document.querySelector(".guesses-left"),
    wrongGuesses: document.querySelector(".wrong-guesses"),
    guessedLetter: document.querySelector(".guessed-letter"),
    
    chooseRandomLetter: function(listOfLetters){
        var randomLetter = listOfLetters[Math.floor(Math.random()*listOfLetters.length)];    
        this.guessedLetter.innerHTML = randomLetter;
        return randomLetter;
    },

    resetData: function(){
        this.guessesLeft.innerHTML = 9;
        this.wrongGuesses.innerHTML = "";
        let random = this.chooseRandomLetter(letters); 
    } 
}

function playGame(object){
    object.resetData();
    let randomLetter = object.chooseRandomLetter(letters);
    document.onkeyup = function(event){
        if (letters.indexOf(event.key) == -1){
            alert("Please press only letters to play game.");
            playGame(object);
        } else if (event.key == randomLetter){
            object.wins.innerHTML = parseInt(object.wins.textContent) + 1;
            playGame(object);
        } else{
            if (object.guessesLeft.textContent == 1){
                object.loses.innerHTML = parseInt(object.loses.textContent) + 1;
                playGame(object);
            }
            else{
                object.guessesLeft.innerHTML = parseInt(object.guessesLeft.textContent) - 1;
                object.wrongGuesses.innerHTML = object.wrongGuesses.textContent + event.key + ", "; 
            }
        }
    }
}

playGame(data);