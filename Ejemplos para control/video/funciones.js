// DATOS ----------------------------------------------------------------*
function buscarVideos(){
	entrada=[]; // vaciar , datos de cada video
	if (!pruebas){ // modo conectado voy a YT
		getYTbuscar('tráiler oficial español');	// vids[] buscar en YT
	}
	//var maxVideos=vids.length;	
	for (const vid of vids.values()) {			
	//for (j=0;j<maxVideos;j++){
		// creo los datos para cada video
		//var vid=vids[j];
		var titulo=String.fromCharCode(aleatorio(65,85))+String.fromCharCode(aleatorio(65,85))+String.fromCharCode(aleatorio(65,85))+String.fromCharCode(aleatorio(65,85))+String.fromCharCode(aleatorio(65,85))+'AB';
		var duracion='PT'+aleatorio(1,10)+'H'+aleatorio(1,60)+'M'+aleatorio(1,60)+'S';
		var d=new Date();
		var e=new Date();
		e.setDate(d.getDate()+aleatorio(0,1000));
		var mes=(e.getMonth()+1);if (mes<10){mes='0'+mes}
		var dia=e.getDate();if (dia<10){dia='0'+dia}
		var subida=e.getFullYear()+'-'+mes+'-'+dia+'T12:08:53.000Z';
		var visitas=aleatorio(0,10000);		
		entrada.push(vid+'#'+titulo+'#'+duracion+'#'+subida+'#'+visitas); // [PRUEBAS]
	}
	//console.log(entrada);
	if (pruebas){	
		cargarEntradaLocal();	
	}else{
		cargarEntrada(); 
	}	
}
function cargarEntrada(){
	// para cada video pido datos a la API de YT
	var k=1;
	for (x of entrada){
		var c=x.split('#');
		var vid=c[0];
		var data=getDataVideo(vid); // ===> sincrono retorna JSON en data
		var titulo=data.items[0]["snippet"].title;
		var duracion=data.items[0]["contentDetails"].duration;
		var visitas=data.items[0]["statistics"].viewCount;
		var meGusta=data.items[0]["statistics"].likeCount; // ahora sin uso
		var subida=data.items[0]["snippet"].publishedAt;
		//console.log('t:',titulo,' d:',duracion,' v:',visitas,' g:',meGusta,' s:',subida);
		var video=new Video(k,vid,titulo,duracion,subida,visitas,0);
		listaCargados.push (video);
		listaMostrados.push (video);
		k++;
	}
}
function cargarEntradaLocal(){
	// datos locales para los videos
	var k=1;
	for (x of entrada){
		var c=x.split('#');
		var vid=c[0];
		var titulo=c[1];
		var duracion=c[2];
		var subida=c[3];		
		var visitas=c[4];
		var meGusta=aleatorio(1,100);
		//console.log('t:',titulo,' d:',duracion,' v:',visitas,' g:',meGusta,' s:',subida);
		var video=new Video(k,vid,titulo,duracion,subida,visitas,0);
		listaCargados.push (video);
		//fichaNodo.set(video,0); // ficha-nodo
		listaMostrados.push (video);
		k++;
	}
}
function findObj(vid){
// dado un vid devolver el objeto
	for (let obj of listaCargados){
		if (obj.vid==vid){return obj};
	}	
}
// EVENTOS ----------------------------------------------------------------*
function onFicha(){
	// [nota] el vid los usamos para cargar el video embed
	var vid=this.id;
	// acceso al atributo closure
	var vistas=findObj(vid).vistas();
	document.getElementById(vid+'vistas').innerHTML=vistas;
	// cargar el video en el modal
	document.getElementById('video').src='http://www.youtube.com/embed/'+vid+'?autoplay=1&controls=2&allowFullScreen=1';
}
function onFiltro(){
	activarBoton(this,'F','active2');
	var z=filtra(this.ini,this.fin);
	//console.log(this.ini,this.fin,'filtrado:',z);
	//z.sort(function(a, b){return a.ns - b.ns;});	

	if (contenedor=='contenedorScroll'){
		pinta(document.getElementById(contenedor),z);
	}	
	if (contenedor=='contenedorPaginador'){
		pintaPaginador(z);		
		pinta(document.getElementById(contenedor),z);		
	} 
}
function onOrdena(){
	// [nota] solo para get (constructor1 y constructor2 ) , no para funciones (contructor1)
	// ordenar listaCargados[]
	activarBoton(this,'O','active3');
	//console.log('ORDENA:',this.accion);
	if (this.accion=='titulo'){
		listaMostrados.sort(function(a, b){return a.titulo > b.titulo ;});
	}
	if (this.accion=='subida'){
		listaMostrados.sort(function(a, b){return new Date(a.subida) - new Date(b.subida) ;});
	}
	if (this.accion=='visitas'){
		listaMostrados.sort(function(a, b){return a.visitas - b.visitas ;});
	}
	if (this.accion=='duracion'){
		listaMostrados.sort(function(a, b){return a.duracion - b.duracion ;});
	}
	pinta(document.getElementById(contenedor),listaMostrados);
}
function onclickPagina(){
	//console.log('DDD:',this)
	setPagina(this);
	var z=filtra(EP*(this.pagina-1),(EP*this.pagina)-1,2);
	pinta(document.getElementById(contenedor),z); 	
}

// FILTRA ----------------------------------------------------------------*
function filtra(ini,fin){
	// pintar elementos desde .ini a .fin
	listaMostrados=[];
	for (let clave in listaCargados){
		let x=listaCargados[clave];
		var ns=x.ns;
		if (isNaN(parseInt(ns))){ns=x.ns()} // segun constructor
		if(ns>=ini&&ns<=fin){
			listaMostrados[clave]=listaCargados[clave];
		}
	}
	//console.log('resul:',ns,ini,fin,listaCargados);
	return listaMostrados;
}
function activarBoton(a,b,c){
	var z=document.querySelectorAll('.boton'+b); // [nota] selector por css, elementos que tengan una clase
	for (x of z){
		var r=x.className.replace(' '+c,''); // [nota] remover una clase de la lista de clases
		x.className=r;
	}
	a.className+=' '+c;
}
// SEARCH YOUTUBE ----------------------------------------------------------------*
function getYTbuscar(q){

	//crear el objeto
	var http_request = new XMLHttpRequest();
	try{	   			// Opera 8.0+, Firefox, Chrome, Safari
	   http_request = new XMLHttpRequest();
	}catch (e) {   	 	// Internet Explorer Browsers
	   try{
	      http_request = new ActiveXObject("Msxml2.XMLHTTP");			
	   }catch (e) {
	      try{
	         http_request = new ActiveXObject("Microsoft.XMLHTTP");
	      }catch (e) {	// Something went wrong
	         alert("Tu navegador no soporta el objeto XMLHttpRequest");
	         return false;
	      }
	   }
	}
	// limites para cargar datos y no exceder la cuota
	// en la busqueda estan encadenadas las paginas y hay miles !!
	// https://www.googleapis.com/youtube/v3/search?key='+apiKey+'&q='+q+'&maxResults=3&part=snippet';
	
	var maxPag=2; 			// numero de paginas con maxResults=3
	var contadorPaginas=0;	// paginas cargadas
	var url0='https://www.googleapis.com/youtube/v3/search?key='+apiKey+'&q='+q+'&maxResults=3&part=snippet';
	var url=url0;
	vids.clear(); // vaciar

	for (j=0;j<maxPag;j++){
		http_request.open("GET", url, false); // sincrono
		/*
		[nota] Un XMLHttpRequest síncrono en el hilo principal está desaprobado por sus efectos negativos en la experiencia del usuario final. Para más ayuda vea  http://xhr.spec.whatwg.org/
		*/
		http_request.send(); 
		var data = JSON.parse(http_request.responseText);
		for (x of data.items){ vids.add(x.id.videoId);	}
		contadorPaginas++;
		url=url0+'&pageToken='+data.nextPageToken;
		//console.log('DD:',data);		
	}
	//console.log(vids);
	//return vids;
}

// GET DATA VIDEO YOUTUBE ----------------------------------------------------------------*
function getDataVideo(vid) {
    var url='https://www.googleapis.com/youtube/v3/videos?key='+apiKey+'&fields=items(snippet(title,publishedAt),statistics(likeCount,viewCount),contentDetails(duration))&part=snippet,statistics,contentDetails&id='+vid;
	/*
	[nota] podemos cargar un json pero no otra pagina por la politica del mismo origen 
	var url='www.google.com';
	Solicitud desde otro origen bloqueada: la política de mismo origen impide leer el recurso remoto en file:///media/mc/MRTIES1/ies1920/C-DW2E-CLIENTE/04.01/videosObjetos/www.google.com (razón: la solicitud CORS no es http).
	*/
    //crear el objeto
    var http_request = new XMLHttpRequest();
    try{
       // Opera 8.0+, Firefox, Chrome, Safari
       http_request = new XMLHttpRequest();
    }catch (e) {
       // Internet Explorer Browsers
       try{
          http_request = new ActiveXObject("Msxml2.XMLHTTP");			
       }catch (e) {
		
          try{
             http_request = new ActiveXObject("Microsoft.XMLHTTP");
          }catch (e) {
             // Something went wrong
             alert("Tu navegador no soporta el objeto XMLHttpRequest");
             return false;
          }
       }
    }
    http_request.open("GET", url, false);
    http_request.send(); // SINCRONO
    var data = JSON.parse(http_request.responseText);
    return data;
}

// COMUNES ----------------------------------------------------------------*
function crearNodo(ancestro,tipo,clase,id){
	var ele=document.createElement(tipo);
	ancestro.appendChild(ele);
	ele.className=clase;
	ele.id=id;
	return ele;
}
function aleatorio(a,b) {
	var x=Math.round(Math.random()*(b-a)+parseInt(a));
	return x;
}
function comprobaciones(){
	// accedemos al primer objeto
	var e=listaCargados[0];
	console.log('fichero usado definir la clase: ',cjs);
	// prueba: son privados los atributos ?
	console.log('es atributo privado _vid? (',e._vid,') ',e._vid==undefined); 
	// prueba: funcionan el get y el set ?
	if (cjs=='constructor1.js'){ 
		var tmp=e.getVid(); 
		e.setVid(999);  
		console.log('los get y set funcionan ?',e.getVid()==999);  
		e.setVid(tmp);
	}else{
		var tmp=e.vid; // salvamos el valor actual
		e.vid=999;  
		console.log('set y get funcionan ?',e.vid==999);  
		e.vid=tmp;	
	}
}
function botones(){
	var b=document.body;
	// contenedor de  los controles 
	var cc=crearNodo(b,'div','','botonera');
	// - filtro TODO
	var ele=crearNodo(cc,'div','button-success pure-button botonF active2','iTodos');
	ele.innerHTML='TODOS ('+listaCargados.length+')';
	ele.ini=1;
	ele.fin=listaCargados.length;
	ele.addEventListener('click',onFiltro);
	// - FILTRO N a M
	var ele=crearNodo(cc,'div','button-success pure-button botonF','iFiltro1');
	ele.ini=1;
	ele.fin=5;
	ele.innerHTML='FILTRO: '+ele.ini+'-'+ele.fin;	
	ele.addEventListener('click',onFiltro);
	// - ORDENA
	var ele=crearNodo(cc,'div','button-warning pure-button botonO','ordena1');
	ele.innerHTML='OX TITULO';
	ele.accion='titulo';
	ele.addEventListener('click',onOrdena);
	// - ORDENA
	var ele=crearNodo(cc,'div','button-warning pure-button botonO','ordena2');
	ele.innerHTML='OX SUBIDA';
	ele.accion='subida';
	ele.addEventListener('click',onOrdena);
	// - ORDENA
	var ele=crearNodo(cc,'div','button-warning pure-button botonO','ordena3');
	ele.innerHTML='OX VISITAS';
	ele.accion='visitas';
	ele.addEventListener('click',onOrdena);
	// - ORDENA
	var ele=crearNodo(cc,'div','button-warning pure-button botonO','ordena4');
	ele.innerHTML='OX DURACION';
	ele.accion='duracion';
	ele.addEventListener('click',onOrdena);
}
