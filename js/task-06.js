const idInput = document.querySelector('#validation-input');
console.log(idInput);
const length = Number(idInput.dataset.length);
console.log(length);

idInput.addEventListener("blur", (event) => {
     idInput.classList.add('invalid');
    if (event.currentTarget.value.length === length) {
        idInput.classList.replace('invalid', 'valid');
    } 
});









