"use client";

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

export default function AppointmentPage() {
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

  const doctors = [
    { value: "dr-smith", label: "Dr. Smith" },
    { value: "dr-johnson", label: "Dr. Johnson" },
    { value: "dr-brown", label: "Dr. Brown" },
  ];

  return (
    <section className="bg-gray-50">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">Schedule An Appointment</h1>
          <p className="text-gray-600">
            Fill out the form below to request an appointment with a healthcare
            provider.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                <SelectTrigger>
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
              <Card className="py-0">
                <CardContent className="py-0 px-0">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md w-full"
                    navLayout="after"
                    pagedNavigation={true}
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
                className="min-h-[100px]"
              />
            </div>
          </div>

          {/* Right Column - Doctor Selection */}
          <div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Select a doctor</h3>

              {selectedSpecialty ? (
                <Select
                  value={selectedDoctor}
                  onValueChange={setSelectedDoctor}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a doctor" />
                  </SelectTrigger>
                  <SelectContent>
                    {doctors.map((doctor) => (
                      <SelectItem key={doctor.value} value={doctor.value}>
                        {doctor.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
      <div className="mt-8 flex justify-end max-w-6xl mx-auto">
        <Button size="lg" className="px-8">
          Request Appointment
        </Button>
      </div>
    </section>
  );
}
