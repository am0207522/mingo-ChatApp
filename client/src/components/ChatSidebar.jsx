import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

// Mock data — baad mein backend se aayega
const mockChats = [
  {
    id: 1,
    name: "Anika Chavan",
    lastMessage: "Fingers crossed! Let me know if you need a...",
    time: "9:34",
    unread: 6,
    avatarColor: "bg-pink-400",
  },
  {
    id: 2,
    name: "Housemates",
    lastMessage: "Maya: I found the valve and turned it off...",
    time: "12:09",
    unread: 1,
    avatarColor: "bg-orange-400",
  },
  {
    id: 3,
    name: "Ayesha",
    lastMessage: "I'll bring snacks. You bring the music. Deal?",
    time: "11:53",
    unread: 0,
    avatarColor: "bg-purple-400",
  },
  {
    id: 4,
    name: "Maria Torres",
    lastMessage: "Uh, I think I'll stick to sunbathing, thank you...",
    time: "Yesterday",
    unread: 0,
    avatarColor: "bg-blue-400",
  },
  {
    id: 5,
    name: "Jordan",
    lastMessage: "🎤 0:12",
    time: "Saturday",
    unread: 0,
    avatarColor: "bg-green-400",
  },
  {
    id: 6,
    name: "Pablo Morales",
    lastMessage: "Not yet, but I'm planning to tackle that tonight...",
    time: "Saturday",
    unread: 0,
    avatarColor: "bg-yellow-400",
  },
];

const ChatSidebar = ({ activeChatId, onSelectChat }) => {
  const [search, setSearch] = useState("");

  const filteredChats = mockChats.filter((chat) =>
    chat.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full sm:w-80 h-full border-r border-base-300 flex flex-col bg-base-100">
      {/* Headerr */}
      <div className="p-4 border-b border-base-300">
        <h2 className="text-xl font-bold mb-3">Chats</h2>
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50" />
          <input
            type="text"
            placeholder="Search chats"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input input-bordered w-full pl-9 h-10"
          />
        </div>
      </div>

      {/* Chat list */}
      <div className="flex-1 overflow-y-auto">
        {filteredChats.map((chat) => (
          <button
            key={chat.id}
            onClick={() => onSelectChat(chat.id)}
            className={`w-full flex items-center gap-3 p-3 text-left hover:bg-base-200 transition-colors ${
              activeChatId === chat.id ? "bg-base-200" : ""
            }`}
          >
            <div
              className={`w-11 h-11 rounded-full flex items-center justify-center text-white font-semibold shrink-0 ${chat.avatarColor}`}
            >
              {chat.name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="font-medium truncate">{chat.name}</span>
                <span className="text-xs text-base-content/50 shrink-0 ml-2">
                  {chat.time}
                </span>
              </div>
              <div className="flex items-center justify-between mt-0.5">
                <span className="text-sm text-base-content/60 truncate">
                  {chat.lastMessage}
                </span>
                {chat.unread > 0 && (
                  <span className="badge badge-primary badge-sm ml-2 shrink-0">
                    {chat.unread}
                  </span>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChatSidebar;
