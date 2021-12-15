import React from 'react';
import Searchbar from './Searchbar';
import { Link } from 'react-router-dom';

const TopbarLogo = () => {
  return (
    <div className='col-span-11 md:col-span-3 flex items-center w-full'>
      <div className='flex items-center mr-2'>
        <Link to='/'>
          <img src='/assets/facebook.png' alt='facebook' />
        </Link>
      </div>
      <Searchbar />
    </div>
  );
};

export default TopbarLogo;
