import React from "react";
import Bio from "../../components/bio/Bio";
import Post from "../../components/feed/post/Post";
import Share from "../../components/feed/share/Share";
import FriendPhotos from "../../components/friendPhotos/FriendPhotos";
import ProfileHeader from "../../components/profileHeader/ProfileHeader";
import ProfilePhotos from "../../components/profilePhotos/ProfilePhotos";
import Topbar from "../../components/topbar/Topbar";
import { Posts } from "../../dummyData";


const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="h-full">
        <ProfileHeader />
        <div className="grid grid-cols-12 mt-4 space-y-6">
          <div className="hidden md:grid md:col-span-2"></div>
          <div className="col-span-12 md:col-span-4 px-6 flex flex-col">
            <Bio />
            <ProfilePhotos />
            <FriendPhotos />

          </div>
          <div className="col-span-12 md:col-span-4 space-y-6">
            <Share />
            {Posts.map((post) => {
              return <Post key={post.id} post={post} />;
            })}
          </div>
          <div className="col-span-2"></div>
        </div>
      </div>
    </>
  );
};

export default Profile;
