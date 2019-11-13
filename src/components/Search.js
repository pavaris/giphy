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

  let compClassName = props.search ? 'active' : '';


  return(
    <div id="search-container" className={compClassName}>
      <div className="content-margins">
        <Form />
        {props.queryString.length > 0  &&
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
    search: state.currentlySearching
  };
}

const mapDispatchToProps = {
  searching,
  query
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
