import { createStore } from 'redux';
import { getLocalStorage, initLocalStorage } from './utils/localstorage';

console.log('store!');



const initialState = {
  currentlySearching: false,
  query: '',
  favorited: []
};

if(getLocalStorage() !== null){
  initialState.favorited = getLocalStorage();
}


function reducer(state = initialState, action) {
  switch(action.type) {
    case "SEARCHING":
      return{
        currentlySearching: true,
        query: state.query,
        favorited: state.favorited
      };
    case "QUERY":
      return{
        currentlySearching: true,
        query: action.query,
        favorited: state.favorited
      };

    case "FAVORITED":
      return{
        currentlySearching: state.currentlySearching,
        query: state.query,
        favorited: [...state.favorited, action.gif]
      };

    case "UNFAVORITED":
    console.log('UNFAVORITED');
    console.log(action.gif);
      return{
        currentlySearching: state.currentlySearching,
        query: state.query,
        favorited: state.favorited.filter(x => x.id !== action.gif.id)
      };

    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
