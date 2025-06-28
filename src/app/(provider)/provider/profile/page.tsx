import { BadgeCheck, Download, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <div className="bg-white flex items-center justify-center rounded-lg p-8 shadow-lg">
      <div className="w-full grid grid-cols-1 xl:grid-cols-3 gap-12">
        {/* Profile Card */}
        <div className="flex flex-col">
          {/* Top section: Avatar, Name, Premium */}
          <div className="flex items-start justify-between mb-7">
            <div>
              <div className="h-16 w-16 rounded-full bg-gray-200 overflow-hidden mb-2">
                <Image
                  src="https://img.freepik.com/free-photo/brunette-businesswoman-posing_23-2148142767.jpg?t=st=1750967516~exp=1750971116~hmac=1152aad7739f1373796550432805aac0582884b43feea7bf08e74c602ad6231b&w=1380"
                  alt="profile"
                  width={64}
                  height={64}
                />
              </div>
              <div className="font-semibold text-lg text-gray-900">
                Madun Laduni
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Female &nbsp;|&nbsp; #1238236348 &nbsp;|&nbsp; +1 89 83629291
              </div>
            </div>
            <span className="flex items-center gap-1 px-3 py-1.5 bg-[#fff7e6] text-[#b6913b] rounded-full text-xs font-medium whitespace-nowrap">
              <BadgeCheck className="h-4 w-4" />
              Premium Member
            </span>
          </div>
          {/* Manage Info Button */}
          <button className="w-full bg-[#a259ff] hover:bg-[#8e3cf7] text-white font-semibold py-2 rounded-lg mb-7 transition">
            Manage My Info
          </button>
          {/* Details */}
          <div className="text-sm text-gray-700 space-y-4">
            <div>
              <div className="text-[13px] text-gray-500 mb-1">
                Date of birth
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-900">
                  12 - 02 - 1991
                </span>
                <span className="px-2 py-0.5 bg-[#fff7e6] text-[#b6913b] rounded text-xs font-semibold">
                  33 years 3 month
                </span>
              </div>
            </div>
            <div>
              <div className="text-[13px] text-gray-500 mb-1">Address</div>
              <div className="text-gray-700">
                2437 Green Valley Avenue, Apartment 12B, Brooklyn, New York, NY
                11215, United States
              </div>
            </div>
            <div>
              <div className="text-[13px] text-gray-500 mb-1">Email</div>
              <div className="text-gray-700">megoleno kurmati@gmail.com</div>
            </div>
            <div>
              <div className="text-[13px] text-gray-500 mb-1">Blood group</div>
              <div className="text-gray-700">A+</div>
            </div>
            <div>
              <div className="text-[13px] text-gray-500 mb-1">
                Medical history
              </div>
              <div className="flex flex-wrap gap-2 mt-1">
                {[
                  "Hypertension",
                  "Asthma",
                  "Diabetes",
                  "Coronary Heart Disease",
                  "Chronic Kidney Failure",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Account Activity */}
        <div className="md:col-span-2 flex flex-col">
          <div className="flex flex-col h-full">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
              <div>
                <div className="font-semibold text-lg text-gray-900">
                  Account Activity
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Record of your logins
                </div>
              </div>
              <div className="flex gap-12">
                <div>
                  <div className="text-xs text-gray-500">Last login</div>
                  <div className="font-medium text-sm text-gray-900">
                    May 22, 2025 - 10:45 AM
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Total visits</div>
                  <div className="font-medium text-sm text-gray-900">
                    May 22, 2025 - 10:45 AM
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="font-medium text-gray-900">Recent activity</div>
              <button className="flex items-center gap-1 text-xs font-semibold text-gray-700 px-3 py-1.5 border rounded-lg hover:bg-gray-50 transition">
                Download all
                <Download className="h-4 w-4" />
              </button>
            </div>
            <div className="divide-y">
              {/* Activity Item 1 */}
              <div className="flex items-center justify-between py-4">
                <div>
                  <div className="font-medium text-gray-900">
                    Updated health metrics
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                    <span className="h-2 w-2 bg-yellow-400 rounded-full inline-block" />
                    Approved by Dr. Lufy
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs text-gray-500 mb-2">
                    Today, 10:45 AM
                  </span>
                  <Link
                    href="#"
                    className="flex items-center gap-1 text-[#a259ff] text-xs font-semibold hover:underline"
                  >
                    PDF
                    <FileText className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              {/* Activity Item 2 */}
              <div className="flex items-center justify-between py-4">
                <div>
                  <div className="font-medium text-gray-900">
                    Appointment for blood truama
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                    <span className="h-2 w-2 bg-yellow-400 rounded-full inline-block" />
                    Reviewed by Dr. Adams
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs text-gray-500 mb-2">
                    Today, 10:45 AM
                  </span>
                  <Link
                    href="#"
                    className="flex items-center gap-1 text-[#a259ff] text-xs font-semibold hover:underline"
                  >
                    PDF
                    <FileText className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              {/* Activity Item 3 */}
              <div className="flex items-center justify-between py-4">
                <div>
                  <div className="font-medium text-gray-900">
                    Updated health metrics
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                    <span className="h-2 w-2 bg-yellow-400 rounded-full inline-block" />
                    Approved by Dr. John
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs text-gray-500 mb-2">
                    Today, 10:45 AM
                  </span>
                  <Link
                    href="#"
                    className="flex items-center gap-1 text-[#a259ff] text-xs font-semibold hover:underline"
                  >
                    PDF
                    <FileText className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
