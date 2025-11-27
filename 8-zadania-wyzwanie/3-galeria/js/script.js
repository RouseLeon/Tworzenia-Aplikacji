const galleryList = document.querySelector('.gallery-list');
const form = document.querySelector('.search');
const input = document.querySelector('.search-input');
const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');

let currentPage = 1;
let totalPages = 1;
let currentQuery = '';

const API_KEY = 'YOUR_PIXABAY_KEY'; // wpisz swój klucz
const PER_PAGE = 12;

// Funkcja pobierająca zdjęcia
async function fetchImages(query, page = 1) {
    try {
        const res = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&per_page=${PER_PAGE}&page=${page}`);
        const data = await res.json();

        galleryList.innerHTML = '';

        data.hits.forEach(hit => {
            const a = document.createElement('a');
            a.href = hit.largeImageURL;
            a.classList.add('gallery-element');
            a.setAttribute('data-fslightbox', 'gallery');

            const img = document.createElement('img');
            img.src = hit.webformatURL;
            img.alt = hit.tags;
            img.classList.add('gallery-image');

            a.appendChild(img);
            galleryList.appendChild(a);
        });

        totalPages = Math.ceil(data.totalHits / PER_PAGE);
        updateButtons();

        if (window.fsLightbox) window.fsLightbox.refresh();

    } catch (err) {
        console.error('Błąd pobierania zdjęć:', err);
    }
}

// Aktualizacja stanu przycisków
function updateButtons() {
    btnPrev.disabled = currentPage <= 1;
    btnNext.disabled = currentPage >= totalPages;
}

// Obsługa formularza
form.addEventListener('submit', e => {
    e.preventDefault();
    currentQuery = input.value.trim();
    if (!currentQuery) return;
    currentPage = 1;
    fetchImages(currentQuery, currentPage);
});

// Obsługa przycisków paginacji
btnPrev.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        fetchImages(currentQuery, currentPage);
    }
});

btnNext.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        fetchImages(currentQuery, currentPage);
    }
});
