import React, { Component } from 'react';

import Shot from './Shot';
import data from '../data/shots';

class Shots extends Component {
  render() {
    return (
      <div className='container'>
        { data.map(function(shot) {
          return <Shot
                  key={ shot.key }
                  image={ shot.img }
                  views={ shot.stats[0] }
                  comments={ shot.stats[1] }
                  likes={ shot.stats[2] } />
        }) }
      </div>
    );
  }
}

export default Shots;
