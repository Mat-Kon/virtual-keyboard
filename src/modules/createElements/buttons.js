import {rowOne,rowTwo} from './valuesButtons/values.js';

export const createButtonsRowOne = (num, eventKey) => {
    const valuesInButtons = rowOne;
    const row = document.querySelector('.keyboard__rows-1');
    const button = document.createElement('div');
    button.classList.add(`key${valuesInButtons[num].key}`);
    button.classList.add('buttons');
    button.textContent = valuesInButtons[num].key;
    row.append(button);
};
export const createButtonsRowTwo = (num, eventKey) => {
    const valuesInButtons = rowTwo;
    const row = document.querySelector('.keyboard__rows-2');
    const button = document.createElement('div');
    button.classList.add(`key${valuesInButtons[num].key}`);
    button.classList.add('buttons');
    button.textContent = valuesInButtons[num].key;
    row.append(button);
};