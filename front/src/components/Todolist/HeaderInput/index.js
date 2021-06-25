import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const HeaderInput = ({ inputClient, textInputClient, onChangeSubmit }) => {
  console.log('input');
  return (

    <form
      className="menu"
      onSubmit={(evt) => {
        evt.preventDefault();
        onChangeSubmit();
      }}
    >
      <input
        className="input-menu"
        type="text"
        placeholder="Ajouter une tâche"
        value={inputClient}
        onChange={(evt) => {
          const texteSaisi = evt.target.value;
          textInputClient(texteSaisi);
        }}
      />
    </form>

  );
};

HeaderInput.propTypes = {
  inputClient: PropTypes.string.isRequired,
  textInputClient: PropTypes.func.isRequired,
  onChangeSubmit: PropTypes.func.isRequired,
};

export default HeaderInput;
