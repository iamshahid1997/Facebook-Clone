import React from 'react';
import { FaUserFriends } from 'react-icons/fa';
import { BsFillCalendar2EventFill } from 'react-icons/bs';
import { MdCopyright } from 'react-icons/md';
import { IoVideocam } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='col-span-3 sticky left-0 top-14 h-almost py-4 pl-2 text-sm  border-r border-gray-700 md:flex flex-col justify-between hidden '>
      <div className='flex flex-col space-y-1 '>
        <div className='flex space-x-4 items-center w-full justify-center hover:bg-gray-700 rounded-lg p-2'>
          <Link to='/profile'>
            <img
              src='/assets/person/1.jpeg'
              alt='profile'
              className='h-8 w-10 object-cover shadow-3xl rounded-full'
            />
          </Link>
          <p className='font-semibold w-full ml-2'>
            <Link to='/profile'>Shahid Ansari</Link>
          </p>
        </div>
        <div className='flex space-x-4 items-center w-full justify-center hover:bg-gray-700 rounded-lg px-2 py-3'>
          <FaUserFriends className='text-3xl text-green-500 h-4 w-10' />
          <p className='font-semibold w-full ml-2'>Friends</p>
        </div>
        <div className='flex space-x-4 items-center w-full justify-center hover:bg-gray-700 rounded-lg px-2 py-3'>
          <BsFillCalendar2EventFill className='text-3xl text-red-400 h-4 w-10 ' />
          <p className='font-semibold w-full ml-2'>Events</p>
        </div>
        <div className='flex space-x-4 items-center w-full justify-center hover:bg-gray-700 rounded-lg px-2 py-3'>
          <IoVideocam className='text-3xl text-yellow-400 h-4 w-10 ' />
          <p className='font-semibold w-full ml-2'>Videos</p>
        </div>
      </div>
      <div className='flex flex-col text-gray-400 text-xs space-y-1'>
        <p>Privacy Terms Advertising Ad choices Cookies More</p>
        <p className='flex items-center'>
          FaceBook <MdCopyright className='mx-1' /> 2021
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
