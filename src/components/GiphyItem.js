import React from 'react';
import PropTypes from 'prop-types';
import Heart from './../assets/Heart.js'
import { connect } from 'react-redux';
import { favorited } from './../actions/favorited';


class GiphyItem extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      liked: false,
      clickedOn: false
    }
  }


  /**
    * Click handler
    * sets component's 'liked' and 'clickedOn'
    * if liked, adds current gif to favorited array
    * else, removes current gif from favoried array
    * dispatches new array to favorited
  */
  handleClick = () => {
    this.setState({
      liked: !this.state.liked,
    });
    if(!this.state.liked === true){
      this.props.favorited([...this.props.favoritedArr, this.props.giphyObj]);
    }else{
      this.props.favorited(this.props.favoritedArr.filter(x => x.id !== this.props.giphyObj.id));
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
    let styles = {animationDelay: ((this.props.index % 20) * 100) + 'ms' }


    return(
      <li className={compClassName} style={styles} index={this.props.index}>
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
  liked: PropTypes.bool.isRequired,
  favoritedArr: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => {
  return {
    favoritedArr: state.favorited
  };
}

const mapDispatchToProps = {
  favorited,
};


export default connect(mapStateToProps, mapDispatchToProps)(GiphyItem);
