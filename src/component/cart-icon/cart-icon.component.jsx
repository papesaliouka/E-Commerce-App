import React from 'react';
import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect'


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

const mapStateToProps = createStructuredSelector ({
  itemCount: selectCartItemsCount
})

const mapDispatchToProps= dispatch => ({
  toggleCarthidden: () => dispatch(toggleCarthidden())
})
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);