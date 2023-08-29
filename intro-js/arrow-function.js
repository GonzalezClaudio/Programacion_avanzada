let viajando = function(destino) {
    return `viajando a la ciudad de: ${destino}`
}

let viaje = viajando ('Paris')
console.log(viaje)

//arrow functions

let viajando2 = (destino , duracion) => {
    return `viajando a la ciudad de ${destino} por ${duracion}`
}

let viaje2 = viajando2('Londres' , '9 minutos')

console.log (viaje2)

