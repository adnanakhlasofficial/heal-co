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
