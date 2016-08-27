import { Entity } from 'aframe-react';
import React, { Component } from 'react';

// eslint-disable-next-line no-unused-vars
class Ground extends Component {
  render() {
    const { width, depth, src } = this.props;
    const material = {
      repeat: '75 75',
      src: `url(${src})`,
    };

    return (
      <Entity
        geometry={{ primitive: 'plane', width: 75, height: 75 }}
        material={material}
        rotation="-90 0 0"
      />
    );
  }
}

export default Ground;
