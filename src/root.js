import React from 'react';
//import ga from 'react-google-analytics';

import Header from './components/header.jsx';
import Hero from './components/hero.jsx';
import AppInfoGUI from './components/app-info-gui.jsx';
import AppInfoTerm from './components/app-info-term.jsx';
import Contributor from './components/contributor.jsx';
import Footer from './components/footer.jsx';

//const GAInitiailizer = ga.Initializer;
const isDev = process.env.NODE_ENV === 'development';

if (typeof window !== 'undefined') {
  require('normalize.css');
  require('./main.scss');
}


export default class Root extends React.Component {
  componentDidMount() {
    //ga('create', 'UA-70854359-1', 'auto');
    //ga('send', 'pageview');
  }

  render() {
    return (
      <div id="main">
        <Header/>
        <Hero/>
        <AppInfoGUI/>
        <AppInfoTerm/>
        <Contributor/>
        <Footer/>
      </div>
    )
  }
}
