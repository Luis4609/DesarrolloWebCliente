/*
atributos con this son publicos
*/

class Video{

	constructor(ns,a,b,c,d,e,f) {
		this._ns = parseInt(ns);
		this._vid = a;
		this._titulo = b;
		this._duracion = c; 
		this._subida = new Date(d);
		this._visitas = parseInt(e);
		// closure
		this.vistas = (function(){var contador=f; return function (){contador+=1;return contador}})();
  		//this.vistas=(function(x){var contador=x; return function (x){contador=x;contador++;return contador;}})();		
	}
	get	ns() {return this._ns}
	get vid() {return this._vid;}
	set vid(x) {this._vid=x;}	
	get titulo() {return this._titulo}
	get duracion() {return this._duracion}
	get subida() {return this._subida}
	get visitas() {return this._visitas}
	get getHTML(){	
		var img='<a href="#openModal"><img src="http://img.youtube.com/vi/'+this._vid+'/0.jpg" alt="foto"/></a>';
		var txt=this._ns+':'+this._titulo+'<br/>'+this._duracion+'<br/>'+this._subida.toLocaleDateString()+'<br/>'+this._visitas+'<br/>'+this._ns+'('+this.vistas()+')';
		var ficha='<div>'+img+'<div>'+txt+'</div></div>';
		var res='<div class="ficha" id="'+this._vid+'">'+ficha+'</div>';
		return res; 
	}
};