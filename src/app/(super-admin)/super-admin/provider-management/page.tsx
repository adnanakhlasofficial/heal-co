"use client";
import { useState } from "react";
import { Search, Plus, Briefcase, Edit2, MoreHorizontal } from "lucide-react";

// Types
interface Provider {
  id: number;
  name: string;
  email: string;
  specialty: string;
  specialtyColor: string;
  organization: string;
  status: "Active" | "Inactive" | "Pending";
  chats: number;
  avgResponse: number;
}

// Sample data
const providers: Provider[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    email: "dr.sarah@citymedical.com",
    specialty: "Cardiology",
    specialtyColor: "bg-green-100 text-green-700",
    organization: "City Medical",
    status: "Active",
    chats: 25,
    avgResponse: 25,
  },
  {
    id: 2,
    name: "Dr. Sarah Johnson",
    email: "dr.sarah@citymedical.com",
    specialty: "Neurology",
    specialtyColor: "bg-purple-100 text-purple-700",
    organization: "City Medical",
    status: "Inactive",
    chats: 52,
    avgResponse: 52,
  },
  {
    id: 3,
    name: "Dr. Sarah Johnson",
    email: "dr.sarah@citymedical.com",
    specialty: "Pediatrics",
    specialtyColor: "bg-teal-100 text-teal-700",
    organization: "City Medical",
    status: "Pending",
    chats: 62,
    avgResponse: 62,
  },
  {
    id: 4,
    name: "Dr. Sarah Johnson",
    email: "dr.sarah@citymedical.com",
    specialty: "Dermatology",
    specialtyColor: "bg-red-100 text-red-600",
    organization: "City Medical",
    status: "Active",
    chats: 20,
    avgResponse: 20,
  },
  {
    id: 5,
    name: "Dr. Sarah Johnson",
    email: "dr.sarah@citymedical.com",
    specialty: "Psychiatry",
    specialtyColor: "bg-yellow-100 text-yellow-700",
    organization: "City Medical",
    status: "Active",
    chats: 65,
    avgResponse: 65,
  },
  {
    id: 6,
    name: "Dr. Sarah Johnson",
    email: "dr.sarah@citymedical.com",
    specialty: "Orthopedics",
    specialtyColor: "bg-blue-100 text-blue-700",
    organization: "City Medical",
    status: "Pending",
    chats: 33,
    avgResponse: 33,
  },
  {
    id: 7,
    name: "Dr. Sarah Johnson",
    email: "dr.sarah@citymedical.com",
    specialty: "Pediatrics",
    specialtyColor: "bg-teal-100 text-teal-700",
    organization: "City Medical",
    status: "Inactive",
    chats: 47,
    avgResponse: 47,
  },
  {
    id: 8,
    name: "Dr. Sarah Johnson",
    email: "dr.sarah@citymedical.com",
    specialty: "Dermatology",
    specialtyColor: "bg-red-100 text-red-600",
    organization: "City Medical",
    status: "Pending",
    chats: 78,
    avgResponse: 78,
  },
  {
    id: 9,
    name: "Dr. Sarah Johnson",
    email: "dr.sarah@citymedical.com",
    specialty: "Cardiology",
    specialtyColor: "bg-green-100 text-green-700",
    organization: "City Medical",
    status: "Active",
    chats: 29,
    avgResponse: 29,
  },
  {
    id: 10,
    name: "Dr. Sarah Johnson",
    email: "dr.sarah@citymedical.com",
    specialty: "Neurology",
    specialtyColor: "bg-purple-100 text-purple-700",
    organization: "City Medical",
    status: "Active",
    chats: 84,
    avgResponse: 84,
  },
];

// Status badge colors
const statusColors = {
  Active: "bg-green-100 text-green-600",
  Inactive: "bg-red-100 text-red-500",
  Pending: "bg-blue-100 text-blue-600",
};

export default function ProviderManagement() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProviders = providers.filter(
    (prov) =>
      prov.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prov.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prov.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div>
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">
            All Provider Management
          </h1>
          <p className="text-gray-600">Create and manage providers</p>
        </div>

        {/* Search and Add Button */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between mb-4 gap-2">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search provider..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
            />
          </div>
          <button className="sm:ml-4 flex items-center gap-2 px-5 py-2 bg-[#a259ff] text-white rounded-full hover:bg-[#8f3cf7] transition font-medium shadow justify-center">
            <Plus className="w-4 h-4" />
            Add Provider
          </button>
        </div>

        {/* Responsive Table */}
        <div className="bg-white rounded-xl shadow border border-gray-100 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-100">
            <thead className="border-b border-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase min-w-[150px]">
                  Provider
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase min-w-[120px]">
                  Specialty
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase min-w-[120px]">
                  Organization
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase min-w-[100px]">
                  Status
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-500 uppercase min-w-[80px]">
                  Chats
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-500 uppercase min-w-[100px]">
                  AVG Response
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-500 uppercase min-w-[100px]">
                  {/* Actions */}
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {filteredProviders.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-gray-400">
                    No providers found.
                  </td>
                </tr>
              ) : (
                filteredProviders.map((prov) => (
                  <tr key={prov.id} className="hover:bg-gray-50">
                    {/* Provider */}
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-9 h-9 flex-shrink-0 mr-3">
                          <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center font-semibold text-gray-500">
                            S
                          </div>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900">
                            {prov.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {prov.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    {/* Specialty */}
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${prov.specialtyColor}`}
                      >
                        {prov.specialty}
                      </span>
                    </td>
                    {/* Organization */}
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                      {prov.organization}
                    </td>
                    {/* Status */}
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          statusColors[prov.status]
                        }`}
                      >
                        {prov.status}
                      </span>
                    </td>
                    {/* Chats */}
                    <td className="px-4 py-4 whitespace-nowrap text-center text-sm text-gray-900">
                      {prov.chats}
                    </td>
                    {/* AVG Response */}
                    <td className="px-4 py-4 whitespace-nowrap text-center text-sm text-gray-900">
                      {prov.avgResponse}
                    </td>
                    {/* Actions */}
                    <td className="px-4 py-4 whitespace-nowrap text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          className="p-2 rounded-full hover:bg-gray-100 transition"
                          title="Manage"
                        >
                          <Briefcase className="w-4 h-4 text-gray-500" />
                        </button>
                        <button
                          className="p-2 rounded-full hover:bg-gray-100 transition"
                          title="Edit"
                        >
                          <Edit2 className="w-4 h-4 text-gray-500" />
                        </button>
                        <button
                          className="p-2 rounded-full hover:bg-gray-100 transition"
                          title="More"
                        >
                          <MoreHorizontal className="w-4 h-4 text-gray-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="text-sm text-gray-500">Page 1 of 10</div>
          <div className="flex items-center gap-2">
            <button
              className="px-4 py-2 rounded-md border border-gray-200 text-sm text-gray-700 bg-white hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
              disabled
            >
              Previous
            </button>
            <button className="px-4 py-2 rounded-md border border-gray-200 text-sm text-gray-700 bg-white hover:bg-gray-50 transition">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
