

const apikey = 'dTVOOHuMdTNXXlix9ZTOcxzcOLneLtxX'
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`)

peticion

// Esto se conoce como promesas en cadenas
    .then (resp => resp.json())
    .then(( { data } ) => {
       //ver esta parte 
       const {url}= data.images.original
        
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

    })
.catch(console.warn);
    

