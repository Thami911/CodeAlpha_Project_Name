document.querySelectorAll('.gallery-container img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.image-popup').style.display = 'block';
        document.querySelector('.image-popup img').src = image.getAttribute('src')
    }
});

document.querySelector('.image-popup span').onclick = () => {
    document.querySelector('.image-popup').style.display = 'none';
}