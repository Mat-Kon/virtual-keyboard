import {rowOne, rowTwo, rowThree, rowFour, rowFive} from './valuesButtons/values.js';

export const createButtonsRowOne = (num, eventKey) => {
    const valuesInButtons = rowOne;
    const row = document.querySelector('.keyboard__rows-1');
    const button = document.createElement('span');
    button.classList.add(`key-${String(valuesInButtons[num].key).toLowerCase()}`);
    button.classList.add('buttons');
    button.textContent = valuesInButtons[num].key;
    row.append(button);
};
export const createButtonsRowTwo = (num, eventKey) => {
    const valuesInButtons = rowTwo;
    const row = document.querySelector('.keyboard__rows-2');
    const button = document.createElement('span');
    button.classList.add(`key-${String(valuesInButtons[num].key).toLowerCase()}`);
    button.classList.add('buttons');
    button.textContent = valuesInButtons[num].key;
    row.append(button);
};
export const createButtonsRowThree = (num, eventKey) => {
    const valuesInButtons = rowThree;
    const row = document.querySelector('.keyboard__rows-3');
    const button = document.createElement('span');
    button.classList.add(`key-${String(valuesInButtons[num].key).toLowerCase()}`);
    button.classList.add('buttons');
    button.textContent = valuesInButtons[num].key;
    row.append(button);
};
export const createButtonsRowFour = (num, eventKey) => {
    const valuesInButtons = rowFour;
    const row = document.querySelector('.keyboard__rows-4');
    const button = document.createElement('span');
    button.classList.add(`key-${String(valuesInButtons[num].key).toLowerCase()}`);
    button.classList.add('buttons');
    button.textContent = valuesInButtons[num].key;
    row.append(button);
};
export const createButtonsRowFive = (num, eventKey) => {
    const valuesInButtons = rowFive;
    const row = document.querySelector('.keyboard__rows-5');
    const button = document.createElement('span');
    button.classList.add(`key-${String(valuesInButtons[num].key).toLowerCase()}`);
    button.classList.add('buttons');
    button.textContent = valuesInButtons[num].key;
    row.append(button);
};