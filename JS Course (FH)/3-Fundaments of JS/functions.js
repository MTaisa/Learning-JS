// FUNCTIONS 

function sayHello() {
    console.log('Hello World');
}

sayHello();

// Anonymous Function
// Basically the main advantage of this type of function is that variable name errors are avoided

const sayHello2 = function() {
    console.log('Hello World..... Again');
}

sayHello2();

const sayHelloTo = function(name){
    console.log(`Hello ${name}`);
}

sayHelloTo('Manuel');

// Arrow Functions
const sayHelloArrow = (name) => {
    console.log(`Hellow ${name}, I am an Arrow Funtion`);
}

sayHelloArrow('Manuel');

// Return of Functions
// In JS functions always returns something, the default value is undefined

const add = (a, b) => a + b
const result = add(1, 2)

console.log(result);