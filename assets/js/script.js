const obtenerPromedio = () => {
  const nota1 = prompt("Ingresa tu calificación n°1");
  const nota2 = prompt("Ingresa tu segunda calificación");

  let promedio = (parseInt(nota1) + parseInt(nota2)) / 2;
  if(isNaN(promedio)){
    alert("no ingresaste promedio")
  } else{
	 document.getElementById('promedioFinal').innerHTML = `Tu promedio es ${promedio}`
     console.log(`Tu promedio es ${promedio}`);
    }
};

/* Object constructor */

const saludo = () => {
	let nombre = prompt("Hola! Bienvenid@ al sitio, por favor Ingresa tu nombre de pila");
	let apellido = prompt("Ingresa tu apellido");
	let alerta = alert("Revisa la consola")

function Producto(nombre, apellido) {
	this.nombre = nombre;
	this.apellido = apellido;

	this.mostrarNombre = function () {
		console.log(`Hola ${this.nombre} ${this.apellido} que tengas una bonita navidad :) aquí podrás saber tu promedio de calificaciones`);
	};
	this.getName = function () {
		return this.nombre;
	};
	this.setName = nombre;

	this.getLastName = function(){
		return this.apellido;
	}
	this.setLastName = apellido;
}

const producto = new Producto(nombre, apellido)

producto.mostrarNombre();

}
const listadoAsignaturas = () => {
	const valor1 = prompt("Ingresa tu asignatura n°1");
	const valor2 = prompt("Ingresa tu asignatura n°2");
	const valor3 = prompt("Ingresa tu asignatura n°3");

    let asignaturas = [];
     asignaturas.push(valor1, valor2, valor3)
     console.log(asignaturas)


	alert(`Hola!, tus listado de asignaturas inscritas son: ${asignaturas}`)
	alert(`En la consola encontraras el array de asignaturas almacenado :)`)
}
