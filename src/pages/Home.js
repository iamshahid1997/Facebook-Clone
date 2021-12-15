import React from "react";
import Feed from "../components/feed/Feed";
import RightBar from "../components/rightbar/RightBar";
import Sidebar from "../components/sidebar/Sidebar";
import Topbar from "../components/topbar/Topbar";

const Home = () => {
  return (
    <>
      <Topbar />
      <div className = 'grid grid-cols-12'>
        <Sidebar />
        <Feed />
        <RightBar />
      </div>
    </>
  );
};

export default Home;
