// Напиши скрипт, который при потере фокуса на инпуте (событие blur),
//  проверяет его содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// #validation-input {
//   border: 3px solid #bdbdbd;}
// #validation-input.valid {
//   border-color: #4caf50;}
// #validation-input.invalid {
//   border-color: #f44336;}

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.


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









