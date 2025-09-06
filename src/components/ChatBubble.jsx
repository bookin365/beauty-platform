import React from "react";

const ChatBubble = ({ isMe, text, time, avatar }) => {
  return (
    <div className={`flex ${isMe ? "justify-end" : "justify-start"} mb-3`}>
      {!isMe && (
        <img
          src={avatar}
          alt="user"
          className="w-8 h-8 rounded-full mr-2"
        />
      )}
      <div
        className={`max-w-xs px-4 py-2 rounded-2xl ${
          isMe ? "bg-blue-500 text-white" : "bg-gray-100 text-black"
        }`}
      >
        <p>{text}</p>
        <p className="text-xs opacity-70 mt-1">{time}</p>
      </div>
    </div>
  );
};

export default ChatBubble;
