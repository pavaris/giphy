import React from 'react';
import { connect } from 'react-redux';
import GiphyItem from './GiphyItem';

const Favorites = (props) => {
  return(
    <div id="favorites">
      <div className="content-margins">
        <h1>Your favorited Gifs</h1>
          <ul className="results-feed">
            {props.favoritedArr.map((x) =>
              <GiphyItem
                key={x.id}
                giphyObj={x}
                liked={true}
                />
            )}
          </ul>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    favoritedArr: state.favorited
  };
}

export default connect(mapStateToProps)(Favorites);
