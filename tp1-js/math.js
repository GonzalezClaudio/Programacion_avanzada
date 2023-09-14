document.write ("aqu&iacute; se ven las propiedades del objeto Math.<br>");

document.write ("la constante de Euler vale ");
document.write (Math.E + "<br>");

document.write ("El logaritmo natural de 2 vale ");
document.write (Math.LN2 + "<br>");

document.write ("El logaritmo natural de 10 vale ");
document.write (Math.LN10 + "<br>");

document.write ("El logaritmo de E en base 2 vale ");
document.write (Math.LOG2E + "<br>");

document.write ("El logaritmo de E en base 10 vale ");
document.write (Math.LOG10E + "<br>");

document.write ("El n&uacute;mero PI vale ");
document.write (Math.PI + "<br>");

document.write ("La ra&iacute;z cuadrada de 0.5 (1/2) vale ");
document.write (Math.SQRT1_2 + "<br>");

document.write ("La ra&iacute;z cuadrada de 2 vale ");
document.write (Math.SQRT2 + "<br>");

// Crear una instancia de la fecha actual
var fecha = new Date();

// Obtener los valores de la fecha
var año = fecha.getFullYear(); // Obtener el año completo (por ejemplo, 2023)
var año2 = fecha.getYear(); // Obsoleto, evitar usarlo (obtiene el año actual menos 1900)
var mes = fecha.getMonth(); // Obtener el mes (0-11, donde 0 es enero)
var día = fecha.getDate(); // Obtener el día del mes (1-31)
var horas = fecha.getHours(); // Obtener la hora (0-23)
var minutos = fecha.getMinutes(); // Obtener los minutos (0-59)
var segundos = fecha.getSeconds(); // Obtener los segundos (0-59)
var milisegundos = fecha.getMilliseconds(); // Obtener los milisegundos (0-999)
var tiempoEnMilisegundos = fecha.getTime(); // Obtener la representación de tiempo en milisegundos desde el 1 de enero de 1970 (época Unix)


document.write ("Año completo: ", año + "<br>");
document.write("Año (obsoleto):", año2 + "<br>");
document.write("Mes:", mes + "<br>");
document.write("Día:", día + "<br>");
document.write("Horas:", horas + "<br>");
document.write("Minutos:", minutos + "<br>");
document.write("Segundos:", segundos + "<br>");
document.write("Milisegundos:", milisegundos + "<br>");
document.write("Tiempo en milisegundos:", tiempoEnMilisegundos + "<br>");












