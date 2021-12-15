import React from 'react';
import { BsMessenger } from 'react-icons/bs';
import { IoNotificationsCircle } from 'react-icons/io5';
import { FaUserFriends } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TopbarProfile = () => {
  return (
    <div className='col-span-3 flex items-center grid grid-cols-12 hidden md:grid'>
      <div className='col-span-6 flex space-x-4 items-center w-full justify-center'>
        <Link to='/profile'>
          <img
            src='/assets/person/1.jpeg'
            alt='profile'
            className='h-8 w-10 object-cover shadow-3xl rounded-full'
          />
        </Link>
        <p className='font-semibold w-full ml-2'>
          <Link to='/profile'>Shahid</Link>
        </p>
      </div>

      <div className='col-span-6 flex items-center w-full justify-between pr-4'>
        <div className='relative'>
          <BsMessenger className='text-blue-400 text-2xl' />
          <span className='bg-red-500 flex items-center justify-center rounded-full w-2 h-2 absolute p-2 text-xs font-semibold -top-1 -right-2 '>
            2
          </span>
        </div>
        <div className='relative'>
          <IoNotificationsCircle className='text-blue-400 text-2xl' />
          <span className='bg-red-500 flex items-center justify-center rounded-full w-2 h-2 absolute p-2  text-xs font-semibold -top-1 -right-2  '>
            10
          </span>
        </div>
        <div className='relative'>
          <FaUserFriends className='text-blue-400 text-2xl' />
          <span className='bg-red-500 flex items-center justify-center rounded-full w-2 h-2 absolute p-2 text-xs font-semibold -top-1 -right-2  '>
            3
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopbarProfile;
