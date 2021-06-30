// == Import npm
import React, { useState } from 'react';

// == Import
import emailjs from 'emailjs-com';
import './style.scss';
import Animation from '../Animation';
import Error from '../Error';
import Page from '../Page';

// const axios = require('axios').default;

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

  const trySubmit = (Infos) => {
    setLoading(true);
    // axios.post('http://localhost:3000/api/trySendMessage', {
    //   userMessage: user,
    // })
    //   .then((response) => {
    //     if (response.status === 200) {
    //       setMessageSend(true);
    //       setUser({ name: '', email: '', message: '' });
    //     }
    //   })
    //   .catch((error) => {
    //     console.trace(error);
    //     setMessageWrong(true);
    //   })
    //   .then(() => {
    //     setLoading(false);
    //   });
    emailjs.sendForm('Derfy', 'template_7wcmnyt', Infos, 'user_OJzYvw9DOSs4v0FDwIWvi')
      .then((result) => {
        console.log(result.text);
        setMessageSend(true);
        setUser({ name: '', email: '', message: '' });
        setLoading(false);
      }, (error) => {
        console.log(error.text);
        setMessageWrong(true);
        setLoading(false);
      });
  };

  const checkBeforSubmit = (Infos) => {
    Object.entries(user).forEach((value) => {
      if (value[1] === '') {
        setErrorLine({ ...errorLine, [value[0]]: true });
      }
    });
    if ((user.name && user.email && user.message) !== '') {
      trySubmit(Infos);
    }
  };

  const onChangeSubmit = (Infos) => {
    checkBeforSubmit(Infos);
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
         <Error />
       //  <Animation
       //    firstAnimationFinished={firstAnimationFinished}
       //    handelFirstAnim={handelFirstAnim}
       //  />
       )
      }
    </div>
  );
};

// == Export
export default App;
