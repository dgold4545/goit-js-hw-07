

const inputElem = document.querySelector('#name-input');

const outputElem = document.querySelector('#name-output');

inputElem.addEventListener('input', hendlerInputElemInput);

function hendlerInputElemInput(event) {
  
  outputElem.setAttribute('data-anonymous', 'Anonymous');

  let currentValueInput = event.currentTarget.value.trim();
    outputElem.textContent = currentValueInput;

  
  if (!currentValueInput) {
    outputElem.textContent = outputElem.dataset.anonymous;
  }
}