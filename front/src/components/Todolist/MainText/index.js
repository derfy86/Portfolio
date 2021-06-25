import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const MainText = ({ count }) => {
  console.log('maintext');
  return (
    <h2 key={count} className="text-menu-of-todo">{count}{count > 1 ? ' tâches en cours' : ' tâche en cours'} </h2>
  );
};

MainText.propTypes = {
  count: PropTypes.number.isRequired,
};

export default MainText;
