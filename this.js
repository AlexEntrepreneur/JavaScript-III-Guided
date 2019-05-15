//====== Global Binding ======//
// "use strict"
console.log(this);

function globalThis() {
    console.log(this);
    this.something = "hello";
}

globalThis();

// Jayne's Example
function global() {
    console.log(this);
}
  
global();

// Petar's Example
function log(){
   console.log(this);
}

log();

//====== Implicit Binding ======//
const hobbit = {
    name: "Samwise",
    age: 32,
    food: "taters",
    cook: function() {
        return `${this.name} loves to cook ${this.food}`;
    }
}

console.log(hobbit.cook());

// Petar's Example
const jungle = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
};

jungle.sayHello('Tarzan');

// Jayne's Example
const tree = {
    type: "Oak",
    nest: "Yes",
    animal: "squirrel",
    info: function() {
      return `There is a ${this.animal} in this ${this.type} tree`;
    }
}

console.log(tree.info());



//====== Explicit Binding ======//
const person = {
    name: "Jill"
}

const jedi = {
    name: "Luke"
}

function introduce() {
    return `Hello! My name is ${this.name}`;
}

// .call() requires arguments to be passed individually
console.log(introduce.call(person));

// .apply() Accepts sing array to pass arguments
console.log(introduce.apply(jedi));

// .bind() Stores this keyword for function to be called later
