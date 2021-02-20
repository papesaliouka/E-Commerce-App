import React from 'react';
import {connect} from 'react-redux';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {createStructuredSelector} from 'reselect';
import { SelectCurrentUser } from '../../redux/user-reducer/user.selectors';
import { selectCartHidden } from '../../redux/cart-reducer/cart.selector';
import {HeaderContainer, LogoContainer, OptionLink, OptionsContainer} from './header.styles';


const Header= ({currentUser, hidden}) => {
  return(
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo/>
      </LogoContainer>
      <OptionsContainer >
        <OptionLink to='/shop' >
          SHOP
        </OptionLink>
        <OptionLink to='/contact' >
          CONTACT
        </OptionLink>
        {
          currentUser ?
          <OptionLink as= 'div' onClick= {()=> auth.signOut()}>SIGN OUT</OptionLink>
          : 
          <OptionLink  to='/signin'>SIGN IN </OptionLink>
        }
        <CartIcon/>
      </OptionsContainer>
      {
        hidden ? null : <CartDropdown/>
      }
    </HeaderContainer>
  );
}

const mapStateToProps = createStructuredSelector ({
  currentUser:SelectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);