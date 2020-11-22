$(document).ready(function(){
	//Menu por defecto:
	$("#btCompetencias").find('div').css({"background": 'white'});
	$("#ContenidoCompetencias").show();
  	$("#ContenidoLenguajes").show();
	//Control efecto botones menu:
  $("#btCompetencias").hover(function(){
  	$("#btCompetencias").css({"color": 'white',});
  	$("#btExperienciaLaboral").css({"color": 'gray',});
  	$("#btProyectos").css({"color": 'gray',});
  });
   $("#btExperienciaLaboral").hover(function(){
  	$("#btCompetencias").css({"color": 'gray',});
  	$("#btExperienciaLaboral").css({"color": 'white',});
  	$("#btProyectos").css({"color": 'gray',});
  });
   $("#btProyectos").hover(function(){
   	$("#btCompetencias").css({"color": 'gray',});
  	$("#btExperienciaLaboral").css({"color": 'gray',});
  	$("#btProyectos").css({"color": 'white',});   
  });
   //click events:
   $("#btCompetencias").click(function(){
   	$("#btCompetencias").find('div').css({"background": 'white',});
  	$("#btExperienciaLaboral").find('div').css({"background": 'none',});
  	$("#btProyectos").find('div').css({"background": 'none',});
  	$("#btCompetencias").css({"color": 'white',});
  	$("#btExperienciaLaboral").css({"color": 'gray',});
  	$("#btProyectos").css({"color": 'gray',});
  	$("#ContenidoProyectos").hide();
  	$("#ContenidoExperienciaLaboral").hide();
  	$("#ContenidoCompetencias").show();
  	$("#ContenidoLenguajes").show();

  });
   $("#btExperienciaLaboral").click(function(){
   	$("#btCompetencias").find('div').css({"background": 'none',});
  	$("#btExperienciaLaboral").find('div').css({"background": 'white',});
  	$("#btProyectos").find('div').css({"background": 'none',});
	$("#btCompetencias").css({"color": 'gray',});
  	$("#btExperienciaLaboral").css({"color": 'white',});
  	$("#btProyectos").css({"color": 'gray',});
  	$("#ContenidoProyectos").hide();
  	$("#ContenidoCompetencias").hide();
  	$("#ContenidoLenguajes").hide();
  	$("#ContenidoExperienciaLaboral").show();
  });
   $("#btProyectos").click(function(){
   	$("#btCompetencias").find('div').css({"background": 'none',});
  	$("#btExperienciaLaboral").find('div').css({"background": 'none',});
  	$("#btProyectos").find('div').css({"background": 'white',});
  	$("#btCompetencias").css({"color": 'gray',});
  	$("#btExperienciaLaboral").css({"color": 'gray',});
  	$("#btProyectos").css({"color": 'white',}); 
  	$("#ContenidoCompetencias").hide();
  	$("#ContenidoLenguajes").hide();
  	$("#ContenidoExperienciaLaboral").hide();
  	$("#ContenidoProyectos").show();
  });
   $("#Menu").hover(function(){
   	$("#btCompetencias").css({"color": 'white',});
  	$("#btExperienciaLaboral").css({"color": 'white',});
  	$("#btProyectos").css({"color": 'white',});
   });
   //FIN EFECTOS MENU
   $(".tdflickboxM").click(function(){
    $(this).find('.tdcontent').toggleClass('flipped');
   });   
});