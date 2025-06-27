"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Activity,
  ChevronRight as ArrowRight,
  Bell,
  Building,
  Calendar,
  Clock,
  DollarSign,
  Headphones,
  HelpCircle,
  Home,
  Info,
  LogOut,
  Menu,
  MessageCircle,
  PanelRightOpen,
  Search,
  Settings,
  Upload,
  User,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const sidebarItems = [
  { icon: Home, label: "Dashboard", href: "/", active: true },
  { icon: MessageCircle, label: "Conversation", href: "/conversation" },
  {
    icon: Calendar,
    label: "Appointment Request",
    href: "/appointment/request",
  },
  {
    icon: Clock,
    label: "Appointment History",
    href: "/appointment-history",
  },
  { icon: Activity, label: "RPM Entry + Tracker", href: "/rpm-entry-tracker" },
  // { icon: FileText, label: "Assigned Patients", href: "/assigned-patients" },
  { icon: User, label: "Member Profile", href: "/member-profile" },
  { icon: Users, label: "Patient Group", href: "/organization/patient-group" },
  {
    icon: DollarSign,
    label: "Pricing Tiers",
    href: "/organization/pricing-tiers",
  },
  {
    icon: Building,
    label: "Organization Dashboard",
    href: "/organization/dashboard",
  },
  {
    icon: Upload,
    label: "Bulk Employee Upload",
    href: "/organization/bulk-employee-upload",
  },
];

const bottomSidebarItems = [
  { icon: HelpCircle, label: "Help & center", href: "/help" },
  { icon: Headphones, label: "Support", href: "/support" },
  { icon: LogOut, label: "Log out", href: "/logout" },
];

function ProfileDropdownMenu() {
  return (
    <DropdownMenuContent
      className="w-64 p-0 rounded-xl shadow-lg border border-gray-100"
      align="start"
      forceMount
      style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.12)" }}
    >
      <div className="px-4 pt-4 pb-2">
        <div className="font-semibold text-gray-900 text-base">
          Madun Laduni
        </div>
        <div className="text-xs text-gray-500 mb-2">
          madunladuni98@gmail.com
        </div>
      </div>
      <div className="flex flex-col gap-2 px-2 pb-2">
        <DropdownMenuItem className="flex items-center justify-between gap-2 rounded-lg border border-gray-200 px-3 py-2 text-gray-900 hover:bg-gray-100 cursor-pointer">
          <div className="flex items-center gap-2">
            <User className="h-5 w-5 text-gray-500" />
            <span>Member profile</span>
          </div>
          <ArrowRight className="h-4 w-4 text-gray-400" />
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center justify-between gap-2 rounded-lg border border-gray-200 px-3 py-2 text-gray-900 hover:bg-gray-100 cursor-pointer">
          <div className="flex items-center gap-2">
            <Info className="h-5 w-5 text-gray-500" />
            <span>Information</span>
          </div>
          <ArrowRight className="h-4 w-4 text-gray-400" />
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center justify-between gap-2 rounded-lg border border-gray-200 px-3 py-2 text-gray-900 hover:bg-gray-100 cursor-pointer">
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-gray-500" />
            <span>Notification</span>
          </div>
          <ArrowRight className="h-4 w-4 text-gray-400" />
        </DropdownMenuItem>
      </div>
      <div className="px-2 pb-3">
        <DropdownMenuItem className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-red-600 hover:bg-red-50 cursor-pointer font-semibold">
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </DropdownMenuItem>
      </div>
    </DropdownMenuContent>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const pathname = usePathname();

  const toggleCollapse = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 bg-white border-r border-gray-200 transform transition-all duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:relative lg:flex lg:flex-col ${
          sidebarCollapsed ? "w-16" : "w-xs"
        }`}
      >
        {/* Collapsed State - Collapse Button at Top */}
        {sidebarCollapsed && (
          <div className="flex items-center justify-center p-2 border-b border-gray-100">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleCollapse}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <PanelRightOpen className="h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Extended State - Header with Logo */}
        {!sidebarCollapsed && (
          <div className="flex items-center justify-between border-b border-gray-100">
            {/* Mobile Close Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Sidebar Profile Dropdown */}
        {!sidebarCollapsed && (
          <div className="px-4 py-4 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition">
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src="https://img.freepik.com/free-photo/brunette-businesswoman-posing_23-2148142767.jpg?t=st=1750967516~exp=1750971116~hmac=1152aad7739f1373796550432805aac0582884b43feea7bf08e74c602ad6231b&w=1380"
                        alt="Madun Laduni"
                      />
                      <AvatarFallback className="bg-purple-100 text-purple-600">
                        ML
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col flex-1">
                      <span className="text-sm font-medium text-gray-900 truncate">
                        Madun Laduni
                      </span>
                      <span className="text-xs text-gray-500 truncate">
                        madunladuni98@gmail.com
                      </span>
                    </div>
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                  </div>
                </DropdownMenuTrigger>
                <ProfileDropdownMenu />
              </DropdownMenu>
              {/* Collapse Button beside profile - Extended State */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleCollapse}
                className="hidden lg:flex p-1.5 hover:bg-gray-100 rounded-lg"
              >
                <PanelRightOpen className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Collapsed User Profile */}
        {sidebarCollapsed && (
          <div className="px-2 py-4 border-b border-gray-100 flex justify-center">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src="https://img.freepik.com/free-photo/brunette-businesswoman-posing_23-2148142767.jpg?t=st=1750967516~exp=1750971116~hmac=1152aad7739f1373796550432805aac0582884b43feea7bf08e74c602ad6231b&w=1380"
                alt="Madun Laduni"
              />
              <AvatarFallback className="bg-purple-100 text-purple-600 text-xs">
                ML
              </AvatarFallback>
            </Avatar>
          </div>
        )}

        {/* Navigation Items */}
        <nav className="flex-1 px-2 py-4">
          <div className="space-y-1">
            {sidebarItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    pathname === item.href
                      ? "bg-purple-100 text-purple-700 border-l-2 border-purple-700"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  } ${sidebarCollapsed ? "justify-center" : ""}`}
                >
                  <item.icon
                    className={`h-5 w-5 flex-shrink-0 ${
                      item.active ? "text-purple-600" : "text-gray-400"
                    }`}
                  />
                  {!sidebarCollapsed && (
                    <span className="truncate">{item.label}</span>
                  )}
                </Link>

                {/* Tooltip for collapsed state */}
                {sidebarCollapsed && (
                  <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                    {item.label}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>

        {/* Bottom Navigation Items */}
        <div className="px-2 py-4 border-t border-gray-100 mt-auto">
          <div className="space-y-1">
            {bottomSidebarItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors ${
                    sidebarCollapsed ? "justify-center" : ""
                  }`}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0 text-gray-400" />
                  {!sidebarCollapsed && (
                    <span className="truncate">{item.label}</span>
                  )}
                </Link>

                {/* Tooltip for collapsed state */}
                {sidebarCollapsed && (
                  <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                    {item.label}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 px-4 lg:px-6 flex-shrink-0">
          <div className="flex items-center justify-between h-16">
            {/* Left side - Mobile menu button + Title */}
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>
              <h1 className="text-xl font-semibold text-gray-900 capitalize">
                {pathname === "/" ? "dashboard" : pathname.split("/")[1]}
              </h1>
            </div>

            {/* Right side - Search, Notifications, Profile */}
            <div className="flex items-center gap-3">
              {/* Search Bar */}
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-10 w-64 bg-gray-50 border-0 focus:bg-white focus:ring-1 focus:ring-purple-500 h-9"
                />
              </div>
              {/* Premium Member Badge */}
              <div className="hidden sm:flex items-center gap-1 px-3 py-1.5 bg-orange-50 text-orange-600 rounded-full text-sm font-medium whitespace-nowrap">
                <span className="text-orange-500">✨</span>
                Premium Member
              </div>

              {/* Search Button (Mobile) */}
              <Button variant="ghost" size="sm" className="md:hidden p-2">
                <Search className="h-4 w-4" />
              </Button>

              {/* Notifications */}
              <Button variant="ghost" size="sm" className="relative p-2">
                <Bell className="h-4 w-4" />
                <span className="absolute -top-0.5 -right-0.5 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </Button>

              {/* Settings */}
              <Button variant="ghost" size="sm" className="p-2">
                <Settings className="h-4 w-4" />
              </Button>

              {/* Topbar Profile Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full p-0"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src="https://img.freepik.com/free-photo/brunette-businesswoman-posing_23-2148142767.jpg?t=st=1750967516~exp=1750971116~hmac=1152aad7739f1373796550432805aac0582884b43feea7bf08e74c602ad6231b&w=1380"
                        alt="Profile"
                      />
                      <AvatarFallback className="text-xs">ML</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                {/* Use the same dropdown menu as in the sidebar */}
                <ProfileDropdownMenu />
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-6 overflow-auto bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}
