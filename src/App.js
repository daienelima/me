import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import About from './components/about'
import Timeline from './components/timeline'
import Projects from './components/projects';
import Blog from './components/blog';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
            <About></About>
            <Timeline/>
            <Projects/>
            <Blog/>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
