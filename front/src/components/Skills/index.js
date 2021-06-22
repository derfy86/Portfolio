// == Import npm
import React, { useEffect, useState } from 'react';

// == Import
import './style.scss';
import js from '../../assets/js.png';
import react from '../../assets/react.svg';
import webpack from '../../assets/webpack.png';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import redux from '../../assets/redux.png';
import sass from '../../assets/sass.png';
import node from '../../assets/node.jpg';
import express from '../../assets/express.png';
import postgres from '../../assets/postgres.png';
import sequelize from '../../assets/sequelize.png';
import insomnia from '../../assets/insomnia.svg';
import github from '../../assets/github.svg';
import axios from '../../assets/axios.jpg';
import aws from '../../assets/aws.png';

// == Composant
const Skills = () => {
  const [logoSkillsTime, setLogoSkillsTime] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLogoSkillsTime(!logoSkillsTime);
    }, 500);
  }, []);
  return (
    <div className="skills">
      <h1 className="skills__title">Mes compétences</h1>
      {
        logoSkillsTime && (
        <div className="skills__container animate">
          <article className="skills__card">
            <div className="skills__card__background">
              <img src={js} alt="" className="skills__card__logo small" />
              <h2 className="skills__card__name">Javascript</h2>
            </div>
          </article>
          <article className="skills__card">
            <div className="skills__card__background">
              <img src={react} alt="" className="skills__card__logo large" />
              <h2 className="skills__card__name">React</h2>
            </div>
          </article>
          <article className="skills__card">
            <div className="skills__card__background">
              <img src={webpack} alt="" className="skills__card__logo large" />
              <h2 className="skills__card__name">Webpack</h2>
            </div>
          </article>
          <article className="skills__card">
            <div className="skills__card__background">
              <img src={redux} alt="" className="skills__card__logo" />
              <h2 className="skills__card__name">Redux</h2>
            </div>
          </article>
          <article className="skills__card">
            <div className="skills__card__background">
              <img src={html} alt="" className="skills__card__logo large" />
              <h2 className="skills__card__name">HTML 5</h2>
            </div>
          </article>
          <article className="skills__card">
            <div className="skills__card__background">
              <img src={css} alt="" className="skills__card__logo small" />
              <h2 className="skills__card__name">CSS 3</h2>
            </div>
          </article>
          <article className="skills__card">
            <div className="skills__card__background">
              <img src={sass} alt="" className="skills__card__logo large" />
              <h2 className="skills__card__name">SASS</h2>
            </div>
          </article>
          <article className="skills__card">
            <div className="skills__card__background">
              <img src={node} alt="" className="skills__card__logo" />
              <h2 className="skills__card__name">NodeJS</h2>
            </div>
          </article>
          <article className="skills__card">
            <div className="skills__card__background">
              <img src={express} alt="" className="skills__card__logo" />
              <h2 className="skills__card__name">ExpressJS</h2>
            </div>
          </article>
          <article className="skills__card">
            <div className="skills__card__background">
              <img src={postgres} alt="" className="skills__card__logo" />
              <h2 className="skills__card__name">PostgreSQL</h2>
            </div>
          </article>
          <article className="skills__card">
            <div className="skills__card__background">
              <img src={sequelize} alt="" className="skills__card__logo" />
              <h2 className="skills__card__name">Sequelize</h2>
            </div>
          </article>
          <article className="skills__card">
            <div className="skills__card__background">
              <img src={insomnia} alt="" className="skills__card__logo" />
              <h2 className="skills__card__name">Insomnia</h2>
            </div>
          </article>
          <article className="skills__card">
            <div className="skills__card__background">
              <img src={github} alt="" className="skills__card__logo circle--white" />
              <h2 className="skills__card__name">Github</h2>
            </div>
          </article>
          <article className="skills__card">
            <div className="skills__card__background">
              <img src={axios} alt="" className="skills__card__logo circle--white" />
              <h2 className="skills__card__name">Axios</h2>
            </div>
          </article>
          <article className="skills__card">
            <div className="skills__card__background">
              <img src={aws} alt="" className="skills__card__logo large" />
              <h2 className="skills__card__name">Aws</h2>
            </div>
          </article>
        </div>

        )
      }
    </div>
  );
};

// == Export
export default Skills;
