<?php
// cargar un ficheros xml que estan en el servidor y procesarlo en javascript de diferentes formas
// 20141202
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="es" xml:lang="es">
<body>
<h1>Ejemplos XML</h1>
<div>
1) Parseado desde una cadena al dom :<br/>
<b>To:</b> <span id="to"></span><br />
<b>From:</b> <span id="from"></span><br />
<b>Message:</b> <span id="message"></span>
</div><br/>
<div>
2) Parseado desde un fichero xml en el servidor :<br/>
<b>To:</b> <span id="to2"></span><br />
<b>From:</b> <span id="from2"></span><br />
<b>Message:</b> <span id="message2"></span>
</div><br/>
<div id='unodiv'></div><br/>
<div id='dosdiv'></div><br/>
<div id='tresdiv'></div>
<div id='cuatrodiv'></div><br/>

<script>

// 1) ******************************************************************


// un xml en una cadena
txt="<note>";
txt+="<to>Everyday Italian</to>";
txt+="<from>Giada De Laurentiis</from>";
txt+="<body>2005</body>";
txt+="</note>";

if (window.DOMParser)
  {
  parser=new DOMParser();
  xmlDoc=parser.parseFromString(txt,"text/xml");
  }
else // Internet Explorer
  {
  xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
  xmlDoc.async=false;
  xmlDoc.loadXML(txt);
  } 

/*
el texto-xml podemos manejarlo como nodos usando las 
funciones de nodos-html 
*/

document.getElementById("to").innerHTML=xmlDoc.getElementsByTagName("to")[0].childNodes[0].nodeValue;

document.getElementById("from").innerHTML=xmlDoc.getElementsByTagName("from")[0].childNodes[0].nodeValue;

document.getElementById("message").innerHTML=xmlDoc.getElementsByTagName("body")[0].childNodes[0].nodeValue;


// 2) ******************************************************************

if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.open("GET","note.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML; // recibir XML no Texto !!

/*
ahora los nodos-xml los recibimos desde ajaz
*/

document.getElementById("to2").innerHTML=xmlDoc.getElementsByTagName("to")[0].childNodes[0].nodeValue;

document.getElementById("from2").innerHTML=xmlDoc.getElementsByTagName("from")[0].childNodes[0].nodeValue;

document.getElementById("message2").innerHTML=xmlDoc.getElementsByTagName("body")[0].childNodes[0].nodeValue;

// 3) ******************************************************************

if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.open("GET","html.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML;

/*
xml pasado a texto insertado como texto en la pagina web
*/

document.getElementById('unodiv').innerHTML='3) xml serializado como cadena dentro de un nodo de texto:<br/>';
var xmlText = new XMLSerializer().serializeToString(xmlDoc);
var xmlTextNode = document.createTextNode(xmlText);
var parentDiv = document.getElementById('unodiv');
parentDiv.appendChild(xmlTextNode);


// 4) ******************************************************************

document.getElementById("dosdiv").innerHTML='4) asignar directamente object XMLDocument al dom no funcionaria: '+xmlDoc;


// 5) ******************************************************************

document.getElementById("tresdiv").innerHTML='5) pero serializado si:'+xmlText; 

// 6) ******************************************************************

// kml son ficheros xml que contienen datos geograficos

if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
var fichero="http://www-user.uni-bremen.de/koelling/kml/overlay.kml";
// send fallara dara error pr origen distinto, se ha copiado el fichero del servidor, se puede abrir el codigo y comprobarlo !!!!!  
var fichero="overlay.kml";
xmlhttp.open("GET",fichero,false);
xmlhttp.send(); 
xmlDoc=xmlhttp.responseXML;
document.getElementById("cuatrodiv").innerHTML='6) kml es xml , lo serializamos y lo imprimimos como texto:<br/>';
// se precesa como un fichero xml
var xmlText = new XMLSerializer().serializeToString(xmlDoc);
var xmlTextNode = document.createTextNode(xmlText);
var parentDiv = document.getElementById('cuatrodiv');
parentDiv.appendChild(xmlTextNode);

</script>
</body>
</html>