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
          <title>Sqlectron</title>
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
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
          {!isDev && <script src="/bundle.js"/>}
          {!isDev && <GAInitiailizer />}
        </body>
      </html>
    )
  }
}
