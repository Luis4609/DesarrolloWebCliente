function append(parent, el) {
  return parent.appendChild(el);
}

const formParent = document.getElementById("form");
// RegEx email
// /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/

const expClave = /\W{6}/;
const expEmail = /[@]/;
const expCodigoPostal = /\d{5}/;

//HTML elements
const claveElement = document.getElementById("clave");
const emailElement = document.getElementById("email1");
const codigoPostalElement = document.getElementById("codigoPostal");
//Forms
const clave = document.forms["myForm"]["clave"].value;
const email = document.forms["myForm"]["email1"].value;
const codigoPostal = document.forms["myForm"]["codigoPostal"].value;

var valueEmail = emailElement.value;
console.log(valueEmail);

//Icons
//Checked
/* <i class="fas fa-check"></i> */
//Error
/* <i class="fas fa-times"></i> */

claveElement.addEventListener("change", () => {
  if (expClave.test(clave)) {
    var iconCheck = document.createElement("i");
    iconCheck.innerHTML = '<i class="fas fa-check"></i>';
    append(formParent, iconCheck);
    console.log("Buena clave");
  } else {
    var iconUnchecked = document.createElement("i");
    iconUnchecked.innerHTML = '<i class="fas fa-times"></i>';
    append(formParent, iconUnchecked);
    console.log("Mala clave");
    console.log(valueEmail);
  }
});
emailElement.addEventListener("change", () => {
  if (expEmail.test(email)) {
    var iconCheck = document.createElement("i");
    iconCheck.innerHTML = '<i class="fas fa-check"></i>';
    append(formParent, iconCheck);
  } else {
    var iconUnchecked = document.createElement("i");
    iconUnchecked.innerHTML = '<i class="fas fa-times"></i>';
    append(formParent, iconUnchecked);
  }
});
codigoPostalElement.addEventListener("change", () => {
  if (expCodigoPostal.test(codigoPostal)) {
    var iconCheck = document.createElement("i");
    iconCheck.innerHTML = '<i class="fas fa-check"></i>';
    append(formParent, iconCheck);
  } else {
    var iconUnchecked = document.createElement("i");
    iconUnchecked.innerHTML = '<i class="fas fa-times"></i>';
    append(formParent, iconUnchecked);
  }
});
