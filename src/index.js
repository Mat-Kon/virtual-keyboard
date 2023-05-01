import {createHeader} from './modules/createElements/header.js';
import {createTextarea} from './modules/createElements/textarea.js';
import {createKeyboardContain, createKeyboardRows} from './modules/createElements/keyboardContain.js';
import {rowOne, rowTwo, rowThree, rowFour, rowFive} from './modules/createElements/valuesButtons/values.js';
import {createButtonsRowOne, createButtonsRowTwo, createButtonsRowThree, createButtonsRowFour, createButtonsRowFive} from './modules/createElements/buttons.js';
import {enterValueToMouse, removeValueToMouse} from './modules/keyboardFunctionality/enterToMouse.js';
createHeader();
createTextarea();
createKeyboardContain();
window.onload = () => {
  //add enter value to click press keyboard button
  activePressButton();
  removePressButton();
  //add enter and remove value to click mouse
  enterValueToMouse();
  removeValueToMouse();
  enterValueToPressKeyboard();
}

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

document.addEventListener('keydown', (event) => {
  if (event.getModifierState("Shift")) {
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
    spaceButton.textContent = ' ';
  };
});

document.addEventListener('keyup', (event) => {
  if (!event.getModifierState("Shift")) {
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
    spaceButton.textContent = ' ';
  };
});

//add enter value to click press keyboard button
const activePressButton = () => {
  const allValue = [...buttonsRowOne, ...buttonsRowTwo, ...buttonsRowThree, ...buttonsRowFour, ...buttonsRowFive];
  document.addEventListener('keydown', (event) => {
    if (event.key === "Meta") {
      document.querySelector('.key-win').classList.add('active');
    }
    if (event.code === "ControlLeft") {
      document.querySelector('.key-ctrl-left').classList.add('active');
    }
    if (event.code === "ControlRight") {
      document.querySelector('.key-ctrl-right').classList.add('active');
    }
    if (event.code === "AltLeft") {
      event.preventDefault();
      return document.querySelector('.key-alt-left').classList.add('active');
    }
    if (event.code === "AltRight") {
      event.preventDefault();
      return document.querySelector('.key-alt-right').classList.add('active');
    }
    if (event.key === "Tab") {
      event.preventDefault();
    }
    if (event.key === "Delete") {
      document.querySelector('.key-del').classList.add('active');
    }
    if (event.key === 'ArrowUp') {
      document.querySelector('.key-Arrow-up').classList.add('active');
    }
    if (event.key === 'ArrowDown') {
      document.querySelector('.key-Arrow-down').classList.add('active');
    }
    if (event.key === 'ArrowLeft') {
      document.querySelector('.key-Arrow-left').classList.add('active');
    }
    if (event.key === 'ArrowRight') {
      document.querySelector('.key-Arrow-right').classList.add('active');
    }
    for (let i = 0; i < allValue.length; i++) {
      if (allValue[i].textContent === event.key) {
        allValue[i].classList.add('active');
      }
    }
  });
}

const removePressButton = () => {
  const allValue = [...buttonsRowOne, ...buttonsRowTwo, ...buttonsRowThree, ...buttonsRowFour, ...buttonsRowFive];
  document.addEventListener('keyup', (event) => {
    if (event.key === "Meta") {
      document.querySelector('.key-win').classList.remove('active');
    }
    if (event.code === "ControlLeft") {
      document.querySelector('.key-ctrl-left').classList.remove('active');
    }
    if (event.code === "ControlRight") {
      document.querySelector('.key-ctrl-right').classList.remove('active');
    }
    if (event.code === "AltLeft") {
      document.querySelector('.key-alt-left').classList.remove('active');
    }
    if (event.code === "AltRight") {
      document.querySelector('.key-alt-right').classList.remove('active');
    }
    if (event.key === "Delete") {
      document.querySelector('.key-del').classList.remove('active');
    }
    if (event.key === 'ArrowUp') {
      document.querySelector('.key-Arrow-up').classList.remove('active');
    }
    if (event.key === 'ArrowDown') {
      document.querySelector('.key-Arrow-down').classList.remove('active');
    }
    if (event.key === 'ArrowLeft') {
      document.querySelector('.key-Arrow-left').classList.remove('active');
    }
    if (event.key === 'ArrowRight') {
      document.querySelector('.key-Arrow-right').classList.remove('active');
    }
    for (let i = 0; i < allValue.length; i++) {
      if (allValue[i].textContent === event.key) {
        allValue[i].classList.remove('active');
      }
    }
  });
}

//enter value in textarea to press keyboard
const enterValueToPressKeyboard = () => {
  const textWindow = document.querySelector('.text-window');
  const spaceKey = document.querySelector('.key-space');
  document.addEventListener('keydown', (event) => {
    textWindow.focus();
    if (event.key === "Tab") {
      event.preventDefault();
      textWindow.textContent += '    ';
    }
  });
}