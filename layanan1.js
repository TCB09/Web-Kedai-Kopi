const slider = document.querySelector(".slider");
let index = 0;

function nextSlide() {
    index++;
    if (index >= 4) {
        index = 0;
    }
    slider.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(nextSlide, 3000);
