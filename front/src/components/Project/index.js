// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './style.scss';
import cod from '../../assets/cod-access-preview.png';
import git from '../../assets/github-preview.png';
import todolist from '../../assets/todolist-preview.png';
import converter from '../../assets/converter-preview.png';

// == Composant
const Project = () => (
  <div className="project">
    <h1 className="project__title">Mes projets</h1>
    <div className="project__container animate">
      <a target="new" href="http://ec2-15-188-14-79.eu-west-3.compute.amazonaws.com/">
        <div className="project__container__card">
          <h2 className="project__container__card__title">Cod'access</h2>
          <img className="project__container__card__img" src={cod} alt="" />
        </div>
      </a>
      <Link to="/githubAPI">
        <div className="project__container__card">
          <h2 className="project__container__card__title">Github API</h2>
          <img className="project__container__card__img" src={git} alt="" />
        </div>
      </Link>
      <Link to="/todolist">
        <div className="project__container__card">
          <h2 className="project__container__card__title">Todolist</h2>
          <img className="project__container__card__img" src={todolist} alt="" />
        </div>
      </Link>
      <Link to="/converter">
        <div className="project__container__card">
          <h2 className="project__container__card__title">Converter</h2>
          <img className="project__container__card__img" src={converter} alt="" />
        </div>
      </Link>
    </div>
  </div>
);

// == Export
export default Project;
