const form = document.querySelector('.form');
const userList = document.querySelector('.user-list');

function removeUser(e) {
    const li = e.target.closest('.user');
    if(li) li.remove();
}

document.querySelectorAll('.user-delete').forEach(btn => {
    btn.addEventListener('click', removeUser);
});

form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    const nameValue = this.name.value.trim();
    const phoneValue = this.phone.value.trim();

    if(nameValue && phoneValue) {
        const li = document.createElement('li');
        li.classList.add('user');

        li.innerHTML = `
            <div class="user-data">
                <div class="user-name">${nameValue}</div>
                <div class="user-phone">${phoneValue}</div>
            </div>
            <button type="button" class="btn user-delete">Usuń</button>
        `;

        li.querySelector('.user-delete').addEventListener('click', removeUser);

        userList.appendChild(li);

        this.reset();
    }
});
