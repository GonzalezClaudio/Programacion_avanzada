// funcion declaracion

function saludar (nombre) {
    console.log (´bienvenido: ${nombre}´); //ver comilla
}

saludar('Juan')


//function expresion

const cliente = function (nombreDev) {
    console.log (´mostrando datos del desarrollador: ${nombreDev}´) //ver comillas
}

cliente ('claudio' , 'desarrollador web');

