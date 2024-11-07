'use strict';
const target = document.querySelector('#target');
const num= parseInt(prompt('Enter a number: '));
let isPrime= true;
if (num<2){
    isPrime=false;
}
else{
    for(let i=2; i<num; i++){
        if (num%i===0){
            isPrime=false;
            break;
        }
    }
}
let result;
if (isPrime){
    result=`${num} is a prime number.`;
}
else{
    result=`${num} is not a prime number.`;
}
target.innerHTML = result;