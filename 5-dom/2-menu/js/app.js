const menuItems = document.querySelectorAll('#menu li');

menuItems.forEach(li => {
    li.addEventListener('click', event => {
        event.preventDefault(); 

        const active = document.querySelector('#menu li.nav-el-active');
        if (active) active.classList.remove('nav-el-active');

        li.classList.add('nav-el-active');
    });
});
