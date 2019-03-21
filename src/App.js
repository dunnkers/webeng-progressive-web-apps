import React, { Component } from 'react';
import logo from './rug-logo.svg';
import heavyimg from './heavy-img.jpeg';
import heavyimg2 from './heavy-img2.jpeg';
import heavyimg3 from './heavy-img3.jpeg';
import './App.css';

class App extends Component {
  // Infinite Series PI calculation.
  calculatePI(iterations = 10000) {
    console.time('calculating pi');
    let pi = 0;
    let iterator = sequence();

    for (let i = 0; i < iterations; i++) {
      pi += 4 / iterator.next().value;
      pi -= 4 / iterator.next().value;
    }

    function* sequence() {
      let i = 1;
      while (true) {
        yield i;
        i += 2;
      }
    }

    console.timeEnd('calculating pi');
    return pi;
  }

  state = {
    pi: -1
  }

  componentDidMount() {
    let pi = this.calculatePI(100000000);
    this.setState({ pi });
  }

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
        <div className="content">
          <code>
            {this.state.pi}
          </code>
        </div>
        <div className="content">
          <h1>Lorem ipsum dolor sit amet consectetuer adipiscing 
elit</h1>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing 
elit. Aenean commodo ligula eget dolor. Aenean massa 
<strong>strong</strong>. Cum sociis natoque penatibus 
et magnis dis parturient montes, nascetur ridiculus 
mus. Donec quam felis, ultricies nec, pellentesque 
eu, pretium quis, sem. Nulla consequat massa quis 
enim. Donec pede justo, fringilla vel, aliquet nec, 
vulputate eget, arcu. In enim justo, rhoncus ut, 
imperdiet a, venenatis vitae, justo. Nullam dictum 
felis eu pede 
mollis pretium. Integer tincidunt. Cras dapibus. 
Vivamus elementum semper nisi. Aenean vulputate 
eleifend tellus. Aenean leo ligula, porttitor eu, 
consequat vitae, eleifend ac, enim. Aliquam lorem ante, 
dapibus in, viverra quis, feugiat a, tellus. Phasellus 
viverra nulla ut metus varius laoreet. Quisque rutrum. 
Aenean imperdiet. Etiam ultricies nisi vel augue. 
Curabitur ullamcorper ultricies nisi.</p>
<h1>Lorem ipsum dolor sit amet consectetuer adipiscing 
elit</h1>
<h2>Aenean commodo ligula eget dolor aenean massa</h2>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing 
elit. Aenean commodo ligula eget dolor. Aenean massa. 
Cum sociis natoque penatibus et magnis dis parturient 
montes, nascetur ridiculus mus. Donec quam felis, 
ultricies nec, pellentesque eu, pretium quis, sem.</p>
<h2>Aenean commodo ligula eget dolor aenean massa</h2>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing 
elit. Aenean commodo ligula eget dolor. Aenean massa. 
Cum sociis natoque penatibus et magnis dis parturient 
montes, nascetur ridiculus mus. Donec quam felis, 
ultricies nec, pellentesque eu, pretium quis, sem.</p>
<ul>
  <li>Lorem ipsum dolor sit amet consectetuer.</li>
  <li>Aenean commodo ligula eget dolor.</li>
  <li>Aenean massa cum sociis natoque penatibus.</li>
</ul>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing 
elit. Aenean commodo ligula eget dolor. Aenean massa. 
Cum sociis natoque penatibus et magnis dis parturient 
montes, nascetur ridiculus mus. Donec quam felis, 
ultricies nec, pellentesque eu, pretium quis, sem.</p>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing 
elit. Aenean commodo ligula eget dolor. Aenean massa. 
Cum sociis natoque penatibus et magnis dis parturient 
montes, nascetur ridiculus mus. Donec quam felis, 
ultricies nec, pellentesque eu, pretium quis, sem.</p>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing 
elit. Aenean commodo ligula eget dolor. Aenean massa. 
Cum sociis natoque penatibus et magnis dis parturient 
montes, nascetur ridiculus mus. Donec quam felis, 
ultricies nec, pellentesque eu, pretium quis, sem.</p>
        </div>
      </div>
    );
  }
}

export default App;
