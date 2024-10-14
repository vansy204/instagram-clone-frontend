import React, { useState } from "react";
import { BsBookmark, BsBookmarkFill, BsThreeDots } from "react-icons/bs";
import "./PostCard.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
const PostCard = () => {
  const [showDropdown, setShowDropDown] = useState(false);
  const [isPostLiked, setIsPostLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const handleClick = () => {
    setShowDropDown(!showDropdown);
  };
  const handlePostLike = () => {
    setIsPostLiked(!isPostLiked);
  };
  const handleSavePost = () => {
    setIsSaved(!isSaved);
  };
  return (
    <div>
      <div className="border rounded-md w-full">
        <div className="flex justify-between items-center w-full py-4 px-5">
          <div className="flex items-center ">
            <img
              className="h-12 w-12 rounded-full"
              src="https://cdn.pixabay.com/photo/2024/02/05/10/48/bird-8554204_640.jpg"
              alt=""
            />
            <div className="pl-2">
              <p className="font-semibold text-sm items-center">username</p>
              <p className="font-thin text-sm">localtion</p>
            </div>
          </div>
          <div className="dropdown">
            <BsThreeDots className="dots" onClick={handleClick} />
            <div className="dropdown-content">
              {showDropdown && (
                <p className="bg-black text-white py-1 px-4 rounded-md cursor-pointer">
                  Delete
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="w-full">
          <img
            className="w-full"
            src="https://cdn.pixabay.com/photo/2023/12/11/12/51/lynx-8443540_640.jpg"
            alt=""
          />
        </div>
        <div className="flex justify-between items-center w-full px-5 py-4 ">
          <div className="flex items-center space-x-2">
            {isPostLiked ? (
              <AiFillHeart
                className="text-2xl hover:opacity-50 cursor-pointer text-red-600"
                onClick={handlePostLike}
              />
            ) : (
              <AiOutlineHeart
                className="text-2xl hover:opacity-50 cursor-pointer"
                onClick={handlePostLike}
              />
            )}
            <FaRegComment className="text-xl hover:opacity-50 cursor-pointer" />
            <RiSendPlaneLine className="text-xl hover:opacity-50 cursor-pointer" />
          </div>
          <div className="cursor-pointer">
            {isSaved ? (
              <BsBookmarkFill onClick={handleSavePost} className="text-xl hover:opacity-50 cursor-pointer" />
            ) : (
              <BsBookmark onClick={handleSavePost}  className="text-xl hover:opacity-50 cursor-pointer" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
