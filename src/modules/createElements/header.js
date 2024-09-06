export const createHeader = () => {
    const header = document.createElement("header");
    header.className = "header";
    const heading = document.createElement("h1");
    heading.className = "heading wrapper";
    heading.textContent = "RSS Виртуальная клавиатура";
  
    document.body.prepend(header);
    header.prepend(heading);
  };