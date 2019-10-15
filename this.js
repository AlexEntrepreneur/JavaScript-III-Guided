//====== Global Binding ======//
// "use strict"
console.log(this);

function globalThis() {
    console.log(this);
    this.something = "hello";
}

globalThis();

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
const person = {
    name: "Jill"
}

const jedi = {
    name: "Luke"
}

function introduce(skill1, skill2, skill3) {
    return `Hello! My name is ${this.name} and my skills are ${skill1}, ${skill2} and ${skill3}`;
}

// .call() requires arguments to be passed individually
console.log(introduce.call(person, "Singing", "Carpentry", "Bakery"));

// .apply() Accepts array to pass arguments
const jillSkills = ["Singing", "Carpentry", "Bakery"];
console.log(introduce.apply(person, jillSkills));

// .bind() Stores this keyword for function to be called later
console.log(introduce.bind(person, "Singing", "Carpentry", "Bakery")());