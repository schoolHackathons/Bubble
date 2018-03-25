import React, { Component } from 'react';
import './App.css';
import login from './components/pages/login.js';
import bubble from './bubble.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <login></login>
          <img src={bubble} />
        </div>
      <div className="App-body">
        <form action="#">
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
