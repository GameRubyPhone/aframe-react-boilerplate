import 'aframe';
import 'babel-polyfill';
import { Animation, Entity, Scene } from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Camera from './components/Camera.jsx';
import Cursor from './components/Cursor.jsx';
import Sky from './components/Sky.jsx';
import Ground from './components/Ground.jsx';

const skyImage = require('../../dist/images/sky.jpg');
const groundImage = require('../../dist/images/ground.png');

class BoilerplateScene extends React.Component {
  constructor(props) {
    super(props);
    this.changeColor = this.changeColor.bind(this);
    this.state = {
      color: 'red',
    };
  }

  changeColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)],
    });
  }

  render() {
    return (
      <Scene>
        { /* Camera */ }
        <Camera position="0 1.764 0"><Cursor /></Camera>

        <Sky id="sky" name="sky" src={skyImage} />
        <Ground src={groundImage} />

        { /* lights */ }
        <Entity light={{ type: 'ambient', color: '#BBB' }} />
        <Entity
          light={{ type: 'point', intensity: 0.4, distance: 100, color: '#CCC' }}
          position={[0, 30, 0]}
        />
        <Entity
          light={{ type: 'point', intensity: 0.4, distance: 50, color: '#CCC' }}
          position={[3, 10, -10]}
        />

      { /* objects */ }

        <Entity
          geometry="primitive: box"
          material={{ color: this.state.color }}
          onClick={this.changeColor}
          position="0 2 -5"
        >
          <Animation attribute="rotation" dur="5000" repeat="indefinite" to="0 360 360" />
        </Entity>

      </Scene>
    );
  }
}

ReactDOM.render(<BoilerplateScene />, document.querySelector('.scene-container'));
