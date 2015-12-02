import React from 'react';

import GithubWidget from './github-widget.jsx';

export default class AppInfoTerm extends React.Component {
  render() {
    return (
      <div className="app" id="sqlectron-term">
        <a name="term"></a>
        <div className="container">
          <div className="demo">
            <img src="https://camo.githubusercontent.com/d1026c380f8013c6210bbcb175ca3100e221182b/68747470733a2f2f7777772e64726f70626f782e636f6d2f732f6b66696639756177786261307a38392f6f75747075742e6769663f7261773d31" />
            <a className="link-full-screen" href="https://camo.githubusercontent.com/d1026c380f8013c6210bbcb175ca3100e221182b/68747470733a2f2f7777772e64726f70626f782e636f6d2f732f6b66696639756177786261307a38392f6f75747075742e6769663f7261773d31">
              Click here to watch in the original size
            </a>
          </div>
          <div className="description right">
            <h1>SQLECTRON-TERM</h1>
            <div className="github-widget">
              <GithubWidget user="sqlectron" repository="sqlectron-term" type="star" />
              <GithubWidget user="sqlectron" repository="sqlectron-term" type="fork" />
            </div>
            <p>In case you prefer terminal interfaces. You should try this one.</p>
            <ul className="inner-menu">
              <li><a href="https://github.com/sqlectron/sqlectron-term">Repository</a></li>
              <li><a href="https://github.com/sqlectron/sqlectron-term/issues">Issues</a></li>
              <li><a href="https://github.com/sqlectron/sqlectron-term/releases">Releases</a></li>
              <li><a href="https://github.com/sqlectron/sqlectron-term">Documentation</a></li>
            </ul>
            <div className="download">
              <a className="button" href="https://github.com/sqlectron/sqlectron-term/releases/latest">Download</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
