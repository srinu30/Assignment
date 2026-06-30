// Task 1: event listener that displays current date and time
console.log("Page loaded - setting up event listeners"); // Task 3: console.log for debugging

document.getElementById("dateTimeBtn").addEventListener("click", function () {
    const now = new Date();
    document.getElementById("dateTimeOutput").textContent = "Current date/time: " + now.toString();
    console.log("Date/Time button clicked at", now); // debugging log
});

// Task 2: form validation - textbox must not be empty
document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // stop the page from reloading
    const nameValue = document.getElementById("nameInput").value.trim();
    const output = document.getElementById("validationOutput");

    if (nameValue === "") {
        output.textContent = "Error: Name field cannot be empty!";
        output.style.color = "red";
        console.log("Validation failed: empty input"); // debugging
    } else {
        output.textContent = "Form submitted successfully with name: " + nameValue;
        output.style.color = "green";
        console.log("Validation passed:", nameValue); // debugging
    }
});

// Task 4: set, get, and check a cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
    document.getElementById("cookieOutput").textContent = "Cookie set!";
}

function getCookie(name) {
    const cname = name + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i].trim();
        if (c.indexOf(cname) === 0) {
            return c.substring(cname.length, c.length);
        }
    }
    return "";
}

function displayCookie() {
    const value = getCookie("username");
    document.getElementById("cookieOutput").textContent = value
        ? "Cookie value: " + value
        : "No cookie found. Click 'Set Cookie' first.";
}

function checkCookieExists() {
    const value = getCookie("username");
    document.getElementById("cookieOutput").textContent = value
        ? "Cookie exists."
        : "Cookie does not exist.";
}

// Task 5: JSON object accessed using dot notation

const studentJSON = {
    "name": "B.Srinivas Gupta",
    "course": "Full Stack Development",
    "duration": "1 Day"
};

function showJsonData() {
    document.getElementById("jsonOutput").textContent =
        "Name: " + studentJSON.name +
        ", Course: " + studentJSON.course +
        ", Duration: " + studentJSON.duration;
}
