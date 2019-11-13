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



  componentDidUpdate = (prevProps, prevState) => {
    if(prevProps.queryString !== this.props.queryString){
      this.setState({
        loading: true
      });
      console.log('loading');
      fetchGifs(this.props.queryString, 0, this.state.interval)
        .then((response) => {
          console.log('no more loading');
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
    * adds scrolling listener, calls handleScroll
  */
  componentDidMount = () =>{
    if(this.props.queryString.length > 0){
      this.setState({
        loading: true
      });
      console.log('loading');
      fetchGifs(this.props.queryString, 0, this.state.interval)
        .then((response) => {
          console.log('no more loading');
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
    * Load More Gifs
    * pulls in more gifs based on interval number and offset value
    * excludes duplicate gifs based on giphy id
  */
  loadMore = () => {
    this.setState({
      loading: true
    })
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


  /**
    * if window is scrolled to the last elemnt in the results feed, load more gif
  */
  handleScroll = () => {
    if(this.props.search){
      console.log('scrolly');
      var lastLi = document.querySelector("ul.results-feed > li:last-child");
      var lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;
      var pageOffset = window.pageYOffset + window.innerHeight;
      if (pageOffset > lastLiOffset - 100) {
        this.loadMore();
      }
    }

  }

  render(){
      let loading = this.state.loading;
      let noResults = !loading && this.state.results.images.length === 0;

      return(
          <div>
            <h1>Results for <span>{this.props.queryString}</span></h1>
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
              <div>loading...</div>
            }
            {noResults &&
              <h3>We couldn't find anything. Try again maybe?</h3>
            }


        </div>
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
    search: state.currentlySearching,
    favoritedArr: state.favorited
  };
}



// export default Form;
export default connect(mapStateToProps)(Results);
