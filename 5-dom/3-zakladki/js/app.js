const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

tabLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); 

        const activeTab = document.querySelector('.tab-el.tab-el-active');
        if (activeTab) activeTab.classList.remove('tab-el-active');

        link.parentElement.classList.add('tab-el-active');

        tabContents.forEach(content => content.classList.remove('tab-content-active'));

        const targetId = link.getAttribute('href').substring(1);
        const targetContent = document.getElementById(targetId);
        if (targetContent) targetContent.classList.add('tab-content-active');
    });
});