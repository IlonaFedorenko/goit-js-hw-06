const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
console.log(ingredients);

const makeList = ingredients => {
  return ingredients.map(ingredient => {
    const listItem = document.createElement('li');
    listItem.textContent = ingredient;
    listItem.classList.add('item');
    return listItem
  })
}

const listEl = makeList(ingredients);
const list = document.querySelector("#ingredients");
list.append(...listEl)


// const firstIngredients = document.createElement("li");
// firstIngredients.textContent = 'Potatoes';
// firstIngredients.classList.add('item');
// console.log(firstIngredients);

// const secondIngredients = document.createElement("li");
// secondIngredients.textContent = 'Mushrooms';
// secondIngredients.classList.add('item');
// console.log(secondIngredients);

// const thirdIngredients = document.createElement("li");
// thirdIngredients.textContent = 'Garlic';
// thirdIngredients.classList.add('item');
// console.log(thirdIngredients);

// const fourthIngredients = document.createElement("li");
// fourthIngredients.textContent = 'Tomatos';
// fourthIngredients.classList.add('item');
// console.log(fourthIngredients);

// const fifthIngredients = document.createElement("li");
// fifthIngredients.textContent = 'Herbs';
// fifthIngredients.classList.add('item');
// console.log(fifthIngredients);

// const sixngredients = document.createElement("li");
// sixngredients.textContent = 'Condiments';
// sixngredients.classList.add('item');
// console.log(sixngredients);



// const firstIngredientsEl = document.querySelector("#ingredients");
// firstIngredientsEl.append(firstIngredients, secondIngredients, thirdIngredients,
//   fourthIngredients,fifthIngredients,sixngredients);

// const firstIngredientsEl = document.querySelector("#ingredients");
// const navItems = ingredients.map(ingredient => {
//   const listItem = document.createElement("li");
//   listItem.classList.add('nav-link');
//   listItem.textContent = navItems;
//   return listItem;
// });
// firstIngredientsEl.append(...navItems);
