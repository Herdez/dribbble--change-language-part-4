import React, { Component } from 'react';

import './Stats.css';

class Stats extends Component {
  constructor(props) {
    super();

    this.state = {
      likes: props.l,
      liked: false
    };
  }

  incrementLikes = (e) => {
    e.preventDefault();

    if (this.state.liked === false) {
      this.setState({
        likes: parseInt(this.state.likes) + 1,
        liked: true
      });
    } else {
      this.setState({
        likes: parseInt(this.state.likes) - 1,
        liked: false
      });
    }
  }

  render() {
    return (
      <div className='shots__stats'>
        <ul className='shots__list'>
          <li><i className='fa fa-eye' />{ this.props.v }</li>
          <li><i className='fa fa-comment' />{ this.props.c }</li>
          <li>
            <a href='#'
              className={ (this.state.liked === true) ? 'liked' : '' }
              onClick={ this.incrementLikes }
            >
              <i className='fa fa-heart' />{ this.state.likes }
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Stats;
