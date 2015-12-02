import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Root from './root';

export default function(path, props, render) {
  render('<!doctype html>' + ReactDOMServer.renderToString(<Root/>));
}

if (typeof document !== 'undefined') {
  React.render(<Root/>, document);
}
