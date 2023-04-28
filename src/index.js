import {createHeader} from './modules/createElements/header.js';
import {createTextarea} from './modules/createElements/textarea.js';
import {createKeyboardContain, createKeyboardRows} from './modules/createElements/keyboardContain.js';
import {rowOne, rowTwo, rowThree, rowFour, rowFive} from './modules/createElements/valuesButtons/values.js';
import {createButtonsRowOne, createButtonsRowTwo, createButtonsRowThree, createButtonsRowFour, createButtonsRowFive} from './modules/createElements/buttons.js';

createHeader();
createTextarea();
createKeyboardContain();

//Create rows in keyboard container
for (let i = 1; i <= 5; i++) {
  createKeyboardRows(i);
};

//Create buttons in rows
for (let i = 0; i < rowOne.length; i++) {
  createButtonsRowOne(i);
};
for (let i = 0; i < rowTwo.length; i++) {
  createButtonsRowTwo(i);
};
for (let i = 0; i< rowThree.length; i++) {
  createButtonsRowThree(i)
};
for (let i = 0; i< rowFour.length; i++) {
  createButtonsRowFour(i)
};
for (let i = 0; i< rowFive.length; i++) {
  createButtonsRowFive(i)
};
const spaceButton = document.querySelector('.key-');
spaceButton.className = 'key-space buttons';
spaceButton.textContent = ' ';

//Change value to press key "Shift"
const valueRowOne = rowOne;
const valueRowTwo = rowTwo;
const valueRowThree = rowThree;
const valueRowFour = rowFour;
const valueRowFive = rowFive;
const lineOne = document.querySelector('.keyboard__rows-1');
const lineTwo = document.querySelector('.keyboard__rows-2');
const lineThree = document.querySelector('.keyboard__rows-3');
const lineFour = document.querySelector('.keyboard__rows-4');
const lineFive = document.querySelector('.keyboard__rows-5');
const buttonsRowOne = lineOne.childNodes;
const buttonsRowTwo = lineTwo.childNodes;
const buttonsRowThree = lineThree.childNodes;
const buttonsRowFour = lineFour.childNodes;
const buttonsRowFive = lineFive.childNodes;

document.addEventListener('keydown', event => {
  if (event.key === "Shift") {
    for (let i = 0; i < buttonsRowOne.length; i++) {
      buttonsRowOne[i].textContent = valueRowOne[i].shiftKey;
    };
    for (let i = 0; i < buttonsRowTwo.length; i++) {
      buttonsRowTwo[i].textContent = valueRowTwo[i].shiftKey;
    };
    for (let i = 0; i < buttonsRowThree.length; i++) {
      buttonsRowThree[i].textContent = valueRowThree[i].shiftKey;
    };
    for (let i = 0; i < buttonsRowFour.length; i++) {
      buttonsRowFour[i].textContent = valueRowFour[i].shiftKey;
    };
    for (let i = 0; i < buttonsRowFive.length; i++) {
      buttonsRowFive[i].textContent = valueRowFive[i].shiftKey;
    };
  };
});

document.addEventListener('keyup', event => {
  if (event.key === "Shift") {
    for (let i = 0; i < buttonsRowOne.length; i++) {
      buttonsRowOne[i].textContent = valueRowOne[i].key;
    };
    for (let i = 0; i < buttonsRowTwo.length; i++) {
      buttonsRowTwo[i].textContent = valueRowTwo[i].key;
    };
    for (let i = 0; i < buttonsRowThree.length; i++) {
      buttonsRowThree[i].textContent = valueRowThree[i].key;
    };
    for (let i = 0; i < buttonsRowFour.length; i++) {
      buttonsRowFour[i].textContent = valueRowFour[i].key;
    };
    for (let i = 0; i < buttonsRowFive.length; i++) {
      buttonsRowFive[i].textContent = valueRowFive[i].key;
    };
  };
});
