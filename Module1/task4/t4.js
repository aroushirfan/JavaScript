'use strict';
const target = document.querySelector('#target');
const name=prompt("Enter the student's name: ")
const house= Math.floor(Math.random()*4)
let houseName;
switch (house){
    case 0:
        houseName='Gryffindor';
        break;
    case 1:
        houseName='Slytherin';
        break;
    case 2:
        houseName='Hufflepuff';
        break;
    case 3:
        houseName='Ravenclaw';
        break;
}
const result = `${name}, you are ${houseName}.`;
target.innerHTML = result;