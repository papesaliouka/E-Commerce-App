import React from 'react';
import {connect} from 'react-redux';


import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { toggleCarthidden } from '../../redux/cart-reducer/cart.actions';

import './cart-icon.styles.scss';
import { selectCartItemsCount } from '../../redux/cart-reducer/cart.selector';

const CartIcon = ({toggleCarthidden, itemCount}) => {
  return(
    <div className='cart-icon'>
      <ShoppingIcon className='shopping-icon' onClick={toggleCarthidden}/>
      <span className='item-count'>{itemCount}</span>
    </div>
  );
}

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps= dispatch => ({
  toggleCarthidden: () => dispatch(toggleCarthidden())
})
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);