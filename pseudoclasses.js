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

const wilma = new Parent({

});





//====== Pseudoclassical Inheritance ======//
// Step 1. Create Constructor
// Step 2. Add Explicit Binding
// Step 3. Connect Child to Parent
// Step 4. Attach Child Methods!
