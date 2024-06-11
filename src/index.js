import { createHomePage } from "./home.js";
import { createMenuPage } from "./menu.js";
createHomePage();

document.querySelector("#menu-button").addEventListener("click", () => {
  createMenuPage();
});

document.querySelector("#home-button").addEventListener("click", () => {
  createHomePage();
});
