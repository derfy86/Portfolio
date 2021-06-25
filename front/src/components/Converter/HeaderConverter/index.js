import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const HeaderConverter = ({ baseAmount, onInputChange }) => (
  <header className="header--converter">
    <h1 className="header--converter__title">Converter</h1>
    <p className="header--converter__amount">
      <input
        value={baseAmount}
        type="number"
        className="header--converter__input"
        onChange={(evt) => {
          const newValue = parseFloat(evt.target.value, 10);
          onInputChange(newValue);
        }}
      />
      {baseAmount > 1 ? 'euros' : 'euro'}
    </p>
  </header>
);

HeaderConverter.propTypes = {
  baseAmount: PropTypes.number.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default HeaderConverter;
