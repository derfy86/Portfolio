// == Import npm
import React from 'react';

// == Import
import './style.scss';

// == Composant
const Header = () => (
  <nav className="header">
    <button type="button" className="button pseudo">DERFY</button>
    <ul className="header__text">
      <li className="header__text--detail">A propos</li>
      <li className="header__text--detail">Compétences</li>
      <li className="header__text--detail">Projet</li>
      <li className="header__text--detail">Contact</li>
    </ul>
  </nav>
);

// == Export
export default Header;
