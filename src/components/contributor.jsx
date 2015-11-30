import React from 'react';

export default class Contributor extends React.Component {
  render() {
    return (
      <div id="contributor">
        <div className="container">
          <h1>Become a contributor</h1>
          <p className="description">It is an open source project and any kind of contribution is welcome.</p>
          <p className="description">Please help us with feedbacks or even better pull requests.</p>
          <a className="button" href="">View the project on GitHub</a>
        </div>
      </div>
    )
  }
}
