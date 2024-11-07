'use strict';
const target = document.querySelector('#target');
const dieroll= parseInt(prompt('Enter the number of dice rolls you want: '))
let sum=0;
for (let i= 0; i<dieroll; i++){
    const roll= Math.floor(Math.random()*6)+1;
    sum+=roll;
}
const result = `The sum of the dice rolls is ${sum}.`;
target.innerHTML = result;