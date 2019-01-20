import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import * as PIXI from 'pixi.js';

import { connect } from 'react-redux';

import Particle from './Particle';

import { interpolatePoints, scale, randomRange } from 'Utils/Utils';


const GradientGenerator = (start, end) => {
  const calculatedColors = {};

  let RGBStart = PIXI.utils.hex2rgb(start);
  let RGBEnd = PIXI.utils.hex2rgb(end);

  for (let i = 0; i < 100; i++) {
    let percentage = i / 100;

    let [ A_R, A_G, A_B ] = RGBStart;
    let [ B_R, B_G, B_B ] = RGBEnd;

    let thisColor = [
      scale(A_R, B_R, percentage),
      scale(A_G, B_G, percentage),
      scale(A_B, B_B, percentage)
    ];

    calculatedColors[i] = PIXI.utils.rgb2hex(thisColor);
  }

  return (percentage) => {
    return calculatedColors[Math.floor(percentage * 100)];
  };
};


class ExperimentalStars extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.nodes = {};

    // Pixi objects
    this.application = undefined;
    this.stars = [];
    this.sparks = [];

    this.gradientGenerator = undefined;
  }


  componentDidMount() {
    this.application = new PIXI.Application({
      'height': window.innerHeight,
      'width': window.innerWidth,
      'transparent': true,
      'resolution': this.props.settings.page_zoom
    });

    this.application.autoResize = true;

    this.nodes.screen.appendChild(this.application.view);

    setTimeout(() => {
      this.startAnimation();
    }, 1000);
  }


  startAnimation() {
    let circle = new PIXI.Graphics();

    circle.beginFill(0xFFFFFF, 1);
    circle.drawCircle(1, 1, 1);
    circle.cacheAsBitmap = true;

    const starCount = 4;
    const sparkCount = 100; // Per star
    const sparkMinDecay = 750; // milliseconds
    const sparkMaxDecay = 1250; // milliseconds
    const sparkStartScale = 0.001;
    const sparkEndScale = 0.1;
    const startColor = 0xd426e0;
    const endColor = 0xed7b39;

    this.gradientGenerator = GradientGenerator(startColor, endColor);

    // Generate stars
    for (let i = 0; i < starCount; i++) {
      let circleInstance = circle.clone();

      circleInstance.blendMode = PIXI.BLEND_MODES.SCREEN;

      circleInstance.recycle = () => {
        circleInstance.alpha = randomRange(0.7, 1, 2);

        circleInstance.x = -20;
        circleInstance.y = -20;
        circleInstance.startX = randomRange(0, window.innerWidth - (window.innerWidth * 0.2));
        circleInstance.startY = randomRange(0, window.innerHeight - (window.innerHeight * 0.2));
        circleInstance.lastX = circleInstance.x;
        circleInstance.lastY = circleInstance.y;

        circleInstance.deathY = randomRange(circleInstance.y + (window.innerHeight * 0.10), window.innerHeight);
        circleInstance.startTime = Number(new Date()) + randomRange(1000, 8000);

        circleInstance.velocity = {
          'x': -(randomRange(1, 2, 2)),
          'y': randomRange(2, 4, 2)
        };
      };

      circleInstance.interpolate = (ratio, stretch=0) => {
        return interpolatePoints(
          {
            'x': circleInstance.lastX - (circleInstance.velocity.x * stretch),
            'y': circleInstance.lastY - (circleInstance.velocity.y * stretch)
          },
          {
            'x': circleInstance.x,
            'y': circleInstance.y
          },
          ratio
        );
      };

      circleInstance.recycle();

      this.stars.push(circleInstance);
      this.application.stage.addChild(circleInstance);
    }


    // Generate sparks
    let sparkTexture = PIXI.Texture.fromImage('src/img/gl/spark.png');

    for (let i = 0; i < starCount; i++) {
      // Generate a new self managing particle instance
      let options = {
        'parent': this.stars[i],
        'startColor': startColor,
        'endColor': endColor,
        'minDecay': sparkMinDecay,
        'maxDecay': sparkMaxDecay,
        'startScale': sparkStartScale,
        'endScale': sparkEndScale,
        'gradientGenerator': this.gradientGenerator
      };

      for (let _i = 0; _i < sparkCount; _i++) {
        this.sparks[i] = this.sparks[i] || [];
        this.sparks[i].push(new Particle(sparkTexture, this.application, options));
      }
    }

    //let smoke = PIXI.Sprite.fromImage('src/img/gl/smoke.png');

    this.application.ticker.add(() => {
      const now = Number(new Date());

      for (let i = 0; i < this.stars.length; i++) {
        let currentItem = this.stars[i];
        let star = currentItem;

        if (now > star.startTime) {
          if (star.alpha == 0) {
            star.alpha = randomRange(0.5, 1, 2);
          }

          if (star.x == -20) {
            star.x = star.startX;
            star.y = star.startY;
          }

          star.lastX = star.x;
          star.lastY = star.y;
          star.x += star.velocity.x;
          star.y += star.velocity.y;

          if (star.x < -10 || star.y > star.deathY) {
            star.recycle();
          }
        } else {
          star.alpha = 0;
        }
      }
    });
  }


  render() {
    return ReactDOM.createPortal(
      <div className="" ref={ (ref) => this.nodes.screen = ref } />,
      document.getElementById("experimental-mount")
    );
  }
}


ExperimentalStars.propTypes = {
  'settings': PropTypes.object.isRequired
};


export default connect(
  (state) => {
    return {
      'settings': state.settings
    };
  },
  null
)(ExperimentalStars);
