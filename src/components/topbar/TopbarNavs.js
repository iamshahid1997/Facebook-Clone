import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { IoVideocam } from "react-icons/io5";
import { BsFillCalendar2EventFill } from "react-icons/bs";


const TopbarNavs = () => {
  const [selectedNav, setSelectedNav] = useState(0);
  const icons = [<AiFillHome />, <IoVideocam />, <BsFillCalendar2EventFill />];
  return (
    <>
      <div className="col-span-12 md:col-span-6 flex text-gray-500 text-3xl items-center justify-center">
        {icons.map((icon, index) => {
          return (
            <div
              className={`${
                index === selectedNav
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : ""
              } p-3 w-full flex justify-center`}
              onClick={() => setSelectedNav(index)}
            >
              <p>{icon}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TopbarNavs;
