'use strict';
document.querySelector('#start').addEventListener('click',function(){
    const num1=parseFloat(document.getElementById('num1').value);
    const num2=parseFloat(document.getElementById('num2').value);
    const operation=document.getElementById('operation').value;

    let result;
    switch (operation) {
        case 'add':
            result= num1 + num2;
            break;
        case 'subtract':
            result= num1 - num2;
            break;
        case 'multiply':
            result= num1 * num2;
            break;
        case 'divide':
            result= num1 / num2;
            break;
        default:
            result= 'Invalid operation';
    }
    document.querySelector('#result').innerText= `Result: ${result}`;
});