import React from 'react';

import { Provider } from 'react-redux';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Nav from './components/Nav';
import Search from './components/Search';
import Favorites from './components/Favorites';
import Page404 from './components/Page404';

import store from './store';
import { updateLocalStorage } from './utils/localstorage'



/**
  * Store subscription
  * updates localStorage with favorited gifs array
*/
const handleChange = () => {
  if(store.getState().favorited.length > 0){
    updateLocalStorage(JSON.stringify(store.getState().favorited));
  }

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
            <Switch>
              <Route
                exact path="/" component={Search}
                />
              <Route
                path="/favorites" component={Favorites}
                />
              <Route component={Page404}/>
            </Switch>
          </Provider>

        </section>
      </Router>
    )
  }
}


export default App;
