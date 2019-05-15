//====== Global Binding ======//
// "use strict"
console.log(this);

function globalThis() {
    console.log(this);
    this.something = "hello";
}

globalThis();




//====== Implicit Binding ======//







//====== Explicit Binding ======//
// .call() requires arguments to be passed individually
// .apply() Accepts sing array to pass arguments
// .bind() Stores this keyword for function to be called later
