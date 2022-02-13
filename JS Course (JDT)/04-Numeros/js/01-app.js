const n1 = 20,
      n2 = '20',
      n3 = new Number(80);

console.log(typeof(n1)); // Numero
console.log(typeof(n2)); // String
console.log(typeof(n3)); // Object

// Las Operaciones son las mismas que en otros lenguajes

// MATH
console.log(Math.PI);
console.log(Math.E);
console.log(Math.round(3.1234));

// Redondear hacia arriba
console.log(Math.ceil(3.1));

// Redondear hacia abajo
console.log(Math.floor(3.8));

// Raiz
console.log(Math.sqrt(25));

// Absolute
console.log(Math.abs(-24));

// Potencia
console.log(Math.pow(2, 3));

// Max y min
console.log(Math.min(1, 2, 3));
console.log(Math.max(1, 2, 3));

// random
console.log(Math.random());

// Incrementos y decrementos
let puntaje = 5;

++puntaje;
console.log(puntaje);

--puntaje;
console.log(puntaje);

// Metodos Utiles
const numero1 = '10',
      numero2 = '20.5',
      numero3 = 30,
      numero4 = '40';

console.log(Number.parseInt(numero1));
console.log(Number.parseFloat(numero2));
console.log(Number.isInteger(numero3));

