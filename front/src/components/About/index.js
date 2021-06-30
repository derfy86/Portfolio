// == Import npm
import React, { useEffect, useState } from 'react';
import {
  Link,
} from 'react-router-dom';

// == Import
import './style.scss';
import Typical from 'react-typical';
import github from '../../assets/pictures/github.svg';
import pdf from '../../assets/pictures/pdf.svg';
import email from '../../assets/pictures/email.svg';
import linkedin from '../../assets/pictures/linkedin.svg';
import fred from '../../assets/pictures/fred.jpg';
import cv from '../../assets/pdf/CV_BOURIGEAUD_Frédéric.pdf';

export function useWindowDimensions() {
  const hasWindow = typeof window !== 'undefined';

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    return {
      width,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    if (hasWindow) {
      const handleResize = () => {
        setWindowDimensions(getWindowDimensions());
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [hasWindow]);

  return windowDimensions;
}

// == Composant
const About = () => {
  const steps = [500, 'Frédéric BOURIGEAUD, alias Derfy, développeur web et web mobile fullstack Javascript. Riche de mes diverses expériences, je mets mon adaptabilité au service du client. Vous avez une application à réaliser en React, ou bien encore le besoin d\'une base de données sécurisé? Discutons-en. '];

  const [logoAboutTime, setLogoAboutTime] = useState(false);

  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width < 960) {
      setLogoAboutTime(true);
    }
    setTimeout(() => {
      setLogoAboutTime(true);
    }, 3600);
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
          <p className="about__member__myself__text--mobile">Frédéric BOURIGEAUD, alias Derfy, développeur web et web mobile fullstack Javascript. Riche de mes diverses expériences, je mets mon adaptabilité au service du client. Vous avez une application à réaliser en React, ou bien encore le besoin d\'une base de données sécurisé? Discutons-en.</p>
          {
            logoAboutTime && (
              <div className="container--logo">
                <a href="https://www.linkedin.com/in/fr%C3%A9d%C3%A9ric-bourigeaud/" className="button--about">
                  <img src={linkedin} alt="lien linkedin" className="logo--about animate" />
                  <p className="about__member__myself__detail animate">Linkedin</p>
                </a>
                <a href="https://github.com/derfy86" className="button--about">
                  <img src={github} alt="lien github" className="logo--about animate" />
                  <p className="about__member__myself__detail animate">Github</p>
                </a>
                <a href={cv} download className="button--about">
                  <img src={pdf} alt="lien téléchargement CV" className="logo--about animate" />
                  <p className="about__member__myself__detail animate">CV</p>
                </a>
                <Link to="/contact" download className="button--about">
                  <img src={email} alt="lien téléchargement CV" className="logo--about animate" />
                  <p className="about__member__myself__detail animate">Contact</p>
                </Link>
              </div>
            )
          }
        </div>
        <div className="container--right">
          <img className="about__member__myself__img animate" src={fred} alt="" />
        </div>
      </article>
    </div>
  );
};

// == Export
export default About;
