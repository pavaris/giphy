import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searching } from './../actions/searching';
import { query  } from './../actions/query';
import { DebounceInput } from 'react-debounce-input';

class Form extends React.Component {

  state = {
    query: '',
  }

  /**
    * Form submission handler
    *
  */
  handleSubmit = (event) => {
    event.preventDefault();
    this.state.query.length ? this.props.searching(true) : this.props.searching(false);
    this.props.query(this.state.query);
  }


  /**
    * Input change handler
    * sets component's "query" state
  */
  handleChange = (event) => {

    event.target.value.length ? this.props.searching(true) : this.props.searching(false);

    this.props.query(event.target.value);
    this.setState({
      query: event.target.value,
    });
  }



  render(){
    return (
        <form onSubmit={this.handleSubmit}>

          <DebounceInput
            debounceTimeout={200}
            onChange={this.handleChange}
            value={this.props.queryString}
            />

         <button
           type="submit"
           className='button'
           >
           Let's Go
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
    search: state.searching
  };
}

const mapDispatchToProps = {
  searching,
  query
};

// export default Form;
export default connect(mapStateToProps, mapDispatchToProps)(Form);
