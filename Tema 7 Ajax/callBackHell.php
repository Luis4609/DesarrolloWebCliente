<?php
// organizar las callback

if (isset($_REQUEST['cmd'])){
	sleep(1); // retardo simulado del servidor 20ms
	echo "respuesta=".$_REQUEST['cmd'];
	exit;
}
?>

<head>

<script type="text/javascript">
function inicio(){
	paso(1,'inicio'); // inicio de las llamadas x=1
}
function paso(x,t){
	// detallar aqui los pasos
	// x: numero del paso
	// t: datos de la respuesta
	document.write(t,' ');
	if (x==1){ envio(x); }
	if (x==2){ envio(x); }
	if (x==3){ envio(x); }
	if (x==4){ envio(x); }
	if (x==5){ envio(x); }
	if (x==6){ envio(x); }
	if (x==7){	}	
}
function envio(m){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			paso(m+1,this.responseText); 
			// leemos la respuesta
			// usamos m como contador de llamadas			
		}
	}
	xhttp.open("GET","index.php?cmd="+m,true);
	xhttp.send();	
}
window.onload = inicio;

</script>
</head>

<body>



</body>