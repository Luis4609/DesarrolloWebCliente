const menuItems = [
  { url: "index.html", dataText: "Nueva Partida" },
  { url: "instrucciones.html", dataText: "Instrucciones" },
  {
    url: "https://www.pokerstarscasino.es/games/blackjack/rules/?no_redirect=1",
    dataText: "Reglas oficiales",
  },
  { url: "https://github.com/Luis4609/Black-Jack-GameJs", dataText: "GitHub" },
];

const menuHtml = document.getElementById("menu");

function getMenu() {
  setTimeout(() => {
    let menu = "";
    menuItems.forEach((menuItem) => {
      menu += `<li><a href="${menuItem.url}" data-text="${menuItem.dataText}">${menuItem.dataText}</a></li>`;
    });
    menuHtml.innerHTML = menu;
  }, 1000);
}

function addMenuItem(menuItem) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      menuItems.push(menuItem);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error");
      }
    }, 2000);
  });
}

// addMenuItem({ url: "#", dataText: "Pepe" })
//   .then(getMenu)
//   .catch((error) => console.log(error));

const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, "Bye")
);
const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());

Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
  console.log(values)
);
