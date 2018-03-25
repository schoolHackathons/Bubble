import React, { Component } from 'react';
import './App.css';
import login from './components/pages/login.js';
import bubble from './bubble.png'
import bubblebackground from './bubblebackground.png';
import Card from './components/Card.js';
import Container from './components/Container.js';
import Search from './components/Search.js';

class App2 extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <login></login>
          <img src={bubble} />
        </header>
      <div className="App-body">
        <form action="/App2.js">
          Sign in with school email
          <br></br>
        <input type="text" name="username" value=""/>
          <br></br><br></br>
        <input type="submit" value="Submit"/>
        </form>
        </div>
      </div>
    );
  }
}

export default App;
