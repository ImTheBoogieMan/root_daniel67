const panel = document.getElementById("panel");
let MySound = new Audio("img/Whichpokemon.mp3");

panel.onclick = function() {
    this.classList.toggle("slide-up");
    MySound.play();
}

const bast = document.getElementById("bast");
let mySound2 = new Audio("img/Hell.mp3")

bast.onclick = function () {
    mySound2.play()
}
