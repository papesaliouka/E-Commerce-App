import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import directorySelector from '../../redux/directory/directory..selectors';


const Directory = ({sections}) => {
    return(
      <div className='directory-menu'>
        {
          sections.map(({id, ...otherSectionsProps}) => {
          return  <MenuItem key={id} {...otherSectionsProps}/>
          })
        }
      </div>
    );
  }

  const mapStateToProps = createStructuredSelector({
    sections: directorySelector
  })

export default connect(mapStateToProps)(Directory);
