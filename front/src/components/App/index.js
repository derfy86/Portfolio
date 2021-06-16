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

  // useEffect(() => {
  //   <Animation />;
  // });

  return (
    <div className="app">
      {
       animFinished ? (
         <>
           <Header />
           <FirstPage />
         </>
       ) : (
         <Animation />
       )
      }
    </div>
  );
};

// == Export
export default App;

// {/* <img alt="" src={clavier} /> */}
