import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { getLocalStorage, initLocalStorage } from './utils/localstorage';
import { createStore } from 'redux';
import { updateLocalStorage } from './utils/localstorage'
import reducer from './reducers'
import { Provider } from 'react-redux';


const initialState = {
  searching: false,
  query: '',
  favorited: []
};

/**
  * if getLocalStorage() returns null, initialize localStorage.
  * otherwise set initialState.favorited to localStorage arr.
*/
getLocalStorage() !== null ? initialState.favorited = getLocalStorage() : initLocalStorage();



const store = createStore(reducer, initialState);

/**
  * Store subscription
  * updates localStorage with favorited gifs array
*/
const handleChange = () => {
    updateLocalStorage(JSON.stringify(store.getState().favorited));

}
const unsubscribe = store.subscribe(handleChange)







ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
