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
          <meta charSet="utf-8" />
          <title>Sqlectron - One single DB client for any relational DB</title>
          <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
          <meta property="twitter:card" content="summary"/>
          <meta property="twitter:title" content="Sqlectron - One single DB client for any relational DB"/>
          <meta property="twitter:description" content="A simple and lightweight SQL client desktop/terminal with cross database and platform support."/>
          <meta property="twitter:image:src" content="https://sqlectron.github.io/logos/logo-square-180px.png"/>
          <meta property="twitter:image:width" content="180"/>
          <meta property="twitter:image:height" content="180"/>
          <meta property="og:url" content="https://sqlectron.github.io"/>
          <meta property="og:site_name" content="Sqlectron"/>
          <meta property="og:title" content="Sqlectron - One single DB client for any relational DB"/>
          <meta property="og:description" content="A simple and lightweight SQL client desktop/terminal with cross database and platform support."/>
          <meta property="og:image" content="http://sqlectron.github.io/logos/logo-square-180px.png"/>
          <meta property="og:image:secure_url" content="https://sqlectron.github.io/logos/logo-square-180px.png" />
          <meta property="og:image:type" content="image/png"/>
          <meta property="og:image:width" content="180"/>
          <meta property="og:image:height" content="180"/>
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
