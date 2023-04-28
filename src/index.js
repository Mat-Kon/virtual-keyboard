import {createHeader} from './modules/createElements/header.js';
import {createTextarea} from './modules/createElements/textarea.js';
import {createKeyboardContain, createKeyboardRows} from './modules/createElements/keyboardContain.js';
import {rowOne, rowTwo} from './modules/createElements/valuesButtons/values.js';
import {createButtonsRowOne, createButtonsRowTwo} from './modules/createElements/buttons.js';

createHeader();
createTextarea();
createKeyboardContain();
for (let i = 1; i <= 5; i++) {
  createKeyboardRows(i);
};
for (let i = 0; i < rowOne.length; i++) {
  createButtonsRowOne(i);
};
for (let i = 0; i < rowTwo.length; i++) {
  createButtonsRowTwo(i);
};

document.addEventListener('keydown', event => {
  const lineOne = document.querySelector('.keyboard__rows-1');
  const buttonsRowOne = lineOne.childNodes;
  const lineTwo = document.querySelector('.keyboard__rows-2');
  const buttonsRowTwo = lineTwo.childNodes;
  if (event.key === "Shift") {
    for (let i = 0; i < buttonsRowOne.length; i++) {
      buttonsRowOne[i].textContent = rowOne[i].shiftKey;
    };
    for (let i = 0; i < buttonsRowTwo.length; i++) {
      buttonsRowTwo[i].textContent = rowTwo[i].shiftKey;
      
    };
  };
});

document.addEventListener('keyup', event => {
  const lineOne = document.querySelector('.keyboard__rows-1');
  const buttonsRowOne = lineOne.childNodes;
  const lineTwo = document.querySelector('.keyboard__rows-2');
  const buttonsRowTwo = lineTwo.childNodes;
  if (event.key === "Shift") {
    for (let i = 0; i < buttonsRowOne.length; i++) {
      buttonsRowOne[i].textContent = rowOne[i].key;
    };
    for (let i = 0; i < buttonsRowTwo.length; i++) {
      buttonsRowTwo[i].textContent = rowTwo[i].key;
    };
  };
});
