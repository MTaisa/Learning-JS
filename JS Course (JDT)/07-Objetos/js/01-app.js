// OBJETOS
// Son muy parecidos a los diccionarios de python

const producto = {
    nombre: 'Monitor',
    precio: 200,
    disponible: true,
    mostrarInfo: function () {
        console.log(`El ${this.nombre} tiene un precio de ${this.precio}`); // this
    }
};

console.log(producto);

// Acceder a los valores de un objeto
console.log(producto.nombre);
console.log(producto['precio']);

// Agregar y Eliminar propiedades 
producto.nuevo = false;
console.log(producto);

delete producto.nuevo;
console.log(producto);


// Destructuring de Objetos 
const {nombre, precio, disponible} = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);

// Objetos dentro de objetos

const destino = {
    nombre: 'Punta Cana',
    ubicacion: {
        lat: 34.867,
        long: -123.968
    }
};

// Destructuring de Objetos anidados

const {name, ubicacion: {lat}} = destino;
console.log(lat);

// Congelar Objetos
//Object.freeze(destino);

// Sellar un Objetos (A diferencia de freeze, seal permite modificar las propiedades existentes)
Object.seal(destino);

// Copiar dos objetos 
const medidas = {
    peso: 1,
    largo: 23
};

const resultado = Object.assign(producto, medidas);
console.log(resultado);

// Spread Operator o Rest Operator para copiar
const resultado2 = {...producto, ...medidas};// Los Tres puntos significan copiar
console.log(resultado2);

// Funciones en objetos
producto.mostrarInfo(); // No olvidar el this dentro de la funcion

// Object Constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('tablet', 890)
console.log(producto2);

// Object .keys .values .entries
console.log(Object.keys(producto)); //  Retorna un arreglo con las llaves
console.log(Object.values(producto)); //  Retorna un arreglo con los valores
console.log(Object.entries(producto)); //  Retorna un arreglo con los pares llave-valor




