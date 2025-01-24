console.log("Hoy! 🇵🇭")

const stage = document.querySelector("body");
const custard = document.getElementById("custard");

let neow = new Audio("./img/Neow.mp3");

//Movement//
custard.onclick = function() {
    this.classList.toggle("move");
    neow.play();
}

stage.addEventListener("click", function(event) {
    console.log(event.clientX + " : " + event.clientY);
    //custard.style.transform = "translateX(" + event.clientX-100 + "px) translateY(" + event.clientY-92 + "px)";
    custard.style.transform = `translateX(${event.clientX +21}px) translateY(${event.clientY -36.86}px)`;
    neow.play();
})

function addMyObject() {

let myObject = document.createElement("img");
myObject.src = "img/custardfood.svg";
myObject.style.width = "100px"
stage.append(myObject);

let w = window.innerWidth - 100;
let randoX = Math.floor((Math.random() * w) + 1);
let h = window.innerHeight - 58;
let randoY = Math.floor((Math.random() * h) + 1);

myObject.style.transform = `translateX(${randoX}px) translateY(${randoY}px)`;

setTimeout(() => { myObject.remove(); addMyObject();}, 1000);
}
addMyObject();


