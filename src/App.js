import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Menu from './components/Menu/Menu';
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="container">
            <Menu />        
        </div>
      </Router>
    );
  }
}

export default App;
