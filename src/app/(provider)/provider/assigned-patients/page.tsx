import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";

const appointments = [
  {
    patient: {
      name: "Catalog",
      age: 42,
      gender: "Male",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    time: "10:30 AM",
    in: "In 15 Minutes",
    type: { label: "Follow-Up", color: "green" },
    escalation: { label: "Not Escalated", color: "orange" },
    escalated: false,
  },
  {
    patient: {
      name: "Capsule",
      age: 42,
      gender: "Male",
      avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    },
    time: "10:30 AM",
    in: "In 15 Minutes",
    type: { label: "New Patient", color: "blue" },
    escalation: { label: "Escalated", color: "blue" },
    escalated: true,
  },
  {
    patient: {
      name: "Command+R",
      age: 42,
      gender: "Male",
      avatar: "https://randomuser.me/api/portraits/men/34.jpg",
    },
    time: "10:30 AM",
    in: "In 15 Minutes",
    type: { label: "Urgent", color: "red" },
    escalation: { label: "Escalated", color: "blue" },
    escalated: true,
  },
  {
    patient: {
      name: "Hourglass",
      age: 42,
      gender: "Male",
      avatar: "https://randomuser.me/api/portraits/men/35.jpg",
    },
    time: "10:30 AM",
    in: "In 15 Minutes",
    type: { label: "New Patient", color: "blue" },
    escalation: { label: "Escalated", color: "blue" },
    escalated: true,
  },
  {
    patient: {
      name: "Sisyphus",
      age: 42,
      gender: "Male",
      avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    },
    time: "10:30 AM",
    in: "In 15 Minutes",
    type: { label: "Urgent", color: "red" },
    escalation: { label: "Escalated", color: "blue" },
    escalated: true,
  },
];

export default function AppointmentHistory() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-lg">Appointment history</h2>
        <div>
          <Button
            variant="outline"
            className="rounded-lg border-gray-200 text-gray-700 text-sm font-normal px-4 py-2 flex items-center gap-2"
          >
            Visit Type
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </Button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-gray-500 font-medium">
              <th className="py-2 px-4 text-left">Patient</th>
              <th className="py-2 px-4 text-left">Time</th>
              <th className="py-2 px-4 text-left">Type</th>
              <th className="py-2 px-4 text-left">Escalation Status</th>
              <th className="py-2 px-4 text-left">Action</th>
              <th className="py-2 px-4 text-left">Export</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a, i) => (
              <tr
                key={i}
                className="border-b last:border-b-0 hover:bg-gray-50 transition *:text-nowrap"
              >
                {/* Patient */}
                <td className="py-3 px-4 flex items-center gap-3">
                  <Image
                    src={a.patient.avatar}
                    alt={a.patient.name}
                    width={40}
                    height={40}
                    unoptimized
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-gray-900">
                      {a.patient.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {a.patient.age}y | {a.patient.gender}
                    </div>
                  </div>
                </td>
                {/* Time */}
                <td className="py-3 px-4">
                  <div className="font-medium text-gray-900">{a.time}</div>
                  <div className="text-xs text-gray-500">{a.in}</div>
                </td>
                {/* Type */}
                <td className="py-3 px-4">
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium
                      ${
                        a.type.color === "green"
                          ? "bg-green-50 text-green-600"
                          : a.type.color === "blue"
                          ? "bg-blue-50 text-blue-600"
                          : "bg-red-50 text-red-600"
                      }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-current"></span>
                    {a.type.label}
                  </span>
                </td>
                {/* Escalation */}
                <td className="py-3 px-4">
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium
                      ${
                        a.escalation.color === "orange"
                          ? "bg-orange-50 text-orange-600"
                          : "bg-blue-50 text-blue-600"
                      }`}
                  >
                    {a.escalation.label}
                  </span>
                </td>
                {/* Action */}
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="bg-green-50 text-green-700 border-green-200 hover:bg-green-100 rounded-lg px-3 py-1 text-xs font-medium"
                    >
                      Approve
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-200 text-gray-700 hover:bg-gray-100 rounded-lg px-3 py-1 text-xs font-medium"
                    >
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-200 text-gray-700 hover:bg-gray-100 rounded-lg px-3 py-1 text-xs font-medium"
                    >
                      Reject
                    </Button>
                  </div>
                </td>
                {/* Export */}
                <td className="py-3 px-4">
                  <a
                    href="#"
                    className="flex items-center gap-1 text-indigo-600 font-medium text-xs hover:underline"
                  >
                    PDF
                    <Download className="w-4 h-4 ml-0.5" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
