// Pobranie elementu
const element = document.querySelector('.element');

// Funkcja do aktualizacji tekstu i koloru w zależności od szerokości ekranu
function updateElement() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (width >= 600) {
        element.textContent = `${width}x${height}`;
        element.style.backgroundColor = 'red';
        element.style.pointerEvents = 'auto'; // włączamy kliknięcie
    } else {
        element.textContent = '';
        element.style.backgroundColor = 'blue';
        element.style.pointerEvents = 'none'; // wyłączamy kliknięcie
    }
}

// Funkcja do wypisywania wymiarów po kliknięciu
function logWindowSize() {
    console.log(`Szerokość okna: ${window.innerWidth}, Wysokość okna: ${window.innerHeight}`);
}

// Podpinamy zdarzenia
window.addEventListener('resize', updateElement);
element.addEventListener('click', logWindowSize);

// Wywołanie od razu przy załadowaniu strony
updateElement();
