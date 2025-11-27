const apiUrl = 'http://localhost:3000/users';

let currentPage = 1;
const limit = 10;
let sortField = 'id';
let sortOrder = 'asc';
let filterQuery = '';

const tableBody = document.querySelector('tbody');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const filterForm = document.querySelector('.form');
const loading = document.querySelector('.loading');
const headers = document.querySelectorAll('thead th');

// ===== Funkcja do pobrania danych =====
async function loadData() {
    loading.style.display = 'block';

    const url = new URL(apiUrl);
    url.searchParams.set('_page', currentPage);
    url.searchParams.set('_limit', limit);
    url.searchParams.set('_sort', sortField);
    url.searchParams.set('_order', sortOrder);
    if (filterQuery) url.searchParams.set('q', filterQuery);

    try {
        const res = await fetch(url);
        const data = await res.json();
        const totalCount = res.headers.get('X-Total-Count');

        renderTable(data);

        prevBtn.disabled = currentPage <= 1;
        nextBtn.disabled = currentPage * limit >= totalCount;

    } catch (err) {
        console.error(err);
    } finally {
        loading.style.display = 'none';
    }
}

// ===== Renderowanie tabeli =====
function renderTable(users) {
    tableBody.innerHTML = '';
    users.forEach(user => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${user.id}</td>
            <td>${user.first_name}</td>
            <td>${user.last_name}</td>
            <td>${user.email}</td>
            <td>${user.gender}</td>
            <td>${user.ip_address}</td>
        `;
        tableBody.appendChild(tr);
    });
}

// ===== Obsługa paginacji =====
prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        loadData();
    }
});

nextBtn.addEventListener('click', () => {
    currentPage++;
    loadData();
});

// ===== Obsługa formularza =====
filterForm.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(filterForm);
    filterQuery = '';
    for (let [key, value] of formData.entries()) {
        if (value) filterQuery += `${value} `;
    }
    filterQuery = filterQuery.trim();
    currentPage = 1;
    loadData();
});

filterForm.addEventListener('reset', () => {
    filterQuery = '';
    currentPage = 1;
    loadData();
});

// ===== Sortowanie =====
headers.forEach(th => {
    th.addEventListener('click', () => {
        const field = th.dataset.id;
        if (sortField === field) {
            sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        } else {
            sortField = field;
            sortOrder = 'asc';
        }
        currentPage = 1;
        loadData();
    });
});

// ===== Początkowe załadowanie danych =====
loadData();
