"use client";

import {
  AlertCircle,
  Calendar,
  ChevronRight,
  ListChecks,
  MessageSquare,
  Phone,
  Users,
} from "lucide-react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

interface ChartDatum {
  name: string;
  value: number;
}

interface Appointment {
  avatar: string;
  name: string;
  info: string;
  time: string;
  timeNote: string;
  type: { label: string; color: string; bg: string };
  status: { label: string; color: string; bg: string };
}

// More varied data for a visible chart!
const chartData: ChartDatum[] = [
  { name: "May 17", value: 20 },
  { name: "May 18", value: 60 },
  { name: "May 19", value: 35 },
  { name: "May 20", value: 90 },
  { name: "May 21", value: 45 },
  { name: "May 22", value: 75 },
  { name: "May 23", value: 30 },
];

const appointments: Appointment[] = [
  {
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Catalog",
    info: "42y | Male",
    time: "10:30 AM",
    timeNote: "In 15 Minutes",
    type: { label: "Follow-Up", color: "text-green-600", bg: "bg-green-50" },
    status: {
      label: "Checked in",
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
    status: { label: "Scheduled", color: "text-gray-600", bg: "bg-gray-100" },
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Command+R",
    info: "42y | Male",
    time: "10:30 AM",
    timeNote: "In 15 Minutes",
    type: { label: "Urgent", color: "text-red-600", bg: "bg-red-50" },
    status: { label: "Scheduled", color: "text-gray-600", bg: "bg-gray-100" },
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Hourglass",
    info: "42y | Male",
    time: "10:30 AM",
    timeNote: "In 15 Minutes",
    type: { label: "New Patient", color: "text-blue-600", bg: "bg-blue-50" },
    status: { label: "Scheduled", color: "text-gray-600", bg: "bg-gray-100" },
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "Sisyphus",
    info: "42y | Male",
    time: "10:30 AM",
    timeNote: "In 15 Minutes",
    type: { label: "Urgent", color: "text-red-600", bg: "bg-red-50" },
    status: { label: "Scheduled", color: "text-gray-600", bg: "bg-gray-100" },
  },
];

// const CustomTooltip = (props: TooltipProps<ValueType, NameType>) => {
//   const { active, payload, label } = props;
//   if (active && payload && payload.length) {
//     return (
//       <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
//         <p className="text-sm font-semibold text-purple-600">{label}</p>
//         <p className="text-xs text-gray-600">Value: {payload[0]?.value}</p>
//       </div>
//     );
//   }
//   return null;
// };

export default function DoctorDashboard() {
  return (
    <div className="bg-white flex flex-col items-center">
      <div className="w-full">
        <h1 className="text-2xl font-semibold text-gray-900 mb-1">
          Welcome back, Dr. Chen
        </h1>
        <div className="text-sm text-gray-500 mb-6">
          Here&apos;s your practice overview for Monday, June 10
        </div>

        {/* Top cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Today's Appointments */}
          <div className="bg-white rounded-xl shadow p-5 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="text-xs text-gray-500 font-medium">
                Today&apos;s Appointments
              </div>
              <div className="w-8 h-8 bg-blue-50 rounded flex items-center justify-center">
                <Calendar className="w-4 h-4 text-blue-500" />
              </div>
            </div>
            <div className="flex items-end gap-2 mt-2">
              <span className="text-2xl font-bold text-gray-900">12</span>
            </div>
            <div className="text-xs text-gray-500">
              3 Completed · 9 Remaining
            </div>
            <div className="w-full h-1 bg-gray-100 rounded-full mt-2">
              <div
                className="h-1 bg-blue-400 rounded-full"
                style={{ width: "25%" }}
              />
            </div>
          </div>

          {/* Escalations */}
          <div className="bg-white rounded-xl shadow p-5 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="text-xs text-gray-500 font-medium">
                Escalations
              </div>
              <div className="w-8 h-8 bg-red-50 rounded flex items-center justify-center">
                <AlertCircle className="w-4 h-4 text-red-500" />
              </div>
            </div>
            <div className="flex items-end gap-2 mt-2">
              <span className="text-2xl font-bold text-gray-900">3</span>
            </div>
            <div className="text-xs text-gray-500 mb-2">
              <span className="text-red-500">1 Urgent</span> ·{" "}
              <span className="text-orange-500">2 Standard</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              <span className="text-red-500 font-semibold">Johnson, T.</span>
              <span className="text-gray-500">- Chest Pain</span>
              <div className="ml-auto">
                <span className="px-2 py-0.5 bg-red-50 text-red-600 rounded-full text-xs font-semibold">
                  Urgent
                </span>
              </div>
            </div>
          </div>

          {/* Assigned Patients */}
          <div className="bg-white rounded-xl shadow p-5 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="text-xs text-gray-500 font-medium">
                Assigned Patients
              </div>
              <div className="w-8 h-8 bg-green-50 rounded flex items-center justify-center">
                <Users className="w-4 h-4 text-green-500" />
              </div>
            </div>
            <div className="flex items-end gap-2 mt-2">
              <span className="text-2xl font-bold text-gray-900">28</span>
            </div>
            <div className="text-xs text-gray-500 mb-2">4 new this week</div>
            <div className="w-full h-2 bg-gray-100 rounded-full">
              <div
                className="h-2 bg-gradient-to-r from-green-400 via-blue-400 to-yellow-400 rounded-full"
                style={{ width: "60%" }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>By Condition</span>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Recent Activity with Recharts */}
          <div className="md:col-span-2 bg-white rounded-xl shadow p-5 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="font-medium text-gray-900">Recent Activity</div>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-xs rounded-lg bg-gray-900 text-white font-semibold">
                  Day
                </button>
                <button className="px-3 py-1 text-xs rounded-lg text-gray-500 font-semibold hover:bg-gray-100">
                  Week
                </button>
                <button className="px-3 py-1 text-xs rounded-lg text-gray-500 font-semibold hover:bg-gray-100">
                  Month
                </button>
              </div>
            </div>
            {/* Recharts LineChart */}
            <div className="w-full h-40 mb-2">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={chartData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "#9ca3af" }}
                  />
                  <YAxis />
                  {/* <Tooltip content={<CustomTooltip />} /> */}
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#8e3cf7"
                    strokeWidth={3}
                    dot={{ fill: "#8e3cf7", strokeWidth: 2, r: 4 }}
                    activeDot={{
                      r: 6,
                      fill: "#8e3cf7",
                      stroke: "#fff",
                      strokeWidth: 2,
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-between text-xs text-gray-400">
              <span>0</span>
              <span>25</span>
              <span>50</span>
              <span>75</span>
              <span>100</span>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow p-5 flex flex-col gap-4">
            <div className="font-medium text-gray-900 mb-2">Quick Actions</div>
            <button className="flex items-center justify-between px-4 py-3 rounded-lg bg-blue-50 text-blue-700 font-medium hover:bg-blue-100">
              <span className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                  <MessageSquare className="w-4 h-4" />
                </div>
                View Chats
              </span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button className="flex items-center justify-between px-4 py-3 rounded-lg bg-green-50 text-green-700 font-medium hover:bg-green-100">
              <span className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                Call Patient
              </span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button className="flex items-center justify-between px-4 py-3 rounded-lg bg-yellow-50 text-yellow-700 font-medium hover:bg-yellow-100">
              <span className="flex items-center gap-2">
                <div className="w-8 h-8 bg-yellow-100 rounded flex items-center justify-center">
                  <ListChecks className="w-4 h-4" />
                </div>
                Manage Queue
              </span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Upcoming Appointment Table */}
        <div className="bg-white rounded-xl shadow p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="font-medium text-gray-900">
              Upcoming Appointment
            </div>
            <button className="text-sm text-blue-600 font-semibold hover:underline">
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-gray-900">
              <thead>
                <tr className="text-xs text-gray-500 font-medium">
                  <th className="py-3 px-4 text-left font-semibold">Patient</th>
                  <th className="py-3 px-4 text-left font-semibold">Time</th>
                  <th className="py-3 px-4 text-left font-semibold">Type</th>
                  <th className="py-3 px-4 text-left font-semibold">Status</th>
                  <th className="py-3 px-4 text-left font-semibold"></th>
                  <th className="py-3 px-4 text-left font-semibold"></th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((a) => (
                  <tr key={a.name} className="border-b last:border-b-0">
                    {/* Patient */}
                    <td className="py-3 px-4 flex items-center gap-3">
                      <img
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
                    {/* Status */}
                    <td className="py-3 px-4">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${a.status.bg} ${a.status.color}`}
                      >
                        ● {a.status.label}
                      </span>
                    </td>
                    {/* View */}
                    <td className="py-3 px-4">
                      <button className="text-blue-600 font-semibold text-xs hover:underline">
                        View
                      </button>
                    </td>
                    {/* Start */}
                    <td className="py-3 px-4">
                      <button className="text-green-600 font-semibold text-xs hover:underline">
                        Start
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
