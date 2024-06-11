import { createHomePage } from "./home.js";
import { createMenuPage } from "./menu.js";
createHomePage();

const menuButton = document.querySelector("#menu-button");
menuButton.addEventListener("click", () => {
  const content = document.querySelector("#content");
  content.innerHTML = "";
  createMenuPage();
});
