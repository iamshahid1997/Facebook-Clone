import React from "react";
import { BsFillCameraFill } from "react-icons/bs";
import { MdEdit } from 'react-icons/md'

const ProfileHeader = () => {
  return (
    <div className="grid grid-cols-12 bg-gray-800 pb-16">
      <div className="hidden md:block md:col-span-2"></div>
      <div className="col-span-12 md:col-span-8">
        <div className="relative">
          <img
            src="assets/post/1.jpeg"
            className="w-full h-48 md:h-64 object-cover rounded-xl rounded-t-none"
            alt="cover"
          />
          <div className=" absolute -bottom-24 left-10">
            <div className=" flex items-center space-x-6">
              <img
                src="assets/person/2.jpeg"
                className="w-32 h-32 rounded-full object-cover  border-4 border-gray-800 relative"
                alt="cover"
              />
              <BsFillCameraFill className="absolute -bottom-0 -left-4 px-2 text-4xl rounded-full bg-gray-800 text-gray-50 hover:bg-gray-600" />
              <div className="flex flex-col justify-center mt-6">
                <p className="text-xl md:text-3xl font-bold tracking-wide">
                  Shahid Ansari
                </p>
                <p className="text-lg font-semibold text-gray-400">
                  1.4k Friends
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-20 -mb-10 md:mb-0 md:mt-6 mr-6 ">
            <button className = 'bg-gray-700 rounded px-3 text-gray-300 font-semibold py-1 flex space-x-2 items-center hover:bg-gray-600'><span className = 'mr-2'><MdEdit /></span>Edit Profile</button>
        </div>
      </div>
      <div className="hidden md:block md:col-span-2"></div>
    </div>
  );
};

export default ProfileHeader;
