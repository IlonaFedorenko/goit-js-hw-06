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
