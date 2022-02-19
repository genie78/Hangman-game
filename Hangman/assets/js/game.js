"use strict";

var singerName = document.getElementById('singer-name');
var image = document.querySelector(".image-of-singer");

var singers = ['blondie', 'genesis', 'inxs', 'journey', 'madonna', 'metallica', 'poison', 'queen', 'rush', 'toto', 'u2'];
var singersSongs = {
}

for (let i of singers){
    singersSongs[i] = 'assets/images/' + i + ".jpg";
}

function getRandomSinger(){
    let randomSinger = singers[Math.floor(Math.random()*(singers.length -1))];
    image.src = singersSongs[randomSinger];
    singerName.innerHTML = "";
    for (let i = 0; i < randomSinger.length; i++){
        singerName.innerHTML += "_ ";
    }
    return randomSinger;
}
var randomSinger = getRandomSinger();

document.onkeyup = function (event){
    console.log(event.key);


}