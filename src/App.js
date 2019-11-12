import React from 'react';

import { Provider } from 'react-redux';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Nav from './components/Nav';
import Search from './components/Search';
import Favorites from './components/Favorites';

import store from './store';
import { updateLocalStorage } from './utils/localstorage'



/**
  * Store subscription
  * updates localStorage with favorited gifs array
*/
const handleChange = () => {
  console.log(store.getState().favorited);
  updateLocalStorage(JSON.stringify(store.getState().favorited));
}
const unsubscribe = store.subscribe(handleChange)


class App extends React.Component{
  render(){
    return (

      <Router>
        <section className="App">

          <header>
            <Nav />
          </header>

          <Provider store={store}>
            <Route
              exact path="/" component={Search}
              />
            <Route
              path="/favorites" component={Favorites}
              />
          </Provider>

        </section>
      </Router>
    )
  }
}


export default App;
