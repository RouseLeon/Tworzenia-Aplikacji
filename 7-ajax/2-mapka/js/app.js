const map = L.map('mapid').setView([51.919437, 19.145136], 5);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoia2FydG9mZWxlazAwNyIsImEiOiJjanRpazhyM2owbHUwNDluem40Ynljdm5hIn0.kYoJkNni5ksRyA0gy1yV7A'
}).addTo(map);

/*--------------------------------------------------------------------------------------------------------
 !!! powyzszego nie ruszaj, to mapa wstawiona za pomocą leafletjs
 wzorowana na tutorialu ze strony: https://leafletjs.com/examples/quick-start/
 Skrypt pisz poniżej
 --------------------------------------------------------------------------------------------------------*/

const select = document.getElementById('countrySelect');
const countryDataDiv = document.getElementById('countryData');
const countryFlag = document.getElementById('countryFlag');

// inicjalizacja mapy Leaflet
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// ===== Funkcja do pobrania wszystkich państw i wypełnienia selecta =====
async function loadCountries() {
    try {
        const res = await fetch('https://restcountries.com/v3.1/all');
        const data = await res.json();

        // sortowanie po nazwie
        data.sort((a, b) => a.name.common.localeCompare(b.name.common));

        data.forEach(country => {
            const option = document.createElement('option');
            option.value = country.name.common;
            option.textContent = country.name.common;
            select.appendChild(option);
        });

        select.disabled = false; // aktywacja selecta
    } catch (err) {
        console.error(err);
    }
}

// ===== Funkcja do pobrania danych wybranego państwa =====
async function loadCountryData(countryName) {
    if (!countryName) return;

    try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(countryName)}`);
        const data = await res.json();
        const country = data[0];

        // ===== Aktualizacja danych w sidebarze =====
        countryDataDiv.innerHTML = `
            <h3 class="country-name">${country.name.common}</h3>
            <div>Stolica: <strong>${country.capital ? country.capital[0] : '---'}</strong></div>
            <div>Region: <strong>${country.region}</strong></div>
            <div>Podregion: <strong>${country.subregion}</strong></div>
            <div>Liczba ludności: <strong>${country.population.toLocaleString()}</strong></div>
            <div>Strefa czasowa: <strong>${country.timezones ? country.timezones[0] : '---'}</strong></div>
        `;

        // ===== Flaga =====
        countryFlag.src = country.flags.svg;
        countryFlag.alt = `Flaga ${country.name.common}`;

        // ===== Ustawienie mapy =====
        if (country.latlng) {
            map.setView([country.latlng[0], country.latlng[1]], 5);
        }
    } catch (err) {
        console.error(err);
    }
}

// ===== Obsługa zmiany selecta =====
select.addEventListener('change', () => {
    const countryName = select.value;
    loadCountryData(countryName);
});

// ===== Wywołanie funkcji startowej =====
loadCountries();
