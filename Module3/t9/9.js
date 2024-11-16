'use strict';
document.querySelector('#start').addEventListener('click',function(){
    const calculation = document.querySelector('#calculation').value;
    let result;

    if (calculation.includes ('+')) {
        const nums= calculation.split('+');
        result=parseInt(nums[0]) + parseInt(nums[1]);
    } else if (calculation.includes ('-')) {
        const nums = calculation.split('-');
        result = parseInt(nums[0]) - parseInt(nums[1]);
    } else if (calculation.includes ('*')) {
        const nums = calculation.split('*');
        result = parseInt(nums[0]) * parseInt(nums[1]);
    } else if (calculation.includes ('/')) {
        const nums = calculation.split('/');
        result = parseInt(nums[0]) / parseInt(nums[1]);
    } else {
        result='Invalid input.';
    }
    document.querySelector('#result').innerText= `Result: ${result}`;
});