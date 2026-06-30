// Task 1: "this" keyword - clicked button disappears
function hideMe(button) {
    // "this" inside the inline handler refers to the button element itself
    button.style.display = "none";
}

// Task 2: call() and apply()
function introduce(greeting, punctuation) {
    return greeting + ", I am " + this.name + punctuation;
}

function demoCallApply() {
    const personA = { name: "Alice" };

    // call() takes arguments individually, comma separated
    const callResult = introduce.call(personA, "Hello", "!");

    // apply() takes arguments as an array
    const applyResult = introduce.apply(personA, ["Hi", "."]);

    document.getElementById("callApplyOutput").textContent =
        "call(): " + callResult + " | apply(): " + applyResult +
        " (Difference: call() takes args one by one, apply() takes them as an array)";
}

// Task 3: simple counter
let count = 0;
function incrementCount() {
    count++;
    document.getElementById("countDisplay").textContent = count;
}

// Task 4: counter using getter and setter
const counterObj = {
    _count: 0,
    get count() {
        return this._count;
    },
    set count(value) {
        this._count = value;
    }
};

function incrementGSCounter() {
    counterObj.count = counterObj.count + 1; // uses the setter, then getter
    document.getElementById("gsCountDisplay").textContent = counterObj.count;
}

// Task 5: add properties to an existing function/object using prototypes
function Vehicle(brand) {
    this.brand = brand;
}

// Adding a new property/method to all Vehicle instances via prototype
Vehicle.prototype.wheels = 4;
Vehicle.prototype.describe = function () {
    return this.brand + " has " + this.wheels + " wheels.";
};

const myCar = new Vehicle("Toyota");
console.log("--- Prototype demo ---");
console.log(myCar.describe()); // "Toyota has 4 wheels."
