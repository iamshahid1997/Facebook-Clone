import React from 'react';
import TopbarLogo from './TopbarLogo';
import TopbarNavs from './TopbarNavs';
import TopbarProfile from './TopbarProfile';

const Topbar = () => {
    return (
        <div className = 'bg-gray-800 grid grid-cols-12 h-auto md:h-14 gap-x-8 w-full flex items-center px-3 border-b border-gray-700 sticky top-0 z-50'>
            <TopbarLogo />
            <TopbarNavs />
            <TopbarProfile />
        </div>
    )
}

export default Topbar
