// == Import npm
import React from 'react';
import {
  TransitionGroup,
  CSSTransition,
} from 'react-transition-group';
import {
  Switch, Route, useLocation,
} from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import FirstPage from '../FirstPage';
import Header from '../Header';
import About from '../About';
import Error from '../Error';
import Skills from '../Skills';
import Project from '../Project';
import Contact from '../Contact';

// == Composant
const Page = ({
  onChangeSubmit,
  user,
  changeDataUser,
  errorLine,
  deleteErrorLine,
  messageSend,
}) => {
  const location = useLocation();
  return (
    <main className="">
      <Header />
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="fade"
          unmountOnExit
          timeout={600}
        >
          <Switch location={location}>
            <Route exact path="/">
              <FirstPage />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/skills">
              <Skills />
            </Route>
            <Route exact path="/project">
              <Project />
            </Route>
            <Route exact path="/contact">
              <Contact
                user={user}
                changeDataUser={changeDataUser}
                onChangeSubmit={onChangeSubmit}
                errorLine={errorLine}
                deleteErrorLine={deleteErrorLine}
                messageSend={messageSend}
              />
            </Route>
            <Error />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </main>
  );
};

Page.propTypes = {
  user: PropTypes.object.isRequired,
  changeDataUser: PropTypes.func.isRequired,
  onChangeSubmit: PropTypes.func.isRequired,
  errorLine: PropTypes.object.isRequired,
  deleteErrorLine: PropTypes.func.isRequired,
  messageSend: PropTypes.bool.isRequired,
};

// == Export
export default Page;
