import React from 'react';
import ga from 'react-google-analytics';

import Header from './components/header.jsx';
import Hero from './components/hero.jsx';
import AppInfoGUI from './components/app-info-gui.jsx';
import AppInfoTerm from './components/app-info-term.jsx';
import Contributor from './components/contributor.jsx';
import Footer from './components/footer.jsx';

const GAInitiailizer = ga.Initializer;
const isDev = process.env.NODE_ENV === 'development';
if (typeof window !== 'undefined') {
  require('normalize.css');
  require('./main.scss');
}


export default class Root extends React.Component {
  componentDidMount() {
    ga('create', 'UA-70854359-1', 'auto');
    ga('send', 'pageview');
  }

  render() {
    return (
      <html>
        <head>
          <meta charset="utf-8">
          <title>Sqlectron - A single DB client for all your relational DBs</title>
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <meta name="twitter:card" value="summary" />
          <meta property="og:title" content="SQLECTRON" />
          <meta property="og:type" content="article" />
          <meta property="og:url" content="https://sqlectron.github.io" />
          <meta property="og:image" content="https://camo.githubusercontent.com/5d0b5580048e574fa22f693f3ea9958dbe4bc027/68747470733a2f2f7777772e64726f70626f782e636f6d2f732f6474303674696634786f316b6862662f53514c454354524f4e2d34303070782e706e673f7261773d31" />
          <meta property="og:description" content="A simple and lightweight SQL client desktop/terminal with cross database and platform support. " />
          {!isDev && <link rel="stylesheet" type="text/css" href="/dist/style.css"/>}
        </head>
        <body>
          <div id="main">
            <Header/>
            <Hero/>
            <AppInfoGUI/>
            <AppInfoTerm/>
            <Contributor/>
            <Footer/>
          </div>
          {isDev && <script src="/hot.js"/>}
          {!isDev && <script src="/dist/bundle.js"/>}
          {!isDev && <GAInitiailizer />}
        </body>
      </html>
    )
  }
}
