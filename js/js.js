let price = document.getElementById("price");
let filters = document.getElementById("filters");
let analogs = document.getElementById("analogs");
let city = document.getElementById("city");
let speedAcces = document.getElementById("speed-acces");

function getParent(event) {
  if (event.target["localName"].includes("img")) {
    parent = event.target["parentNode"]["parentNode"];
  } else {
    parent = event.target["parentNode"];
  }
  return parent;
}
function select(parent) {
  let image = parent.childNodes[1].lastElementChild;
  let text = parent.childNodes[3];
  if (image.src.includes("check-circle.png")) {
    image.src = "../source/images/check-circle-green.png";
    return true;
  } else {
    image.src = "../source/images/check-circle.png";
    return false;
  }
  text.classList.toggle("modeExpert-benefits-text-select");
}
function screenBase() {
  price.style.background = "";
  filters.style.background = "";
  analogs.style.background = "";
  city.style.background = "";
  speedAcces.style.background = "";
}
function screenPrice() {
  if (price.style.background == "") {
    price.style.background = "#D0F9D0";
  } else {
    price.style.background = "";
  }
}
function screenFilters() {
  if (filters.style.background == "") {
    filters.style.background = "#D0F9D0";
  } else {
    filters.style.background = "";
  }
}
function screenAnalogs() {
  if (analogs.style.background == "") {
    analogs.style.background = "#D0F9D0";
  } else {
    analogs.style.background = "";
  }
}
function screenCity() {
  if (city.style.background == "") {
    city.style.background = "#D0F9D0";
  } else {
    city.style.background = "";
  }
}
function screenSpeedAcces() {
  if (speedAcces.style.background == "") {
    speedAcces.style.background = "#D0F9D0";
  } else {
    speedAcces.style.background = "";
  }
}

function updateScreen(event) {
  let parent;
  parent = getParent(event);

  let text = parent.childNodes[3]["innerText"];
  if (text.includes("по количеству и цене")) {
    select(parent) ? screenPrice(parent) : screenBase();
  } else if (text.includes("система фильтров")) {
    select(parent) ? screenFilters(parent) : screenBase();
  } else if (text.includes("аналоги") || text.includes("производителей")) {
    select(parent) ? screenAnalogs(parent) : screenBase();
  } else if (text.includes("удаленности")) {
    select(parent) ? screenCity(parent) : screenBase();
  } else if (text.includes("доступ")) {
    select(parent) ? screenSpeedAcces(parent) : screenBase();
  }
}

function updateScreenByScreen(event, id) {
  let element = document.getElementById(event.target["id"]);
  let filter = document.getElementById(id);
  select(filter);
  if (element.style.background == "") {
    element.style.background = "#D0F9D0";
  } else {
    element.style.background = "";
  }
}

function updateScreenByScreen1(event, id, id1) {
  let element = document.getElementById(event.target["id"]);
  let filter = document.getElementById(id);
  let filter1 = document.getElementById(id1);
  select(filter);
  select(filter1);
  if (element.style.background == "") {
    element.style.background = "#D0F9D0";
  } else {
    element.style.background = "";
  }
}
