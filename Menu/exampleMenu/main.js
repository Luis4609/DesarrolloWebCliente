var BFETMenu = [
  {
    name: "America",
    get: "#america",
    children: [
      {
        name: "Canada",
        get: "#canada",
        children: [
          { name: "Toronto", get: "#toronto" },
          {
            name: "Quebec",
            get: "#quebec",
          },
        ],
      },
      {
        name: "EEUU",
        get: "#EEUU",
      },
      {
        name: "Brasil",
        get: "#brasil",
      },
      {
        name: "Argentina",
        get: "#argentina",
      },
      {
        name: "Uruguay",
        get: "#uruguay",
      },
      {
        name: "Chile",
        get: "#chile",
      },
    ],
  },
  {
    name: "Europa",
    get: "#europa",
    children: [
      {
        name: "Francia",
        get: "#Francia",
        children: [
          { name: "Lyon", get: "#lyon" },
          { name: "Paris", get: "#paris" },
          { name: "Bayona", get: "#bayona" },
          { name: "Nantes", get: "#nantes" },
          { name: "Toulouse", get: "#toulouse" },
        ],
      },
      {
        name: "Italia",
        get: "#Italia",
        children: [{ name: "Roma", get: "#roma" }],
      },
    ],
  },
  {
    name: "Africa",
    get: "#africa",
    children: [{ name: "Sudafrica", get: "#sudafrica" }],
  },
  {
    name: "Asia",
    get: "#asia",
    children: [
      {
        name: "China",
        get: "#china",
        children: [{ name: "Beijing", get: "#beijing" }],
      },
      {
        name: "Japon",
        get: "#japon",
        children: [
          { name: "Tokio", get: "#game-of-thrones" },
          { name: "Kioto", get: "#walking-dead" },
          { name: "Osaka", get: "#true-blood" },
          { name: "Yokohama", get: "#firefly" },
          { name: "Nagoya", get: "#supernatural" },
        ],
      },
      {
        name: "Vietnam",
        get: "#vietnam",
        children: [{ name: "Hanoi", get: "#hanoi" }],
      },
      {
        name: "Islas Filipinas",
        get: "#islas-filipinas",
        children: [{ name: "Manila", get: "#manila" }],
      },
    ],
  },
];

function BFET(incElement, incMenu) {
  this.element = document.getElementById(incElement);
  this.menu = incMenu;
  this.initialize();
}

BFET.prototype.initialize = function () {
  if (this.element && this.menu) {
    this.element.appendChild(this.createMenu(this.menu));
  }
};

BFET.prototype.createMenu = function (incMenu) {
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

var BFET = new BFET("bfet-nav", BFETMenu);
