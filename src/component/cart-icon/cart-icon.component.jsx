import React from 'react';
import {connect} from 'react-redux';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { toggleCarthidden } from '../../redux/cart-reducer/cart.actions';

import './cart-icon.styles.scss';

const CartIcon = ({toggleCarthidden}) => {
  return(
    <div className='cart-icon'>
      <ShoppingIcon className='shopping-icon' onClick={toggleCarthidden}/>
      <span className='item-count'>0</span>
    </div>
  );
}
const mapDispatchToProps= dispatch => ({
  toggleCarthidden: () => dispatch(toggleCarthidden())
})
export default connect(null,mapDispatchToProps)(CartIcon);