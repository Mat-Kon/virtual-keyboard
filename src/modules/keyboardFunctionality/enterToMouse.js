export const enterValueToMouse = () => {
    const textWindow = document.querySelector('.text-window');
    const keyboard = document.querySelector('.keyboard');
    keyboard.addEventListener('click', (event) => {
      let valueButton = event.target.textContent;
      if (valueButton.length > 1) {
        return false;
      }
      console.log(valueButton)
      textWindow.textContent += valueButton;
    });
  };