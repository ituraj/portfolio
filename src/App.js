import React, { Component } from 'react';
import './App.scss';
import { withTranslation } from 'react-i18next';

import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

class App extends Component {
  render() {
    return (
      <>
        <Nav></Nav>
        <Header></Header>
        <main>
          <About></About>
          <Skills></Skills>
          <Projects></Projects>
        </main>
        <footer>
          <Contact></Contact>
        </footer>
      </>
    );
  }
}

export default withTranslation('common')(App);
