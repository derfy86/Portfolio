// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './style.scss';

// == Composant
const Project = () => (
  <div className="project">
    <h1 className="project__title">Mes projets</h1>
    <div className="project__container">
      <div className="project__container__card">
        <a target="new" href="http://ec2-15-188-14-79.eu-west-3.compute.amazonaws.com/">
          Cod'access
        </a>
      </div>
      <div className="project__container__card">
        <Link to="/githubAPI">
          Github API
        </Link>
      </div>
      <div className="project__container__card">
        <Link to="/todolist">
          Todolist
        </Link>
      </div>
      <div className="project__container__card">
        <Link to="/converter">
          Converter
        </Link>
      </div>
    </div>
  </div>
);

// == Export
export default Project;
