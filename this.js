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








//====== Explicit Binding ======//
// .call() requires arguments to be passed individually
// .apply() Accepts sing array to pass arguments
// .bind() Stores this keyword for function to be called later
