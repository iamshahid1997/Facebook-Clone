import React from 'react';
import { GoSearch } from 'react-icons/go';
import { Link } from 'react-router-dom';

const Searchbar = () => {
  return (
    <div className='flex items-center'>
      <div className='bg-gray-700 rounded-full w-full px-3 h-8 flex items-center text-gray-400 font-semibold'>
        <GoSearch />
        <input
          placeholder='Search Facebook'
          className='ml-3 focus:outline-none border-none bg-gray-700 w-full'
        />
      </div>
      <Link to='/profile'>
        <img
          src='/assets/person/1.jpeg'
          alt='profile'
          className='h-8 w-10 object-cover shadow-3xl rounded-full md:hidden ml-3'
        />
      </Link>
    </div>
  );
};

export default Searchbar;
