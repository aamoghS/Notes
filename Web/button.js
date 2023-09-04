const images = [
  '../images/image1.jpg', // Relative path to the "images" directory
  '../images/image2.jpg',
  '../images/image3.jpg',
];

let currentImageIndex = 0;

const bodyElement = document.body;
const changeBgButton = document.getElementById('changeBgButton');

function changeBackground() {
  bodyElement.style.backgroundImage = `url(${images[currentImageIndex]})`;
  currentImageIndex = (currentImageIndex + 1) % images.length;
}

changeBgButton.addEventListener('click', changeBackground);
