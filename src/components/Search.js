import React from 'react';
import Form from './Form';
import Results from './Results';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Search = (props) => {
  let compClassName = props.search ? 'results active' : 'results';


  return(
    <div id="search-container">
      <div className="content-margins">
        <Form />
        <section className={compClassName}>
          <Results />
        </section>
      </div>
    </div>
  )
}

Search.propTypes = {
  search: PropTypes.bool.isRequired,
}


function mapStateToProps(state) {
  return {
    queryString: state.query,
    search: state.currentlySearching
  };
}

export default connect(mapStateToProps)(Search);
