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
  }

  export const removeValueToMouse = (locationPointer) => {
    const textWindow = document.querySelector('.text-window');
    const keyboard = document.querySelector('.keyboard');
    keyboard.addEventListener('click', (event) => {
      const valueButton = event.target.textContent;
      const textLength = textWindow.textContent.length;
      if (valueButton === 'Backspace') {
        textWindow.textContent = textWindow.textContent.substring(0, textLength - 1);
      }
    });
  }