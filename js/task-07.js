const idInputEl = document.querySelector('#font-size-control');
const idTextEl = document.querySelector('#text');

function chengeFontSize() {
    idTextEl.style.fontSize = idInputEl.value + 'px';
    
};
chengeFontSize();

idInputEl.addEventListener("input", chengeFontSize);
