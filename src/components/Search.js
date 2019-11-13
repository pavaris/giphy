import React from 'react';
import { useEffect }  from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import Form from './Form';
import Results from './Results';
import { searching, query } from './../actions';

const Search = (props) => {

  useEffect(() => {
    return () => {
      console.log('what');
      props.query('');
    }
  }, [])

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

const mapDispatchToProps = {
  searching,
  query
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
