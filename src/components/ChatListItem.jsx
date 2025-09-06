import React from "react";

const ChatListItem = ({ avatar, name, message, time, unread }) => {
  return (
    <div className="flex items-center justify-between border-b pb-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg">
      <div className="flex items-center">
        <img
          src={avatar}
          alt={name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-sm text-gray-600 truncate w-48">{message}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-xs text-gray-400">{time}</p>
        {unread && (
          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
            {unread}
          </span>
        )}
      </div>
    </div>
  );
};

export default ChatListItem;
