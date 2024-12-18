document.addEventListener('DOMContentLoaded', function () {
    const wrapper = document.querySelector('.sliderWrapper');
    const sliderItems = document.querySelectorAll('.sliderItem');

    let index = 0;

    function showSlide(i) {
        wrapper.style.transform = `translateX(${-100 * i}vw)`;
    }

    function nextSlide() {
        index++;
        if (index >= sliderItems.length) {
            index = 0;
        }
        showSlide(index);
    }

    setInterval(nextSlide, 3000); // Auto slide every 3 seconds
});
