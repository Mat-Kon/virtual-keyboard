export const createContent = () => {
    const info = document.createElement('p');
    const keyboard = document.querySelector('.keyboard');

    info.className = 'information';
    info.textContent = 'К сожалению, переключения языка нет. Создано на Windows'
    keyboard.after(info);
}