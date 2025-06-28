"use client";
import { useState } from "react";
import { Search, Plus, Star, ExternalLink, MoreHorizontal } from "lucide-react";

// Types
interface Organization {
  id: number;
  name: string;
  email: string;
  tier: "Basic" | "Standard" | "Premium" | "Free";
  members: number;
  status: "Active" | "Suspended" | "Pending";
  createdDate: string;
  createdTime: string;
}

// Sample data
const organizations: Organization[] = [
  {
    id: 1,
    name: "CityCare Medical",
    email: "admin@citycaremedical.com",
    tier: "Basic",
    members: 25,
    status: "Active",
    createdDate: "17 Jan 2023",
    createdTime: "02:00 PM",
  },
  {
    id: 2,
    name: "CityCare Medical",
    email: "admin@citycaremedical.com",
    tier: "Standard",
    members: 52,
    status: "Suspended",
    createdDate: "20 Jan 2022",
    createdTime: "10:30 AM",
  },
  {
    id: 3,
    name: "CityCare Medical",
    email: "admin@citycaremedical.com",
    tier: "Premium",
    members: 62,
    status: "Pending",
    createdDate: "15 Feb 2022",
    createdTime: "11:00 AM",
  },
  {
    id: 4,
    name: "CityCare Medical",
    email: "admin@citycaremedical.com",
    tier: "Premium",
    members: 20,
    status: "Active",
    createdDate: "1 Mar 2022",
    createdTime: "09:15 AM",
  },
  {
    id: 5,
    name: "CityCare Medical",
    email: "admin@citycaremedical.com",
    tier: "Premium",
    members: 65,
    status: "Active",
    createdDate: "10 Apr 2022",
    createdTime: "01:45 PM",
  },
  {
    id: 6,
    name: "CityCare Medical",
    email: "admin@citycaremedical.com",
    tier: "Standard",
    members: 33,
    status: "Pending",
    createdDate: "16 Jan 2023",
    createdTime: "02:00 PM",
  },
  {
    id: 7,
    name: "CityCare Medical",
    email: "admin@citycaremedical.com",
    tier: "Free",
    members: 47,
    status: "Active",
    createdDate: "30 Mar 2023",
    createdTime: "03:15 PM",
  },
  {
    id: 8,
    name: "CityCare Medical",
    email: "admin@citycaremedical.com",
    tier: "Standard",
    members: 78,
    status: "Suspended",
    createdDate: "22 May 2023",
    createdTime: "09:45 AM",
  },
  {
    id: 9,
    name: "CityCare Medical",
    email: "admin@citycaremedical.com",
    tier: "Premium",
    members: 29,
    status: "Pending",
    createdDate: "6 Aug 2023",
    createdTime: "12:30 PM",
  },
  {
    id: 10,
    name: "CityCare Medical",
    email: "admin@citycaremedical.com",
    tier: "Free",
    members: 84,
    status: "Active",
    createdDate: "12 Sep 2022",
    createdTime: "10:00 AM",
  },
];

// Tier badge colors
const tierColors = {
  Basic: "bg-blue-100 text-blue-700",
  Standard: "bg-purple-100 text-purple-700",
  Premium: "bg-yellow-100 text-yellow-700",
  Free: "bg-gray-100 text-gray-700",
};

// Status badge colors
const statusColors = {
  Active: "bg-green-100 text-green-700",
  Suspended: "bg-red-100 text-red-700",
  Pending: "bg-blue-100 text-blue-700",
};

export default function OrganizationManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const filteredOrganizations = organizations.filter(
    (org) =>
      org.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      org.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div>
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            All Organization Management
          </h1>
          <p className="text-gray-600">Create and manage organization</p>
        </div>

        {/* Search and Add Button */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between mb-6 gap-2">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search organization..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
            />
          </div>
          <button className="sm:ml-4 flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-medium justify-center">
            <Plus className="w-4 h-4" />
            Add Organization
          </button>
        </div>

        {/* Responsive Table */}
        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[180px]">
                  Organization
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[90px]">
                  Tier
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[80px]">
                  Members
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[90px]">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[140px]">
                  Created
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[100px]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOrganizations.map((org) => (
                <tr key={org.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 flex-shrink-0 mr-4">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-medium text-sm">
                            C
                          </span>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {org.name}
                        </div>
                        <div className="text-sm text-gray-500">{org.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                        tierColors[org.tier]
                      }`}
                    >
                      {org.tier}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {org.members}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                        statusColors[org.status]
                      }`}
                    >
                      {org.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div>{org.createdDate}</div>
                    <div className="text-gray-500">{org.createdTime}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                    <div className="flex items-center space-x-3">
                      <button className="hover:text-yellow-500 transition">
                        <Star className="w-4 h-4" />
                      </button>
                      <button className="hover:text-blue-500 transition">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                      <button className="hover:text-gray-600 transition">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="text-sm text-gray-700">
            Page {currentPage} of {totalPages}
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <button
              onClick={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
