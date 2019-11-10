import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Form from './components/Form';
import Results from './components/Results';

const initialState = {
  currentlySearching: false,
  query: ''
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case "SEARCHING":
      console.log('change to true');
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
  console.log(store.getState());
  // if(store.getState().search){
  //   console.log('begin searching!');
  //   unsubscribe();
  // }
}
const unsubscribe = store.subscribe(handleChange)


class App extends React.Component{
  render(){
    return (
      // <section className="App">
      //   <header className="App-header">
      //     // <Form selected={'what'} />
      //   </header>
      // </section>

      <Provider store={store}>
        <Form />
        <Results />
      </Provider>
    )
  }
}


export default App;
