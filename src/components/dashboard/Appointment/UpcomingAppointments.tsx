import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { DoctorAppointmentCard } from "@/components/dashboard/Appointment/AppointmentCard";

interface UpcomingSession {
  id: string | number;
  doctor: {
    id: string | number;
    name: string;
    specialty: string;
    rating: number;
    avatar?: string;
  };
  appointment: {
    serviceType: string;
    date: string;
    time: string;
  };
}

const defaultSessions: UpcomingSession[] = [
  {
    id: "session_001",
    doctor: {
      id: "dr_001",
      name: "Dr. Liu Kang",
      specialty: "Diabetes mellitus",
      rating: 4.9,
      avatar: "/doctors/dr-liu-kang.jpg",
    },
    appointment: {
      serviceType: "Cardiac Care",
      date: "2024-11-21",
      time: "09:00 AM",
    },
  },
  {
    id: "session_002",
    doctor: {
      id: "dr_002",
      name: "Dr. Liu Kang",
      specialty: "Diabetes mellitus",
      rating: 4.9,
      avatar: "/doctors/dr-liu-kang.jpg",
    },
    appointment: {
      serviceType: "Cardiac Care",
      date: "2024-11-21",
      time: "09:00 AM",
    },
  },
  {
    id: "session_003",
    doctor: {
      id: "dr_003",
      name: "Dr. Liu Kang",
      specialty: "Diabetes mellitus",
      rating: 4.9,
      avatar: "/doctors/dr-liu-kang.jpg",
    },
    appointment: {
      serviceType: "Cardiac Care",
      date: "2024-11-21",
      time: "09:00 AM",
    },
  },
  {
    id: "session_004",
    doctor: {
      id: "dr_004",
      name: "Dr. Sarah Mitchell",
      specialty: "Cardiology Specialist",
      rating: 4.8,
      avatar: "/doctors/dr-sarah-mitchell.jpg",
    },
    appointment: {
      serviceType: "Heart Consultation",
      date: "2024-11-22",
      time: "11:30 AM",
    },
  },
  {
    id: "session_005",
    doctor: {
      id: "dr_005",
      name: "Dr. Michael Chen",
      specialty: "Endocrinology",
      rating: 4.7,
      avatar: "/doctors/dr-michael-chen.jpg",
    },
    appointment: {
      serviceType: "Diabetes Check-up",
      date: "2024-11-23",
      time: "02:15 PM",
    },
  },
  {
    id: "session_006",
    doctor: {
      id: "dr_006",
      name: "Dr. Emily Roberts",
      specialty: "Internal Medicine",
      rating: 4.8,
      avatar: "/doctors/dr-emily-roberts.jpg",
    },
    appointment: {
      serviceType: "General Consultation",
      date: "2024-11-24",
      time: "10:00 AM",
    },
  },
];

export { defaultSessions };

interface UpcomingSessionsProps {
  sessions?: UpcomingSession[];
  onViewAll?: () => void;
  onSessionClick?: (session: UpcomingSession) => void;
  className?: string;
}

export function UpcomingSessions({
  sessions = defaultSessions,
  onViewAll,
  onSessionClick,
  className = "",
}: UpcomingSessionsProps) {
  const handleViewAll = () => {
    if (onViewAll) {
      onViewAll();
    } else {
      console.log("View all sessions");
    }
  };

  const handleSessionClick = (session: UpcomingSession) => {
    if (onSessionClick) {
      onSessionClick(session);
    } else {
      console.log("Session clicked:", session.id);
    }
  };

  return (
    <div
      className={`w-full bg-white col-span-2 rounded-lg p-6 border border-gray-200 ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Upcoming Session
        </h2>
        <Button
          variant="outline"
          size="sm"
          onClick={handleViewAll}
          className="text-sm font-medium border-gray-300 hover:bg-gray-50"
        >
          View All
        </Button>
      </div>

      {/* Horizontal Scrollable Cards */}
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-4 pb-4">
          {sessions.map((session) => (
            <DoctorAppointmentCard
              key={session.id}
              doctor={session.doctor}
              appointment={session.appointment}
              onCardClick={() => handleSessionClick(session)}
              className="flex-none w-[280px]"
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
