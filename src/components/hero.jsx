import React from 'react';

const screenShot = require('./screen-shot-sqlectron-gui.png');

export default class Hero extends React.Component {
  render() {
    return (
      <div id="hero">
        <div className="container">
          <p className="description">
            A simple and lightweight SQL client desktop<br />with cross database and platform support.
          </p>
          <div className="download-box">
            <a className="button" href="https://github.com/sqlectron/sqlectron-gui/releases/latest">Download</a>
            <span>Available for Linux, Mac and Windows</span>
          </div>
          <img id="banner" src={screenShot} />
        </div>
      </div>
    )
  }
}
