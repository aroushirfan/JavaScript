'use strict';
const trigger= document.querySelector('#trigger');
const targetimage= document.querySelector('#target');

trigger.addEventListener('mouseover',function (evt){
    targetimage.src= 'img/picB.jpg';
});
trigger.addEventListener('mouseout',function (evt){
    targetimage.src= 'img/picA.jpg';
});
