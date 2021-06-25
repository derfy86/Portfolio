// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './style.scss';

// == Composant
const Project = () => (
  <div className="project">
    <h1 className="project__title">Mes projets</h1>
    <Link to="/githubAPI">github API</Link>
  </div>
);

// == Export
export default Project;
