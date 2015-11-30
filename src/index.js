import React from 'react';
import Root from './Root';

export default function(path, props, render) {
  render('<!doctype html>' + React.renderToString(<Root/>));
}

if (typeof document !== 'undefined') {
  React.render(<Root/>, document);
}
