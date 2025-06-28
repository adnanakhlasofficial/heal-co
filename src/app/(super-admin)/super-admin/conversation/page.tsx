"use client";
import { useState } from "react";
import {
  MoreVertical,
  CheckCircle,
  ChevronDown,
  Send,
  UserCircle,
  Edit2,
  ArrowLeft,
} from "lucide-react";

const tickets = [
  {
    id: 1,
    title: "Appointment Scheduling Issue",
    org: "CityCare Medical",
    time: "10:00 AM",
    summary:
      "Patient is experiencing technical difficulties with the appointment scheduling system. They have been trying to schedule an appointment for the past hour and keep receiving error messages. This is preventing them from booking a needed follow-up appointment.",
    status: "Open",
    priority: "High",
    tags: ["technical-issue", "urgent", "appointment"],
    conversation: [
      {
        from: "patient",
        name: "Maduni Laduni",
        role: "Patient",
        text: "Hi there, I've been trying to schedule an appointment for the past hour but the system keeps giving me an error.",
        time: "10:00 AM",
      },
      {
        from: "agent",
        name: "Support Agent",
        role: "Team",
        text: "Hello John, I'm sorry to hear you're having trouble with our scheduling system. Can you tell me what error message you're seeing?",
        time: "10:08 AM",
      },
    ],
  },
  {
    id: 2,
    title: "Appointment Scheduling Issue",
    org: "CityCare Medical",
    time: "10:00 AM",
    summary: "",
    status: "Resolved",
    priority: "Low",
    tags: [],
    conversation: [],
  },
  {
    id: 3,
    title: "Appointment Scheduling Issue",
    org: "CityCare Medical",
    time: "10:00 AM",
    summary: "",
    status: "Open",
    priority: "Medium",
    tags: [],
    conversation: [],
  },
  {
    id: 4,
    title: "Appointment Scheduling Issue",
    org: "CityCare Medical",
    time: "10:00 AM",
    summary: "",
    status: "Resolved",
    priority: "High",
    tags: [],
    conversation: [],
  },
];

const statusColors: Record<string, string> = {
  Open: "bg-yellow-100 text-yellow-700",
  Resolved: "bg-emerald-100 text-emerald-700",
};

const priorityColors: Record<string, string> = {
  High: "text-red-600",
  Medium: "text-yellow-600",
  Low: "text-emerald-600",
};

const tagColors: Record<string, string> = {
  "technical-issue": "bg-blue-100 text-blue-700",
  urgent: "bg-green-100 text-green-700",
  appointment: "bg-orange-100 text-orange-700",
};

export default function ChatDashboard() {
  const [selectedId, setSelectedId] = useState(1);
  const [showMenu, setShowMenu] = useState(false);
  const [message, setMessage] = useState("");
  const [mobileView, setMobileView] = useState<"list" | "chat">("list");

  const selected = tickets.find((t) => t.id === selectedId)!;

  return (
    <div className="h-full w-full">
      <div className="flex gap-6 h-full w-full">
        {/* Sidebar */}
        <aside
          className={`
    flex-shrink-0 bg-white border-r rounded-xl border-[#ececec] flex flex-col
    w-full lg:max-w-[340px] h-full
    ${mobileView === "chat" ? "hidden" : "flex"}
    lg:flex
  `}
          style={{ minHeight: "100%" }}
        >
          <div>
            <div className="flex items-center gap-2 px-4 py-4 border-b border-[#ececec]">
              <div className="flex-1 flex gap-2">
                <button className="flex items-center gap-2 px-3 py-1 bg-[#f5f5f7] rounded text-sm font-medium border border-[#ececec]">
                  Org <ChevronDown className="w-4 h-4" />
                </button>
                <button className="flex items-center gap-2 px-3 py-1 bg-[#f5f5f7] rounded text-sm font-medium border border-[#ececec]">
                  Channel <ChevronDown className="w-4 h-4" />
                </button>
                <button className="flex items-center gap-2 px-3 py-1 bg-[#f5f5f7] rounded text-sm font-medium border border-[#ececec]">
                  Escalation <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                className={`px-4 py-3 border-b border-[#ececec] cursor-pointer transition bg-white hover:bg-[#f5f5f7] ${
                  selectedId === ticket.id ? "bg-[#f5f5f7]" : ""
                }`}
                onClick={() => {
                  setSelectedId(ticket.id);
                  setMobileView("chat");
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-sm text-[#23272f]">
                    {ticket.title}
                  </span>
                  <span className="text-xs text-[#b0b3b9]">{ticket.time}</span>
                </div>
                <div className="text-xs text-[#6c6f75]">{ticket.org}</div>
                <div className="flex items-center gap-2 mt-1">
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      statusColors[ticket.status]
                    }`}
                  >
                    {ticket.status}
                  </span>
                  <span
                    className={`text-xs font-semibold ${
                      priorityColors[ticket.priority]
                    }`}
                  >
                    {ticket.priority}
                  </span>
                </div>
                <div className="text-xs text-[#b0b3b9] mt-1 truncate">
                  I&apos;ve been trying to schedule an appointment for the
                  past...
                </div>
              </div>
            ))}
          </div>
          <div className="p-4">
            <button className="w-full py-3 rounded-full bg-[#8f3cf7] text-white font-semibold text-base shadow hover:bg-[#6d28d9] transition">
              Start New Chat
            </button>
          </div>
        </aside>

        {/* Main Chat */}
        <main
          className={`
            flex-1 flex flex-col bg-white rounded-xl
            ${mobileView === "list" ? "hidden" : "flex"}
            lg:flex
          `}
        >
          {/* Mobile Back Button */}
          <div className="lg:hidden flex items-center gap-2 px-4 py-4 border-b border-[#ececec]">
            <button
              onClick={() => setMobileView("list")}
              className="p-2 rounded-full hover:bg-[#f5f5f7] border border-[#ececec]"
            >
              <ArrowLeft className="w-5 h-5 text-[#b0b3b9]" />
            </button>
            <div>
              <div className="text-lg font-semibold text-[#23272f]">
                {selected.title}
              </div>
              <div className="text-xs text-[#6c6f75]">
                {selected.org} 10 June 2025
              </div>
            </div>
            <div className="flex-1" />
            <div className="flex items-center gap-2">
              {selected.status === "Resolved" && (
                <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 font-medium text-sm">
                  <CheckCircle className="w-4 h-4" />
                  Resolved
                </span>
              )}
              <div className="relative">
                <button
                  className="p-2 rounded-full hover:bg-[#f5f5f7] border border-[#ececec]"
                  onClick={() => setShowMenu((v) => !v)}
                >
                  <MoreVertical className="w-5 h-5 text-[#b0b3b9]" />
                </button>
                {showMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-[#ececec] rounded-xl shadow z-10">
                    <button
                      className="block w-full text-left px-4 py-3 text-sm hover:bg-[#f5f5f7] font-medium text-[#23272f]"
                      onClick={() => setShowMenu(false)}
                    >
                      Delete Message
                    </button>
                    <button
                      className="block w-full text-left px-4 py-3 text-sm hover:bg-[#f5f5f7] font-medium text-[#23272f]"
                      onClick={() => setShowMenu(false)}
                    >
                      Escalate
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Desktop Header */}
          <div className="hidden lg:flex items-center justify-between border-b border-[#ececec] px-8 py-5">
            <div>
              <div className="text-lg font-semibold text-[#23272f]">
                {selected.title}
              </div>
              <div className="text-xs text-[#6c6f75]">
                {selected.org} 10 June 2025
              </div>
            </div>
            <div className="flex items-center gap-2">
              {selected.status === "Resolved" && (
                <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 font-medium text-sm">
                  <CheckCircle className="w-4 h-4" />
                  Resolved
                </span>
              )}
              <div className="relative">
                <button
                  className="p-2 rounded-full hover:bg-[#f5f5f7] border border-[#ececec]"
                  onClick={() => setShowMenu((v) => !v)}
                >
                  <MoreVertical className="w-5 h-5 text-[#b0b3b9]" />
                </button>
                {showMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-[#ececec] rounded-xl shadow z-10">
                    <button
                      className="block w-full text-left px-4 py-3 text-sm hover:bg-[#f5f5f7] font-medium text-[#23272f]"
                      onClick={() => setShowMenu(false)}
                    >
                      Delete Message
                    </button>
                    <button
                      className="block w-full text-left px-4 py-3 text-sm hover:bg-[#f5f5f7] font-medium text-[#23272f]"
                      onClick={() => setShowMenu(false)}
                    >
                      Escalate
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Summary */}
          <div className="hidden lg:block px-8 pt-6 pb-3 border-b border-[#ececec]">
            <div className="font-semibold text-sm mb-2 text-[#23272f]">
              Summary
            </div>
            <div className="text-sm text-[#6c6f75] mb-4">
              {selected.summary ||
                "Patient is experiencing technical difficulties with the appointment scheduling system. They have been trying to schedule an appointment for the past hour and keep receiving error messages. This is preventing them from booking a needed follow-up appointment."}
            </div>
            {/* Tags */}
            <div className="flex items-center gap-2 flex-wrap mb-2">
              {selected.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                    tagColors[tag] || "bg-gray-100 text-gray-700"
                  }`}
                >
                  {tag}
                </span>
              ))}
              <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#f5f5f7] text-[#23272f] text-xs font-medium cursor-pointer border border-[#ececec]">
                Add <span className="text-base leading-none">+</span>
              </span>
            </div>
          </div>
          {/* Conversation */}
          <div className="flex-1 px-4 lg:px-8 py-6 overflow-y-auto bg-white">
            <div className="space-y-8">
              {/* Patient Message */}
              <div className="flex items-start gap-4">
                <UserCircle className="w-10 h-10 text-[#b0b3b9]" />
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-sm text-[#23272f]">
                      Maduni Laduni
                    </span>
                    <span className="text-xs text-[#8f3cf7] bg-[#f6f2fe] px-2 py-0.5 rounded-full font-medium">
                      Patient
                    </span>
                    <span className="text-xs text-[#b0b3b9] ml-2">
                      10:00 AM
                    </span>
                  </div>
                  <div className="bg-[#f5f5f7] rounded-xl px-5 py-4 text-sm text-[#23272f] max-w-xl shadow-sm">
                    Hi there, I&apos;ve been trying to schedule an appointment
                    for the past hour but the system keeps giving me an error.
                  </div>
                </div>
              </div>
              {/* Agent Message */}
              <div className="flex items-start gap-4 justify-end">
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-sm text-[#8f3cf7]">
                      Support Agent
                    </span>
                    <span className="text-xs text-[#8f3cf7] bg-[#f6f2fe] px-2 py-0.5 rounded-full font-medium">
                      Team
                    </span>
                    <span className="text-xs text-[#b0b3b9] ml-2">
                      10:08 AM
                    </span>
                  </div>
                  <div className="bg-[#f6f2fe] rounded-xl px-5 py-4 text-sm text-[#8f3cf7] max-w-xl shadow-sm">
                    Hello John, I&apos;m sorry to hear you&apos;re having
                    trouble with our scheduling system. Can you tell me what
                    error message you&apos;re seeing?
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Input */}
          <form
            className="flex items-center rounded-lg gap-3 border-t border-[#ececec] px-4 lg:px-8 py-5 bg-white"
            onSubmit={(e) => {
              e.preventDefault();
              setMessage("");
            }}
          >
            <input
              type="text"
              className="flex-1 px-5 py-3 rounded-full bg-[#fafbfc] border border-[#ececec] text-sm focus:outline-none"
              placeholder="Doc, I want a consultation"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              type="button"
              className="p-2 rounded-full hover:bg-[#f5f5f7] border border-[#ececec]"
            >
              <Edit2 className="w-5 h-5 text-[#b0b3b9]" />
            </button>
            <button
              type="submit"
              className="bg-[#8f3cf7] hover:bg-[#6d28d9] text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 text-base shadow"
            >
              Send <Send className="w-5 h-5" />
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}
