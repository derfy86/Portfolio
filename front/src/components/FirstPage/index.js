// == Import npm
import React, { useEffect, useState } from 'react';

// == Import
import './style.scss';
import Typical from 'react-typical';
import node from '../../assets/node.jpg';
import js from '../../assets/js.png';
import react from '../../assets/react.svg';

// == Composant
const FirstPage = () => {
  const steps = [1500, 'FREDERIC BOURIGEAUD'];
  const [firstTextTime, setfirstTextTime] = useState(false);
  const [secondTextTime, setSecondTextTime] = useState(false);
  const [logoTime, setLogoTime] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setfirstTextTime(!firstTextTime);
    }, 1000);
    setTimeout(() => {
      setSecondTextTime(!secondTextTime);
    }, 2300);
    setTimeout(() => {
      setLogoTime(!logoTime);
    }, 3600);
  }, []);

  return (
    <div className="first-page">
      {/* <Typical
        steps={steps}
      // loop={Infinity}
        className="first-page__name typical"
        wrapper="p"
      /> */}
      {
        firstTextTime && (
          <>
            <h1 className="first-page__name animate">FREDERIC</h1>
            <h1 className="first-page__name animate">BOURIGEAUD</h1>
          </>
        )
      }
      {
        secondTextTime && (
          <>
            <p className="first-page__text animate">Développeur Javascript</p>
            <p className="first-page__text animate">Web / Web mobile fullstack</p>
          </>
        )
      }
      {
        logoTime && (
        <div className="logo animate">
          <img className="logo__detail" alt="" src={js} />
          <img className="logo__detail react" alt="" src={react} />
          <img className="logo__detail" alt="" src={node} />
        </div>
        )
      }
    </div>
  );
};

// == Export
export default FirstPage;
