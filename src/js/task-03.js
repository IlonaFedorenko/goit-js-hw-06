const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const makeGallery = images => {
 return images.map(image => {
   const listItem = document.createElement('li');
   const listItemImage = document.createElement('img');
   listItem.append(listItemImage);
   listItemImage.src = image.url;
   listItemImage.alt = image.alt;
  listItemImage.width = 320;
   return listItem
 })
}

const listEl = makeGallery(images);
const galleryEl = document.querySelector(".gallery");
galleryEl.append(...listEl)






         //old variant

// const firstImagesEl = document.createElement("li");
// // console.log(firstImagesEl);
// const firstImages = document.createElement("img");
// firstImages.src = 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
// firstImages.alt = 'White and Black Long Fur Cat';
// firstImages.classList.add("img");
// // console.log(firstimages);
// firstImagesEl.appendChild(firstImages);


// const secondImagesEl = document.createElement("li");
// // console.log(secondImagesEl);
// const secondImages = document.createElement("img");
// secondImages.src = 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
// secondImages.alt = 'Orange and White Koi Fish Near Yellow Koi Fish';
// secondImages.classList.add("img");
// // console.log(secondimages);
// secondImagesEl.appendChild(secondImages);


// const thirdImagesEl = document.createElement("li");
// // console.log(thirdImagesEl);
// const thirdImages = document.createElement("img");
// thirdImages.src = 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
// thirdImages.alt = 'Group of Horses Running';
// thirdImages.classList.add("img");
// // console.log(thirdimages);
// thirdImagesEl.appendChild(thirdImages);



// const galleryEl = document.querySelector(".gallery");
// console.log(galleryEl);
// galleryEl.append(firstImagesEl, secondImagesEl, thirdImagesEl);
// // galleryEl.insertAdjacentHTML("beforeend", firstImagesEl);