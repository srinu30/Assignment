// Task 1: single line and multiline comments
// This is a single line comment

/*
   This is a
   multiline comment
*/

// Task 2: array of fruits, sorted descending on button click
let fruits = ["mango", "apple", "banana", "orange", "grape"];

function sortFruits() {
    fruits.sort().reverse(); // sort ascending then reverse for descending order
    document.getElementById("fruitOutput").textContent = fruits.join(", ");
}

// Task 3: FOR/IN loop
let car = { brand: "Toyota", model: "Corolla", year: 2024 };
console.log("--- FOR/IN loop over car object ---");
for (let key in car) {
    console.log(key + ": " + car[key]);
}

// Task 4: object "person" with firstname and lastname, accessed 2 ways
let person = {
    firstname: "John",
    lastname: "Doe"
};

function showPerson() {
    // Way 1: dot notation
    let dotAccess = person.firstname + " " + person.lastname;

    // Way 2: bracket notation
    let bracketAccess = person["firstname"] + " " + person["lastname"];

    document.getElementById("personOutput").textContent =
        "Dot notation: " + dotAccess + " | Bracket notation: " + bracketAccess;
}

// Task 5: variable hoisting (initialization first, then declaration)
console.log("--- Hoisting demo ---");
console.log("Value of hoistedVar before declaration line:", hoistedVar); // undefined, not an error
hoistedVar = "Hello"; // this line is the "initialization"
var hoistedVar;       // this is the "declaration" - JS hoists declarations to the top
console.log("Value of hoistedVar after declaration line:", hoistedVar);

// Task 6: strict mode - undeclared variables throw an error
function strictModeDemo() {
    "use strict";
    try {
        undeclaredVariable = 10; // not declared with let/var/const
    } catch (e) {
        console.log("Strict mode error caught:", e.message);
    }
}
strictModeDemo();
// Without "use strict", JavaScript silently creates a global variable when you
// assign to an undeclared name. With strict mode, this instead throws a
// ReferenceError, which helps catch typos and bugs early.
