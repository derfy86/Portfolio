import React from 'react';
import PropTypes from 'prop-types';
// import 'semantic-ui-css/semantic.min.css';
import './github.scss';

const SearchBar = ({ value, valueInputClient, checkedSubmit }) => (
  <div className="searchBar">
    <form
      className="form"
      type="submit"
      onSubmit={(event) => {
        event.preventDefault();
        checkedSubmit();
      }}
    >
      <div className="form-input">
        <i className="share icon" />
        <input
          className="form-input-value"
          type="text"
          placeholder="search"
          value={value}
          onChange={(event) => {
            const textClient = event.target.value;
            valueInputClient(textClient);
          }}
        />
      </div>
    </form>
  </div>
);

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  valueInputClient: PropTypes.func.isRequired,
  checkedSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
