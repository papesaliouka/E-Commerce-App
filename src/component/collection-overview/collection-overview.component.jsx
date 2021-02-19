import React from 'react';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selector';


import CollectionPreview from '../../component/collection-preview/collection-preview.component';


import './collection-overview.styles.scss';

const CollectionOverview = ({collections}) => {
  return(
    <div className='collection-overview'>
      {
        collections.map(({id, ...otherCollectionsProps}) => (
          <CollectionPreview key={id} {...otherCollectionsProps} /> 
        ))
      }
    </div>
  );
}

const mapStateToProps= createStructuredSelector({
  collections: selectCollectionsForPreview
})


export default connect(mapStateToProps)(CollectionOverview);