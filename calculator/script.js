'use strict';

const numberButtons = document.querySelectorAll('.buttons');
const display = document.querySelector('.input-key');
const clearButton = document.querySelector('.delete');
const equalButton = document.querySelector('.equal-to');
const operatorButtons = document.querySelectorAll('.math-operator');

const add = document.querySelector('.add');
const subtract = document.querySelector('.subtract');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');


add.addEventListener('click', () => {
    display.textContent += '+';
});

subtract.addEventListener('click', () => {
    display.textContent += '-';
});

multiply.addEventListener('click', () => {
    display.textContent += '*';
});

divide.addEventListener('click', () => {
    display.textContent += '/';
});

numberButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        display.textContent += e.target.textContent;
    })
});

equalButton.addEventListener('click', () => {
    try {
        display.textContent = math.evaluate(display.textContent);
    } catch (e) {
        display.textContent = ' ';
    }
});

clearButton.addEventListener('click', () => {
    display.textContent = ' ';
})