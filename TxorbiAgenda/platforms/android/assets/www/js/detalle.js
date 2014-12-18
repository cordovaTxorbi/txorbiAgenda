
var contacto_sel = new Contacto(1, "Luis", "620256489", "\prueba\fotos\vaapetar.png", "Definir Todavía", 8, "nota1");

function editaDetalle(contacto){
	$("#nombre_c").html(contacto.nombre);
	$("#telefono_c").html(contacto.telefono);
	$("#imagen_c").html(contacto.imagen);
	$("#geo_c").html(contacto.geolocalizacion);
	$("#puntuacion_c").html(contacto.puntuacion);
	$("#nota_c").html(contacto.notas);
}

$(document).ready(function(){
	editaDetalle(contacto_sel);
});




