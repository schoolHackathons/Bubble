import React, { Component } from 'react';
import '../css/Container.css';
import '../functions.js';

class Container extends Component {

  render() {
    return (
      <div className="Container">
          {this.props.children}
        <div className="Cont-card">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Container;
