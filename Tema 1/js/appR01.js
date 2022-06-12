/* fuente: https://es.stackoverflow.com/questions/54734/c%C3%B3mo-leer-un-archivo-txt-desde-javascript */

var entrada=[];
var entradaTexto = new Array(); /* array para almecenar las lineas de entrada archivo */

function leerArchivo(e) {
	// esta funcion lee un archivo de texto local y lo deja en la variable contenido
	var archivo = e.target.files[0];
	if (!archivo) {	return;	}
	var lector = new FileReader(); 		// API file objeto para leer el fichero
	lector.onload = function(e) { 		// callback con el evento de carga del archivo
	var contenido = e.target.result;
	mostrarContenido(contenido);
	leerResultado(lector.result);	
	};
	lector.readAsText(archivo);
}

function mostrarContenido(contenido) {
	// usar el dom para mostrar el contenido
	var elemento = document.getElementById('entrada');
	elemento.innerHTML = contenido;
}

function leerResultado(a){	
	// leer la entrada y procesar
	entradaTexto=a.split('\r\n');
	console.log('ARRAY=',entradaTexto);
	for (i = 0; i < entradaTexto.length; i++) { 
		var linea=entradaTexto[i].split(',');
		console.log(linea);
		for (j = 0; j < linea.length; j++) { 
			entrada.push(linea[j]);
			console.log(i,j,linea[j]);
		}   
	}		
	// imprimir la salida
	resul="sin procesar<br/>"+entrada;
	var elemento = document.getElementById('salida');
	elemento.innerHTML = resul;		
}

document.getElementById('file-input').addEventListener('change', leerArchivo, false); // añadir evento para llamar a la funcion leerArchivo