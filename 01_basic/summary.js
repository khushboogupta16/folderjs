// Primitive(immutables datatypes)

//  7 types : String, Number, Boolearn, Null, Undefined, Symbol, BigInt

// const id = Symbol("123")
// const bigNumber = 5364974386375583n (bigInt)
// const number = 100
// let a = "khushboo" 
// let b;(undefined)
// let c = null(empty) datatype = Object


// Reference () {} [] (Non primitive)(mutable)

// Array, Objects, Funtions

const heros = ["shaktiman", "naagraj"]

let myObject = {name:"khushboo",
    age:78
}

const myFunction = function(){console.log("Hello world")}

// console.log(typeof heros)


// JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

// For example, in JavaScript, you can do the following:

// let x = 10; // x is now a number
// x = "Hello"; // x is now a string
// x = true; // x is now a boolean
// On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

// Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

// int x = 10; // x is a variable of type int
// String name = "John"; // name is a variable of type String
// JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


// -------------- Memory -------------------

// Stack (Primitive), Heap (Non-primitive)

let myname = "khushboo"
let anothername = myname
anothername= "kuku"

console.log(myname);
console.log(anothername);

let userOne = {
    email: "kuku@gmail.com",
    upi:"user@ybl"

}

let userTwo = userOne

userTwo.email = "kuku@2gmail.com"

console.log(userOne);
console.log(userTwo);
