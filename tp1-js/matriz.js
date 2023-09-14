//Modifique la matriz, para que cuando se ingrese un nombre que no existe en la lista
//arroje un alert “Nombre no existe en la lista”.

var nombres = new Array(); // se declara la matriz

// Se crean y declaran 7 seldas

nombres[0]="Nacho";
nombres[1]="Arex";
nombres[2]="Laura";
nombres[3]="Sonia";
nombres[4]="Gonzalo";
nombres[5]="Eva";
nombres[6]="Pedro";

// Ahora se muestran las celdas, para comprobar que se han almacenado los valores correctos.

document.write (nombres[0] + "<br>");
document.write (nombres[1] + "<br>");
document.write (nombres[2] + "<br>");
document.write (nombres[3] + "<br>");
document.write (nombres[4] + "<br>");
document.write (nombres[5] + "<br>");
document.write (nombres[6] + "<br>");


// A cntinuacion  se crea otra celda y luego se muestra su contenido para demostrar que el numero,
// de celdas de la matriz se puede cambiar durante la ejecucion. Tecnicamente se dice que la matriz es
// redimensionable dinamicamente.

nombres[7]="Manuel";
document.write (nombres[7] + "<br>");



function buscarNombre(nombre) {
  if (nombres.includes(nombre)) {
    alert("El nombre: " + nombre +  " , existe en la lista.");
  } else {
    alert("Nombre no existe en la lista.");
  }
}

var nombreBuscado = prompt("Ingrese un nombre:");
buscarNombre(nombreBuscado);


  
