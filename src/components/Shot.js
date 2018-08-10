import React, { Component } from 'react';

import Cover from './Cover';
import Stats from './Stats/Stats';

class Shot extends Component {
  render() {
    return (
      <article className='shot'>
        <Cover image={this.props.image} />
        <Stats v={ this.props.views } c={ this.props.comments } l={ this.props.likes } />
      </article>
    );
  }
}

export default Shot;
