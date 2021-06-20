// == Import npm
import React from 'react';

// == Import
import './style.scss';
import fred from '../../assets/fred.jpg';

// == Composant
const About = () => (
  <div className="about">
    <article className="about__members__team">
      <div>
        <img className="about__members__team__img" src={fred} alt="" />
      </div>
      <div className="about__members__team__texte">
        <h2 className="about__members__team__name">Frédéric BOURIGEAUD</h2>
      </div>
    </article>
  </div>
);

// == Export
export default About;
