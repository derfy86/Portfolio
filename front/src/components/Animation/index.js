// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';

// == Composant
const Animation = (firstAnimationFinished, handelFirstAnim) => (
  <div className="animation">
    <div className="top-block" />

    <div className="animation-text">Derfy Dev Web</div>

    <div className="bottom-block" />
  </div>
);

Animation.prototypes = {
  firstAnimationFinished: PropTypes.bool.isRequired,
  handelFirstAnim: PropTypes.func.isRequired,
};

// == Export
export default Animation;
