import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Footer = ({ countryName, value }) => {
  console.log('value', value);
  return (
    <footer className="result">
      <p key={value} className="result-number">{value}</p>
      <h2 key={countryName.name} className="result-country">{countryName.name}</h2>
    </footer>
  );
};

Footer.propTypes = {
  countryName: PropTypes.object.isRequired,
  value: PropTypes.number.isRequired,
};

export default Footer;
