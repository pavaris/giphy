import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searching, query } from './../actions';



class Form extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      query: '',
    }

  }



  /**
    * Form submission handler
    *
  */
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
  }


  /**
    * Input change handler
    * sets component's "query" state
  */
  handleChange = (event) => {
    console.log(this.props.search);
    console.log(this.props.queryString);
    this.props.searching();
    this.props.query(event.target.value);
    this.setState({
      query: event.target.value,
    });
  }



  render(){
    return (
        <form onSubmit={this.handleSubmit}>

          <input
             type='text'
             id='query'
             className='input-light'
             placeholder='Search'
             autoComplete='off'
             value={this.state.query}
             onChange={this.handleChange}
           />


         <button
           type="submit"
           >
           Submit
         </button>
        </form>

    );
  }
}


function mapStateToProps(state) {
  return {
    queryString: state.query,
    search: state.currentlySearching
  };
}

const mapDispatchToProps = {
  searching,
  query
};

// export default Form;
export default connect(mapStateToProps, mapDispatchToProps)(Form);
