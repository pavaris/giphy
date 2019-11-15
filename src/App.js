import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Nav from './components/Nav';
import Search from './components/Search';
import Favorites from './components/Favorites';
import Page404 from './components/Page404';


class App extends React.Component{
  render(){
    return (

      <Router>
        <section className="App">

          <header>
            <Nav />
          </header>

          <Switch>
            <Route
              exact path="/" component={Search}
              />
            <Route
              path="/favorites" component={Favorites}
              />
            <Route component={Page404}/>
          </Switch>
        
        </section>
      </Router>
    )
  }
}


export default App;
