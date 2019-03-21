import React, { Component } from 'react';
import logo from './rug-logo.svg';
import heavyimg from './heavy-img.webp';
import heavyimg2 from './heavy-img2.webp';
import heavyimg3 from './heavy-img3.webp';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" width={300} />
          <p>
            Web Engineering RUG 18-19.
          </p>
        </header>
        <img src={heavyimg} alt="heavy" width={400} />
        <img src={heavyimg2} alt="heavy" width={400} />
        <img src={heavyimg3} alt="heavy" width={400} />
      </div>
    );
  }
}

export default App;
