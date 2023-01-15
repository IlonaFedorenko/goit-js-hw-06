const categoryEl = document.querySelectorAll(".item");
console.log('Number of categories:', categoryEl.length);

const categoryList = categoryEl.forEach((elemant) => {
    console.log('Category:', elemant.firstElementChild.textContent);
    console.log('Elements:', elemant.querySelectorAll('li').length);
});

