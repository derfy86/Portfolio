// == Import npm
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// == Import
import './style.scss';
import Typical from 'react-typical';
import github from '../../assets/github.svg';
import pdf from '../../assets/pdf.svg';
import linkedin from '../../assets/linkedin.svg';
import fred from '../../assets/fred.jpg';

// == Composant
const About = () => {
  const steps = [1000, 'Frédéric BOURIGEAUD, alias Derfy, développeur web et web mobile fullstack Javascript. Riche de mes diverses expériences je mets mon adaptabilité au service du client. Vous avez une application à réaliser en React, ou bien encore le besoin d\'une base de données sécurisé? Parlons-en. '];

  const [logoAboutTime, setLogoAboutTime] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLogoAboutTime(!logoAboutTime);
    }, 4000);
  }, []);
  return (
    <div className="about">
      <article className="about__member">
        <div className="container--left">
          <h1 className="about__member__myself__title">Qui suis-je?</h1>
          <Typical
            steps={steps}
            className="about__member__myself__text"
            wrapper="p"
          />
          {
            logoAboutTime && (
              <div className="container--logo">
                <a href="https://www.linkedin.com/in/fr%C3%A9d%C3%A9ric-bourigeaud/" className="button--about">
                  <img src={linkedin} alt="lien github" className="logo--about animate" />
                </a>
                <a href="https://github.com/derfy86" className="button--about">
                  <img src={github} alt="lien github" className="logo--about animate" />
                </a>
                <a href="https://github.com/derfy86" className="button--about">
                  <img src={pdf} alt="lien github" className="logo--about animate" />
                </a>
              </div>
            )
          }
        </div>
        <div className="container--right">
          <img className="about__member__myself__img" src={fred} alt="" />
        </div>
      </article>
    </div>
  );
};

// == Export
export default About;
