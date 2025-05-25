import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{ backgroundImage: 'url(images/about.png)' }} />
              <h1 id="colorlib-logo"><a href="index.html">Daiene Lima</a></h1>
              <span className="position" style={{ fontSize: '12px' }}><a>Senior Software Development Engineer</a> Bradesco</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                  <li><a href="#projects">PROJECTS</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>

                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul className="social">
                <li><a href="https://www.instagram.com/daienelima/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                <li><a href="https://www.linkedin.com/in/daiene-lima/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/daienelima" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="https://medium.com/@daienelima" target="_blank" rel="noopener noreferrer"><i className="icon-blogger2"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                daiene.m17@gmail.com <i className="icon-heart" aria-hidden="true" />
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
