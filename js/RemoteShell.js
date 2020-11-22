$(document).ready(function(){
	$("#video").click(function(){
		//tamaño en funcion de pc o movil
		var ventana_ancho = $(window).width();
  		if ((ventana_ancho<=600)&&(ventana_ancho>=360)) {
  			var ancho='300px';
  			var alto='221px';
  		}
  		else if (ventana_ancho<=360) {
  			var ancho='280px';
  			var alto='221px';
  		}
  		else{
  		var ancho='962px';
			var alto='565px';
  		}

		var presentacion='';
		$("#divvideo").empty();
		$("#divvideo").append(presentacion);
	});
});