export const enterValueToMouse = () => {
    const textWindow = document.querySelector('.text-window');
    const keyboard = document.querySelector('.keyboard');
    keyboard.addEventListener('click', (event) => {
      let valueButton = event.target.textContent;
      if (valueButton === 'Tab') {
        textWindow.textContent += '    ';
      }
      if (valueButton === 'Enter') {
        textWindow.innerHTML += '\n';
      }
      if (valueButton.length > 1) {
        return;
      }
      textWindow.textContent += valueButton;
    });
  };

  export const removeValueToMouse = () => {
    const textWindow = document.querySelector('.text-window');
    const keyboard = document.querySelector('.keyboard');
    textWindow.selectionStart = 0;
    let textLength = 0;
    keyboard.addEventListener('click', (event) => {
      let valueButton = event.target.textContent;
      textLength = textWindow.textContent.length;
      textWindow.selectionStart = textLength;
      if (valueButton === 'Backspace' && textWindow.selectionStart === textLength) {
        textWindow.textContent = textWindow.textContent.substring(0, textLength - 1);
        textLength = textWindow.textContent.length;
        textWindow.selectionStart = textLength;
      };
    });
  };