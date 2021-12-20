var hsl;

$(window).load(function(){
	
	
	$('#txtColor').on('input',function(){
		var colorEntrada = $('#txtColor').val();
		console.log(colorEntrada);
		var resultado = compruebaHexa(colorEntrada);
		//Cuando escriba el color en el recuadro se resetea

		if (resultado) {
			//convierte a RGB
			rgb = [parseInt(resultado[0],16), parseInt(resultado[1],16), parseInt(resultado[2],16)];			
			$('#rgbColor').text('rgb (' + rgb[0] + ', ' + rgb[1] + ', ' + rgb[2] + ')');

			
			hsl = rgbToHsl(parseInt(resultado[0],16), parseInt(resultado[1],16), parseInt(resultado[2],16));
			$('#hslColor').text('hsl (' + Math.round(hsl[0]*360) + ', ' + Math.round(hsl[1]*100) + '%, ' + Math.round(hsl[2]*100) + '%)');
			
			console.log("Resultado ok, HLS: " + hsl);
			$('#miColor').css('background-color', colorEntrada);
			
			
			$('#complementarioC').css('background-color' , dameColor(180));
			$("#complementario").text(hexadecimalDesdeGrado(180));
			
			//dameColor(30); Analogo1
			$('#analogo1C').css('background-color' , dameColor(30));
			$("#analogo1").text(hexadecimalDesdeGrado(30));
			
			//dameColor(330); Analogo2
			$('#analogo2C').css('background-color' , dameColor(330));
			$("#analogo2").text(hexadecimalDesdeGrado(330));
			
			//dameColor(150); Complementario dividido1
			$('#complementariodiv1C').css('background-color' , dameColor(150));
			$("#complementariodiv1").text(hexadecimalDesdeGrado(150));
			
			//dameColor(210); Complementario dividido2
			$('#complementariodiv2C').css('background-color' , dameColor(210));
			$("#complementariodiv2").text(hexadecimalDesdeGrado(210));
			
			//dameColor(120); Triada1
			$('#triada1C').css('background-color' , dameColor(120));
			$("#triada1").text(hexadecimalDesdeGrado(120));
			
			//dameColor(260); Triada2
			$('#triada2C').css('background-color' , dameColor(260));
			$("#triada2").text(hexadecimalDesdeGrado(260));
		
			//dameColor(45); Tetrada1
			$('#tetrada1C').css('background-color' , dameColor(45));
			$("#tetrada1").text(hexadecimalDesdeGrado(45));
			
			//dameColor(135); Tetrada2
			$('#tetrada2C').css('background-color' , dameColor(135));
			$("#tetrada2").text(hexadecimalDesdeGrado(135));
			
			//dameColor(225); Tetrada3
			$('#tetrada3C').css('background-color' , dameColor(225));
			$("#tetrada3").text(hexadecimalDesdeGrado(225));
			
			//dameColor(315); Tetrada4
			$('#tetrada4C').css('background-color' , dameColor(315));	
			$("#tetrada4").text(hexadecimalDesdeGrado(315));
					
		}
	});
		
});

function hexadecimalDesdeGrado(grado) {
	hslDestino = hslDesdeGrado(grado);
	rgbDestino = hslToRgb(hslDestino[0], hslDestino[1], hslDestino[2]);
	rgbDestino[0] = (rgbDestino[0]).toString(16);
	rgbDestino[1] = (rgbDestino[1]).toString(16);
	rgbDestino[2] = (rgbDestino[2]).toString(16);
	return '#' + rgbDestino.join("").toUpperCase();
	
}

function hslDesdeGrado(grado) {
	console.log('hslDesdeGradoCalculado: ' + [(hsl[0]*360 + grado)%360, hsl[1]*100, hsl[2]*100]);
	console.log('hslDesdeGradoOrign ' + hsl);
	return [((hsl[0]*360 + grado)%360)/360, hsl[1], hsl[2]];
}

function dameColor(grado){
	hslNuevo = hslDesdeGrado(grado);
	console.log(hsl[0]);
	//me devuelve el grado en forma de color
		return 'hsl('+ hslNuevo[0] * 360 + ',' + hslNuevo[1] * 100 + '%,' + hslNuevo[2] * 100 +'%)';	
}


function compruebaHexa(cadena){
	//si la longitud no es ni 3 ni 6 no es un color hex
	//comprueba longitud de la cadena
	console.log("Entrando en compruebaHexa con cadena " + cadena);
	if (cadena.length != 6 && cadena.length != 3) {
		console.log("Longitud invalida");
		return false;
	}
	
	//partimos de la cadena en 3 variables: R, G, B
	var R='',G='',B='';
	
	if (cadena.length==3){
		//coge los valores de esa posicion
		R=cadena.charAt(0)+cadena.charAt(0);
		G=cadena.charAt(1)+cadena.charAt(1);
		B=cadena.charAt(2)+cadena.charAt(2);
	
	} 
	else {
		//coge desde el 0 hasta el 2 sin incluir
		R=cadena.substring(0,2);
		G=cadena.substring(2,4);
		B=cadena.substring(4,6);
	}
	
		if(isNaN(parseInt(R,16))){return false;};
		if(isNaN(parseInt(G,16))){return false;};
		if(isNaN(parseInt(B,16))){return false;};
		console.log("Generado correctamente el color: " + [R, G, B]);
		
	return [R,G,B];
}	