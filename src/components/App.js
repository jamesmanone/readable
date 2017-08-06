import React, { Component } from 'react';
import Navbar from './common/Navbar';
import RouterOutput from './Routes';

class App extends Component {
  render() {
    return (
        <div>
          <Navbar />
          <RouterOutput />
        </div>
    );
  }
}

export default App;
