import { createHomePage } from "./home.js";
import { createMenuPage } from "./menu.js";
import { createContactPage } from "./contact.js";
createHomePage();

document.querySelector("#menu-button").addEventListener("click", () => {
  createMenuPage();
});

document.querySelector("#home-button").addEventListener("click", () => {
  createHomePage();
});

document.querySelector("#contact-button").addEventListener("click", () => {
  createContactPage();
});
