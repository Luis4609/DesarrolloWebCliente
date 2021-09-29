// pedir valores iniciales
var valorAncho = prompt("Introduce ancho: ", "");
var valorAlto = prompt("Introduce alto: ", "");
var valorFondo = prompt("Introduce fondo: ", "");

// ENTRADA
// declaración de variables ambito(var), multiple(,), iniciadas(=)
var d1 = valorAlto,d2 = valorAncho,d3 = valorFondo;

// imprimir en la pagina web
document.write("<b>Datos para calcular: </b><br/>");
document.write("El ancho es: " + d1 + "<br/>");
document.write("El alto es: " + d2 + "<br/>");
document.write("El fondo es: " + d3 + "<br/>");

var superficie = d1 * d2;
var superficiePies = superficie * 3.28;
var volumen = d1 * d2 * d3;
var volumenPies = volumen * 3.28;

document.write("<b>Resultado de la superficie: </b><br/>" + superficie  + " (" + superficiePies + " pies)" + "<br/>");	
document.write("<b>Resultado del volumen: </b><br/>" + volumen + " (" + volumenPies + " pies)" + "<br/>");	