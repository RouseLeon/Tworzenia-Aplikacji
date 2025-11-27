const firstAttempts = document.querySelectorAll('.first-attempt');
firstAttempts.forEach(el => el.classList.add('active'));

const dataBorders = document.querySelectorAll('[data-border]');
for (const el of dataBorders) {  
    el.dataset.elActive = "true"; 
}

const hackEls = document.querySelectorAll('.hack');
hackEls.forEach(el => el.setAttribute('title', 'hacking'));

const hijackEls = document.querySelectorAll('.hijack');
hijackEls.forEach(el => el.removeAttribute('title'));

const stEls = document.querySelectorAll('.st1.st2'); 
stEls.forEach(el => {
    el.style.color = 'red';
    el.style.fontSize = '15px';
});

const attribEls = document.querySelectorAll('.attrib');
attribEls.forEach(el => {
    el.dataset.hackActive = "true";
    el.removeAttribute('data-hack-inactive');
});

const lastAttempts = document.querySelectorAll('.last-attempt span');
lastAttempts.forEach(span => span.style.display = 'none');
