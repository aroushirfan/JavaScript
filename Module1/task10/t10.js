'use strict';
const target = document.querySelector('#target');
const numdie= parseInt(prompt('Enter the num of dice: '))
const desiresum= parseInt(prompt('Enter the desired sum: '))

const trials= 10000;
let successcount=0;
for(let i=0; i<trials; i++){
    let sum=0
    for (let j=0; j<numdie; j++){
        const roll= Math.floor(Math.random()*6)+1;
        sum+=roll;
    }
    if (sum=== desiresum){
        successcount++
    }
}
const probability= (successcount/trials)*100
const result= `Probability to get sum ${desiresum} with ${numdie} is ${probability}%.`
target.innerHTML = result;