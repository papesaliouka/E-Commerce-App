import React from 'react';
import './homepage.styles.scss';
import Directory from '../../component/directory/directory.component'

const Homepage = () => {
  return (
    <div className='homepage'>
      <Directory/>
    </div>
  );
}

export default Homepage;