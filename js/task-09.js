function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)}`;
}

const bodyEl = document.querySelector('body');
console.log(bodyEl);
const colorEl = document.querySelector('.color');
console.log(colorEl);
const button = document.querySelector('.change-color');
console.log(button);

const handleClick = event => {
  console.log(event);
  const colorChenge = getRandomHexColor();
  bodyEl.style.backgroundColor = colorChenge;
  button.innerHTML = colorChenge;
};

button.addEventListener("click", handleClick);