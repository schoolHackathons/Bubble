import React, { Component } from 'react';
import './App.css';
import login from './components/pages/login.js';
import bubble from './bubble.png'
import bubblebackground from './bubblebackground.png';
// import Card from './components/Card.js';
// import Container from './components/Container.js';
// import Search from './components/Search.js';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {value: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) { }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <login></login>
          <img src={bubble} />
        </header>
      <div className="App-body">
        <form action="/App2.js">
        <form onSubmit={this.handleSubmit}>
        <label>
          Enter your university e-mail:
          <br></br>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <br></br><br></br>
        </label>
        <label>
          Password:
          
          <input type="password" value={this.state.value} onChange={this.handleChange} />
          <br></br>
        </label>
        <input type="submit" value="Submit" />
        </form>
        </form>
        </div>
      </div>
    );
  }
}

export default App;
