// Tres formas de crear un string
const producto = 'Esto es un String',
      producto2 = String('Esto es otro String'),
      producto3 = new String('Esto es otro String.....')

console.log(producto);
console.log(producto2);
console.log(producto3);

// METODOS DE STRINGS

// length
 console.log(producto.length);

// indexOf
console.log(producto2.indexOf('otro'));
console.log(producto2.indexOf('no')); // Retorna -1 cuando no existe

// Includes
console.log(producto.includes('entero'));

///////////////////////////////////////////////////
// CONCATENACION DE STRINGS

const monitor = 'Monitor de 24 pulgadas ',
      precio = "250 USD",
      producto4 = '     Tablet touch of the dragon special edition        '

// concat
console.log(monitor.concat(precio));

// +
console.log(monitor + 'tiene un precio final de ' + precio);

// `` (Template Strings)
console.log(`El producto ${monitor} tiene un precio final de ${precio}`);

//////////////////////////////////////////////////

// trim
console.log(producto4.trim());

// replace (reemplazar)
console.log(monitor.replace('pulgadas', 'centimetros'));

//slice (cortar)
console.log(monitor.slice(0, 20));

// substring (alternativa a slice)
console.log(monitor.substring(0, 18));
console.log(monitor.charAt(0));

// repeat
 console.log(monitor.repeat(3));

// split
const texto = 'Estoy aprendiendo JS';
console.log(texto.split(' ')); // Retorna un arreglo

// toUpperCase
console.log(texto.toUpperCase());

//toLowerCase
console.log(texto.toLowerCase());


