import React, { useState } from "react";
import ChatSidebar from "../components/ChatSidebar";
import ChatWindow from "../components/ChatWindow";

// Sidebar ke mock data se naam/color match karne ke liye chhota lookup
const chatMeta = {
  1: { name: "Anika Chavan", color: "bg-pink-400" },
  2: { name: "Housemates", color: "bg-orange-400" },
  3: { name: "Ayesha", color: "bg-purple-400" },
  4: { name: "Maria Torres", color: "bg-blue-400" },
  5: { name: "Jordan", color: "bg-green-400" },
  6: { name: "Pablo Morales", color: "bg-yellow-400" },
};

const Chat = () => {
  const [activeChatId, setActiveChatId] = useState(3); // default: Ayesha

  const active = chatMeta[activeChatId];

  return (
    <div className="h-[90vh] flex border border-base-300 rounded-xl overflow-hidden">
      <ChatSidebar activeChatId={activeChatId} onSelectChat={setActiveChatId} />
      <ChatWindow chatName={active?.name} chatAvatarColor={active?.color} />
    </div>
  );
};

export default Chat;
