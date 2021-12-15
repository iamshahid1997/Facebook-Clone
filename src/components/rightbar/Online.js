import React from "react";

const Online = (props) => {
  return (
    <div className="flex space-x-4 items-center w-full justify-center hover:bg-gray-700 rounded-lg p-2  relative">
      <img
        src={props.user.profilePicture}
        alt="profile"
        className="h-8 w-10 object-cover rounded-full "
      />
      <div className="absolute bg-green-500 w-3 h-3 left-4 bottom-2 rounded-full ">
        <p className="text-xs text-green-600 invisible">1</p>
      </div>
      <p className="font-semibold w-full ml-2">{props.user.username}</p>
    </div>
  );
};

export default Online;
