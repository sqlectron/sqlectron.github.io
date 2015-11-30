import React from 'react';


const logo = require('./logo.png');


export default class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <div className="container">
          <div className="item">
            <a href="https://sqlectron.github.io">
              <img src={logo} />
            </a>
          </div>
          <div className="item">
            <ul id="menu">
              <li><a href="#">Repository</a></li>
              <li><a href="#">Issues</a></li>
              <li><a href="#">Releases</a></li>
              <li><a href="#">Documentation</a></li>
            </ul>
          </div>
          <div className="item">
            <a className="tweet button" href="https://twitter.com/intent/tweet?text=SQLECTRON%20https://sqlectron.github.io">Tweet</a>
          </div>
        </div>
      </div>
    )
  }
}
