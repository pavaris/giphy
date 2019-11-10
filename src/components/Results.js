import React from 'react';
import { connect } from 'react-redux';
import GiphyItem from './GiphyItem';

class Results extends React.Component{
  render(){
    let compClassName = this.props.search ? 'results active' : 'results';

    return(
      <section
        className={compClassName}
        >
        <h2>Results for <span>{this.props.query}</span></h2>
        <div className="giphy-item">
          a gif!

        </div>
      </section>
    )
  }
}




function mapStateToProps(state) {
  return {
    query: state.query,
    search: state.currentlySearching
  };
}



// export default Form;
export default connect(mapStateToProps)(Results);
