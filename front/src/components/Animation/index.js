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
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import hudVideo from '../../assets/hud.mp4';

// == Composant
const Animation = ({ firstAnimationFinished, handelFirstAnim }) => {
  console.log('firstAnimationFinished', firstAnimationFinished);
  const videoRef = React.createRef();
  return (
    <div className="animation">
      <video
        muted
        loop
        ref={videoRef}
        style={{
          position: 'absolute',
          width: '100%',
          left: '0%',
          top: '0%',
          height: '100%',
          zIndex: '1',
        }}
      >
        <source src={hudVideo} type="video/mp4" />
      </video>
      <div className={firstAnimationFinished ? 'top-block-closed' : 'top-block'} />

      <div
        onAnimationEnd={() => {
          handelFirstAnim(videoRef);
        }}
        className={firstAnimationFinished ? 'animation-text-finished' : 'animation-text'}
      >DERFY
      </div>

      <div className={firstAnimationFinished ? 'bottom-block-closed' : 'bottom-block'} />
    </div>
  );
};

Animation.prototypes = {
  firstAnimationFinished: PropTypes.bool.isRequired,
  handelFirstAnim: PropTypes.func.isRequired,
};

// == Export
export default Animation;

Animation.prototypes = {
  firstAnimationFinished: PropTypes.bool.isRequired,
  handelFirstAnim: PropTypes.func.isRequired,
};

// == Export
export default Animation;
