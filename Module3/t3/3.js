'use strict';
const names = ['John', 'Paul', 'Jones'];
const targelement= document.querySelector('#target');

let htmlcontent= '';

for (let i=0; i<names.length; i++) {
    htmlcontent += `<li>${names[i]}</li>`;
}
targelement.innerHTML= htmlcontent;