// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './style.scss';
import cod from '../../assets/pictures/cod-access-preview.png';
import git from '../../assets/pictures/github-preview.png';
import todolist from '../../assets/pictures/todolist-preview.png';
import converter from '../../assets/pictures/converter-preview.png';

// == Composant
const Project = () => (
  <div className="project">
    <h1 className="project__title">Vous trouverez ici quelques projets que j'ai pu réaliser seul ou en collaboration.</h1>
    <div className="project__container animate">
      <a target="new" href="https://cod-access-demo.fr/">
        <div className="project__container__card">
          <h2 className="project__container__card__title">Cod'access</h2>
          <img className="project__container__card__img" src={cod} alt="" />
          <div className="project__container__card__center--text">
            <p className="project__container__card__context">Plateforme d'entraînement à l'accessibilité numérique pour les développeurs web que vous soyez junior ou senior, le public visé doit connaître un minimum d'HTML et de CSS.</p>
            <p className="project__container__card__text">Réalisée avec React, Node et Psql, il s'agit d'une application extrêmement complète aussi bien au niveau technique qu'au niveau expérience utilisateur.</p>
          </div>
        </div>
      </a>
      <Link to="/githubAPI">
        <div className="project__container__card">
          <h2 className="project__container__card__title">Github API</h2>
          <img className="project__container__card__img" src={git} alt="" />
          <div className="project__container__card__center--text">
            <p className="project__container__card__context">Application de recherche pour les "repository" de Github.</p>
            <p className="project__container__card__text">Réalisée entièrement avec React, la recherche des répertoires se fait directement en ligne via des requêtes Axios.</p>
          </div>
        </div>
      </Link>
      <Link to="/todolist">
        <div className="project__container__card">
          <h2 className="project__container__card__title">Todolist</h2>
          <img className="project__container__card__img" src={todolist} alt="" />
          <div className="project__container__card__center--text">
            <p className="project__container__card__context">La todolist est une application de type mémo pour se créer une liste de tâches.</p>
            <p className="project__container__card__text">Réalisée avec React, vous pouvez aussi bien créer / supprimer des tâches. Vous pouvez également les cochers lorsqu'elles sont terminé.</p>
          </div>
        </div>
      </Link>
      <Link to="/converter">
        <div className="project__container__card">
          <h2 className="project__container__card__title">Converter</h2>
          <img className="project__container__card__img" src={converter} alt="" />
          <div className="project__container__card__center--text">
            <p className="project__container__card__context">Application de conversion de devises.</p>
            <p className="project__container__card__text">Réalisé également avec React, c'est un petit convertisseur très pratique et ludique.</p>
          </div>
        </div>
      </Link>
    </div>
  </div>
);

// == Export
export default Project;
