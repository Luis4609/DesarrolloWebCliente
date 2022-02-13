const menuItems = [
    {url: 'index.html', dataText: 'Nueva Partida'},
    {url: 'instrucciones.html', dataText: 'Instrucciones'},
    {url: 'https://www.pokerstarscasino.es/games/blackjack/rules/?no_redirect=1', dataText: 'Reglas oficiales'},
    {url: 'https://github.com/Luis4609/Black-Jack-GameJs', dataText: 'GitHub'}
]

const menuHtml = document.getElementById('menu');

function getMenu(){
    setTimeout(() => {
        let menu = '';
        menuItems.forEach((menuItem) => {
            menu += `<li><a href="${menuItem.url}" data-text="${menuItem.dataText}">${menuItem.dataText}</a></li>`
        })
        menuHtml.innerHTML = menu;
    }, 1000);
}

function addMenuItem(menuItem, callback){
    setTimeout(() => {
        menuItems.push(menuItem);
        callback();
    }, 2000)
}

addMenuItem({url: '#', dataText: 'Pepe'}, getMenu);