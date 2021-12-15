import React from 'react';
import { GoSearch } from 'react-icons/go';
import { IoVideocam } from 'react-icons/io5';
import { MdPhotoLibrary } from 'react-icons/md';
import { BsEmojiLaughingFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Share = () => {
  return (
    <div className='col-span-3 bg-gray-800 py-2 px-4  rounded-lg flex flex-col divide-y divide-gray-700 text-gray-400'>
      <div className='flex space-x-3 items-center mb-4'>
        <Link to='/profile'>
          <img
            src='/assets/person/1.jpeg'
            alt='profile'
            className='h-10 w-10 object-cover shadow-3xl rounded-full'
          />
        </Link>
        <div className='bg-gray-700 rounded-full w-full px-3 h-10 flex items-center text-gray-400 font-semibold'>
          <GoSearch />
          <input
            placeholder="What's on your mind, Shahid?"
            className='ml-3 focus:outline-none border-none bg-gray-700 w-full text-xs md:text-sm'
          />
        </div>
      </div>
      <div className='grid grid-cols-3'>
        <div className='flex items-center w-full justify-center px-2 py-3 hover:bg-gray-600 mt-2 rounded mx-auto cursor-pointer'>
          <IoVideocam className='text-2xl text-red-400 h-6 w-10 mr-2 hidden md:block' />
          <p className='font-semibold text-xs'>Live Video</p>
        </div>
        <div className='flex items-center w-full justify-center px-2 py-3 hover:bg-gray-600 mt-2 rounded mx-auto cursor-pointer'>
          <MdPhotoLibrary className='text-2xl text-green-400 h-6 w-10 mr-2 hidden md:block' />
          <p className='font-semibold text-xs'>Photo/Video</p>
        </div>
        <div className='flex items-center w-full justify-center px-2 py-3 hover:bg-gray-600 mt-2 rounded mx-auto cursor-pointer'>
          <BsEmojiLaughingFill className='text-2xl text-yellow-300 h-6 w-10 mr-2 hidden md:block' />
          <p className='font-semibold text-xs'>Photo/Video</p>
        </div>
      </div>
    </div>
  );
};

export default Share;
