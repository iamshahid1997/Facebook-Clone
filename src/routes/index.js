import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Profile from '../pages/profile/Profile';
import Home from '../pages/Home';

const index = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Routes>
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </>
  );
};

export default index;
