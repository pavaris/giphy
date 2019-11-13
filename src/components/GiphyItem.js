import React from 'react';
import PropTypes from 'prop-types';
import Heart from './../icons/Heart.js'
import { connect } from 'react-redux';
import { favorited, unfavorited } from './../actions';


class GiphyItem extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      liked: false
    }
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      liked: !this.state.liked,
    });
    if(!this.state.liked === true){
      console.log('like');
      this.props.favorited(this.props.giphyObj)
    }else{
      console.log('unlike');
      this.props.unfavorited(this.props.giphyObj);
    }
  }


  componentDidMount(){
    if(this.props.liked === true){
      this.setState({
        liked: true
      });
    }
  }


  render(){
    let compClassName = this.state.liked ? 'giphy-item active' : 'giphy-item';
    let giphyObj = this.props.giphyObj;
    return(
      <li className={compClassName}>
        <button onClick={ this.handleClick } >
          <img src={giphyObj.images.fixed_width_downsampled.url} alt={giphyObj.title}/>
          <div className="svg-holder">
            <Heart />
          </div>
        </button>

      </li>
    )
  }
}

GiphyItem.propTypes = {
  giphyObj: PropTypes.object.isRequired,
  liked: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => {
  return {
    favoritedArr: state.favorited
  };
}

const mapDispatchToProps = {
  favorited,
  unfavorited
};


export default connect(null, mapDispatchToProps)(GiphyItem);

// // TODO: import list of liked gifs, show liked status if liked
