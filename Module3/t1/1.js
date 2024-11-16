'use strict';
const targelement= document.querySelector('#target');
targelement.innerHTML= `
<li>First item</li>
<li>Second item</li>
<li>Third item</li>`;
targelement.setAttribute('class','my-list');