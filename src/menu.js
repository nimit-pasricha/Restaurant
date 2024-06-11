function createMenuPage() {
  const contentContainer = document.querySelector("#content");

  // MENU HEADING

  const menuHeading = document.createElement("h1");
  contentContainer.appendChild(menuHeading);

  // MENU ITEMS

  const menuItemList = document.createElement("ul");

  const menuItem1 = document.createElement("li");
  menuItemList.appendChild(menuItem1);
  menuItem1.className = "menu-item";

  const menuItem2 = document.createElement("li");
  menuItemList.appendChild(menuItem2);
  menuItem2.className = "menu-item";

  const menuItem3 = document.createElement("li");
  menuItemList.appendChild(menuItem3);
  menuItem3.className = "menu-item";

  // TODO: ADD THE CONTENTS OF EACH MENU ITEM
}

export { createMenuPage };
