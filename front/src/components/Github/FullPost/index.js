import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import './github.scss';

const axios = require('axios').default;

// import NotFound from '../NotFound';

const FullPost = ({
  data, orga, repo, handleDataRepo,
}) => {
  const [loading, setLoading] = useState(true);

  const getRepoGit = (orga, repo) => {
    setLoading(true);
    axios.get(`https://api.github.com/repos/${orga}/${repo}`)
      .then((response) => {
        handleDataRepo(response.data);
      })
      .catch((error) => {
        console.trace(error);
      })
      .then(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getRepoGit(orga, repo);
  }, []);

  const link = `https://github.com/${data.full_name}`;

  return (
    <div className="container--full">
      {
        !loading && (
          <a href={link} target="new">
            <img className="img--full" src={data.owner.avatar_url} alt="profil" />
            <div className="container-profil-text">
              <h2 className="h2">{data.name}</h2>
              <h3 className="h3">{data.full_name}</h3>
              <p>{data.description}
              </p>
            </div>
          </a>
        )
      }
    </div>
  );
};
FullPost.propTypes = {
  data: PropTypes.object.isRequired,
  orga: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  handleDataRepo: PropTypes.func.isRequired,
};

export default FullPost;
