// Select all images and the popup elements
const images = document.querySelectorAll('.gallery-container .image-container img');
const imagePopup = document.querySelector('.image-popup');
const popupImage = imagePopup.querySelector('img');
const closeButton = imagePopup.querySelector('span');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

// Function to update the popup image
function updateImage(index) {
    popupImage.src = images[index].getAttribute('src');
}

// Show the popup with the clicked image and set the current index
images.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentIndex = index;
        updateImage(currentIndex);
        imagePopup.style.display = 'flex';
    })
})

// Close the popup when the close button is clicked
closeButton.addEventListener('click', () => {
    imagePopup.style.display = 'none';
});

// Show the previous image when the "Previous" button is clicked
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage(currentIndex);
});

// Show the next image when the "Next" button is clicked
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage(currentIndex);
});

// Close the popup if clicking outside the image
imagePopup.addEventListener('click', (event) => {
    if (event.target === imagePopup) {
        imagePopup.style.display = 'none';
    }
});