'use strict';
const target= document.querySelector('#target');
let dogs=[];
for (let i=0; i<6;i++){
    let name= prompt(`Enter the name of dog ${i+1}: `);
    dogs.push(name);
}
dogs.sort().reverse();
let result= '';
for (let i=0; i<dogs.length; i++) {
    result+= `<li>${dogs[i]}</li>`;
}
target.innerHTML = result;