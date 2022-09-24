
var acc = document.getElementsByClassName("accordion");
var i 

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }

    });
};

let time = 4000,
    currentImageIndex = 0,
    images = document.querySelectorAll('#slider img')
max = images.length;

function nextImage() {
    images[currentImageIndex].classList.remove('selected')

    currentImageIndex++
    if (currentImageIndex >= max)
        currentImageIndex = 0;
    images[currentImageIndex].classList.add('selected')
}


function start() {
    setInterval(() => {
        nextImage()
    },time)
};

window.addEventListener('load', start);