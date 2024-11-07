'use strict';
const target = document.querySelector('#target');
const startyear = prompt('Enter starting year:');
const endyear = prompt('Enter ending year:');

/*
if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    leap = 'is';
}
 */
for (let i = startyear; i <= endyear; i++) {
    if (i % 4 === 0 && i % 100 !== 0 || i % 400 === 0){
    const result = `<li>${i}</li>`;
    target.innerHTML += result;
    }
}