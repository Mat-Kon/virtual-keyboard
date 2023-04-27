import {createHeader} from "./modules/createElements/header.js";
import {createTextarea} from "./modules/createElements/textarea.js";
import {createKeyboardContain} from "./modules/createElements/keyboardContain.js"

window.onload = () => {
  createHeader();
  createTextarea();
  createKeyboardContain();
};
