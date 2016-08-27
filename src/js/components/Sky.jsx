import { Entity } from 'aframe-react';
import React, { Component } from 'react';

// eslint-disable-next-line no-unused-vars
class Sky extends Component {
  render() {
    const { id, name, src } = this.props;

    return (
      <Entity
        id={id}
        name={name}
        geometry={{ primitive: 'sphere', radius: 5000 }}
        material={{ src: `url(${src})` }}
        rotation="0 -130 0"
        scale="1 1 -1"
      />
    );
  }
}


export default Sky;
