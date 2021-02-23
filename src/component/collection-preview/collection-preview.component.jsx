import React from 'react'; 
import {withRouter} from 'react-router-dom';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = ({title, items,match, history}) => {
  return(
    <div className='collection-preview'>
      <h1  onClick={()=> history.push(`shop/${title.toLowerCase()}`)} className='title'> {title.toUpperCase()}</h1>
      <div className='preview'>
        {
          items.filter((item,idx) => idx<4)
          .map((item) =>
          <CollectionItem key={item.id} item={item}/>
          )
        }
      </div>
    </div>
  );
}

export default withRouter(CollectionPreview);