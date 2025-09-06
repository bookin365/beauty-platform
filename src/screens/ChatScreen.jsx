import React, { useState } from "react";
import ChatBubble from "../components/ChatBubble.jsx";

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Здравствуйте!", sender: "other" },
    { id: 2, text: "Привет, как дела?", sender: "me" },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { id: Date.now(), text: input, sender: "me" }]);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg) => (
          <ChatBubble key={msg.id} message={msg} />
        ))}
      </div>

      <div className="p-4 flex space-x-2 border-t">
        <input
          type="text"
          className="flex-1 border rounded px-3 py-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Введите сообщение..."
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 bg-pink-500 text-white rounded"
        >
          Отправить
        </button>
      </div>
    </div>
  );
};

export default ChatScreen;
