//====== Building Pseudoclasses ======//
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.odometer = 0;
  this.someValue = ['some', 'values'];
  this.drive = function() {
    this.odometer += 10;
    console.log(`The ${this.make} ${this.model} drove 10 miles.`);
  }
}



//====== New Binding ======//
// "this" refers to the new object being created
const c63 = new Car("Mercedes Benz", "C63", 2014);

c63.drive();
c63.drive();
c63.drive();
c63.drive();

console.log(c63);


function Parent(attributes) {
  this.age = attributes.age;
  this.location = attributes.location;
  this.name = attributes.name;
  this.phrase = attributes.phrase;
}

Parent.prototype.speak = function() {
  return `${this.name} says ${this.phrase}`;
};

const fred = new Parent({
  age: 35,
  name: "Fred",
  location: "Bedrock",
  phrase: "Yabba dabba do!"
});

const wilma = new Parent({
  age: 25,
  name: "Wilma",
  location: "Bedrock",
  phrase: "Yabba dabba do!"
});

console.log(fred, wilma);


// Hester
function Fruit(attrs) {
  this.name = attrs.name;
  this.isRipe = attrs.isRipe;
  this.calories = attrs.calories;
}

Fruit.prototype.calculateCals = function() {
  console.log(`Calories in ${this.name} are ${this.calories * 100}`);
};

const mango = new Fruit({
  name: "Mango",
  isRipe: true,
  calories: 200
});


mango.calculateCals();
console.log(mango);


//====== Pseudoclassical Inheritance ======//
// Step 1. Create Constructor
function Child(childAttributes) {
  // Step 2. Add Explicit Binding
  Parent.call(this, childAttributes);
  this.toy = childAttributes.toy;
}

// Step 3. Connect Child to Parent
Child.prototype = Object.create(Parent.prototype);

// Step 4. Attach Child Methods!
Child.prototype.play = function() {
  return `${this.name} plays with ${this.toy}`;
}

const pebbles = new Child({
  age: 2,
  name: "Pebbles",
  location: "Bedrock",
  phrase: "Yabba dabba doozie!",
  toy: "Rock Doll"
});

console.log(fred.speak());
console.log(wilma.speak());
console.log(pebbles.play());
