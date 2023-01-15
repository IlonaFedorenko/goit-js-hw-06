// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const decrementBtn = document.querySelector('[data-action ="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('[id="value"]');

const counter = {
value: 0,
increment(){
    this.value += 1;
    },
decrement(){
    this.value -= 1;
    },
};

decrementBtn.addEventListener("click", function() {
counter.decrement();
valueEl.textContent = counter.value;
});

incrementBtn.addEventListener("click", function() {
counter.increment();
valueEl.textContent = counter.value;
});