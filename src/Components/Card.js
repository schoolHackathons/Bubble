import React, { Component } from 'react';
import '../css/Card.css';
import '../functions.js';

class Card extends Component {

  renderBubbles(j){
    if(j=0)
      return (
        <a onClick={this.handleBubble} style={{cursor:'pointer'}}>
        <div className="Card-mini">
         daddy
        </div>
        </a>
      );
    else if(j > 0)
      return this.renderBubbles(j-1);
}
// this.props.user.bubbles[i]
  render() {
    return (
      <div className="Card">

        <div className="Card-header">
          {this.props.title}
        </div>
        <div className="Card-body">
          {this.renderBubbles(3)}
          <div className="Card-mini">
            {this.props.data1}
          </div>
          <br></br>
          <div className="Card-mini">
            {this.props.data2}
          </div>
          <br></br>
          <a href="https://www.google.com"><div className="Card-mini">
            {this.props.data3}
          </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Card;
