// OBJECTS LITERALS
// An object literal is pretty munch like a python dictionary

let character = {
    name: 'James Foster',
    codeName: 'Lord of the seven rings',
    itsAlive: true,
    age: 34,

    coords: {
        lat: 34.086,
        lng: -122.345
    },

    deadList: ['Lord Munsen', 'Sir Alester', 'Regina Saster'],
    direction: {
        zip: '12765, 90876',
        ub: 'Kingdom of Lancetania'
    }

};

console.log(character);

console.log(character.name);
console.log(character['name']);

console.log(character.coords.lat);
console.log(character.coords.lng);

console.log(character.deadList.length);
console.log(character.deadList[character.deadList.length - 1]);

////////////////////////////////////////////////////////////////////////////////////
// MORE DETAILS ///////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

// Delete a property
delete character.age;
console.log(character);

// object.entries (create an array from each property of the object)
const entriesPairs = Object.entries(character)
console.log(entriesPairs);

// Create a new property
character.married = true;
console.log(character);

// Block an object 
Object.freeze(character); // freeze only blocks 'first level' properties

// object.getOwnPropertyNames (It generates an array with all the properties names)
const chatProperties = Object.getOwnPropertyNames(character);
console.log(chatProperties);

// object.values(It generates an array with all the values)
const chatValues = Object.values(character);
console.log(chatValues);
