const toggleButtons = document.querySelectorAll('.car-toggle-detail');

toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const car = button.closest('.car');
        const detail = car.querySelector('.car-detail');

        const isVisible = detail.style.display === 'block';

        if (!isVisible) {
            detail.style.display = 'block';
            button.textContent = 'Schowaj detale';
            car.classList.add('car-show-detail');
        } else {
            detail.style.display = 'none';
            button.textContent = 'Pokaż detale';
            car.classList.remove('car-show-detail');
        }
    });
});
