import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import './App.css';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import Header from './component/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user-reducer/user.actions';




class App extends Component {

  unsubscribefromAuth = null;

  componentDidMount() {

    const {setCurrentUser} = this.props;

    this.unsubscribefromAuth=auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
          }); 
      } else {
        setCurrentUser(userAuth);
      }      
    });
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
          <Route exact path='/signin' render= { () => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage/>) }  />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps= ({user}) => ({
 currentUser: user.currentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
