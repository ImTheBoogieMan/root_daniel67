const productContainers = [...document.querySelectorAll('#move')];
const preBtn = [...document.querySelectorAll('#prev')];
const nextBtn = [...document.querySelectorAll('#next')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nextBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })
    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

const sunny = document.getElementById("right");
let mySound = new Audio("../images/MyLeBron.mp3")

sunny.onclick = function () {
  this.classList.toggle("sunshine");
  mySound.play();
  setTimeout(done, 13500);
}

function done() {
  var element = document.getElementById("right");
  element.classList.remove("sunshine");
}

/*Button Selectors*/
/*const buttons = document.querySelectorAll('a')
const box = document.getElementsByClassName('up')

function changeBox(e) {
  if (e.target.id === '1') {
    box.classList.add('translate')
  } else if (e.target.id === '2') {
    box.classList = ''
    box.classList.add('blue')
  } else if (e.target.id === '3') {
    box.classList.add('fade')
  } else if (e.target.id === '4') {
    box.classList = ''
    box.classList.add('box')
  } else if (e.target.id === '5') {
    box.classList.remove('box')
    box.classList.add('img')
  }
  else if (e.target.id === '6') {
    box.classList = ''
    box.classList.add('blue')
  } else if (e.target.id === '7') {
    box.classList.add('fade')
  } else if (e.target.id === '8') {
    box.classList = ''
    box.classList.add('box')
  } else if (e.target.id === '9') {
    box.classList.remove('box')
    box.classList.add('img')
  } else if (e.target.id === '10') {
    box.classList.remove('box')
    box.classList.add('img')
  }
}

buttons.forEach(button => {
  button.addEventListener('click', e => changeBox(e))
})
*/
