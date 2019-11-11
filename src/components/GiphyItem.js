import React from 'react';
import PropTypes from 'prop-types';
import Heart from './../icons/Heart.js'

class GiphyItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      favorited: false,
    }
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      favorited: !this.state.favorited,
    })
  }

  render(){
    let compClassName = this.state.favorited ? 'giphy-item active' : 'giphy-item';
    return(
      <li className={compClassName}>
        <a href="#" onClick={ this.handleClick }  aria-hidden="true">
          <img src={this.props.imgUrl} alt={this.props.title}/>
          <div className="svg-holder">
            <Heart />
          </div>
        </a>

      </li>
    )
  }
}


export default GiphyItem;



// // TODO: import list of liked gifs, show liked status if liked
