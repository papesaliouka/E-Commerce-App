import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';

import './header.styles.scss';


class Header extends Component {
  constructor(){
    super()
    this.state={
      '':""
    }
  }
  render(){
    return(
      <div className='header'>
        <Link to='/' className='logo-container'>
          <Logo className='logo'/>
        </Link>
        <div className='options'>
          <Link to='/shop' className='option'>
            SHOP
          </Link>
          <Link to='/contact' className='option'>
            CONTACT
          </Link>
          </div>
        </div>
    );
  }
}

export default Header;