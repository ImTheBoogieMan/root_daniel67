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