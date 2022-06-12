// Actividad
// (listas)
// Genera un array de 10 números al azar entre 0 y 1000.
// - Imprime por pantalla
// - Lista
// - En orden ascendnte
// - En orden descendente
// - Filtra los numeros entre 0 y 100 incluidos
// - Calcula la media
// - Calcula la suma
// - Calcula el maximo
// - Calcula el minimo
// lenguaje:filter,reduce,min,apply,sort
//Array of random numbers
const list = [];
//Generate an array with 10 numbers
for (let i = 0; i < 10; i++) {
  list.push(getRndInteger(0, 100)); //Add random number to the list
}
//Print the numbers of the array
let txt = "";
numbers.forEach(myFunction);
document.getElementById("demo").innerHTML = txt;

function myFunction(value, index, array) {
  txt += value + "<br>";
}
//Return a random integer
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
