// Pobranie nagłówka
const header = document.querySelector('.header');

// Funkcja sprawdzająca pozycję scrolla i szerokość ekranu
function checkScroll() {
    // Sprawdzenie szerokości okna
    if (window.innerWidth >= 600) {
        const scrollPos = window.scrollY || window.pageYOffset; // pozycja scrolla
        console.log('Scroll Y:', scrollPos);

        if (scrollPos > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    } else {
        // Dla małych ekranów usuwamy klasę sticky
        header.classList.remove('sticky');
    }
}

// Podpinamy funkcję pod zdarzenie scroll i resize
window.addEventListener('scroll', checkScroll);
window.addEventListener('resize', checkScroll);

// Wywołanie funkcji od razu po załadowaniu strony
checkScroll();
