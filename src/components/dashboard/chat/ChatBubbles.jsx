import React from "react";

export const ChatBubble = ({ message, isUser }) => {
  return (
    <div
      className={`max-w-[70%] font-serif p-2 text-t12 rounded-lg mb-3 ${
        isUser ? "bg-[#27272A] text-white ml-auto" : "bg-gray-200 text-black"
      }`}
    >
      <p>{message}</p>
    </div>
  );
};
