import React from "react";
import { Posts } from "../../dummyData";

const ProfilePhotos = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 w-full mb-4 md:mb-0">
      <p className="font-semibold text-lg mb-3">Photos</p>
      <div className="grid grid-cols-3 space-x-1 space-y-1">
        {Posts.map((post) => {
          return (
            <div>
              <img
                src={post.photo}
                className=" w-full h-full object-cover"
                alt="cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfilePhotos;
