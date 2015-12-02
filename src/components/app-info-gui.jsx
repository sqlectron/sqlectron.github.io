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
      </div>
      <div className="demo">
        <img src="https://camo.githubusercontent.com/92f609a8db66847417d8a17c5fb4457ecedd1ac5/68747470733a2f2f7777772e64726f70626f782e636f6d2f732f6c66726468676b316b3268776d68672f73716c656374726f6e2d64656d6f2d76302e312e302e6769663f7261773d31" />
        <a className="link-full-screen" href="https://camo.githubusercontent.com/92f609a8db66847417d8a17c5fb4457ecedd1ac5/68747470733a2f2f7777772e64726f70626f782e636f6d2f732f6c66726468676b316b3268776d68672f73716c656374726f6e2d64656d6f2d76302e312e302e6769663f7261773d31">
          Click here to watch in the original size
        </a>
      </div>
    </div>
  </div>
);

export default AppInfoGUI;
