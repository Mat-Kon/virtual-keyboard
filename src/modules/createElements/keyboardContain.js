const createKeyboardContain = () => {
  const textarea = document.querySelector('.text-window')
  const keyboard = createElement('div', 'keyboard wrapper');
  textarea.after(keyboard);
}

const createKeyboardRows = (num) => {
  const keyboard = document.querySelector('.keyboard');
  const rows = createElement('div', `keyboard__rows-${num}`);
  keyboard.append(rows);
}

const createElement = (tag, className) => {
  const element = document.createElement(`${tag}`);
  element.className = `${className}`;
  return element;
}
export {createKeyboardContain, createKeyboardRows};