$(document).ready(function(){
	$("#presentacion").click(function(){
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

		var presentacion='<iframe src="https://onedrive.live.com/embed?resid=A0079911F54F315D%2112750&amp;authkey=%21ADjj2Q-x_AizKYM&amp;em=2&amp;wdAr=1.7777777777777777" width="'+ancho+'" height="'+alto+'" frameborder="0">Esto es un documento de <a target="_blank" href="https://office.com">Microsoft Office</a> incrustado con tecnología de <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>';
		$("#divpresentacion").empty();
		$("#divpresentacion").append(presentacion);
	});
});