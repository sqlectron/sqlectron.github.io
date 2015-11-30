import React from 'react';

export default class AppInfoGUI extends React.Component {
  render() {
    return (
      <div className="app" id="sqlectron-gui">
        <div className="container">
          <div className="description">
            <h1>SQLECTRON-GUI</h1>
            <p>A desktop application with a simple interface.</p>
            <ul className="inner-menu">
              <li><a href="https://github.com/sqlectron/sqlectron-gui">Repository</a></li>
              <li><a href="https://github.com/sqlectron/sqlectron-gui/issues">Issues</a></li>
              <li><a href="https://github.com/sqlectron/sqlectron-gui/releases">Releases</a></li>
              <li><a href="https://github.com/sqlectron/sqlectron-gui">Documentation</a></li>
            </ul>
            <a className="button" href="https://github.com/sqlectron/sqlectron-gui/releases/latest">Download v1.0.0</a>
          </div>
          <div className="demo">
            <img src="https://camo.githubusercontent.com/92f609a8db66847417d8a17c5fb4457ecedd1ac5/68747470733a2f2f7777772e64726f70626f782e636f6d2f732f6c66726468676b316b3268776d68672f73716c656374726f6e2d64656d6f2d76302e312e302e6769663f7261773d31" />
            <a className="link-full-screen" href="https://camo.githubusercontent.com/92f609a8db66847417d8a17c5fb4457ecedd1ac5/68747470733a2f2f7777772e64726f70626f782e636f6d2f732f6c66726468676b316b3268776d68672f73716c656374726f6e2d64656d6f2d76302e312e302e6769663f7261773d31">
              Click here to watch in full screen
            </a>
          </div>
        </div>
      </div>
    )
  }
}
