'use strict';
const target = document.querySelector('#target');
const squareroot= confirm('Should I calculate the square root?');
let result;
if (squareroot){
    const num= parseInt(prompt('Enter a number: '));
    if (num<0) {
        result='The square root of a negative number is not defined.'
    }
    else{
        const sqrt= Math.sqrt(num)
        result= `The square root of ${num} is ${sqrt}.`
    }
}
else{
    result='The square root is not calculated.'
}
target.innerHTML = result;