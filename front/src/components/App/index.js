// == Import npm
import React, { useState, useEffect } from 'react';

// == Import
import './style.scss';
import Animation from '../Animation';
import Page from '../Page';

// == Composant
const App = () => {
  // init this state at false to see the animation
  const [animFinished, setAnimFinished] = useState(true);
  const [firstAnimationFinished, setFirstAnimationFinished] = useState(false);

  const handelFirstAnim = (videoRef) => {
    setFirstAnimationFinished(true);
    videoRef.current.play();
  };

  return (
    <div className="app">
      {
       animFinished ? (
         <>
           <Page />
         </>
       ) : (
         <Animation
           firstAnimationFinished={firstAnimationFinished}
           handelFirstAnim={handelFirstAnim}
         />
       )
      }
    </div>
  );
};

// == Export
export default App;

// {/* <img alt="" src={clavier} /> */}
