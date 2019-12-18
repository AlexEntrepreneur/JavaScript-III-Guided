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


// Austin 
const player = {
  name: "LeBron James",
  position: "small forward",
  team: "Los Angeles Lakers",
  sayHello: function() {
    return `Hi my name is ${this.name} and I am a ${this.position} for the ${this.team}.`;
  }
};

console.log(player.sayHello());



//====== Explicit Binding ======//
// We can tell a function what the value of this should be
const person = {
  name: "Jill"
}

const jedi = {
  name: "Luke"
}

function introduce(skill1, skill2, skill3) {
  return `Hello! My name is ${this.name} and my skills are ${skill1}, ${skill2}, and ${skill3}`;
}

// .call() requires arguments to be passed individually
console.log(introduce.call(person, "Singing", "Carpentry", "Bakery"));

// .apply() requires arguments to be passed as an array
const jillSkills = ["Singing", "Carpentry", "Bakery"];
console.log(introduce.apply(person, jillSkills));

// .bind() stores the value of this for later (when the function is called)
console.log(introduce.bind(person, "Singing", "Carpentry", "Bakery")());