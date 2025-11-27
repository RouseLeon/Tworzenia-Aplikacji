const usersList = document.querySelector('.users');

// Funkcja do pobrania i wyświetlenia użytkowników
async function loadUsers() {
    try {
        const res = await fetch('http://localhost:3000/users');
        const users = await res.json();

        usersList.innerHTML = '';
        users.forEach(user => {
            const li = document.createElement('li');
            li.dataset.id = user.id;
            li.classList.add('user');
            li.innerHTML = `
                <div class="user-info">
                    <span class="user-name">${user.name}</span>
                    <span class="user-phone">${user.phone}</span>
                </div>
                <div class="user-actions">
                    <button class="edit">Edytuj</button>
                    <button class="delete">Usuń</button>
                </div>
            `;
            usersList.appendChild(li);
        });
    } catch (err) {
        console.error('Błąd pobierania użytkowników:', err);
    }
}

// Funkcja do dodawania nowego użytkownika
async function addUser(name, phone) {
    try {
        await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, phone })
        });
        loadUsers();
    } catch (err) {
        console.error('Błąd dodawania użytkownika:', err);
    }
}

// Funkcja do usuwania użytkownika
async function deleteUser(id) {
    try {
        await fetch(`http://localhost:3000/users/${id}`, {
            method: 'DELETE'
        });
        loadUsers();
    } catch (err) {
        console.error('Błąd usuwania użytkownika:', err);
    }
}

// Funkcja do edycji użytkownika
async function editUser(id, name, phone) {
    try {
        await fetch(`http://localhost:3000/users/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, phone })
        });
        loadUsers();
    } catch (err) {
        console.error('Błąd edycji użytkownika:', err);
    }
}

// Event delegation dla przycisków "Usuń" i "Edytuj"
usersList.addEventListener('click', e => {
    const li = e.target.closest('li');
    const id = li.dataset.id;

    if (e.target.classList.contains('delete')) {
        if (confirm('Czy na pewno chcesz usunąć tego użytkownika?')) {
            deleteUser(id);
        }
    }

    if (e.target.classList.contains('edit')) {
        const currentName = li.querySelector('.user-name').textContent;
        const currentPhone = li.querySelector('.user-phone').textContent;

        const newName = prompt('Podaj nowe imię i nazwisko:', currentName);
        const newPhone = prompt('Podaj nowy numer telefonu:', currentPhone);

        if (newName && newPhone) {
            editUser(id, newName, newPhone);
        }
    }
});

// Dodaj formularz dynamicznie do strony
const form = document.createElement('form');
form.classList.add('user-form');
form.innerHTML = `
    <input type="text" name="name" placeholder="Imię i nazwisko" required>
    <input type="text" name="phone" placeholder="Telefon" required>
    <button type="submit">Dodaj</button>
`;
document.body.insertBefore(form, usersList);

form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    if (!name || !phone) return;

    addUser(name, phone);
    form.reset();
});

// Wczytaj użytkowników przy starcie
loadUsers();
