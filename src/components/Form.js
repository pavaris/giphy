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
    this.props.query(event.target.value);
    this.setState({
      query: event.target.value,
    });

  }


  /**
    * Input change handler
    * sets component's "query" state
  */
  handleChange = (event) => {
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
             type='search'
             id='query'
             className='input-light'
             placeholder='Search'
             autoComplete='off'
             value={this.props.queryString}
             onChange={this.handleChange}
           />


         <button
           type="submit"
           onClick ={this.handleSubmit}
           >
           Submit
         </button>
        </form>

    );
  }
}

Form.propTypes = {
  queryString: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => {
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
