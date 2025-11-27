const addBtn = document.getElementById('add');
const list = document.querySelector('.list');
const template = document.getElementById('elementInner').innerHTML;

function updateNumbers() {
    const items = list.querySelectorAll('.element');
    items.forEach((el, index) => {
        el.querySelector('.nr').textContent = index + 1;
    });
}

function removeElement(e) {
    const el = e.target.closest('.element');
    if (el) {
        el.remove();
        updateNumbers();
    }
}

function cloneElement(e) {
    const el = e.target.closest('.element');
    if (el) {
        const clone = el.cloneNode(true);
        list.appendChild(clone);

        clone.querySelector('.delete').addEventListener('click', removeElement);
        clone.querySelector('.clone').addEventListener('click', cloneElement);

        updateNumbers();
    }
}

addBtn.addEventListener('click', () => {
    const newEl = document.createElement('div');
    newEl.classList.add('element');
    newEl.innerHTML = template;

    list.appendChild(newEl);

    newEl.querySelector('.delete').addEventListener('click', removeElement);
    newEl.querySelector('.clone').addEventListener('click', cloneElement);

    updateNumbers();
});

list.querySelectorAll('.element').forEach(el => {
    el.querySelector('.delete').addEventListener('click', removeElement);
    el.querySelector('.clone').addEventListener('click', cloneElement);
});
