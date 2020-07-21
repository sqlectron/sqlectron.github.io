import React from 'react';
import GithubWidget from './github-widget.jsx';


const AppInfoGUI = () => (
  <div className="app" id="sqlectron-gui">
    <a name="gui"></a>
    <div className="container">
      <div className="description">
        <h1>SQLECTRON-GUI</h1>
        <div className="github-widget">
          <GithubWidget user="sqlectron" repository="sqlectron-gui" type="star" />
          <GithubWidget user="sqlectron" repository="sqlectron-gui" type="fork" />
        </div>
        <p>A desktop application with a simple interface.</p>
        <ul className="inner-menu">
          <li><a href="https://github.com/sqlectron/sqlectron-gui">Repository</a></li>
          <li><a href="https://github.com/sqlectron/sqlectron-gui/issues">Issues</a></li>
          <li><a href="https://github.com/sqlectron/sqlectron-gui/releases">Releases</a></li>
          <li><a href="https://github.com/sqlectron/sqlectron-gui">Documentation</a></li>
        </ul>
        <div className="download">
          <a className="button" href="https://github.com/sqlectron/sqlectron-gui/releases/latest">Download</a>
        </div>
        <p>
          Note: For Linux users, to use Sqlectron, you will need to install libgconf separately.
        </p>
      </div>
      <div className="demo">
        <img src="https://sqlectron.github.io/demos/sqlectron-demo-gui-v1.0.0.gif" />
        <a className="link-full-screen" href="https://sqlectron.github.io/demos/sqlectron-demo-gui-v1.0.0.gif">
          Click here to watch in the original size
        </a>
      </div>
    </div>
  </div>
);

export default AppInfoGUI;
