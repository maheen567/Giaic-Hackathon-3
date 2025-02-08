"use client";

import React, { useEffect, useState } from "react";
import { Bounce, toast } from "react-toastify";

const Comments = () => {
  const [comments, setComments] = useState<
    { username: string; comment: string; email: string }[]
  >([]);
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [email, setemail] = useState("");

  useEffect(() => {
    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  useEffect(() => {
    if (comments.length > 0) {
      localStorage.setItem("comments", JSON.stringify(comments));
    }
  }, [comments]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && comment && email) {
      const newComment = { username, comment, email };
      setComments([newComment, ...comments]);
      setUsername("");
      setComment("");
      toast.success(`${username} posted a comment!`, {
        position: "bottom-right",
        pauseOnHover: false,
        theme: "colored",
        transition: Bounce,
      });   
    }
  };

  return (
    <div className="py-5">
      <h3 className="font-semibold text-[24px] font-inter text-csBlack mb-8">
        Write a comment!
      </h3>
      <form action="#" onSubmit={handleSubmit} className="text-csBlack">
        <div className="flex flex-col sm:flex-row gap-5 mb-5">

          {/* For Username */}
          <div className="flex-1">
            <input
              type="text"
              placeholder="Name"
              className="w-full h-[56px] px-3 py-2 text-sm bg-transparent font-[500] text-[16px] border border-solid border-gray-300 focus:outline-none focus:ring placeholder:text-gray-500 focus:ring-csYellow focus:border-csYellow"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          {/* For Email */}
          <div className="flex-1">
            <input
              type="text"
              placeholder="Email"
              className="w-full h-[56px] px-3 py-2 text-sm bg-transparent font-[500] text-[16px] border border-solid border-gray-300 focus:outline-none focus:ring placeholder:text-gray-500 focus:ring-csYellow focus:border-csYellow"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
            />
          </div>
        </div>

        {/* For Comment Area */}

        <div className="mb-6">
          <textarea
            className="w-full px-3 py-2 text-[16px]  bg-transparent border border-solid border-gray-300 placeholder:text-gray-500 focus:outline-none focus:ring focus:ring-csYellow focus:border-csYellow"
            placeholder="Write a comment"
            rows={7}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>

        {/* Comment Post Button */}

        <button className="text-center py-[14px] px-8 bg-csYellow text-white text-sm font-medium hover:bg-yellow-500 transition text-nowrap cursor-pointer duration-300">
          Post comment
        </button>
      </form>

      {/* Displaying Users Comments */}
      <div >
        <h3 className="font-bold text-[30px] font-inter text-csBlack my-6">
          Comments
        </h3>
        {comments.map((item, index) => (
          <div
            key={index}
            className={
              "px-5 py-3 bg-gray-100 mb-3 flex flex-col items-start border-solid border-[#222] border"
            }
          >
            <h4 className="font-bold text-[18px] text-black uppercase">
              {item.username}
            </h4>
            <p className={"mt-1 max-w-[300px] break-words text-wrap "}>
              {item.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
