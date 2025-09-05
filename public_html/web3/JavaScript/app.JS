let cases = document.querySelectorAll(".case");
let Message = document.querySelector("#message");
let MessageWinner = document.querySelector ("#message img");
let Luffy = new Audio("../Sound/Luffy.mp3")
let Usopp = new Audio("../Sound/Usopp.mp3")
var Back = new Audio("../Sound/BackgroundMusic.mp3")
let replayBtn = document.querySelector("#replay")

let PlayerX = true;
const patrons = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

for (let boite of cases) {
    boite.active = true;
    boite.addEventListener("click", function () {
        if (boite.active) {
            if (PlayerX) {
                boite.style.backgroundImage = "url('../img/Luffy.png')";
                PlayerX = false;
                Luffy.play()
            }
            else {
                boite.style.backgroundImage = "url('../img/Usopp.png')";
                PlayerX = true;
                Usopp.play()

            }
            boite.active = false;
        }
        valide(); 
    });
}
const valide = function () {
    for (let patron of patrons) {
        let val1 = cases[patron[0]].style.backgroundImage.slice(5,23);
        let val2 = cases[patron[1]].style.backgroundImage.slice(5,23);
        let val3 = cases[patron[2]].style.backgroundImage.slice(5,23);
    
        if (val1 &&
            val1 === val2 &&
            val1 === val3) {
            /*Message.innerText = (`The Winner is ${val1}`);*/
            for (let boite of cases) {
                boite.active = false;
            }
        }
    }
}

replayBtn.addEventListener("click", function() {
    for (let boite of cases) {
        boite.active = true;
        boite.style.backgroundImage = "";
        PlayerX = true;
    }
});