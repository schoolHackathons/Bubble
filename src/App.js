import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Components/Card.js';
import Container from './Components/Container.js';
import Search from './Components/Search.js';

class App extends Component {

  constructor(props) {
      super(props);
      this.showSearch = this.showSearch.bind(this);
      this.showBubble = this.showBubble.bind(this);
      this.state = {showBubs: false};
    }

    showSearch() {
      this.setState({showBubs: false});
    }

    showBubble() {
      this.setState({showBubs: true});
    }



  render() {

    const showBubs = this.state.showBubs;

    const showed = showBubs ? (
          <Container>  </Container>
        ) : (
          <Search>  </Search>
        );

    return (
      <div className="App">

        <header className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
           <h1 className="App-title">BUBBLES</h1>
         </header>

        <body className="App-main">

          <div className="App-menu">
            <Card title={"Profile"} data1={"User"} data2={"Rating"}> </Card>
            <Card title={"Bubbles"}> </Card>
          </div>

          <div className="App-container">
            {showed}
          </div>

          <div className="App-right">
          <Card title={"Topics"} data1="Homework" data2="Exams" data3="Projects"> </Card>
          </div>

      </body>

      </div>
    );
  }
}

export default App;
