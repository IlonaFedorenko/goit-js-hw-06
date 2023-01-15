// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name - output.Если инпут пустой,
// в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

// При вводе в инпут меняется строка снизу с Anonymous на ту что ввели в инпут
 // соответсвенно если ничего не введено то так и остается строка Hello, Anonymous!
const idInput = document.querySelector('#name-input');
console.log(idInput);
const outputEl = document.querySelector('#name-output');
console.log(outputEl);

idInput.addEventListener("input", (event) => {
    if (event.currentTarget.value === "") {
        outputEl.textContent = 'Anonymous';
    } else {
        outputEl.textContent = event.currentTarget.value;
    }
});

// idInput.addEventListener("input", (event) => {
//     outputEl.textContent = event.currentTarget.value; });