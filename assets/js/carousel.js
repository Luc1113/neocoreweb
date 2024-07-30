const carouselContainer = document.getElementById('carousel');
const imageCount = 3; // Adjust this number based on the number of images you have
const images = [];

for (let i = 1; i <= imageCount; i++) {
    const img = document.createElement('img');
    img.src = `/assets/carousel/${i}.JPG`;
    img.alt = `Image Description ${i}`;
    if (i === 1) img.classList.add('active');
    carouselContainer.appendChild(img);
    images.push(img);
}

let currentIndex = 0;

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

setInterval(showNextImage, 3000); // Change image every 3 seconds