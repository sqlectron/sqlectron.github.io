import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ReactDOMServer from 'react-dom/server';
import Root from './root';

/*
export default function(path, props, render) {
  render('<!doctype html>' + ReactDOMServer.renderToString(<Root/>));
}

if (typeof document !== 'undefined') {
  React.render(<Root/>, document);
}
*/

ReactDOM.render(
  <Root />,
  document.getElementById('app')
);

module.hot.accept();
