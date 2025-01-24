console.log("JS 2 in action")

// Step 1 - Selecting the element
const myShape = document.getElementById("pentagon");

// Step 2 - adding a click event
// myShape.addEventListener("click", function() {
myShape.addEventListener("click", () => {
    // myShape.style.borderColor = "blue transparent";
    myShape.classList.toggle("change-me");
})

//for Dwayne

const myContent= document.getElementById("fn");

let boom = new Audio("sounds/Shocked sound effect.mp3");

    function noise() {
        boom.play();
        myContent.classList.toggle("change");
    }