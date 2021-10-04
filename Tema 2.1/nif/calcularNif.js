//Obtener valores del Nif
const numNif = prompt("Escribe los numeros del NIF: ", 0);
const letraNif = prompt("Escribe la letra del NIF: ", A);

//Comprobar los valores del nif

if (numNif <= 0 && numNif >= 99999999) {
  //El valor es correcto
} else if (numNif == letraNif) {
  //El numero y la letra son iguales
  alert(
    "Los valores son incorrectos, la letra no puede coincidir con el numero!"
  );
} else {
  alert(
    "Los valores son incorrectos, el numero de su nif no se encuentra entre los valores permitidos!"
  );
}
