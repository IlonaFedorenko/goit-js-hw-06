// Number of categories: 3
// Category: Animals
// Elements: 4
// Category: Products
// Elements: 3
// Category: Technologies
// Elements: 5

const categoryEl = document.querySelectorAll(".item");
console.log('Number of categories:', categoryEl.length);

// categoryList.forEach((elemant) => {
//     console.log(`Category: ${elemant.querySelector('h2').textContent}`);
//     console.log(`Elements: ${elemant.querySelectorAll('h2+ul>li').length}`);
// });

const categoryList = categoryEl.forEach((elemant) => {
    console.log('Category:', elemant.firstElementChild.textContent);
    console.log('Elements:', elemant.querySelectorAll('li').length);
});

