import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Star } from "lucide-react";

interface Doctor {
  id: string | number;
  name: string;
  specialty: string;
  rating: number;
  avatar?: string;
}

interface AppointmentDetails {
  serviceType: string;
  date: string;
  time: string;
}

interface DoctorAppointmentCardProps {
  doctor: Doctor;
  appointment: AppointmentDetails;
  onCardClick?: () => void;
  className?: string;
}

export function DoctorAppointmentCard({
  doctor,
  appointment,
  onCardClick,
  className = "",
}: DoctorAppointmentCardProps) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const formatRating = (rating: number) => {
    return rating.toFixed(1);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <Card
      className={`w-full max-w-sm bg-white hover:shadow-md transition-shadow cursor-pointer ${className}`}
      onClick={onCardClick}
    >
      <CardContent className="p-4">
        {/* Doctor Info Section */}
        <div className="flex items-start gap-3 mb-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={doctor.avatar} alt={doctor.name} />
            <AvatarFallback className="bg-gray-100 text-gray-600 text-sm font-medium">
              {getInitials(doctor.name)}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-medium text-gray-900 text-sm truncate">
                {doctor.name}
              </h3>
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-orange-400 text-orange-400" />
                <span className="text-xs font-medium text-gray-700">
                  {formatRating(doctor.rating)}
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-500 truncate">{doctor.specialty}</p>
          </div>
        </div>

        {/* Appointment Details Section */}
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 bg-blue-100 rounded flex items-center justify-center">
              <Calendar className="h-3 w-3 text-blue-600" />
            </div>
            <span className="text-sm font-medium text-gray-900">
              {appointment.serviceType}
            </span>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-600">
            <span>{formatDate(appointment.date)}</span>
            <span className="font-medium">{appointment.time}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
