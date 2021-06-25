import React from 'react';
import PropTypes from 'prop-types';
import './github.scss';

const Button = ({ morePage }) => (
  <div className="button">
    <button
      key={morePage}
      className="button-style"
      type="button"
      onClick={() => {
        morePage();
      }}
    >See more
    </button>
  </div>
);

Button.prototypes = {
  morePage: PropTypes.func.isRequired,
};

export default Button;
