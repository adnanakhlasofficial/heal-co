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
  Bell,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Headphones,
  HelpCircle,
  Home,
  LogOut,
  Menu,
  MessageCircle,
  Search,
  Settings,
  X,
} from "lucide-react";
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
  { icon: Activity, label: "RPM Entry + Tracker", href: "/rpm-entry-tracker" },
];

const bottomSidebarItems = [
  { icon: HelpCircle, label: "Help & center", href: "/help" },
  { icon: Headphones, label: "Support", href: "/support" },
  { icon: LogOut, label: "Log out", href: "/logout" },
];

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
          sidebarCollapsed ? "w-16" : "w-64"
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
              <ChevronRight className="h-4 w-4" />
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

        {/* User Profile Section */}
        {!sidebarCollapsed && (
          <div className="px-4 py-4 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src="/placeholder-avatar.jpg"
                    alt="Madun Laduni"
                  />
                  <AvatarFallback className="bg-purple-100 text-purple-600">
                    ML
                  </AvatarFallback>
                </Avatar>
                <div className="flex items-center gap-2 flex-1">
                  <span className="text-sm font-medium text-gray-900 truncate">
                    Madun Laduni
                  </span>
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                </div>
              </div>

              {/* Collapse Button beside profile - Extended State */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleCollapse}
                className="hidden lg:flex p-1.5 hover:bg-gray-100 rounded-lg"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Collapsed User Profile */}
        {sidebarCollapsed && (
          <div className="px-2 py-4 border-b border-gray-100 flex justify-center">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder-avatar.jpg" alt="Madun Laduni" />
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
                <a
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    item.active
                      ? "bg-purple-50 text-purple-700 border border-purple-200"
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
                </a>

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
                <a
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors ${
                    sidebarCollapsed ? "justify-center" : ""
                  }`}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0 text-gray-400" />
                  {!sidebarCollapsed && (
                    <span className="truncate">{item.label}</span>
                  )}
                </a>

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
                {pathname.split("/")[1]}
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

              {/* Profile Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full p-0"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src="/placeholder-avatar.jpg"
                        alt="Profile"
                      />
                      <AvatarFallback className="text-xs">ML</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Log out</DropdownMenuItem>
                </DropdownMenuContent>
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
