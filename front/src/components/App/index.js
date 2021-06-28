// == Import npm
import React, { useState } from 'react';

// == Import
import './style.scss';
import Animation from '../Animation';
import Page from '../Page';

const axios = require('axios').default;

// == Composant
const App = () => {
  // init this state at false to see the animation
  const [animFinished, setAnimFinished] = useState(true);
  const [firstAnimationFinished, setFirstAnimationFinished] = useState(false);
  const [user, setUser] = useState({ name: '', email: '', message: '' });
  const [errorLine, setErrorLine] = useState({ name: false, email: false, message: false });
  const [loading, setLoading] = useState(false);
  const [messageSend, setMessageSend] = useState(false);
  const [messageWrong, setMessageWrong] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const changeDataUser = (text, value) => {
    setUser({ ...user, [value]: text });
  };

  const deleteErrorLine = () => {
    setErrorLine({ name: false, email: false, message: false });
  };

  const trySubmit = () => {
    setLoading(true);
    axios.post('http://localhost:3000/api/trySendMessage', {
      userMessage: user,
    })
      .then((response) => {
        if (response.status === 200) {
          setMessageSend(true);
          setUser({ name: '', email: '', message: '' });
        }
      })
      .catch((error) => {
        console.trace(error);
        setMessageWrong(true);
      })
      .then(() => {
        setLoading(false);
      });
  };

  const checkBeforSubmit = () => {
    Object.entries(user).forEach((value) => {
      if (value[1] === '') {
        setErrorLine({ ...errorLine, [value[0]]: true });
      }
    });
    if ((user.name && user.email && user.message) !== '') {
      trySubmit();
    }
  };

  const onChangeSubmit = () => {
    checkBeforSubmit();
  };

  const handelFirstAnim = (videoRef) => {
    setFirstAnimationFinished(true);
    videoRef.current.play();
  };

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const closeMenu = () => {
    setMobileMenu(false);
  };

  return (
    <div className="app">
      {
       animFinished ? (
         <>
           <Page
             user={user}
             changeDataUser={changeDataUser}
             onChangeSubmit={onChangeSubmit}
             errorLine={errorLine}
             deleteErrorLine={deleteErrorLine}
             messageSend={messageSend}
             messageWrong={messageWrong}
             loading={loading}
             toggleMenu={toggleMenu}
             mobileMenu={mobileMenu}
             closeMenu={closeMenu}
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
