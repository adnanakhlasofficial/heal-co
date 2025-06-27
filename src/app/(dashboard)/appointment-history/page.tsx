import { FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const appointments = [
  {
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Catalog",
    info: "42y | Male",
    time: "10:30 AM",
    timeNote: "In 15 Minutes",
    type: { label: "Follow-Up", color: "text-green-600", bg: "bg-green-50" },
    escalation: {
      label: "Not Escalated",
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Capsule",
    info: "42y | Male",
    time: "10:30 AM",
    timeNote: "In 15 Minutes",
    type: { label: "New Patient", color: "text-blue-600", bg: "bg-blue-50" },
    escalation: {
      label: "Escalated",
      color: "text-gray-600",
      bg: "bg-gray-100",
    },
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Command+R",
    info: "42y | Male",
    time: "10:30 AM",
    timeNote: "In 15 Minutes",
    type: { label: "Urgent", color: "text-red-600", bg: "bg-red-50" },
    escalation: {
      label: "Escalated",
      color: "text-gray-600",
      bg: "bg-gray-100",
    },
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Hourglass",
    info: "42y | Male",
    time: "10:30 AM",
    timeNote: "In 15 Minutes",
    type: { label: "New Patient", color: "text-blue-600", bg: "bg-blue-50" },
    escalation: {
      label: "Escalated",
      color: "text-gray-600",
      bg: "bg-gray-100",
    },
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "Sisyphus",
    info: "42y | Male",
    time: "10:30 AM",
    timeNote: "In 15 Minutes",
    type: { label: "Urgent", color: "text-red-600", bg: "bg-red-50" },
    escalation: {
      label: "Escalated",
      color: "text-gray-600",
      bg: "bg-gray-100",
    },
  },
];

export default function AppointmentHistory() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full bg-white rounded-2xl shadow p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            Appointment history
          </h2>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            Visit Type
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-gray-900">
            <thead>
              <tr className="text-xs text-gray-500 font-medium bg-[#f8fafc]">
                <th className="py-3 px-4 text-left font-semibold">Patient</th>
                <th className="py-3 px-4 text-left font-semibold">Time</th>
                <th className="py-3 px-4 text-left font-semibold">Type</th>
                <th className="py-3 px-4 text-left font-semibold">
                  Escalation Status
                </th>
                <th className="py-3 px-4 text-left font-semibold">Action</th>
                <th className="py-3 px-4 text-left font-semibold">Export</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((a) => (
                <tr key={a.name} className="border-b last:border-b-0">
                  {/* Patient */}
                  <td className="py-3 px-4 flex items-center gap-3">
                    <Image
                      width={40}
                      height={40}
                      src={a.avatar}
                      alt={a.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium">{a.name}</div>
                      <div className="text-xs text-gray-500">{a.info}</div>
                    </div>
                  </td>
                  {/* Time */}
                  <td className="py-3 px-4">
                    <div className="font-medium">{a.time}</div>
                    <div className="text-xs text-gray-500">{a.timeNote}</div>
                  </td>
                  {/* Type */}
                  <td className="py-3 px-4">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${a.type.bg} ${a.type.color}`}
                    >
                      ● {a.type.label}
                    </span>
                  </td>
                  {/* Escalation */}
                  <td className="py-3 px-4">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${a.escalation.bg} ${a.escalation.color}`}
                    >
                      {a.escalation.label}
                    </span>
                  </td>
                  {/* Action */}
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <button className="px-3 py-1.5 rounded-lg bg-green-50 text-green-700 font-medium text-xs hover:bg-green-100">
                        Approve
                      </button>
                      <button className="px-3 py-1.5 rounded-lg bg-gray-50 text-gray-700 font-medium text-xs hover:bg-gray-100">
                        Edit
                      </button>
                      <button className="px-3 py-1.5 rounded-lg bg-red-50 text-red-600 font-medium text-xs hover:bg-red-100">
                        Reject
                      </button>
                    </div>
                  </td>
                  {/* Export */}
                  <td className="py-3 px-4">
                    <Link
                      href="#"
                      className="flex items-center gap-1 text-indigo-600 font-semibold text-xs hover:underline"
                    >
                      PDF
                      <FileText className="w-4 h-4" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
