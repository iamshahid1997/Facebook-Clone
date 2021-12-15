import React from "react";
import { Users } from "../../dummyData";
import { MdCopyright } from "react-icons/md";

const FriendPhotos = () => {
  return (
    <div className = ' sticky top-16'>
      <div className="bg-gray-800 rounded-lg p-4 w-full">
        <p className="font-semibold text-lg mb-3">Friends</p>
        <div className="grid grid-cols-3 ">
          {Users.map((user) => {
            return (
              <div className="">
                <img
                  src={user.profilePicture}
                  className="w-full h-32 object-cover p-1 rounded-lg"
                  alt="cover"
                />
                <p className="text-xs font-semibold mb-2">{user.username}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col text-gray-400 text-xs space-y-1 mb-4 md:mb-0">
        <p className="flex items-center mt-4">
          Privacy Terms Advertising Ad choices Cookies More FaceBook{" "}
          <MdCopyright className="mx-1" /> 2021
        </p>
      </div>
    </div>
  );
};

export default FriendPhotos;
