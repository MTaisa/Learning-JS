// ARREGLOS

const numeros = [1, 2, 3, 4, 5];
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo')

console.log(numeros);
console.log(meses);

console.log(numeros[2]);
console.log(meses[1]);

console.log(meses.length);

for(let i = 0; i < meses.length; i++ ) {
    console.log(meses[i]);
}

// Agregar nuevos elementos
meses.push('Junio');
console.log(meses);

meses.unshift('MESES');
console.log(meses);

// Eliminar elementos
meses.pop()
console.log(meses);

meses.shift();
console.log(meses);

meses.splice(0, 2);
console.log(meses);

// forEach

meses.forEach( function(mes) {
    console.log(`El mes es ${mes}`);
})
 
// map

const meses2 = meses.map( function(mes) {
    return mes.toUpperCase()
})

console.log(meses2);





