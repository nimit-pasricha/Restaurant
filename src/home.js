function createHomePage() {
  const contentContainer = document.querySelector("#content");

  // SHOP NAME HEADING

  const shopNameHeading = document.createElement("h1");
  shopNameHeading.textContent = "Cole's Cake Club";
  contentContainer.appendChild(shopNameHeading);

  // QUOTE FROM CUSTOMER

  const quoteFromCustomer = document.createElement("div");
  contentContainer.appendChild(quoteFromCustomer);

  const quoteItself = document.createElement("div");
  quoteItself.id = "quote-itself";
  quoteItself.textContent =
    '"Cole\'s has become our go-to for getting tasty, pretty and well-priced cakes for birthdays, anniversaries and often for no special reason🤣. The cakes are always delicious and staff is super kind andhelpful. Would highly recommend."';
  quoteFromCustomer.appendChild(quoteItself);

  const customerName = document.createElement("div");
  customerName.textContent = "- Diabetus Maximus";
  customerName.id = "customer-name";
  quoteFromCustomer.appendChild(customerName);

  // HOURS

  const hours = document.createElement("div");
  hours.id = "hours";
  contentContainer.appendChild(hours);

  const hoursHeader = document.createElement("h2");
  hoursHeader.id = "hours-header";
  hoursHeader.textContent = "Hours";
  hours.appendChild(hoursHeader);

  const hoursList = document.createElement("ul");
  hoursList.id = "hours-list";
  hours.appendChild(hoursList);

  const mondayTimings = document.createElement("li");
  mondayTimings.textContent = "Monday - 9am to 9pm";
  const tuesdayTimings = document.createElement("li");
  tuesdayTimings.textContent = "Tuesday - 9am to 9pm";
  const wednesdayTimings = document.createElement("li");
  wednesdayTimings.textContent = "Wednesday - 9am to 9pm";
  const thursdayTimings = document.createElement("li");
  thursdayTimings.textContent = "Thursday - 9am to 9pm";
  const fridayTimings = document.createElement("li");
  fridayTimings.textContent = "Friday - 9am to 9pm";
  const saturdayTimings = document.createElement("li");
  saturdayTimings.textContent = "Saturday - Closed";
  const sundayTimings = document.createElement("li");
  sundayTimings.textContent = "Sunday - 10am to 8pm";
  const timings = [
    mondayTimings,
    tuesdayTimings,
    wednesdayTimings,
    thursdayTimings,
    fridayTimings,
    saturdayTimings,
    sundayTimings,
  ];
  for (let timing of timings) {
    timing.className = "timing";
    hoursList.appendChild(timing);
  }

  // LOCATION

  const locationBox = document.createElement("div");
  contentContainer.appendChild(locationBox);

  const locationHeader = document.createElement("h2");
  locationHeader.textContent = "Location";
  locationBox.appendChild(locationHeader);

  const locationItself = document.createElement("div");
  locationItself.textContent = "123 Buff Bear Street, Madison, Wisconsin";
  locationItself.id = "location-itself";
  locationBox.appendChild(locationItself);
}

export { createHomePage };
