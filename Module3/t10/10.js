
const form = document.querySelector('form');
const firstname = document.querySelector('input[name=fName]');
const lastname = document.querySelector('input[name=lName]');
const p = document.querySelector('p');

form.addEventListener('submit', function(evt) {
    evt.preventDefault();
    p.innerText = `Your name is ${firstname.value} ${lastname.value}`;
});