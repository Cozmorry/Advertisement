const images = [
    "OIG4.jpeg",
    "OIG4 (1).jpeg",
];

const carousel = document.getElementById("carousel");
let currentImageIndex = 0;

function changeImage() {
    carousel.src = images[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

setInterval(changeImage, 3000);
