import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';


const HatsPage = () => (
  <div>
    <h1> HATS PAGES</h1>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/hats' component={HatsPage}/>
        </Switch>
        
      </div>
    );
  }
}


export default App;
