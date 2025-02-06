const perry = document.getElementById("hat");
let mySound = new Audio("../images/PerryThePlatypus.mp3")

perry.onclick = function () {
    this.classList.toggle("slide-down");
    mySound.play()
}