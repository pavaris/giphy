import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GiphyItem from './GiphyItem';
import { fetchGifs } from '../utils/api';



class Results extends React.Component{


  state = {
    results: {
      images: []
    },
    offset: 0,
    interval: 20,
    loading: false
  }


  /**
    * update handler
    * if this is a new query string, set loading true and fetch new gifs
    * sets component results.images state with returned array and sets loading false
  */
  componentDidUpdate = (prevProps, prevState) => {
    if(prevProps.queryString !== this.props.queryString){
      this.setState({
        loading: true
      });
      fetchGifs(this.props.queryString, 0, this.state.interval)
        .then((response) => {
          window.scrollTo(0, 0);
          this.setState({
            results:{
              images: response.data,
            },
            loading: false
          });
        }
      );
    }
  }



  /**
    * if queryString has value, fetch gifs
    * adds scrolling listener to run handleScroll
  */
  componentDidMount = () =>{
    if(this.props.queryString.length){
      this.setState({
        loading: true
      });
      fetchGifs(this.props.queryString, 0, this.state.interval)
        .then((response) => {
          this.setState({
            results:{
              images: response.data,
            },
            loading: false
          });
        }
      );
    }
    window.addEventListener('scroll', this.handleScroll);
  }


    /**
      * removes scrolling listener on unmount
    */
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }


  /**
    * Load More Gifs
    * pulls in more gifs based on interval number and offset value
    * excludes duplicate gifs based on giphy id
  */
  loadMore = () => {

    /** Doesn't run if still loading last query */
    if(!this.state.loading){
      this.setState({
        loading: true
      });

      fetchGifs(this.props.queryString, this.state.offset + this.state.interval, this.state.interval)
        .then((response) => {

          if(response.data.length > 0){
            let concatedGifs = [...this.state.results.images, ...response.data];

            /** remove duplicate gifs */
            let uniqueGifs = concatedGifs.filter((elem, index, a) => a.findIndex(t => (t.id === elem.id)) === index);
            this.setState({
              results:{
                images: uniqueGifs
              },
              offset: this.state.offset + this.state.interval,
              loading: false
            });

          }else{
            this.setState({
              loading: false
            });
          }
        });
    }

  }


  /**
    * if window is scrolled to the last elemnt in the results feed, load more gif
  */
  handleScroll = () => {
    if(this.props.search){
      let lastLi = document.querySelector("ul.results-feed > li:last-child");
      if(lastLi !== null){
        let lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;
        let pageOffset = window.pageYOffset + window.innerHeight;
        if (pageOffset > lastLiOffset - 100) {
          this.loadMore();
        }
      }

    }

  }

  render(){
      let loading = this.state.loading;
      let noResults = !loading && this.state.results.images.length === 0;

      return(
          <section id='results'>

            {this.state.results.images.length > 0 &&

              <div>
                <ul className="results-feed">
                  {this.state.results.images.map((x, i) =>
                    <GiphyItem
                      key={x.id}
                      giphyObj={x}
                      liked={this.props.favoritedArr.filter(e => e.id === x.id).length > 0}
                      index={i}
                      />
                  )}
                </ul>

              </div>
            }

            {loading &&
              <div className='loading-text'>loading</div>
            }
            {noResults &&
              <div className="no-results">
                <h2>We couldn't find anything. <br />Maybe try searching for something different?</h2>
              </div>
            }


        </section>
      )


  }
}


Results.propTypes = {
  queryString: PropTypes.string.isRequired,
  search: PropTypes.bool.isRequired,
  favoritedArr: PropTypes.array.isRequired,
}


const mapStateToProps = (state) => {
  return {
    queryString: state.query,
    search: state.searching,
    favoritedArr: state.favorited
  };
}



// export default Form;
export default connect(mapStateToProps)(Results);
