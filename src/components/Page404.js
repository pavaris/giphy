import React from 'react';
import { fetchRandomGif } from '../utils/api';
import { Link } from 'react-router-dom';

class Page404 extends React.Component{
  state = {
    imgURL: '',
    alt: ''
  }

  componentDidMount(){
    fetchRandomGif('confused', 0, 1)
      .then((response) => {
        this.setState({
          imgURL: response.data.images.fixed_height_downsampled.url,
          alt: response.data.title
        })
      });
  }

  render(){
    return(
      <section id="page404">
        <div className="content-margins">
          <div className="section-header">
            <h1>Hey! Where are you going?</h1>
          </div>
          <img src={this.state.imgURL} alt={this.state.alt}/>

          <div className="not-found-content">
            <Link to='/' className="button">Let's get back to searching</Link>
          </div>
        </div>
      </section>
    )
  }

}

export default Page404;
