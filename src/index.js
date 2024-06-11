import { createHomePage } from "./home.js";
import { createMenuPage } from "./menu.js";
createHomePage();

document.querySelector("#menu-button").addEventListener("click", () => {
  const content = document.querySelector("#content");
  content.innerHTML = "";
  createMenuPage();
});
