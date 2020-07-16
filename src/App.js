import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Menu from './components/Menu/Menu';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
            <Menu />        
        </div>
      </Router>
    );
  }
}

export default App;
