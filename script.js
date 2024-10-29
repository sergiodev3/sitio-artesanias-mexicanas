// JavaScript básico para una futura interactividad
document.addEventListener('DOMContentLoaded', function () {
    // Slider automático
    let sliderImages = document.querySelectorAll('.slider img');
    let currentIndex = 0;

    setInterval(() => {
        sliderImages.forEach(img => img.style.display = 'none');
        currentIndex = (currentIndex + 1) % sliderImages.length;
        sliderImages[currentIndex].style.display = 'block';
    }, 3000);
});
