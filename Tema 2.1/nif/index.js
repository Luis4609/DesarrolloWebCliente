//se le pide al usuario que introduzca su dni
var numero = parseInt(prompt("Introduzca su dni por favor"));

if (numero > "99999999" || numero < 0) {
  //si el numero es mayor pues se le comunica al usuario
  alert("El dni introducido no es valido");
} else {
  //el usuario inserta la letra del dini
  var letra_dni = prompt("Introduzca la letra de su dni").toUpperCase();
}
//calculamos la diferencia de la división para saber la posición
var resto = numero % 23;

var letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
  "T",
];

letras = letras.join("");

var encontrado = letras.charAt(resto);

if (letra_dni == encontrado) {
  alert(
    "El dni insertado " + numero + "con letra " + letra_dni + " es CORRECTO"
  );
} else {
  alert(
    "El dni insertado " + numero + "con letra " + letra_dni + " es INCORRECTO"
  );
}
