'use strict';
const target = document.querySelector('#target');
const num1= parseInt(prompt('Enter first number'));
const num2= parseInt(prompt('Enter second number'));
const num3= parseInt(prompt('Enter third number'));

const sum= num1+num2+num3;
const product= num1*num2*num3;
const average= sum/3;
const result = `Sum: ${sum}, Product: ${product}, Average: ${average}`;
target.innerHTML = result;