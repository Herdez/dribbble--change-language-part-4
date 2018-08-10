import React, { Component } from 'react';

class Cover extends Component {
  render() {
    return (
      <figure>
        <img src={ this.props.image } alt='' />
      </figure>
    );
  }
}

export default Cover;
