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
  const [inputNameClient, setInputNameClient] = useState('');
  const [inputEmailClient, setInputEmailClient] = useState('');
  const [inputMessageClient, setInputMessageClient] = useState('');
  const [user, setUser] = useState({ name: '', email: '', message: '' });

  const changeDataUser = (text, value) => {
    setUser({ ...user, [value]: text });
    console.log('infos', user);
  };

  const textInputNameClient = (textClient) => {
    setInputNameClient(textClient);
  };
  const textInputEmailClient = (textClient) => {
    setInputEmailClient(textClient);
  };
  const textInputMessageClient = (textClient) => {
    setInputMessageClient(textClient);
  };

  const onChangeSubmit = () => {
    if (inputNameClient === '') {
      console.log('vide');
      return alert('vide name');
    }
    if (inputEmailClient === '') {
      console.log('vide');
      return alert('vide email');
    }
    if (inputMessageClient === '') {
      console.log('vide');
      return alert('vide message');
    }
    setInputNameClient('');
    setInputEmailClient('');
    setInputMessageClient('');
  };

  const handelFirstAnim = (videoRef) => {
    setFirstAnimationFinished(true);
    videoRef.current.play();
  };

  return (
    <div className="app">
      {
       animFinished ? (
         <>
           <Page
             user={user}
             changeDataUser={changeDataUser}
             inputNameClient={inputNameClient}
             textInputNameClient={textInputNameClient}
             inputEmailClient={inputEmailClient}
             textInputEmailClient={textInputEmailClient}
             inputMessageClient={inputMessageClient}
             textInputMessageClient={textInputMessageClient}
             onChangeSubmit={onChangeSubmit}
           />
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
