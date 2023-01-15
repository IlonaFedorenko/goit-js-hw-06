const form = document.querySelector('.login-form');
console.log(form);
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const {
      elements: { email, password } } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        const message = "Please fill in all the fields!";
        return alert(message);
    } else {
         console.log(`Email: ${email.value}, Password: ${password.value}`);
         event.currentTarget.reset();
    }
}
