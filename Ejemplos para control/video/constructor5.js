/*
atributos privados usando var
usando funciones para set/get tambien funcionan pero no aporta mejora del contructor4 que tiene get/set
*/


class Video{

	constructor(ns,a,b,c,d,e,f) {

		// [nota] duracion PT3h4m5s calculamos el total de segundos
		var t1 = c.replace('PT','').toLowerCase();
		var t2 = t1.split(/h|m|s/);
		var seg = parseInt(3600*t2[0]) + parseInt(60*t2[1]) + parseInt(t2[2]);
		var _ns = parseInt(ns);
		var _vid = a;
		var _titulo = b.charAt(0).toUpperCase() + b.slice(1).toLowerCase(); // todo minusculas primera en mayusculas
		var _duracion = seg; 
		var _subida = new Date(d);	
		var _visitas = parseInt(e);

		// closure , var contador es privado y estatico
		this.vistas = (function(){var contador=f; return function (){contador+=1;return contador}})();

	    // podemos poner defineProperty en una linea o en dos
		Object.defineProperty(this,"ns",{get:function(){return _ns;}});

		this.getVid = function(){return _vid;} 
		this.setVid = function(x){_vid=x;} 

/*
		var getVid = function(){return _vid;}
		var setVid = function(x){_vid=x;} 
		Object.defineProperty(this,"vid",{get:getVid,set:setVid});
*/

		var getTitulo = function(){return _titulo;}
		var setTitulo = function(x){_titulo=x;} 
		Object.defineProperty(this,"titulo",{get:getTitulo,set:setTitulo});

		var getDuracion = function(){return _duracion;}
		var setDuracion = function(x){_duracion=x;} 
		Object.defineProperty(this,"duracion",{get:getDuracion,set:setDuracion});

		var getSubida = function(){return _subida;}
		var setSubida = function(x){_subida=x;} 
		Object.defineProperty(this,"subida",{get:getSubida,set:setSubida});

		var getVisitas = function(){return _visitas;}
		var setVisitas = function(x){_visitas=x;} 
		Object.defineProperty(this,"visitas",{get:getVisitas,set:setVisitas});

		var getHTML=function(){	
		var img = '<a href="#openModal"><img src="https://i.ytimg.com/vi/'+_vid+'/mqdefault.jpg" alt="foto"/></a>';
		var txt = '<div class="titulo">'+_ns+':'+_titulo+'</div>'+t1+'<br/>'+_subida.toLocaleDateString()+'<br/><div class="visitas">'+_visitas+'</div>'+_ns+'('+this.vistas()+')';
		var ficha = '<div>'+img+'<div>'+txt+'</div></div>';
		var res = '<div class="ficha" id="'+_vid+'">'+ficha+'</div>';
		return res;
		}
			// toLocaleDateString : 3/12/2019
		Object.defineProperty(this,"getHTML",{get: getHTML});
	}
		
}