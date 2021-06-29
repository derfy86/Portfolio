import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

// == Import
import Message from './Message';
import ReposResults from './ReposResults';
import SearchBar from './SearchBar';
import FullPost from './FullPost';
import Logo from '../../assets/pictures/logo-github.png';
import './github.scss';

const axios = require('axios').default;

// == Composant
const Github = () => {
  const [data, setData] = useState({});
  const [dataRepo, setDataRepo] = useState({});
  const [valueInput, setValueInput] = useState('react');
  const [loading, setLoading] = useState(true);
  const [numberByPage, setNumberByPage] = useState(9);

  const getDataGit = () => {
    setLoading(true);
    axios.get(`https://api.github.com/search/repositories?q=${valueInput}&sort=stars&order=desc&page=1&per_page=${numberByPage}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.trace(error);
      })
      .then(() => {
        setLoading(false);
      });
  };

  const handleDataRepo = (data) => {
    setDataRepo(data);
  };

  useEffect(() => {
    getDataGit();
  }, [numberByPage]);

  const valueInputClient = (text) => {
    setValueInput(text);
  };

  const checkedSubmit = () => {
    setNumberByPage(9);
    getDataGit();
  };

  const morePage = () => {
    const newNumber = numberByPage + 9;
    setNumberByPage(newNumber);
  };

  return (
    <div className="github">
      <Router>
        <div className="container--github">
          <Link to="/githubAPI">
            <img className="logo--github" src={Logo} alt="logo acceuil github" />
          </Link>
          <SearchBar
            value={valueInput}
            valueInputClient={valueInputClient}
            checkedSubmit={checkedSubmit}
          />
          <Switch>
            <Route exact path="/githubAPI">
              <Message key={data.id} data={data} />
              {
          !loading && (
          <ReposResults data={data} morePage={morePage} />
          )
        }
            </Route>
            {
          !loading && (
            <Route
              path="/githubAPI/:orga/:repo"
              render={(info) => {
                const { orga, repo } = info.match.params;
                return (
                  <FullPost
                    orga={orga}
                    repo={repo}
                    data={dataRepo}
                    handleDataRepo={handleDataRepo}
                  />
                );
              }}
            />
          )
                }
          </Switch>
        </div>
      </Router>
    </div>
  );
};

// == Export
export default Github;
