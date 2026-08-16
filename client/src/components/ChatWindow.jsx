import React, { useState } from "react";
import { FiSmile, FiPaperclip, FiSend } from "react-icons/fi";

// Mock messages — baad mein backend/socket see aayengee
const mockMessages = [
  { id: 1, fromMe: false, text: "Hey, any plans for Saturday?", time: "11:50" },
  {
    id: 2,
    fromMe: false,
    text: "Was thinking we could all get together at the park.",
    time: "11:50",
  },
  { id: 3, fromMe: true, text: "Deal, can't wait!", time: "11:51" },
];

const ChatWindow = ({ chatName, chatAvatarColor }) => {
  const [messages, setMessages] = useState(mockMessages);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        fromMe: true,
        text: input,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  if (!chatName) {
    return (
      <div className="flex-1 flex items-center justify-center text-base-content/50">
        Chat khol ke shuru karo 👋
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col h-full bg-base-200/40">
      {/* Header — sirf naam + status, koi call button nahi */}
      <div className="flex items-center gap-3 p-3 border-b border-base-300 bg-base-100">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${chatAvatarColor}`}
        >
          {chatName.charAt(0)}
        </div>
        <div>
          <div className="font-medium">{chatName}</div>
          <div className="text-xs text-success">online</div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.fromMe ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[70%] px-3 py-2 rounded-2xl text-sm ${
                msg.fromMe
                  ? "bg-primary text-primary-content rounded-br-sm"
                  : "bg-base-100 border border-base-300 rounded-bl-sm"
              }`}
            >
              <p>{msg.text}</p>
              <span
                className={`block text-[10px] mt-1 text-right ${
                  msg.fromMe ? "text-primary-content/70" : "text-base-content/50"
                }`}
              >
                {msg.time}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Input bar */}
      <div className="p-3 border-t border-base-300 bg-base-100 flex items-center gap-2">
        <button className="btn btn-ghost btn-circle btn-sm">
          <FiSmile size={20} />
        </button>
        <button className="btn btn-ghost btn-circle btn-sm">
          <FiPaperclip size={20} />
        </button>
        <input
          type="text"
          placeholder="Type a message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="input input-bordered flex-1 h-10"
        />
        <button className="btn btn-primary btn-circle btn-sm" onClick={handleSend}>
          <FiSend size={16} />
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
