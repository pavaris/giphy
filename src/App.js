import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Nav from './components/Nav';
import Search from './components/Search';
import Favorites from './components/Favorites';

const initialState = {
  currentlySearching: false,
  query: ''
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case "SEARCHING":
      return{
        currentlySearching: true,
        query: state.query
      };
    case "QUERY":
      return{
        currentlySearching: true,
        query: action.query
      };

    default:
      return state;
  }
}

const store = createStore(reducer);


const handleChange = () => {
  // console.log(store.getState());
  // if(store.getState().search){
  //   console.log('begin searching!');
  //   unsubscribe();
  // }
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
