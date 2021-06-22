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
  inputNameClient, textInputNameClient,
  onChangeSubmit, inputEmailClient, textInputEmailClient,
  inputMessageClient, textInputMessageClient,
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
          timeout={300}
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
                inputNameClient={inputNameClient}
                textInputNameClient={textInputNameClient}
                onChangeSubmit={onChangeSubmit}
                inputEmailClient={inputEmailClient}
                textInputEmailClient={textInputEmailClient}
                inputMessageClient={inputMessageClient}
                textInputMessageClient={textInputMessageClient}
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
  inputNameClient: PropTypes.string.isRequired,
  textInputNameClient: PropTypes.func.isRequired,
  inputEmailClient: PropTypes.string.isRequired,
  textInputEmailClient: PropTypes.func.isRequired,
  inputMessageClient: PropTypes.string.isRequired,
  textInputMessageClient: PropTypes.func.isRequired,
  onChangeSubmit: PropTypes.func.isRequired,
};

// == Export
export default Page;
