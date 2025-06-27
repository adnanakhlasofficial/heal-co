"use client";

import React, { useState } from "react";

type Employee = {
  id: number;
  name: string;
  avatar: string;
  age: string;
  gender: string;
  email: string;
  phone: string;
  department: string;
  specialty: string;
  checked: boolean;
};

const initialEmployees: Employee[] = [
  {
    id: 1,
    name: "Dr. Chen",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    age: "42y",
    gender: "Male",
    email: "someone@mail.com",
    phone: "+1 89 83629291",
    department: "Nursing",
    specialty: "Registered Nurse",
    checked: true,
  },
  {
    id: 2,
    name: "Mr. Patel",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    age: "35y",
    gender: "Male",
    email: "someone@mail.com",
    phone: "+1 89 83629291",
    department: "Medical",
    specialty: "Physician",
    checked: true,
  },
  {
    id: 3,
    name: "Dr. Chen",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    age: "42y",
    gender: "Male",
    email: "someone@mail.com",
    phone: "+1 89 83629291",
    department: "Administration",
    specialty: "Receptionist",
    checked: false,
  },
  {
    id: 4,
    name: "Dr. Smith",
    avatar: "https://randomuser.me/api/portraits/men/34.jpg",
    age: "50y",
    gender: "Non-binary",
    email: "someone@mail.com",
    phone: "+1 89 83629291",
    department: "Nursing",
    specialty: "Missing Role",
    checked: false,
  },
  {
    id: 5,
    name: "Mr. Lopez",
    avatar: "https://randomuser.me/api/portraits/women/35.jpg",
    age: "29y",
    gender: "Female",
    email: "someone@mail.com",
    phone: "+1 89 83629291",
    department: "Medical",
    specialty: "Surgeon",
    checked: true,
  },
];

export default function BulkEmployeeUploadPage() {
  const [employees, setEmployees] = useState(initialEmployees);
  const allChecked = employees.every((e) => e.checked);
  const someChecked = employees.some((e) => e.checked);

  const handleCheckAll = () => {
    setEmployees((prev) =>
      prev.map((emp) => ({ ...emp, checked: !allChecked }))
    );
  };

  const handleCheck = (id: number) => {
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.id === id ? { ...emp, checked: !emp.checked } : emp
      )
    );
  };

  return (
    <div>
      <div className="bg-white rounded-2xl shadow p-8 w-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-xl font-semibold text-gray-900">
              Bulk Employee Upload
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              Upload and invite multiple employees at once
            </p>
          </div>
          <button className="bg-fuchsia-600 text-white px-5 py-2 rounded-full font-medium flex items-center gap-2 hover:bg-fuchsia-700 transition">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 4v16m8-8H4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Bulk Upload (CSV)
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border border-gray-100">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="text-gray-400 text-sm font-medium">
                <th className="py-3 px-4 text-left w-10">
                  <input
                    type="checkbox"
                    className="accent-fuchsia-600 w-5 h-5 rounded border-gray-300"
                    checked={allChecked}
                    ref={(input) => {
                      if (input)
                        input.indeterminate = !allChecked && someChecked;
                    }}
                    onChange={handleCheckAll}
                  />
                </th>
                <th className="py-3 px-4 text-left">Provider</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Phone</th>
                <th className="py-3 px-4 text-left">Department</th>
                <th className="py-3 px-4 text-left">Specialty</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => (
                <tr
                  key={emp.id}
                  className="border-t border-gray-100 hover:bg-gray-50"
                >
                  <td className="py-3 px-4">
                    <input
                      type="checkbox"
                      className="accent-fuchsia-600 w-5 h-5 rounded border-gray-300"
                      checked={emp.checked}
                      onChange={() => handleCheck(emp.id)}
                    />
                  </td>
                  <td className="py-3 px-4 flex items-center gap-3">
                    <img
                      src={emp.avatar}
                      alt={emp.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium text-gray-900">
                        {emp.name}
                      </div>
                      <div className="text-xs text-gray-400">
                        {emp.age} | {emp.gender}
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">{emp.email}</td>
                  <td className="py-3 px-4">{emp.phone}</td>
                  <td className="py-3 px-4">{emp.department}</td>
                  <td className="py-3 px-4">{emp.specialty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination and Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
          <div className="flex items-center gap-4">
            <span className="text-gray-400 text-sm">Page 1 of 10</span>
            <button className="px-4 py-2 rounded bg-gray-100 text-gray-400 text-sm font-medium cursor-not-allowed">
              Previous
            </button>
            <button className="px-4 py-2 rounded bg-gray-100 text-gray-900 text-sm font-medium">
              Next
            </button>
          </div>
          <span className="text-gray-400 text-sm">Showing 5 results</span>
          <button className="bg-fuchsia-600 text-white px-8 py-2 rounded-full font-medium text-sm hover:bg-fuchsia-700 transition">
            Invite All
          </button>
        </div>
      </div>
    </div>
  );
}
