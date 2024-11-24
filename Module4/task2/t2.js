'use strict';
document.querySelector('#search-form').addEventListener('submit', async function(evt){
    evt.preventDefault()
    const query= document.querySelector('#query').value;
    const url= `https://api.tvmaze.com/search/shows?q=${query}`

    try {
        const response= await fetch (url);
        if (!response.ok) throw new Error ('Failed to fetch data!');

        const data= await response.json();
        console.log(data);
    } catch(error) {
        console.error('Error in fetching data:', error);
    }
});