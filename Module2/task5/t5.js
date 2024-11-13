'use strict';
const target= document.querySelector('#target');
let numbers= [];
let num;
let duplicatefound= false;
while(!duplicatefound){
    num= parseInt(prompt('Enter a number: '));
    if (numbers.includes(num)) {
        target.innerHTML=('The number has already been given.');
        duplicatefound= true;
    } else{
        numbers.push(num);
    }
}
numbers.sort((a,b) => a-b);
let result = 'Given numbers in ascending order: ';
for (let i=0; i<numbers.length; i++) {
    result+= numbers[i] + ' ';
}
target.innerHTML += `<br>${result}`;