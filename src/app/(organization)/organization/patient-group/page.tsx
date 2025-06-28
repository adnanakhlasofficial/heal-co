"use client";
import { CreatePatientGroupModal } from "@/components/organization/forms/Modal";
import { Location, Provider, Specialty } from "@/types";
import Image from "next/image";
import React, { useState } from "react";

const assignments = [
  {
    date: "Today\n10:30 AM",
    group: "Cardiology Patients",
    location: "North Clinic",
    patients: 25,
    provider: {
      name: "Dr. John Watson",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    priority: "Low",
  },
  {
    date: "20 Jan 2022\n10:30 AM",
    group: "Neurology Patients",
    location: "East Clinic",
    patients: 52,
    provider: {
      name: "Dr. John Watson",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    priority: "Medium",
  },
  {
    date: "15 Feb 2022\n11:00 AM",
    group: "Pediatrics Patients",
    location: "West Clinic",
    patients: 62,
    provider: {
      name: "Dr. John Watson",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    priority: "High",
  },
  {
    date: "1 Mar 2022\n09:15 AM",
    group: "Orthopedics Patients",
    location: "South Clinic",
    patients: 20,
    provider: {
      name: "Dr. John Watson",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    priority: "Low",
  },
  {
    date: "10 Apr 2022\n01:45 PM",
    group: "Dermatology Patients",
    location: "Central Clinic",
    patients: 65,
    provider: {
      name: "Dr. John Watson",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    priority: "Medium",
  },
  {
    date: "14 Jan 2023\n02:00 PM",
    group: "Gastroenterology Patients",
    location: "North Clinic",
    patients: 33,
    provider: {
      name: "Dr. John Watson",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    priority: "High",
  },
  {
    date: "30 Mar 2023\n03:15 PM",
    group: "Oncology Patients",
    location: "East Clinic",
    patients: 47,
    provider: {
      name: "Dr. John Watson",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    priority: "Low",
  },
  {
    date: "22 May 2023\n09:45 AM",
    group: "Endocrinology Patients",
    location: "West Clinic",
    patients: 78,
    provider: {
      name: "Dr. John Watson",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    priority: "Medium",
  },
  {
    date: "8 Aug 2023\n12:30 PM",
    group: "Psychiatry Patients",
    location: "South Clinic",
    patients: 29,
    provider: {
      name: "Dr. John Watson",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    priority: "High",
  },
  {
    date: "12 Sep 2023\n10:00 AM",
    group: "Rheumatology Patients",
    location: "Central Clinic",
    patients: 84,
    provider: {
      name: "Dr. John Watson",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    priority: "Low",
  },
  {
    date: "25 Oct 2022\n04:30 PM",
    group: "Urology Patients",
    location: "North Clinic",
    patients: 91,
    provider: {
      name: "Dr. John Watson",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    priority: "Medium",
  },
  {
    date: "7 Nov 2022\n09:00 AM",
    group: "Hematology Patients",
    location: "East Clinic",
    patients: 12,
    provider: {
      name: "Dr. John Watson",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    priority: "High",
  },
  {
    date: "19 Dec 2022\n11:30 AM",
    group: "Pulmonology Patients",
    location: "West Clinic",
    patients: 37,
    provider: {
      name: "Dr. John Watson",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    priority: "Low",
  },
  {
    date: "5 Oct 2023\n11:00 AM",
    group: "Nephrology Patients",
    location: "South Clinic",
    patients: 25,
    provider: {
      name: "Dr. John Watson",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    priority: "Low",
  },
];

const priorityColors: Record<string, string> = {
  Low: "bg-green-100 text-green-700",
  Medium: "bg-blue-100 text-blue-700",
  High: "bg-red-100 text-red-700",
};

const priorityDotColors: Record<string, string> = {
  Low: "bg-green-500",
  Medium: "bg-blue-500",
  High: "bg-red-500",
};
// Mock data - replace with actual API calls
const mockLocations: Location[] = [
  { id: "north-clinic", name: "North Clinic" },
  { id: "east-clinic", name: "East Clinic" },
  { id: "west-clinic", name: "West Clinic" },
  { id: "south-clinic", name: "South Clinic" },
  { id: "central-clinic", name: "Central Clinic" },
];

const mockSpecialties: Specialty[] = [
  { id: "neurology", name: "Neurology" },
  { id: "cardiology", name: "Cardiology" },
  { id: "pediatrics", name: "Pediatrics" },
  { id: "orthopedics", name: "Orthopedics" },
  { id: "diabetes", name: "Diabetes mellitus" },
];

const mockProviders: Provider[] = [
  {
    id: "1",
    name: "Dr. Liu Kang",
    specialty: "Diabetes mellitus",
    experience: "10 years",
    priceChat: "Rs 90k",
    satisfying: "90%",
    rating: 4.9,
    avatar:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
    verified: true,
  },
  {
    id: "2",
    name: "Dr. Sarah Smith",
    specialty: "Neurology",
    experience: "8 years",
    priceChat: "Rs 85k",
    satisfying: "85%",
    rating: 4.7,
    avatar:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
    verified: true,
  },
  {
    id: "3",
    name: "Dr. John Wilson",
    specialty: "Cardiology",
    experience: "12 years",
    priceChat: "Rs 95k",
    satisfying: "95%",
    rating: 4.8,
    avatar:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face",
    verified: true,
  },
  {
    id: "4",
    name: "Dr. Emily Davis",
    specialty: "Pediatrics",
    experience: "6 years",
    priceChat: "Rs 80k",
    satisfying: "88%",
    rating: 4.6,
    avatar:
      "https://images.unsplash.com/photo-1594824388379-762b2d92a065?w=150&h=150&fit=crop&crop=face",
    verified: true,
  },
];

export default function PatientGroupPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div>
        <div className="bg-white rounded-2xl shadow p-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                Patient Group
              </h1>
              <p className="text-gray-400 text-sm mt-1">
                Create and manage provider assignments here
              </p>
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <div className="relative flex-1 max-w-xs">
                <input
                  type="text"
                  placeholder="Search patient group.."
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 text-sm"
                />
                <svg
                  className="absolute left-3 top-2.5 w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8" strokeWidth="2" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2" />
                </svg>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-fuchsia-600 text-white px-5 py-2 rounded-full font-medium text-sm hover:bg-fuchsia-700 transition"
              >
                + Create New
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-xl border border-gray-100">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="text-gray-400 text-sm font-medium">
                  <th className="py-3 px-4 text-left">Date</th>
                  <th className="py-3 px-4 text-left">Patient Group</th>
                  <th className="py-3 px-4 text-left">No. Of Patients</th>
                  <th className="py-3 px-4 text-left">Assigned Provider</th>
                  <th className="py-3 px-4 text-left">Priority</th>
                  <th className="py-3 px-4 text-left"></th>
                </tr>
              </thead>
              <tbody>
                {assignments.map((a, idx) => (
                  <tr
                    key={idx}
                    className="border-t border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-3 px-4 whitespace-pre-line text-gray-900 text-sm font-medium">
                      {a.date}
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-medium text-gray-900">{a.group}</div>
                      <div className="text-xs text-gray-400">{a.location}</div>
                    </td>
                    <td className="py-3 px-4">{a.patients}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <Image
                          width={32}
                          height={32}
                          src={a.provider.avatar}
                          alt={a.provider.name}
                          unoptimized
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <span className="font-medium text-gray-900">
                          {a.provider.name}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                          priorityColors[a.priority]
                        }`}
                      >
                        <span
                          className={`w-2 h-2 rounded-full ${
                            priorityDotColors[a.priority]
                          }`}
                        ></span>
                        {a.priority}
                      </span>
                    </td>
                    <td className="py-3 px-4 flex gap-2">
                      <button className="bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded text-sm flex items-center gap-1 border border-gray-200">
                        <svg
                          className="w-4 h-4 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M15 12H9m12 0A9 9 0 1 1 3 12a9 9 0 0 1 18 0Z"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 8v4l3 3"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Edit
                      </button>
                      <button className="bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded text-sm flex items-center gap-1 border border-gray-200">
                        <svg
                          className="w-4 h-4 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <circle cx="12" cy="12" r="10" strokeWidth="2" />
                          <circle cx="12" cy="12" r="3" strokeWidth="2" />
                        </svg>
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
            <span className="text-gray-400 text-sm">Page 1 of 10</span>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded bg-gray-100 text-gray-400 text-sm font-medium cursor-not-allowed">
                Previous
              </button>
              <button className="px-4 py-2 rounded bg-gray-100 text-gray-900 text-sm font-medium">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      <CreatePatientGroupModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        locations={mockLocations}
        specialties={mockSpecialties}
        providers={mockProviders}
      />
    </>
  );
}
