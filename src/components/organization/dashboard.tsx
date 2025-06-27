"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  CartesianGrid,
} from "recharts";

// Types for the data structures
interface VisitData {
  date: string;
  value: number;
}

interface DemographicData {
  name: string;
  value: number;
}

interface Assignment {
  date: string;
  group: string;
  location: string;
  patients: number;
  provider: string;
  avatar: string;
  priority: "Low" | "Medium" | "High";
}

// Data
const visitsData: VisitData[] = [
  { date: "May 17", value: 9 },
  { date: "May 18", value: 11 },
  { date: "May 19", value: 13 },
  { date: "May 20", value: 10 },
  { date: "May 21", value: 8 },
  { date: "May 22", value: 9 },
  { date: "May 23", value: 12 },
];

const demographicsData: DemographicData[] = [
  { name: "18-30", value: 30 },
  { name: "31-45", value: 45 },
  { name: "46-60", value: 15 },
  { name: "61+", value: 10 },
];

const COLORS = ["#a78bfa", "#818cf8", "#6366f1", "#c7d2fe"];

const assignments: Assignment[] = [
  {
    date: "Today 10:30 AM",
    group: "Cardiology Patients",
    location: "North Clinic",
    patients: 25,
    provider: "Dr. John Watson",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    priority: "Low",
  },
  {
    date: "20 Jan 2022 10:50 AM",
    group: "Neurology Patients",
    location: "East Clinic",
    patients: 52,
    provider: "Dr. John Watson",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    priority: "Medium",
  },
  {
    date: "15 Feb 2022 11:00 AM",
    group: "Pediatrics Patients",
    location: "West Clinic",
    patients: 62,
    provider: "Dr. John Watson",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    priority: "High",
  },
  {
    date: "1 Mar 2022 09:15 AM",
    group: "Orthopedics Patients",
    location: "South Clinic",
    patients: 20,
    provider: "Dr. John Watson",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    priority: "Low",
  },
  {
    date: "10 Apr 2022 01:45 PM",
    group: "Dermatology Patients",
    location: "Central Clinic",
    patients: 65,
    provider: "Dr. John Watson",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    priority: "Medium",
  },
];

// Priority badge component
function PriorityBadge({ value }: { value: Assignment["priority"] }) {
  const color =
    value === "High"
      ? "bg-red-100 text-red-600"
      : value === "Medium"
      ? "bg-blue-100 text-blue-600"
      : "bg-green-100 text-green-600";
  return (
    <span className={`px-2 py-1 rounded text-xs font-semibold ${color}`}>
      {value}
    </span>
  );
}

const OrganizationDashboard: React.FC = () => (
  <div>
    {/* Header */}
    <header>
      <h1 className="text-2xl font-semibold">Organization Overview</h1>
      <div className="text-gray-500 text-sm">Fiscal Year 2024-25</div>
    </header>

    {/* Stats Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      {/* Active Members */}
      <div className="bg-white rounded-xl p-6 shadow flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="bg-blue-100 p-2 rounded-full">
            {/* icon */}
            <svg
              className="w-5 h-5 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM4 20v-1c0-2.21 3.58-4 8-4s8 1.79 8 4v1"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-xs text-gray-500">Active Members</span>
        </div>
        <div className="text-2xl font-bold">12,548</div>
        <div className="flex items-center gap-2 text-xs">
          <span className="text-green-600 font-semibold">↑ 20%</span>
          <span className="text-gray-400">from last month</span>
        </div>
        <div className="flex justify-between text-xs text-gray-400 mt-2">
          <span>By Condition</span>
          <span>Target: 15,000</span>
        </div>
      </div>
      {/* Current Plan Tier */}
      <div className="bg-white rounded-xl p-6 shadow flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="bg-yellow-100 p-2 rounded-full">
            {/* icon */}
            <svg
              className="w-5 h-5 text-yellow-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 8v4l3 3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-xs text-gray-500">Current Plan Tier</span>
        </div>
        <div className="text-2xl font-bold text-yellow-700">Enterprise</div>
        <div className="flex items-center gap-2 text-xs">
          <span className="text-red-600 font-semibold">↓ 10%</span>
          <span className="text-gray-400">vs last month</span>
        </div>
        <div className="flex justify-between text-xs text-gray-400 mt-2">
          <span>Renewal Date</span>
          <span>Target: 15,000</span>
        </div>
      </div>
      {/* Visits YTD */}
      <div className="bg-white rounded-xl p-6 shadow flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="bg-green-100 p-2 rounded-full">
            {/* icon */}
            <svg
              className="w-5 h-5 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M5 13l4 4L19 7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-xs text-gray-500">Visits YTD</span>
        </div>
        <div className="text-2xl font-bold">87,392</div>
        <div className="flex items-center gap-2 text-xs">
          <span className="text-green-600 font-semibold">↑ 15%</span>
          <span className="text-gray-400">vs this week</span>
        </div>
        <div className="flex justify-between text-xs text-gray-400 mt-2">
          <span>Annual Target</span>
          <span>Target: 15,000</span>
        </div>
      </div>
    </div>

    {/* Charts */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {/* Line Chart */}
      <div className="bg-white rounded-xl p-6 shadow col-span-2">
        <div className="flex justify-between items-center mb-2">
          <div className="font-semibold">Monthly Visits Trend</div>
          <div className="space-x-2">
            <button className="text-xs bg-gray-200 rounded px-2 py-1">
              YTD
            </button>
            <button className="text-xs text-gray-500">Last 12 Months</button>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart
            data={visitsData}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#8b5cf6"
              strokeWidth={3}
              dot={true}
              connectNulls={true}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Donut Chart */}
      <div className="bg-white rounded-xl p-6 shadow flex flex-col items-center">
        <div className="font-semibold mb-2">Member Demographics</div>
        <ResponsiveContainer width="100%" height={140}>
          <PieChart>
            <Pie
              data={demographicsData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={32}
              outerRadius={48}
              fill="#8884d8"
              paddingAngle={3}
              label
            >
              {demographicsData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend layout="vertical" align="right" verticalAlign="middle" />
          </PieChart>
        </ResponsiveContainer>
        <div className="flex justify-between w-full mt-2 text-xs text-gray-500">
          <span>
            Average Age <span className="font-bold text-gray-900">42</span>
          </span>
          <span>
            Gender Ratio <span className="font-bold text-gray-900">1.2:1</span>
          </span>
        </div>
      </div>
    </div>

    {/* Recent Assignments Table */}
    <div className="bg-white rounded-xl p-6 shadow mt-8">
      <div className="flex justify-between items-center mb-4">
        <div className="font-semibold">Recent Assignments</div>
        <button className="text-xs text-blue-600">View All</button>
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-gray-400 text-left">
            <th className="py-2">Date</th>
            <th className="py-2">Patient Group</th>
            <th className="py-2">No. Of Patients</th>
            <th className="py-2">Assigned Provider</th>
            <th className="py-2">Priority</th>
            <th className="py-2"></th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((a, idx) => (
            <tr key={idx} className="border-t">
              <td className="py-2">{a.date}</td>
              <td className="py-2">
                {a.group}
                <br />
                <span className="text-xs text-gray-400">{a.location}</span>
              </td>
              <td className="py-2">{a.patients}</td>
              <td className="py-2 flex items-center gap-2">
                <img src={a.avatar} alt="" className="w-6 h-6 rounded-full" />
                {a.provider}
              </td>
              <td className="py-2">
                <PriorityBadge value={a.priority} />
              </td>
              <td className="py-2 flex gap-2">
                <button className="bg-gray-100 px-2 py-1 rounded text-xs">
                  Edit
                </button>
                <button className="bg-gray-100 px-2 py-1 rounded text-xs">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default OrganizationDashboard;
