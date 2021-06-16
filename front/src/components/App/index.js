// == Import npm
import React, { useState, useEffect } from 'react';

// == Import
import './style.scss';
import Header from '../Header';
import FirstPage from '../FirstPage';
import Animation from '../Animation';

// == Composant
const App = () => {
  const [animFinished, setAnimFinished] = useState(false);
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
           <Header />
           <FirstPage />
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
