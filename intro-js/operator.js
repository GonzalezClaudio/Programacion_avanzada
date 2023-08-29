const lenguajes = ['JavaScript', 'PHP', 'Python', 'Ruby'];
const frameworks = ['ReactJS', 'laravel', 'Django', 'Ruby on Rails'];

//unir los arreglos en un solo arreglo

//forma anterior

let combinacion = lenguajes.concat(frameworks);
console.log(combinacion);

//forma nueva
let combinacion2 = [... lenguajes, ... frameworks];
console.log(combinacion2)

// Otros ejemplos

let [ultimo] = [...lenguajes].reverse();
console.log(ultimo);
