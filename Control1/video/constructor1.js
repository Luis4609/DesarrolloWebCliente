/*

PRO:
- los atributos son privados no son accesibles por _vid pero son funciones hay que usar ()
- sintaxis mas breve

CONTRA:
- set y get y metodos como funciones hay que usar parentesis () en la llamada
- get y set no pueden definirse

*/

function Video(ns,a,b,c,d,e,f){
	// atributos
	var _ns = parseInt(ns);
	var _vid = a;
	var _titulo = b;
	var _duracion = c; 
	var _subida = new Date(d);
	var _visitas = parseInt(e);
	this.ns = function(){ return _ns }
  	this.getVid = function(){ return _vid }
  	this.setVid = function(x){ _vid=x }

  	// closure
  	this.vistas=(function(){var contador=f; return function (){contador+=1;return contador}})(); 
  	//this.vistas=(function(){var contador=x; return function (x){contador=x;contador++;return contador;}})(); 
 	this.html = function(){	
			var img='<a href="#openModal"><img src="http://img.youtube.com/vi/'+_vid+'/0.jpg" alt="foto"/></a>';
			var txt=_ns+':'+_titulo+'<br/>'+_duracion+'<br/>'+_subida.toLocaleDateString()+'<br/>'+_visitas+'<br/>'+_ns+'('+this.vistas()+')';
			var ficha='<div>'+img+'<div>'+txt+'</div></div>';
			var res='<div class="ficha" id="'+_vid+'">'+ficha+'</div>';
			return res;
		};
}
