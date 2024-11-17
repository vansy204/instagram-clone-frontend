import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  BsBookmark,
  BsBookmarkFill,
  BsEmojiSmile,
  BsThreeDots,
} from "react-icons/bs";
import CommentCard from "./CommentCard";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import "./CommentModal.css";
import { useDispatch } from "react-redux";
import { createCommentAction } from "../../Redux/Comment/Action";
import { useParams } from "react-router-dom";
const CommentModal = ({
  onClose,
  isOpen,
  isSaved,
  isPostLiked,
  handlePostLike,
  handleSavePost,
}) => {
  const [commentContent, setCommentContent] = useState();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const { postId } = useParams();
  return (
    <div>
      <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <div className="flex h-[75vh]">
              <div className="w-[45%] flex flex-col justify-center">
                <img
                  className="max-h-full w-full"
                  src="https://cdn.pixabay.com/photo/2023/11/02/05/23/woman-8359670_640.png"
                  alt=""
                />
              </div>
              <div className="w-[55%] pl-10 relative ">
                <div className="flex justify-between items-center py-5">
                  <div className="flex items-center">
                    <div>
                      <img
                        className="w-9 h-9 rounded-full"
                        src="https://cdn.pixabay.com/photo/2024/09/18/13/41/iceland-9056229_640.jpg"
                        alt=""
                      />
                    </div>
                    <div className="ml-2">
                      <p>username</p>
                    </div>
                  </div>
                  <BsThreeDots />
                </div>
                <hr />
                <div className="comment">
                  {[1, 1, 1, 1, 1, 1, 1].map((item) => (
                    <CommentCard />
                  ))}
                </div>
                <div className="absolute bottom-0 w-[90%]">
                  <div className="flex justify-between items-center w-full py-4 ">
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
                        <BsBookmarkFill
                          onClick={handleSavePost}
                          className="text-xl hover:opacity-50 cursor-pointer"
                        />
                      ) : (
                        <BsBookmark
                          onClick={handleSavePost}
                          className="text-xl hover:opacity-50 cursor-pointer"
                        />
                      )}
                    </div>
                  </div>
                  <div className="w-full py-2">
                    <p>10 likes</p>
                    <p className="opacity-50 text-sm">1 day ago</p>
                  </div>

                  <div className="flex items-center w-full ">
                    <BsEmojiSmile />
                    <input
                      className="commentInputs"
                      type="text"
                      placeholder="Add a comment..."
                      onChange={(e) => setCommentContent(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          const data = {
                            postId,
                            jwt: token,
                            content: commentContent,
                          };
                          dispatch(createCommentAction(data));
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CommentModal;
