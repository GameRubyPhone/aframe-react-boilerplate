import { Entity } from 'aframe-react';
import React from 'react';

// eslint-disable-next-line no-unused-vars
export default props => (
  <Entity
    geometry={{ primitive: 'sphere', radius: 100 }}
    material={{ color: '#73CFF0', shader: 'flat' }}
    scale="1 1 -1"
  />
);
