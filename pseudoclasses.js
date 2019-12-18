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


//====== Pseudoclassical Inheritance ======//
// Step 1. Create Constructor
// Step 2. Add Explicit Binding
// Step 3. Connect Child to Parent
// Step 4. Attach Child Methods!
