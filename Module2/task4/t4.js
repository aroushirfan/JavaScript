'use strict';
const target= document.querySelector('#target');
let numbers=[];
let num;
for (let i=0; ;i++){
    num=parseInt(prompt('Enter a number or zero to stop: '));
    if (num===0) break;
    numbers.push(num);
}
numbers.sort((a,b) => b-a);
let result= 'Numbers from largest to smallest: ';
for(let i=0; i<numbers.length; i++){
    result += `${numbers[i]} `;
}
target.innerHTML = result;