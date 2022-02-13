// ARRAYS
// An array is basically a list of data, The behavior of the array is the same of pythons arrays

const arr = new Array(10); 
console.log(arr);

let videogames = ['Mario', 'Megaman', 'CK3'];
console.log(videogames);
console.log(videogames);
console.log(videogames[0]);
console.log(videogames[1]);
console.log(videogames[2]);

// METHODS AND PROPERTIES
let games = ['CK3', 'HOI4', 'V2', 'EU4'];
console.log(games.length);

// forEach (Basically forEach execute an instruction for each element of the array)
games.forEach((element, index, arr) => {console.log({element, index, arr});})
// The curly braces inside the clg its just for print it like an object, its not important

// push (Insert an element at the end of the array)
games.push('AOE4');
console.log(games);

// unshift (Insert an element at the beginning of the array)
games.unshift('Total War');  
console.log(games);

// pop
games.pop();  
console.log(games);

// splice
let deleteGames = games.splice(0, 2)
console.log({deleteGames, games});

// indexOf
let v2Index = games.indexOf('V2');
console.log(v2Index);