//====== Global Binding ======//
// "use strict";

console.log(this);

function whatIsThis() {
  console.log(this);
}

whatIsThis();



//====== Implicit Binding ======//
// "Automatic" binding
// When we have a METHOD, this refers to the parent object
// Don't use arrow functions!

const hobbit = {
  name: "Samwise",
  age: 32,
  food: "taters",
  cook: function() {
    console.log(this);
    return `${this.name} loves to cook ${this.food}`;
  }
}

console.log(hobbit.cook());





//====== Explicit Binding ======//
// .call() requires arguments to be passed individually
// .apply() requires arguments to be passed as an array
// .bind() stores the value of this for later (when the function is called)
