import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';




class App extends Component {
  render() {
    return (
      <div className='app'>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/shop' component={ShopPage}/>
        </Switch>
        
      </div>
    );
  }
}


export default App;
