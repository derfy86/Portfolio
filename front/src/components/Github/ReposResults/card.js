import React from 'react';
import {
  Link,
} from 'react-router-dom';
import './github.scss';

const CardModele = (element) => (
  <div className="container-profil">
    <Link to={`/githubAPI/${element.full_name}`}>
      <img className="img" src={element.owner.avatar_url} alt="profil" />
      <div className="container-profil-text">
        <h2 className="h2">{element.name}</h2>
        <h3 className="h3">{element.full_name}</h3>
        <p>{element.description}
        </p>
      </div>
    </Link>
  </div>
);

export default CardModele;
