const ul = document.getElementById('menu');
ul.classList.add('menu');

const liItems = ul.querySelectorAll('li');
liItems[0].classList.add('first');

liItems[liItems.length - 1].classList.add('last');

liItems[2].classList.add('active');

liItems[2].style.color = '#fff';

const links = ul.querySelectorAll('a');
links.forEach(link => {
    link.setAttribute('title', `Przejdź na stronę ${link.textContent}`);
});

links.forEach(link => link.setAttribute('href', '#'));

links.forEach(link => {
    link.addEventListener('click', () => alert(`Kliknięto ${link.textContent}`));
});

const activeLink = ul.querySelector('li.active a');
const newLink = activeLink.cloneNode(true);
activeLink.parentNode.replaceChild(newLink, activeLink);
