import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GiphyItem from './GiphyItem';
import { fetchGifs } from '../utils/api';



class Results extends React.Component{


  constructor(props){
    super(props);
    this.state = {
      results: {
        images: []
      },
      offset: 0,
      interval: 20,
      loading: false
    }
  }

  resetState = () => {
    this.setState({
      results: {
        images: []
      },
      loading: true
    })
  }




  componentDidUpdate(prevProps, prevState){
    if(prevProps.queryString !== this.props.queryString){
      console.log(prevProps.queryString,  this.props.queryString);
      fetchGifs(this.props.queryString, 0, this.state.interval)
        .then((response) => {
          this.setState({
            results:{
              images: response.data
            },
            offset: 0,
            loading: false
          });
        }
      );
    }
  }



  /**
    * Load More Gifs
    * pulls in more gifs based on interval number and offset value
    * excludes duplicate gifs based on giphy id
  */
  loadMore(){
    fetchGifs(this.props.queryString, this.state.offset + this.state.interval, this.state.interval)
      .then((response) => {


        let concatedGifs = [...this.state.results.images, ...response.data];

        //remove duplicate gifs
        let uniqueGifs = concatedGifs.filter((elem, index, a) => a.findIndex(t => (t.id === elem.id)) === index);


        this.setState({
          results:{
            images: uniqueGifs
          },
          offset: this.state.offset + this.state.interval,
          loading: false
        });
      }
    );
  }


  render(){

    let compClassName = this.props.search ? 'results active' : 'results';


    /**
      * if queryString is not empty, show search results feed
      * else ask user to search
    */
    if (this.props.queryString.length > 0){
      return(
        <div>
          <h2>Results for <span>{this.props.queryString}</span></h2>
          <ul className="results-feed">
            {this.state.results.images.map((x) =>
              <GiphyItem
                key={x.id}
                giphyObj={x}
                liked={this.props.favoritedArr.filter(e => e.id === x.id).length > 0}
                />
            )}
          </ul>
          <button
            onClick={e => {
              this.loadMore();
            }}
          >Load More</button>
        </div>
      )
    }else{
      return(
        <div>
          <h2>Search please!</h2>
        </div>
      )
    }

  }
}


Results.propTypes = {
  queryString: PropTypes.string.isRequired,
  search: PropTypes.bool.isRequired,
}


const mapStateToProps = (state) => {
  return {
    queryString: state.query,
    search: state.currentlySearching,
    favoritedArr: state.favorited
  };
}



// export default Form;
export default connect(mapStateToProps)(Results);
