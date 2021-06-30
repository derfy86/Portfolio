// == Import npm
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import cv from '../../assets/cv-bourigeaud.pdf';
import plus from '../../assets/pictures/more.png';

// == Composant
const Header = ({ toggleMenu, mobileMenu, closeMenu }) => {
  const menuMobile = mobileMenu ? 'header__text animate' : 'none';
  const btnMobile = mobileMenu ? 'header__toggle-btn open' : 'header__toggle-btn close';
  return (
    <nav className="header">
      <Link to="/" className="button pseudo" onClick={closeMenu}>DERFY</Link>

      <button
        className={btnMobile}
        type="button"
        onClick={toggleMenu}
      >
        <img className="img__menu__mobile" src={plus} alt="bouton menu" />
      </button>
      <ul className={menuMobile}>
        <NavLink to="/about" className="header__text--detail" activeClassName=" active" onClick={closeMenu}>
          A propos
        </NavLink>
        <NavLink to="/skills" className="header__text--detail" activeClassName=" active" onClick={closeMenu}>
          Compétences
        </NavLink>
        <NavLink to="/project" className="header__text--detail" activeClassName=" active" onClick={closeMenu}>
          Projet
        </NavLink>
        <a href="https://drive.google.com/file/d/1AeOx-cxowQ_3HWTYM1fC1mrpf_9whP4z/view?usp=sharing" target="new" className="header__text--detail" onClick={closeMenu}>
          CV
        </a>
        <NavLink to="/contact" className="header__text--detail" activeClassName=" active" onClick={closeMenu}>
          Contact
        </NavLink>
      </ul>
    </nav>
  );
};

Header.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
  mobileMenu: PropTypes.bool.isRequired,
};

// == Export
export default Header;
