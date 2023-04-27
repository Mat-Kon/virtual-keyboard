export const createKeyboardContain = () => {
  const textarea = document.querySelector(".text-window")
  const keyboard = document.createElement("div");
  keyboard.className = "keyboard wrapper";
  textarea.after(keyboard);
}