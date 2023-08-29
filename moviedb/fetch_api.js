const url = 'https://api.themoviedb.org/3/movie/550?api_key=8fa8fe67b5f6b84aedfe04b2350639db'
const options = {method: 'GET', headers:{accept:'application/json'}}

fetch (url, options)
    .then(res => res.json())
    .then(json =>{
        
        const original_title = json.original_title;
        const overview = json.overview;
        const poster_path = json.poster_path;

        const original_titleElement = document.createElement('h1');
        original_titleElement.textContent = original_title;

        const overviewElement = document.createElement('p');
        overviewElement.textContent = overview;

        const poster_pathElement = document.createElement('img');
        poster_pathElement.src = 'https://image.tmdb.org/t/p/w500' + poster_path;

        document.body.appendChild(original_titleElement);
        document.body.appendChild(overviewElement);
        document.body.appendChild(poster_pathElement);

        
    })

    .catch(err => console.error('error:' + err));





//agregar elementos 