import React from 'react';
import PropTypes from 'prop-types';
import './github.scss';

const Message = ({ data }) => (
  <div className="container-message">
    <p>La recherche a donné {data.total_count} résultats</p>
  </div>
);

Message.propTypes = {
  data: PropTypes.shape({
    total_count: PropTypes.number.isRequired,
  }).isRequired,
};

export default Message;
