//====== Building Pseudoclasses ======//
function Parent(attributes) {
    this.age = attributes.age;
    this.location = attributes.location;
    this.name = attributes.name;
    this.phrase = attributes.phrase;
}

Parent.prototype.speak = function() {
    return `${this.name} says ${this.phrase}`;
}

// Petar's Example
// function Major(greeter) {
//     this.greeting = 'Hello ';
//     this.greeter = greeter;
//     this.speak = function() {
//       // anything
//     };
// }; 

//====== New Binding ======//
// "this" refers to the new object being created
const fred = new Parent({
    age: 35,
    name: "Fred",
    location: "Bedrock",
    phrase: "Yabba dabba do!"
});

// const wilma = new Parent({

// });

// Shola's Example
const velma = new Parent({
    age: 25,
    name: 'Velma',
    location: 'Bedrock',
    phrase: 'Jinkies I just got a clue'

});

// Jayne's Example
const batman = new Parent ({
    age: 47,
    name: "Bruce",
    location: "Gotham City",
    phrase: "I AM BATMAN"
});

console.log(velma);




//====== Pseudoclassical Inheritance ======//
// Step 1. Create Constructor
// Step 2. Add Explicit Binding
// Step 3. Connect Child to Parent
// Step 4. Attach Child Methods!
