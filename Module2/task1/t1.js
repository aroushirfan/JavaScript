'use strict';
const target= document.querySelector('#target');
let numbers= [];
for (let i=0; i<5; i++){
    let num= parseInt(prompt(`Enter number ${i+1}: `));
    numbers.push(num);
}
let result= ('Numbers in reverse order are: ');
for (let i=numbers.length -1; i>=0; i--){
    result+= `${numbers[i]} `;
}
target.innerHTML= result