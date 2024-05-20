'use strict';

const categoriesElement = document.querySelector('#categories');

const showCountOfCategoris = (elementOfMarkup) => {
  console.log(`Number of categories: ${elementOfMarkup.children.length}`);

for (const elem of [...elementOfMarkup.children]) {
  console.log(`Category: ${elem.firstElementChild.textContent}`);
  console.log(`Elements: ${elem.lastElementChild.children.length}`);
}
}

showCountOfCategoris(categoriesElement);