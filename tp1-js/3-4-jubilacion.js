// 3. Utilizando condicionales múltiples, realice un <script> que verifique la edad de Jubilación de
// una persona.

// 4. Ídem ejercicio anterior, verificando el sexo, siendo que la edad de Jubilación para el Hombre
// es de 65 años y la Mujer a los 60 años.

// Definir la edad de jubilación
var edadJubilacionHombre = 65;
var edadJubilacionMujer = 60;

var cuenta;



for (cuenta = 1; cuenta <= 4; cuenta ++ ){
    edad = prompt ('Introduzca su edad (en cifras). ', '');
    edad = parseInt (edad);
    genero = prompt (' ingrese su genero M o F', '');
    

    if ((edad >= edadJubilacionHombre && genero==='m')||(edad >= edadJubilacionMujer && genero==='f'))
    {
        alert ('¡Felicidades! Ya puedes jubilarte');
    } else {
        alert ('Todavía no eres elegible para la jubilación');
    }
}
