let cases = document.querySelectorAll(".case");
let Message = document.querySelector("#message");
let replayBtn = document.querySelector("#replay");

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
                boite.innerText = "X";
                PlayerX = false;
            }
            else {
                boite.innerText = "O";
                PlayerX = true;
            }
            boite.active = false;
        }
        valide();
    });
}

const valide = function () {
    for (let patron of patrons) {
        let val1 = cases[patron[0]].innerText;
        let val2 = cases[patron[1]].innerText;
        let val3 = cases[patron[2]].innerText;
    
        if (val1 &&
            val1 === val2 &&
            val1 === val3) {
            Message.innerText = (`The Winner is ${val1}`);
            for (let boite of cases) {
                boite.active = false;
            }
        }
    }
}

replayBtn.addEventListener("click", function() {
    for (let boite of cases) {
        boite.active = true;
        boite.innerText = "";
        PlayerX = true;
        Message.innerText = "Ni Hao";
    }
});