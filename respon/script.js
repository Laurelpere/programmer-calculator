let age = 25;
const name = 'John';
var city = 'Lagos';

let message = 'Hello, World!';
let price = 100.5;
let isAvailable = true;
let result = null;
let value;
let person = { name: 'Alice', age: 300 };

let sum = 5 + 3;
let product = 4 * 2;

let isEqual = 10 === 10;
let isGreater = 8 > 5;

let logicalResult = true && false; // false
let alternative = true || false; // true

function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet('Darey')); // Output: Hello, Darey!

for (let i = 1; i <= 5; i++) {
    console.log(i); // Prints numbers 1 to 5
}

let count = 1;
while (count <= 3) {
    console.log(count);
    count++;
}

const colors = ['red', 'blue', 'green'];
for (const color of colors) {
    console.log(color);
}

let userAge = 18;
if (userAge >= 18) {
    console.log('You are an adult.');
} else {
    console.log('You are not an adult.');
}

const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits[0]); // Output: apple

const car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020,
};
console.log(car.brand); // Output: Toyota


const greet = (name) => `Hello, ${name}!`;
console.log(greet('Alice')); // Output: Hello, Alice!

const [first, second] = ["red", "blue", "green"];
console.log(first); // Output: red

const { brand, model } = { brand: "Toyota", model: "Corolla" };
console.log(model); // Output: Corolla

const userName = 'Darey';
console.log(`Welcome, ${userName}!`); // Output: Welcome, Darey!

// Select an element
const heading = document.querySelector("h1"); // Change its content
heading.textContent = "New Heading"; // Change its style
heading.style.color = "blue";

// Select a button
const button = document.querySelector('button');

// Add a click event listener
button.addEventListener('click', () => {
    alert('Button was clicked!');
});

let element = document.getElementById('myId');
console.log(element.textContent);

let elements = document.getElementsByClassName('myClass');
console.log(elements[0].textContent); // Access the first element

let paragraphs = document.getElementsByTagName('p');
console.log(paragraphs[0].textContent);

let singleElement = document.querySelector('.myClass');
console.log(singleElement.textContent);

let SelectElements = document.querySelectorAll('div');
elements.forEach((el) => console.log(el.textContent));

let parent = document.querySelector('.parent');
let newElement = document.createElement('p');
newElement.textContent = 'Inserted before!';
let referenceElement = parent.firstElementChild;
parent.insertBefore(newElement, referenceElement);
