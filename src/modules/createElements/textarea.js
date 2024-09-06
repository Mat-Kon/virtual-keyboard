export const createTextarea = () => {
  const textarea = document.createElement("textarea");
  const header = document.querySelector(".header");

  textarea.setAttribute('focus', '');
  textarea.className = "text-window wrapper";
  textarea.placeholder = "Start enter";
  header.after(textarea);
};