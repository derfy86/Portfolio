import React from 'react';
import PropTypes from 'prop-types';
import CardModele from './card';
import Button from '../Button';
import './github.scss';

const ReposResults = ({ data, morePage }) => (
  <div className="solo">
    <div className="container-reposResults">
      {
        data.items.map((element) => (
          <CardModele
            key={element.id}
            {...element}
          />
        ))
      }
    </div>
    <Button morePage={morePage} />
  </div>
);

ReposResults.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.shape({
      total_count: PropTypes.number.isRequired,
      items: PropTypes.array.isRequired,
    }),
  ).isRequired,
  morePage: PropTypes.func.isRequired,
};

export default ReposResults;
