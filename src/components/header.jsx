import React from 'react';


const logo = require('./logo.png');


const Header = () => (
  <div id="header">
    <div className="container">
      <div className="item">
        <a href="https://sqlectron.github.io">
          <img src={logo} />
        </a>
      </div>
      <div className="item">
        <ul id="menu">
          <li><a href="#gui">Sqlectron GUI</a></li>
          <li><a href="#term">Sqlectron Term</a></li>
          <li><a href="#opensource">Open Source</a></li>
        </ul>
      </div>
      <div className="item">
        <a className="tweet button" href="https://twitter.com/intent/tweet?text=A%20simple%20and%20lightweight%20SQL%20client%20desktop%2Fterminal%20with%20cross%20database%20and%20platform%20support.%20https%3A%2F%2Fsqlectron.github.io">Tweet</a>
      </div>
    </div>
  </div>
);

export default Header;
