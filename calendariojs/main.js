//
var createCalendario;
var mes = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
var dias = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];

function createCalendario(element, menu) {
  this.element = document.getElementById(element);
  this.menu = menu;
  this.initialize();
}

createCalendario.prototype.initialize = function () {
  if (this.element && this.menu) {
    this.element.appendChild(this.createMenu(this.menu));
  }
};

createCalendario.prototype.createRow = function (incMenu) {
  var iterMenu, menu, item, link, span, img;
  menu = document.createElement("ul");
  for (iterMenu in incMenu) {
    var menuData = incMenu[iterMenu];
    item = document.createElement("li");
    link = document.createElement("a");
    link.setAttribute("href", menuData.get);
    link.innerHTML = menuData.name;
    item.appendChild(link);
    if (menuData.img) {
      img = document.createElement("img");
      img.src = menuData.img;
      img.className = "img";
      item.appendChild(img);
    }
    if (menuData.children) {
      span = document.createElement("span");
      link.appendChild(span);
      item.appendChild(this.createMenu(menuData.children));
    }
    menu.appendChild(item);
  }
  return menu;
};

var BFET = new BFET("container", BFETMenu);
