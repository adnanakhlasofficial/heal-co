import { JSX } from "react";

export interface Provider {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  priceChat: string;
  satisfying: string;
  rating: number;
  avatar: string;
  verified: boolean;
}

export interface PatientGroupFormData {
  patientGroupName: string;
  location: string;
  numberOfPatients: number;
  priorityLevel: "Low" | "Medium" | "High";
  providerId?: string;
}

export interface Location {
  id: string;
  name: string;
}

export interface Specialty {
  id: string;
  name: string;
}

export type FeatureKey =
  | "priorityAppointments"
  | "virtualConsultations"
  | "specialistReferrals"
  | "prescriptionDelivery"
  | "videoVisit";

export interface PricingTier {
  name: string;
  price: string;
  color: string;
  icon: JSX.Element;
  features: {
    [key in FeatureKey]: boolean;
  };
}
