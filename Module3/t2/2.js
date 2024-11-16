'use strict';
const targelement= document.querySelector('#target');

const item1= document.createElement('li');
item1.innerText='First item';
const item2= document.createElement('li');
item2.innerText='Second item';
const item3= document.createElement('li');
item3.innerText='Third item';

targelement.appendChild(item1);
targelement.appendChild(item2);
targelement.appendChild(item3);

item2.setAttribute('class','my-item');