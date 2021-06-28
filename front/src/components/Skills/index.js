// == Import npm
import React from 'react';

// == Import
import './style.scss';
import js from '../../assets/pictures/js.png';
import react from '../../assets/pictures/react.svg';
import webpack from '../../assets/pictures/webpack.png';
import html from '../../assets/pictures/html.png';
import css from '../../assets/pictures/css.png';
import redux from '../../assets/pictures/redux.png';
import sass from '../../assets/pictures/sass.png';
import node from '../../assets/pictures/node.jpg';
import express from '../../assets/pictures/express.png';
import postgres from '../../assets/pictures/postgres.png';
import sequelize from '../../assets/pictures/sequelize.png';
import insomnia from '../../assets/pictures/insomnia.svg';
import github from '../../assets/pictures/github.svg';
import axios from '../../assets/pictures/axios.jpg';
import aws from '../../assets/pictures/aws.png';

// == Composant
const Skills = () => (
  <div className="skills">
    <h1 className="skills__title">Pour plus de transparence sur mes compétences</h1>
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
  </div>
);

// == Export
export default Skills;
