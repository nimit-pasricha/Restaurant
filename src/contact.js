function createContactPage() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  // CONTACT HEADER

  const contactHeader = document.createElement("h1");
  contactHeader.textContent = "Contact Us";
  content.appendChild(contactHeader);

  const contacts = document.createElement("ul");
  content.appendChild(contacts);

  // FIRST CONTACT

  const firstContact = document.createElement("li");
  contacts.appendChild(firstContact);

  const firstContactName = document.createElement("h2");
  firstContactName.textContent = "Man";
  firstContact.appendChild(firstContactName);

  const firstContactInfo = document.createElement("div");
  firstContact.appendChild(firstContactInfo);

  const firstContactTitle = document.createElement("div");
  firstContactTitle.textContent = "A man like no other";
  firstContactInfo.appendChild(firstContactTitle);

  const firstContactPhone = document.createElement("div");
  firstContactPhone.textContent = "(123) 456-7890";
  firstContactInfo.appendChild(firstContactPhone);

  const firstContactEmail = document.createElement("div");
  firstContactEmail.textContent = "arealmansemail@human.com";
  firstContactInfo.appendChild(firstContactEmail);

  // SECOND CONTACT

  const secondContact = document.createElement("li");
  contacts.appendChild(secondContact);

  const secondContactName = document.createElement("h2");
  secondContactName.textContent = "Woman";
  secondContact.appendChild(secondContactName);

  const secondContactInfo = document.createElement("div");
  secondContact.appendChild(secondContactInfo);

  const secondContactTitle = document.createElement("div");
  secondContactTitle.textContent = "A woman like no other";
  secondContactInfo.appendChild(secondContactTitle);

  const secondContactPhone = document.createElement("div");
  secondContactPhone.textContent = "(987) 654-3210";
  secondContactInfo.appendChild(secondContactPhone);

  const secondContactEmail = document.createElement("div");
  secondContactEmail.textContent = "arealwomansemail@human.com";
  secondContactInfo.appendChild(secondContactEmail);

  // THIRD CONTACT

  const thirdContact = document.createElement("li");
  contacts.appendChild(thirdContact);

  const thirdContactName = document.createElement("h2");
  thirdContactName.textContent = "Broad Man";
  thirdContact.appendChild(thirdContactName);

  const thirdContactInfo = document.createElement("div");
  thirdContact.appendChild(thirdContactInfo);

  const thirdContactTitle = document.createElement("div");
  thirdContactTitle.textContent = "A broad man";
  thirdContactInfo.appendChild(thirdContactTitle);

  const thirdContactPhone = document.createElement("div");
  thirdContactPhone.textContent = "(420) 666-6969";
  thirdContactInfo.appendChild(thirdContactPhone);

  const thirdContactEmail = document.createElement("div");
  thirdContactEmail.textContent = "abroadman@broad.com";
  thirdContactInfo.appendChild(thirdContactEmail);
}

export { createContactPage };
