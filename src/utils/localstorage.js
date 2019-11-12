export const updateLocalStorage = (favorited) => {
  localStorage.setItem('favoritedGifs', favorited);
}

export const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem('favoritedGifs'));
}

export const initLocalStorage = () => {
  localStorage.setItem('favoritedGifs', []);
}


// TODO: store api key in env var
