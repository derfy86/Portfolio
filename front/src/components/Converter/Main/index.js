import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Main = ({
  countries, handleClick, countryFooter,
}) => (
  <main className="main">
    <h2 className="main-title">Currencies</h2>
    <ul className="main-container">
      {
          countries.map((country) => (
            <li
              key={country.name}
              className={country.name === countryFooter.name ? 'main-list black' : 'main-list'}
              onClick={() => {
                handleClick(country.name);
              }}
            >
              {country.name}
            </li>
          ))
          }
    </ul>
  </main>
);
Main.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
  })).isRequired,
  countryFooter: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Main;
