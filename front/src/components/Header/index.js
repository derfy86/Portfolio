// == Import npm
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// == Import
import './style.scss';
import cv from '../../assets/pdf/CV_BOURIGEAUD_Frédéric.pdf';

// == Composant
const Header = () => (
  <nav className="header">
    <Link to="/" className="button pseudo">DERFY</Link>
    <ul className="header__text">
      <NavLink to="/about" className="header__text--detail" activeClassName=" active">
        A propos
      </NavLink>
      <NavLink to="/skills" className="header__text--detail" activeClassName=" active">
        Compétences
      </NavLink>
      <NavLink to="/project" className="header__text--detail" activeClassName=" active">
        Projet
      </NavLink>
      <a href={cv} download className="header__text--detail">
        CV
      </a>
      <NavLink to="/contact" className="header__text--detail" activeClassName=" active">
        Contact
      </NavLink>
    </ul>
  </nav>
);

// == Export
export default Header;
