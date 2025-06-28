"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, Phone, Mail, Bot, User, ArrowLeft } from "lucide-react";

type ChatItemType = "AI" | "SMS" | "Call" | "Email";

const chatItems = [
  {
    id: 1,
    type: "AI" as ChatItemType,
    label: "Body Temperature",
    time: "10:00 AM",
    sender: "HealCo Assistant",
    active: true,
  },
  {
    id: 2,
    type: "SMS" as ChatItemType,
    label: "Body Temperature",
    time: "10:00 AM",
    sender: "Dr. Luffy",
    active: false,
  },
  {
    id: 3,
    type: "Call" as ChatItemType,
    label: "Blood Glucose",
    time: "10:00 AM",
    sender: "ID #123456789",
    active: false,
  },
  {
    id: 4,
    type: "Email" as ChatItemType,
    label: "Blood Glucose",
    time: "10:00 AM",
    sender: "Dr. Luffy",
    active: false,
  },
];

const messages = [
  {
    id: 1,
    user: {
      name: "Madun Laduni",
      role: "Patient",
      avatar: "/avatar1.png",
    },
    text: "Doctor, I often have a headache every morning. What is the cause?",
    time: "10:00 AM",
    position: "right",
  },
  {
    id: 2,
    user: {
      name: "Madun Laduni",
      role: "Patient",
      avatar: "/avatar1.png",
    },
    text: "It could be due to lack of sleep, dehydration, or blood pressure. I suggest you check your blood pressure and drink more water.",
    time: "10:00 AM",
    position: "right",
  },
  {
    id: 3,
    user: {
      name: "HealCo Assistant",
      role: "Team AI",
      avatar: "/assistant.png",
    },
    text: "If you need assistance in booking an appointment or accessing medical records, please contact our customer service in the help menu.",
    time: "10:00 AM",
    position: "left",
    isAssistant: true,
  },
];

export default function Conversation() {
  // 0 = list, 1 = chat (mobile only)
  const [mobileView, setMobileView] = useState(0);
  const [input, setInput] = useState("");

  // Adjust this if your topbar is fixed and has a different height
  // const CONTAINER_HEIGHT = "h-[calc(100vh-64px)]"; // 64px for topbar

  return (
    <div className={`w-full h-full flex gap-0 md:gap-4`}>
      {/* Sidebar (Conversation List) */}
      <aside
        className={`
          flex flex-col static bg-white border border-gray-100 rounded-xl
          !h-full p-4 w-full max-w-full
          md:w-[320px] md:max-w-[320px] md:static md:flex
          ${mobileView === 1 ? "hidden" : "flex"}
          fixed inset-0 z-0 md:relative md:flex
          transition-all
        `}
      >
        {/* Topbar for mobile (leave empty if your topbar is global) */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 md:hidden">
          <span className="font-semibold text-lg">Conversation</span>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <Mail className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
        {/* List header */}
        <div className="p-4 border-b border-gray-100">
          <h2 className="font-semibold text-lg text-gray-900">All Items</h2>
        </div>
        <div className="flex-1 overflow-auto">
          {chatItems.map((item) => (
            <div
              key={item.id}
              className={`flex items-center px-4 py-3 gap-3 cursor-pointer ${
                item.active ? "bg-gray-100 rounded-lg" : ""
              }`}
              onClick={() => setMobileView(1)}
            >
              <span>
                {item.type === "AI" && (
                  <Bot className="w-6 h-6 text-blue-500" />
                )}
                {item.type === "SMS" && (
                  <MessageCircle className="w-6 h-6 text-green-400" />
                )}
                {item.type === "Call" && (
                  <Phone className="w-6 h-6 text-purple-500" />
                )}
                {item.type === "Email" && (
                  <Mail className="w-6 h-6 text-yellow-500" />
                )}
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-900 text-sm">
                    {item.label}
                  </span>
                  <Badge
                    variant="outline"
                    className="text-xs px-2 py-0.5 border-gray-300 capitalize"
                  >
                    {item.type}
                  </Badge>
                </div>
                <div className="text-xs text-gray-500">
                  {item.sender}: Any question?
                </div>
              </div>
              <div className="text-xs text-gray-400">{item.time}</div>
            </div>
          ))}
        </div>
        <div className="p-4">
          <Button className="w-full bg-[#8C7BFA] hover:bg-[#7a68e8] text-white text-base font-medium rounded-lg py-3">
            <MessageCircle className="w-4 h-4 mr-2" />
            Start New Chat
          </Button>
        </div>
      </aside>

      {/* Main Chat */}
      <main
        className={`
          flex-1 flex static flex-col bg-white rounded-xl border border-gray-100
          h-full
          ${mobileView === 0 ? "hidden" : "flex"}
          fixed inset-0 z-30 md:static md:flex
          transition-all
        `}
      >
        {/* Mobile back button and header */}
        <div className="flex items-center gap-2 border-b border-gray-100 p-4 md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setMobileView(0)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <span className="font-semibold text-lg">HealCo Assistant</span>
        </div>
        {/* Chat Header (desktop only) */}
        <div className="hidden md:flex items-center gap-4 border-b border-gray-100 p-4">
          <Avatar>
            <AvatarImage src="/assistant.png" />
            <AvatarFallback>HA</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold text-gray-900">HealCo Assistant</div>
            <div className="text-xs text-gray-500">
              Aktif sampai 10 maret 2025
            </div>
          </div>
          <div className="ml-auto flex gap-2">
            <Button variant="ghost" size="icon">
              <Mail className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Chat Body */}
        <div className="flex-1 overflow-auto p-4 md:p-6 flex flex-col gap-4">
          {messages.map((msg) =>
            msg.isAssistant ? (
              <div key={msg.id} className="flex flex-col items-start">
                <Card className="bg-gray-50 border border-gray-200 p-4 max-w-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Avatar className="w-7 h-7">
                      <AvatarImage src={msg.user.avatar} />
                      <AvatarFallback>HA</AvatarFallback>
                    </Avatar>
                    <span className="font-medium text-gray-900">
                      {msg.user.name}
                    </span>
                    <Badge
                      variant="secondary"
                      className="ml-2 text-xs bg-blue-50 text-blue-600"
                    >
                      {msg.user.role}
                    </Badge>
                  </div>
                  <div className="text-gray-700 text-sm">{msg.text}</div>
                  <div className="flex items-center gap-2 mt-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs px-3 py-1"
                    >
                      Escalate to human
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-gray-400"
                      aria-label="Like"
                    >
                      👍
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-gray-400"
                      aria-label="Dislike"
                    >
                      👎
                    </Button>
                  </div>
                  <div className="text-xs text-gray-400 mt-2">{msg.time}</div>
                </Card>
              </div>
            ) : (
              <div
                key={msg.id}
                className={`flex flex-col items-${
                  msg.position === "right" ? "end" : "start"
                }`}
              >
                <div
                  className={`max-w-lg rounded-lg px-4 py-3 mb-1 ${
                    msg.position === "right"
                      ? "bg-[#F3F0FF] text-[#5F44E3]"
                      : "bg-gray-100 text-gray-900"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src={msg.user.avatar} />
                      <AvatarFallback>ML</AvatarFallback>
                    </Avatar>
                    <span className="font-medium text-xs">{msg.user.name}</span>
                    <span className="text-xs text-gray-400 ml-2">
                      {msg.user.role}
                    </span>
                  </div>
                  <div className="text-sm">{msg.text}</div>
                  <div className="text-xs text-gray-400 mt-1">{msg.time}</div>
                </div>
              </div>
            )
          )}
        </div>
        {/* Chat Input */}
        <form
          className="flex items-center border-t border-gray-100 p-4 gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            // handle send
          }}
        >
          <Input
            placeholder="Doc, I want a consultation"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-gray-50"
          />
          <Button
            type="submit"
            className="bg-[#8C7BFA] hover:bg-[#7a68e8] text-white font-medium px-6 py-2 rounded-lg"
          >
            Send
          </Button>
        </form>
      </main>
    </div>
  );
}
