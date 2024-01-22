const apiKey = 'XTre6o15g2JltNDK2c0yt2PFDYjwTTIWtRAfi9IL9NE';

const formEl = document.querySelector('.card__search');
const input = document.querySelector('.card__search__text');

let searchResults;

let page = 1;

async function searchImages() {
    
    try{
        const inputVal = input.value;

        const res = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${inputVal}&client_id=${apiKey}`)
        
        if(!res.ok){
            throw new Error(`Network response was not ok: ${res.status}`)
        }
        
        const data = await res.json()
    
        const id = data.results[0].id;
       searchResults = document.createElement('div');
        searchResults.id = id;

        const results = data.results[0];
        
        const image = document.createElement('img');
        image.classList.add('search-result__div__img');
        image.src = results.urls.small;
        image.alt = results.alt_description;
        image.id = id;

        searchResults.append(image);
        

    }catch(error){
        console.error(error);
    }
}

formEl.addEventListener('submit', function (e) {
    e.preventDefault();
    page = 1;
    searchImages();
})

export { searchResults };