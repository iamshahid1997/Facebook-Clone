import React from "react";
import Share from "./share/Share";
import Post from "./post/Post";
import { Posts } from "../../dummyData";

const Feed = () => {
  return (
    <div className="col-span-12 md:col-span-6 m-10 space-y-6">
      <Share />
      {Posts.map((post) => {
        return <Post key = {post.id} post={post} />;
      })}
    </div>
  );
};

export default Feed;
