import { FeatureKey } from "@/types";

export const featureLabels: { key: FeatureKey; label: string }[] = [
  { key: "priorityAppointments", label: "Priority appointments" },
  { key: "virtualConsultations", label: "24/7 virtual consultations" },
  { key: "specialistReferrals", label: "Specialist referrals" },
  { key: "prescriptionDelivery", label: "Prescription delivery" },
  { key: "videoVisit", label: "Video Visit" },
];
