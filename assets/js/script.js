const obtenerPromedio = () => {
  const nota1 = prompt("Ingresa tu calificación n°1");
  const nota2 = prompt("Ingresa tu segunda calificación");

  let promedio = (parseInt(nota1) + parseInt(nota2)) / 2;
    if(promedio === !isNaN){
        alert("no ingresaste promedio")
    } else{
        alert(`Tu promedio es ${promedio}`);
        console.log(`Tu promedio es ${promedio}`);
    }
 
};
