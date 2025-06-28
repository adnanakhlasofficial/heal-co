"use client";
import { BarChart2, Star, UserCheck, Users } from "lucide-react";
import Image from "next/image";
import {
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Fake Data
const stats = [
  {
    label: "Total Organizations",
    value: "12,548",
    change: "+20%",
    changeType: "up",
    icon: <BarChart2 className="w-5 h-5 text-purple-600" />,
    color: "bg-purple-50",
    text: "from last month",
  },
  {
    label: "Active Doctors",
    value: "1,847",
    change: "-10%",
    changeType: "down",
    icon: <UserCheck className="w-5 h-5 text-yellow-500" />,
    color: "bg-yellow-50",
    text: "vs last month",
  },
  {
    label: "Total Members",
    value: "87,392",
    change: "+20%",
    changeType: "up",
    icon: <Users className="w-5 h-5 text-emerald-500" />,
    color: "bg-emerald-50",
    text: "from last month",
  },
];

const growthData = [
  { date: "May 17", Organizations: 10, Doctors: 8, Members: 12 },
  { date: "May 18", Organizations: 15, Doctors: 10, Members: 20 },
  { date: "May 19", Organizations: 12, Doctors: 9, Members: 14 },
  { date: "May 20", Organizations: 20, Doctors: 12, Members: 18 },
  { date: "May 21", Organizations: 13, Doctors: 8, Members: 16 },
  { date: "May 22", Organizations: 17, Doctors: 7, Members: 15 },
  { date: "May 23", Organizations: 14, Doctors: 6, Members: 13 },
];

const pieData = [
  { name: "Hospitals", value: 450, color: "#4F46E5" },
  { name: "Clinics", value: 300, color: "#22D3EE" },
  { name: "Speciality Centres", value: 200, color: "#A21CAF" },
  { name: "Private Practice", value: 100, color: "#F59E42" },
];

const orgs = [
  {
    name: "Metro Care Hospital",
    type: "Healthcare",
    info: "40 Doctors",
    status: "Active",
    added: "2 days ago",
  },
  {
    name: "Green Valley Clinic",
    type: "Healthcare",
    info: "25 Doctors",
    status: "Active",
    added: "1 week ago",
  },
  {
    name: "Sunset Dental Practice",
    type: "Dental",
    info: "10 Dentists",
    status: "Active",
    added: "5 days ago",
  },
  {
    name: "Cedar Grove Pharmacy",
    type: "Pharmacy",
    info: "5 Pharmacists",
    status: "Active",
    added: "3 weeks ago",
  },
  {
    name: "Bright Futures Pediatrics",
    type: "Healthcare",
    info: "15 Doctors",
    status: "Active",
    added: "1 month ago",
  },
  {
    name: "Riverbend Rehabilitation Center",
    type: "Rehabilitation",
    info: "20 Therapists",
    status: "Pending",
    added: "4 days ago",
  },
];

const doctors = [
  {
    name: "Dr. Liu Kang",
    rating: 4.9,
    specialty: "Diabetes mellitus",
    org: "Metlo Centre",
    status: "Patient Satisfying",
    percent: "90%",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    verified: true,
  },
  // Repeat for demo
  {
    name: "Dr. Liu Kang",
    rating: 4.9,
    specialty: "Diabetes mellitus",
    org: "Metlo Centre",
    status: "Patient Satisfying",
    percent: "90%",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    verified: true,
  },
  {
    name: "Dr. Liu Kang",
    rating: 4.9,
    specialty: "Diabetes mellitus",
    org: "Metlo Centre",
    status: "Patient Satisfying",
    percent: "90%",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    verified: true,
  },
  {
    name: "Dr. Liu Kang",
    rating: 4.9,
    specialty: "Diabetes mellitus",
    org: "Metlo Centre",
    status: "Patient Satisfying",
    percent: "90%",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    verified: true,
  },
  {
    name: "Dr. Liu Kang",
    rating: 4.9,
    specialty: "Diabetes mellitus",
    org: "Metlo Centre",
    status: "Patient Satisfying",
    percent: "90%",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    verified: true,
  },
];

function StatCard({ stat }: { stat: (typeof stats)[0] }) {
  return (
    <div className="bg-white rounded-xl px-6 py-5 flex flex-col gap-2 shadow-sm border border-gray-100 min-w-[220px]">
      <div className="flex items-center gap-2">
        <div className={`rounded-full p-2 ${stat.color}`}>{stat.icon}</div>
        <span className="text-gray-500 text-sm font-medium">{stat.label}</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
        <span
          className={`text-xs font-semibold ${
            stat.changeType === "up" ? "text-emerald-500" : "text-red-500"
          }`}
        >
          {stat.change}
        </span>
      </div>
      <span className="text-xs text-gray-400">{stat.text}</span>
    </div>
  );
}

function OrgStatus({ status }: { status: string }) {
  return (
    <span
      className={`px-3 py-0.5 rounded-full text-xs font-semibold ${
        status === "Active"
          ? "bg-emerald-50 text-emerald-700"
          : "bg-yellow-50 text-yellow-700"
      }`}
    >
      {status}
    </span>
  );
}

export default function DashboardPage() {
  return (
    <div className="bg-gray-50">
      <div>
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">
            Welcome back, Nic
          </h1>
          <div className="text-gray-500 text-sm">
            Here’s your practice overview for Monday, June 10
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {stats.map((stat, i) => (
            <StatCard stat={stat} key={i} />
          ))}
        </div>

        {/* Growth Trends + Pie Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          {/* Line Chart */}
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 col-span-2">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-semibold text-gray-800">Growth Trends</span>
              <div className="flex items-center gap-4 ml-4 text-xs">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-purple-600" />
                  Organizations
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-yellow-400" />
                  Doctors
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Members
                </span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={growthData}>
                <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="Organizations"
                  stroke="#7C3AED"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="Doctors"
                  stroke="#F59E42"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="Members"
                  stroke="#10B981"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex flex-col items-center justify-center">
            <div className="font-semibold text-gray-800 mb-2">
              Organization Distribution
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={70}
                  paddingAngle={2}
                  label={false}
                >
                  {pieData.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Legend
                  verticalAlign="bottom"
                  align="center"
                  iconType="circle"
                  formatter={(value: string) => (
                    <span className="text-xs text-gray-500">{value}</span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Orgs + Organization Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          {/* Recent Organizations */}
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-gray-800">
                Recent Organizations
              </span>
              <button className="text-xs text-purple-600 font-medium hover:underline">
                View All
              </button>
            </div>
            <div>
              {orgs.map((org, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-2 border-b last:border-b-0"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                      <svg
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <rect width="20" height="20" rx="6" fill="#A21CAF" />
                      </svg>
                    </span>
                    <div>
                      <div className="font-medium text-gray-900 text-sm">
                        {org.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {org.type} | {org.info}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <OrgStatus status={org.status} />
                    <div className="text-xs text-gray-400 mt-1">
                      Added {org.added}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Organization Distribution (Doctors) */}
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-gray-800">
                Organization Distribution
              </span>
              <button className="text-xs text-purple-600 font-medium hover:underline">
                View All
              </button>
            </div>
            <div>
              {doctors.map((doc, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-2 border-b last:border-b-0"
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={doc.image}
                      width={36}
                      height={36}
                      alt={doc.name}
                      className="rounded-full object-cover border"
                    />
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="font-medium text-gray-900 text-sm">
                          {doc.name}
                        </span>
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-xs font-semibold text-gray-700">
                          {doc.rating}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">
                        {doc.specialty} | {doc.org}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-xs text-gray-500">{doc.status}</span>
                    <span className="text-xs font-semibold text-gray-900 mt-1">
                      {doc.percent}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
