function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



// console.log(getRandomHexColor());

// document.body.style.backgroundColor = getRandomHexColor();

const changeColorBtnElem = document.querySelector(".change-color");

const widgetColorSpanElem = document.querySelector('.color');

changeColorBtnElem.addEventListener('click', () => {
  const result = getRandomHexColor();
  widgetColorSpanElem.textContent = result;
  document.body.style.backgroundColor = result;
  
})