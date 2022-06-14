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


//async await

// async function init() {
//     await addMenuItem({ url: "#", dataText: "Pepe" });

//     getMenu();
// }

// init()


//Async Await /Fetch
async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  console.log(data);
}

fetchUsers();