/**
 * @author SMM
 */
//Algunos contactos de prueba:
var contacto1 = new Contacto(1, "Luis", "620256489", "\prueba\fotos\vaapetar.png", "Definir Todavía", 8, "nota1");
var contacto2 = new Contacto(2, "Leo", "6224876489", "\prueba\fotos\vaapetar2.png", "Definir Todavía", 10, "nota2");
var contacto3 = new Contacto(3, "Iker", "945256489", "\prueba\fotos\vaapetar3.png", "Definir Todavía", 9, "nota3");

function obtenerContactos(){

	var arrayDeContactos = new Array(contacto1, contacto2, contacto3);
	return arrayDeContactos;
}

function detalleContacto(idContacto){
	return contacto1;
}

function borrarContacto(idContacto){
	return true;
}

function addContacto(nombre, telefono, fotografia, geolocalizacion, puntuacion, notas){

	return true;
}

function modificarContacto(id, nombre, telefono, fotografia, geolocalizacion, puntuacion, notas){
	return true;
}

//Definimos la estructura de datos del contacto
function Contacto(id, nombre, telefono, fotografia, geolocalizacion, puntuacion, notas){
	this.id=id;
	this.nombre=nombre;
	this.telefono=telefono;
	this.fotografia=fotografia;
	this.geolocalizacion=geolocalizacion;
	this.puntuacion=puntuacion;
	this.notas=notas;
};