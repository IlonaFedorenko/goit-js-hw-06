const idInput = document.querySelector('#validation-input');
console.log(idInput);
const length = Number(idInput.dataset.length);
console.log(length);

idInput.addEventListener("blur", (event) => {
    //  idInput.classList.add('invalid');
    if (event.currentTarget.value.length === length) {
         idInput.classList.add('valid');
         idInput.classList.remove('invalid');
    } else {
         idInput.classList.add('invalid');
         idInput.classList.remove('valid');
        }
});









