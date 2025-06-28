"use client";

import Header from "@/components/dashboard/Header/Header";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Star, CheckCircle } from "lucide-react";
import Image from "next/image";

// Define the Doctor type for props and data
type Doctor = {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  price: string;
  satisfaction: string;
  rating: number;
  image: string;
  verified: boolean;
};

// Fake doctor data with specialty for all
const doctors: Doctor[] = [
  {
    id: "dr-liu-kang-1",
    name: "Dr. Liu Kang",
    specialty: "Diabetes mellitus",
    experience: "10 years",
    price: "Rp 90k",
    satisfaction: "90%",
    rating: 4.9,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    verified: true,
  },
  {
    id: "dr-sarah-johnson",
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    experience: "8 years",
    price: "Rp 85k",
    satisfaction: "95%",
    rating: 4.8,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    verified: true,
  },
  {
    id: "dr-mike-chen",
    name: "Dr. Mike Chen",
    specialty: "Neurology",
    experience: "12 years",
    price: "Rp 100k",
    satisfaction: "92%",
    rating: 4.7,
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    verified: true,
  },
  {
    id: "dr-emily-davis",
    name: "Dr. Emily Davis",
    specialty: "Dermatology",
    experience: "6 years",
    price: "Rp 75k",
    satisfaction: "88%",
    rating: 4.6,
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    verified: false,
  },
];

// Properly typed DoctorCard
function DoctorCard({
  doctor,
  isSelected,
  onSelect,
}: {
  doctor: Doctor;
  isSelected: boolean;
  onSelect: (id: string) => void;
}) {
  return (
    <Card
      className={`p-4 cursor-pointer transition-all hover:shadow-md ${
        isSelected
          ? "border-2 border-purple-600 bg-purple-50"
          : "border border-gray-200"
      }`}
      onClick={() => onSelect(doctor.id)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Image
            width={48}
            height={48}
            src={doctor.image}
            alt={doctor.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <div className="flex items-center space-x-1">
              <h4 className="font-semibold text-base">{doctor.name}</h4>
              {doctor.verified && (
                <CheckCircle className="w-4 h-4 text-blue-500" />
              )}
            </div>
            <div className="text-sm text-gray-500">{doctor.specialty}</div>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <Star className="w-5 h-5 text-orange-400 fill-orange-400" />
          <span className="font-semibold text-base">{doctor.rating}</span>
        </div>
      </div>
      <div className="grid grid-cols-3 bg-gray-100 rounded-lg px-2 py-2 text-center mt-2">
        <div>
          <div className="font-semibold text-[15px]">{doctor.experience}</div>
          <div className="text-xs text-gray-500">Experience</div>
        </div>
        <div>
          <div className="font-semibold text-[15px]">{doctor.price}</div>
          <div className="text-xs text-gray-500">Price chat</div>
        </div>
        <div>
          <div className="font-semibold text-[15px]">{doctor.satisfaction}</div>
          <div className="text-xs text-gray-500">Satisfying</div>
        </div>
      </div>
    </Card>
  );
}

export default function Appointment() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("");
  const [selectedDoctor, setSelectedDoctor] = useState<string>("");
  const [reason, setReason] = useState<string>("");

  const specialties = [
    { value: "cardiology", label: "Cardiology" },
    { value: "dermatology", label: "Dermatology" },
    { value: "neurology", label: "Neurology" },
    { value: "orthopedics", label: "Orthopedics" },
  ];

  return (
    <section className="bg-gray-50">
      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <Header
          title="Schedule An Appointment"
          description="Fill out the form below to request an appointment with a healthcare provider."
        />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Left Column - Form */}
          <div className="space-y-6 bg-gray-100/60 rounded-xl px-6 py-4">
            {/* Doctor Specialty Category */}
            <div>
              <Label
                htmlFor="specialty"
                className="text-sm font-medium mb-2 block"
              >
                Doctor Specialty Category
              </Label>
              <Select
                value={selectedSpecialty}
                onValueChange={setSelectedSpecialty}
              >
                <SelectTrigger className="bg-white rounded-full w-full">
                  <SelectValue placeholder="Select a specialty category" />
                </SelectTrigger>
                <SelectContent>
                  {specialties.map((specialty) => (
                    <SelectItem key={specialty.value} value={specialty.value}>
                      {specialty.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Calendar */}
            <div>
              <Card className="py-0 border-0 shadow-none">
                <CardContent className="py-0 px-0 !border-0">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="w-full"
                    navLayout="after"
                    classNames={{
                      month_caption: "flex px-6 pb-0",
                      caption_label: "text-xl font-semibold",
                      nav: "flex flex-row justify-end px-6 gap-2 pb-0",
                      month: "w-full grid grid-cols-2",
                      day_button: "w-9 h-9 mx-auto rounded-full",
                      today:
                        "w-9 h-9 mx-auto rounded-full bg-purple-600 text-white font-semibold",
                      day: "w-9 h-9 mx-auto rounded-full",
                      month_grid: "col-span-2 mt-4 bg-white rounded-lg w-full",
                      root: "!bg-gray-100/60 !border-none !shadow-none !p-0",
                      button_next: "bg-white p-2 rounded-full text-black",
                      button_previous: "bg-white p-2 rounded-full text-black",
                      weekdays: "flex p-4 pb-2",
                      week: "flex px-4 py-2",
                    }}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Reason for Visit */}
            <div>
              <Label
                htmlFor="reason"
                className="text-sm font-medium mb-2 block"
              >
                Reason for Visit
              </Label>
              <Textarea
                id="reason"
                placeholder="Please briefly describe your reason for a visit..."
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="min-h-10 bg-white rounded-full resize-none"
              />
            </div>
          </div>

          {/* Right Column - Doctor Selection */}
          <div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Select a doctor</h3>
              {selectedSpecialty ? (
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {doctors
                    .filter(
                      (doctor) =>
                        !selectedSpecialty ||
                        doctor.specialty
                          .toLowerCase()
                          .includes(selectedSpecialty.toLowerCase())
                    )
                    .map((doctor) => (
                      <DoctorCard
                        key={doctor.id}
                        doctor={doctor}
                        isSelected={selectedDoctor === doctor.id}
                        onSelect={setSelectedDoctor}
                      />
                    ))}
                </div>
              ) : (
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 opacity-50">
                    {/* Placeholder illustration */}
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="30" r="15" fill="#e5e7eb" />
                      <path
                        d="M20 70 Q20 50 50 50 Q80 50 80 70 L80 85 L20 85 Z"
                        fill="#e5e7eb"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-500">
                    No specialty category selected!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Submit Button */}
      <div className="mt-8 flex justify-end">
        <Button size="lg" className="px-8">
          Request Appointment
        </Button>
      </div>
    </section>
  );
}
