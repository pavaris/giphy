import React from 'react';
import { useEffect }  from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import Form from './Form';
import Results from './Results';
import { searching } from './../actions/searching';
import {  query } from './../actions/query';

const Search = (props) => {

  let compClassName = props.search ? 'active' : '';


  return(
    <div id="search-container" className={compClassName}>
      <div className="content-margins">

      <section className="search-form">
        <div className="search-form-inner">
            {!props.queryString.length &&
              <h1>Search for a Gif</h1>
            }
            {props.queryString.length > 0 &&
              <h1>Results for <em>{props.queryString}</em></h1>
            }
          <Form />
        </div>
      </section>
        {props.queryString.length > 0 &&
          <section className='results'>
            <Results />
          </section>
        }

      </div>
    </div>
  )
}

Search.propTypes = {
  search: PropTypes.bool.isRequired,
  queryString: PropTypes.string.isRequired
}


function mapStateToProps(state) {
  return {
    queryString: state.query,
    search: state.searching
  };
}

const mapDispatchToProps = {
  searching,
  query
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
