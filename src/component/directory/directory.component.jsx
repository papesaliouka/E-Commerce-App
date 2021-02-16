import React, {Component} from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import SHOPE_DATA from '../../pages/shop.data'

class Directory extends Component {
  constructor () {
    super();
    this.state={
      sections: SHOPE_DATA
    }
  }

  render(){
    const {sections} = this.state;
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
}

export default Directory;
