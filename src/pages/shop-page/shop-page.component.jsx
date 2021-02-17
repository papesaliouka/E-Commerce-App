import React, { Component } from 'react'; 
import SHOPE_DATA from '../shop.data';
import CollectionPreview from '../../component/collection-preview/collection-preview.component';

class ShopPage extends Component {
  constructor() {
    super()
    this.state={
      collections: SHOPE_DATA,
    }
  }
  render(){
    const {collections}= this.state;
    return (
      <div className='shop-page'>
        {
          collections.map(({id, ...otherCollectionsProps}) => (
           <CollectionPreview key={id} {...otherCollectionsProps} /> 
          ))
        }
      </div>
    );
  }
}

export default ShopPage;
