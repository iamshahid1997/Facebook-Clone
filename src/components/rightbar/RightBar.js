import React from "react";
import { Users } from "../../dummyData";
import Online from "./Online";

const RightBar = () => {
  return (
    <div className="col-span-12 md:col-span-3 my-10 space-y-6 px-6 sticky top-24 z-10 mx-auto ">
      <div className="flex flex-col">
        <div className="flex space-x-3">
          <img src="/assets/gift.png" alt="birthday" className="w-8 h-8" />
          <p className="text-sm text-gray-400 font-semibold">
            <span className="text-gray-50">Shahid Ansari</span> and{" "}
            <span className="text-gray-50">3 other friends</span> have a
            birthday today.
          </p>
        </div>
        <div className="my-6 border-b border-gray-400">
          <img
            src="/assets/ad.png"
            alt="birthday"
            className=" h-1/3 rounded-xl mb-6"
          />
        </div>

        <div className="flex flex-col">
          <p className=" text-gray-400 font-semibold mb-6">Online Friends</p>
          {Users.map((user) => {
            return <Online user={user} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default RightBar;
