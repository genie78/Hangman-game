var hangman = {
    singerName: document.querySelector("#singer-name"),
    wrongGuesses: document.querySelector(".wrong-guesses"),
    guessesLeft: document.querySelector(".guesses-left"),
    wins: document.querySelector(".wins"),
    loses: document.querySelector(".loses"),
    singers: ['blondie', 'genesis', 'inxs', 'journey', 'madonna', 'metallica', 'poison', 'queen', 'rush', 'toto', 'u2'],
    singersImages: {},
    randomSinger: document.querySelector(".random-singer"),
    imageOfSinger: document.querySelector(".image-of-singer"),
    isletterChanged:false,

    initSingersImages: function(){      
        for (let i of this.singers){
            this.singersImages[i] = 'assets/images/' + i + ".jpg";
        }
    },

    chooseRandomSinger: function(){
        this.initSingersImages();
        let randomSingerName = this.singers[Math.floor(Math.random()*this.singers.length)];
        this.randomSinger.innerHTML = randomSingerName;
        this.imageOfSinger.src = this.singersImages[randomSingerName];
        
        this.singerName.innerHTML = "";
        for (let i = 0; i < randomSingerName.length; i++){
            this.singerName.innerHTML += "_ " 
        }

        this.guessesLeft.innerHTML = randomSingerName.length + 5;
    },

    changeLetter: function(event){
        let singerNameInFunc = "";
        for (let i = 0;i < this.randomSinger.textContent.length ; i++){
            if (event.toLowerCase() == this.randomSinger.textContent[i]){
                singerNameInFunc += event.toLowerCase() + " ";
                this.isletterChanged = true;
            }
            else {
                singerNameInFunc += this.singerName.textContent.split(" ")[i] + " ";
            }
        }
        this.singerName.innerHTML = singerNameInFunc;

        if (this.isletterChanged == false){
            this.wrongGuesses.innerHTML += event.toLowerCase() + ",";
            this.guessesLeft.innerHTML = parseInt(this.guessesLeft.textContent) - 1;
        }

        this.isletterChanged = false;
    },

    checkIfWinner: function(){
        let singerNameText = this.singerName.textContent.split(" ").reduce(
            function(letter, nextLetter){ 
                return letter + nextLetter;
            }
        );
        
        if ((this.randomSinger.textContent == singerNameText) && ( parseInt(this.guessesLeft.textContent) > 0) ) {
            this.wins.innerHTML = parseInt(this.wins.textContent) + 1;
            this.playGame();
        }else if ( parseInt(this.guessesLeft.textContent) == 0)  {
            this.loses.innerHTML = parseInt(this.loses.textContent) + 1;
            this.playGame();
        }
    },

    playGame: function(){
        this.wrongGuesses.innerHTML = "";
        this.chooseRandomSinger();
        document.onkeyup = (event) => {
            this.changeLetter(event.key);
            this.checkIfWinner();
        }
    }
}

hangman.playGame();