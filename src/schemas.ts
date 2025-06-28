import { z } from "zod";

export const patientGroupSchema = z.object({
  patientGroupName: z.string().min(1, "Patient group name is required"),
  location: z.string().min(1, "Location is required"),
  numberOfPatients: z.number().min(1, "Number of patients must be at least 1"),
  priorityLevel: z.enum(["Low", "Medium", "High", ""], {
    required_error: "Priority level is required",
  }),
});

export const providerSelectionSchema = z.object({
  providerId: z.string().min(1, "Provider selection is required"),
  specialty: z.string().min(1, "Specialty is required"),
});

export type PatientGroupFormValues = z.infer<typeof patientGroupSchema>;
export type ProviderSelectionValues = z.infer<typeof providerSelectionSchema>;
