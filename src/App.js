import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import './App.css';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import Header from './component/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';

import {createStructuredSelector} from 'reselect'
import { SelectCurrentUser } from './redux/user-reducer/user.selectors';
import CheckoutPage from './pages/checkout-page/checkout.component';
import { checkUserSession } from './redux/user-reducer/user.actions';




class App extends Component {

  unsubscribefromAuth = null;

  componentDidMount() {
    const {checkUserSession} = this.props;
    checkUserSession()
    
  }

  componentWillUnmount(){
    this.unsubscribefromAuth();
  }
  
  render() {
    return (
      <div className='app'>
        <Header/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route exact path='/signin' render= { () => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage/>) }  />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps= createStructuredSelector({
 currentUser: SelectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
checkUserSession: () => dispatch(checkUserSession()) 
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
