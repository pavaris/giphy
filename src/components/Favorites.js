import React from 'react';
import { connect } from 'react-redux';
import GiphyItem from './GiphyItem';
import { fetchRandomGif } from '../utils/api';
import { Link } from 'react-router-dom';



class Favorites extends React.Component{
  state = {
    imgURL: '',
    alt: ''
  }

  componentDidMount(){
    fetchRandomGif('sad', 0, 1)
      .then((response) => {
        this.setState({
          imgURL: response.data.images.fixed_height_downsampled.url,
          alt: response.data.title
        })
      });
  }

  render(){
    return(
      <div id="favorites">
        <div className="content-margins">
          <h1>Your favorited Gifs</h1>
          {this.props.favoritedArr.length ? (
            <ul className="results-feed">
              {this.props.favoritedArr.map((x, i) =>
                <GiphyItem
                  key={x.id}
                  giphyObj={x}
                  liked={true}
                  index={i}
                  />
              )}
            </ul>
          ) : (
            <div className="no-favorites">
              <h2>You don't have any favorite gifs :(</h2>
              <img src={this.state.imgURL} alt={this.state.alt}/>
                <Link to='/' className="button">Let's cheer you up</Link>
            </div>
          )}

        </div>
      </div>
    )
  }
}




const mapStateToProps = (state) => {
  return {
    favoritedArr: state.favorited
  };
}

export default connect(mapStateToProps)(Favorites);
