export const enterValueToMouse = () => {
    const textWindow = document.querySelector('textarea');
    const keyboard = document.querySelector('.keyboard');
    keyboard.addEventListener('click', (event) => {
      let valueButton = event.target.textContent;
      if (valueButton === 'Tab') {
        textWindow.value += '    ';
      }
      if (valueButton === 'Enter') {
        textWindow.value += '\n';
      }
      if (valueButton.length > 1) {
        return;
      }
      textWindow.value += valueButton;
    });
  }

  export const removeValueToMouse = () => {
    const textWindow = document.querySelector('.text-window');
    const keyboard = document.querySelector('.keyboard');
    keyboard.addEventListener('click', (event) => {
      const valueButton = event.target.textContent;
      const textLength = textWindow.value.length;
      if (valueButton === 'Backspace') {
        textWindow.value = textWindow.value.substring(0, textLength - 1);
      }
    });
  }
