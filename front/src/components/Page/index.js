// == Import npm
import React from 'react';
import { Switch, Route } from 'react-router-dom';

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
const Page = () => (
  <main className="page">
    <Header />
    <Switch>
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
        <Contact />
      </Route>
      <Error />
    </Switch>
  </main>
);

// == Export
export default Page;
