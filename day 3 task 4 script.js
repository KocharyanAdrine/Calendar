document.addEventListener('DOMContentLoaded',function()) {
    let images = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg'
    ];

let currentIndex=0;
let sliderImage = document.getElementById('slider-image');
function updateImage() {

sliderImage.src = images[currentIndex];
}
updateImage();

document.getElementById('next-button').addEventListener('click', function()) {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

document.getElementById('prev-button').addEventListener('click', function()){
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}
}
