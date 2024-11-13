'use strict';
const target= document.querySelector('#target');
const numparti= parseInt(prompt('Tell num of participants: '))
let participants=[]
for (let i=0; i<numparti;i++){
    let name= prompt(`Enter the name of participant ${i+1}: `);
    participants.push(name);
}
participants.sort();
let result= '';
for (let i=0; i<participants.length; i++) {
    result+= `<li>${participants[i]}</li>`;
}
target.innerHTML = result;