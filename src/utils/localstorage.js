export const updateLocalStorage = (favorited) => {
  localStorage.setItem('favoritedGifs', favorited);
}

/**
  * gets favorited gifs from localStorage
  * goes through validation, if not valid, returns null
*/
export const getLocalStorage = () => {
  let favoritedGifs = JSON.parse(localStorage.getItem('favoritedGifs'));
  if(favoritedGifs !== null){
    if(favoritedGifs.length){
      return localStorageValidation(favoritedGifs).length ? localStorageValidation(favoritedGifs) : null ;
    }else{
      return null;
    }
  }else{
    return null;
  }

}

/**
  * tests to see if localStorage has correct obj structure
  * tests for id and images.fixed_width_downsampled properties in each element
*/
const localStorageValidation = (gifArr) => {
  let arr = gifArr.filter(x =>{
    return ((x || {}).images || {}).fixed_width_downsampled !== undefined && (gifArr[0] || {}).id !== undefined
  });
  return arr;

}

/**
  * removes localStorage 'favoritedGifs' key
*/
export const initLocalStorage = () => {
  localStorage.removeItem('favoritedGifs');
}
