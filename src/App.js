import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import Top from './components/top'
import About from './components/about'
import Facts from './components/facts'
import Skills from './components/skills'
import Resume from './components/resume'
import Portfolio from './components/portfolio'
import Service from './components/service'
import Testimonial from './components/testimonial'
import Contact from './components/contact'
import Footer from './components/footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Top></Top>
        <main id="main">
        <About></About>
        <Facts></Facts>
        <Skills></Skills>
        <Resume></Resume>
        <Portfolio></Portfolio>
        <Service></Service>
        <Testimonial></Testimonial>
        <Contact></Contact>
        <Footer></Footer>
        </main>
      </div>
    );
  }
}

export default App;