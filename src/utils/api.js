export const fetchGifs = (query, offset, interval) => {
  const endpoint = window.encodeURI(`https://api.giphy.com/v1/gifs/search?api_key=GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw&limit=${interval}&q=${query}&offset=${offset}`)

  return fetch(endpoint)
        .then((res) => res.json())
        .then((data) => {
          if(!data.data){
            throw new Error(data.message)
          }
          return data
        })
}
