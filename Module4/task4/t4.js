'use strict';
document.querySelector('#search-form').addEventListener('submit', async function(evt){
    evt.preventDefault()
    const query= document.querySelector('#query').value;
    const url= `https://api.chucknorris.io/jokes/search?query=${query}`

    try {
        const response= await fetch (url);
        if (!response.ok) throw new Error ('Failed to fetch data!');

        const data= await response.json();
        const resultsSection= document.querySelector('#results');
        resultsSection.innerHTML= '';

        for (let i=0; i<data.result.length; i++) {
            const joke= data.result[i];
            const article= document.createElement('article');
            const jokePara= document.createElement('p');
            jokePara.innerHTML= joke.value;
            article.appendChild(jokePara);
            resultsSection.appendChild(article);
        }
    } catch(error) {
        console.error('Error in fetching data:', error);
    }
});