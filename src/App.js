import React, { Component } from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Homepage/>
      </div>
    );
  }
}


export default App;
