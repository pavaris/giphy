import React from 'react';
import PropTypes from 'prop-types';


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
        <a href="#" onClick={ this.handleClick }>
          <img src={this.props.imgUrl} alt={this.props.title}/>
        </a>

      </li>
    )
  }
}


export default GiphyItem;



// // TODO: import list of liked gifs, show liked status if liked
