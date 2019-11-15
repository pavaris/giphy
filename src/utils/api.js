export const fetchGifs = (query, offset, interval) => {
  const endpoint = window.encodeURI(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=${interval}&q=${query}&offset=${offset}`);

  return fetch(endpoint)
        .then((res) => res.json())
        .then((data) => {
          if(!data.data){
            throw new Error(data.message)
          }
          return data
        })

}

export const fetchRandomGif = (query, offset, interval) => {
  const endpoint = window.encodeURI(`https://api.giphy.com/v1/gifs/translate?api_key=${process.env.REACT_APP_GIPHY_KEY}&s=${query}&weirdness=10`);

  return fetch(endpoint)
        .then((res) => res.json())
        .then((data) => {
          if(!data.data){
            throw new Error(data.message)
          }
          return data
        })

}


// TODO: store api key in env var
