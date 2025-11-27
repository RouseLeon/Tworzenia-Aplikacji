function debugBorders() {
    const allElements = document.body.querySelectorAll('*');

    let tooltip = document.createElement('div');
    tooltip.classList.add('debug-tooltip');
    tooltip.style.position = 'fixed';
    tooltip.style.right = '0';
    tooltip.style.top = '-9999px';
    tooltip.style.background = 'rgba(0,0,0,0.7)';
    tooltip.style.color = '#fff';
    tooltip.style.padding = '5px 10px';
    tooltip.style.fontSize = '12px';
    tooltip.style.zIndex = '9999';
    tooltip.style.pointerEvents = 'none';
    document.body.appendChild(tooltip);

    allElements.forEach(el => {
        const hue = Math.floor(Math.random() * 361);
        el.dataset.myDebugColor = hue;
        el.style.outline = `2px solid hsl(${hue}, 100%, 60%)`;

        el.addEventListener('mouseenter', e => {
            el.style.backgroundColor = `hsla(${el.dataset.myDebugColor},100%,60%,0.2)`;
            const rect = el.getBoundingClientRect();
            tooltip.innerHTML = `Wymiary: ${Math.round(rect.width)} x ${Math.round(rect.height)}`;
            tooltip.style.top = '10px';
        });
        el.addEventListener('mousemove', e => {
            tooltip.style.top = e.clientY + 30 + 'px';
            tooltip.style.left = e.clientX + 30 + 'px';
        });
        el.addEventListener('mouseleave', () => {
            el.style.backgroundColor = '';
            tooltip.style.top = '-9999px';
            tooltip.innerHTML = '';
        });
    });
}

debugBorders();

javascript:(()=>{const e=document.body.querySelectorAll('*');
    let t=document.createElement('div');t.classList.add('debug-tooltip');
    t.style.position='fixed';t.style.right='0';t.style.top='-9999px';t.style.background='rgba(0,0,0,0.7)';
    t.style.color='#fff';t.style.padding='5px 10px';t.style.fontSize='12px';t.style.zIndex='9999';
    t.style.pointerEvents='none';
    document.body.appendChild(t);e.forEach(el=>{const h=Math.floor(361*Math.random());el.dataset.myDebugColor=h;el.style.outline=`2px solid hsl(${h},100%,60%)`;
    el.addEventListener('mouseenter',()=>{el.style.backgroundColor=`hsla(${el.dataset.myDebugColor},100%,60%,0.2)`;const r=el.getBoundingClientRect();
    t.innerHTML=`Wymiary: ${Math.round(r.width)} x ${Math.round(r.height)}`;t.style.top='10px'});el.addEventListener('mousemove',e=>{t.style.top=e.clientY+30+'px';t.style.left=e.clientX+30+'px'});
    el.addEventListener('mouseleave',()=>{el.style.backgroundColor='';t.style.top='-9999px';t.innerHTML=''})})})();

    javascript:(()=>{document.querySelectorAll('link[rel="stylesheet"]').forEach(l=>l.remove());document.querySelectorAll('style').forEach(s=>s.remove());document.querySelectorAll('*').forEach(e=>e.removeAttribute('style'));})();
javascript:(()=>{const all=document.body.querySelectorAll('*');console.log('Liczba elementów w body:',all.length);const links=document.querySelectorAll('a');let internal=0,external=0;links.forEach(a=>a.href.startsWith('http')?external++:internal++);console.log('Linki - wewnętrzne:',internal,'zewnętrzne:',external);const imgs=document.querySelectorAll('img');let noAlt=0;imgs.forEach(i=>{if(!i.alt)noAlt++});console.log('Grafiki bez alt:',noAlt);const headers=document.querySelectorAll('h1,h2,h3,h4,h5,h6');console.log('Nagłówki:',headers.length);headers.forEach(h=>console.log(h.tagName,'->',h.textContent));})();
