function createMenuPage() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  // MENU HEADING

  const menuHeading = document.createElement("h1");
  menuHeading.textContent = "Menu";
  content.appendChild(menuHeading);

  // MENU ITEMS

  const menuItemList = document.createElement("ul");
  content.appendChild(menuItemList);

  const menuItem1 = document.createElement("li");
  menuItemList.appendChild(menuItem1);
  menuItem1.className = "menu-item";

  const menuItem1Name = document.createElement("h2");
  menuItem1Name.textContent = "Cake";
  menuItem1.appendChild(menuItem1Name);
  const menuItem1Description = document.createElement("div");
  menuItem1Description.textContent =
    "A delicious cake founded on a vanilla base, topped with cherries and chocolate and prepared with love";
  menuItem1.appendChild(menuItem1Description);

  const menuItem2 = document.createElement("li");
  menuItemList.appendChild(menuItem2);
  menuItem2.className = "menu-item";

  const menuItem2Name = document.createElement("h2");
  menuItem2Name.textContent = "Big Cake";
  menuItem2.appendChild(menuItem2Name);
  const menuItem2Description = document.createElement("div");
  menuItem2Description.textContent =
    "A big, delicious cake founded on a big vanilla base, topped with big cherries and chocolate and prepared with lots of love";
  menuItem2.appendChild(menuItem2Description);

  const menuItem3 = document.createElement("li");
  menuItemList.appendChild(menuItem3);
  menuItem3.className = "menu-item";

  const menuItem3Name = document.createElement("h2");
  menuItem3Name.textContent = "Very Big Cake";
  menuItem3.appendChild(menuItem3Name);
  const menuItem3Description = document.createElement("div");
  menuItem3Description.textContent =
    "A very big, delicious cake founded on a very big vanilla base, topped with very big cherries and chocolate and prepared with lots and lots of love";
  menuItem3.appendChild(menuItem3Description);
}

export { createMenuPage };
