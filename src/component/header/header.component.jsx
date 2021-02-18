import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {createStructuredSelector} from 'reselect';
import { SelectCurrentUser } from '../../redux/user-reducer/user.selectors';
import { selectCartHidden } from '../../redux/cart-reducer/cart.selector';


const Header= ({currentUser, hidden}) => {
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
        {
          currentUser ?
          <div className= 'option' onClick= {()=> auth.signOut()}>SIGN OUT</div>
          : 
          <Link className='option' to='/signin'>SIGN IN </Link>
        }
        <CartIcon/>
      </div>
      {
        hidden ? null : <CartDropdown/>
      }
    </div>
  );
}

const mapStateToProps = createStructuredSelector ({
  currentUser:SelectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);