import {createHeader} from "./modules/createElements/header.js";
import {createTextarea} from "./modules/createElements/textarea.js";
import {createKeyboardContain, createKeyboardRows} from "./modules/createElements/keyboardContain.js"

window.onload = () => {
};
createHeader();
createTextarea();
createKeyboardContain();
for (let i = 0; i < 5; i++) {
  createKeyboardRows();
}

