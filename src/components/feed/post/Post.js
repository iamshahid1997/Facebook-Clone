import React, { useState } from "react";
import { GiEarthAmerica } from "react-icons/gi";
import { Users } from "../../../dummyData";

const Post = (props) => {
  const [like, setLike] = useState(props.post.like);
  const [isLiked, setisliked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setisliked(!isLiked);
  };
  return (
    <div className="bg-gray-800 py-2 px-4 space-y-3 rounded-lg flex flex-col text-gray-400">
      <div className="flex space-x-3 items-center">
        <img
          src={
            Users.filter((user) => user.id === props.post.userId)[0]
              .profilePicture
          }
          alt="profile"
          className="h-10 w-10 object-cover shadow-3xl rounded-full"
        />
        <div className="flex flex-col text-sm">
          <p className="font-semibold w-full text-gray-50">
            {Users.filter((user) => user.id === props.post.userId)[0].username}
          </p>
          <p className="font-semibold w-full flex items-center text-xs">
            <span>{props.post.date}</span>
            <GiEarthAmerica className="mx-1" /> {props?.post.location}
          </p>
        </div>
      </div>
      <div>
        <p className="mb-2">{props.post?.desc}</p>
        <img
          src={props.post.photo}
          alt="profile"
          className="h-56 w-full object-cover shadow-3xl"
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center" onClick={() => likeHandler()}>
          <img
            src="/assets/like.png"
            alt="profile"
            className="h-6 w-6 object-cover rounded-full shadow-3xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          />
          <img
            src="/assets/heart.png"
            alt="profile"
            className="h-6 w-6 object-cover rounded-full shadow-3xl -ml-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          />
          <p className="text-xs text-gray-400 font-semibold ml-3">
            {like} likes
          </p>
        </div>
        <div className="text-sm font-semibold">
          <p>{props.post.comment} comments</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
