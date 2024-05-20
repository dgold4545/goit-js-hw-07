function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsInputElem = document.querySelector('input[type="number"]');

const dataCreateBtnElem = document.querySelector('button[data-create]');

const dataDestroyBtnElem = document.querySelector('button[data-destroy]');


const boxesElem = document.querySelector('#boxes');

dataCreateBtnElem.addEventListener('click', () => {
  createBoxes(controlsInputElem.value);
  
});


function createBoxes(amount) {
  
  let validIndexValue = 0;
  
  if (amount >= 1 && amount <= 100) {
    validIndexValue = amount;
  }


  let markup = []
  let paramOfSize = 30;
  for (let i = 0; i < validIndexValue; i += 1) {
    markup.push(
      `<div style="background-color:${getRandomHexColor()}; width:${paramOfSize}px; height:${paramOfSize}px"></div> \n`
    );
    paramOfSize += 10;
  }

  boxesElem.innerHTML = markup.join('');
    controlsInputElem.value = ''
  
}



dataDestroyBtnElem.addEventListener('click', destroyBoxes);


function destroyBoxes() {
  boxesElem.innerHTML = '';
}