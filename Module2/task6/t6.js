'use strict';
const target= document.querySelector('#target');
function rolldice () {
    return Math.floor(Math.random()*6) +1;
}
let roll= rolldice();
let rolls= [roll];
while (roll !==6) {
    roll= rolldice();
    rolls.push(roll);
}
let result= 'Dice roll results: ';
for (let i=0; i<rolls.length; i++) {
    result += `Roll ${i+1}: ${rolls[i]} `;
}
target.innerHTML += result;