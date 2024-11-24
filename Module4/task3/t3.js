'use strict';
'use strict';
async function fetchJoke(){
    const url= `https://api.chucknorris.io/jokes/random`

    try {
        const response= await fetch (url);
        if (!response.ok) throw new Error ('Failed to fetch data!');

        const data= await response.json();
        console.log(data.value);
    } catch(error) {
        console.error('Error in fetching data:', error);
    }
}
fetchJoke();