"use client";

import PatientInfoForm from "@/components/organization/forms/PatientInfoForm";
import ProviderSelectionForm from "@/components/organization/forms/ProviderSelectForm";
import SuccessStep from "@/components/organization/forms/SuccessStep";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  type PatientGroupFormValues,
  type ProviderSelectionValues,
} from "@/schemas";
import { type Location, type Provider, type Specialty } from "@/types";
import { useState, useEffect } from "react";

interface CreatePatientGroupModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  locations: Location[];
  specialties: Specialty[];
  providers: Provider[];
}

type ModalStep = "patient-info" | "provider-selection" | "success";

interface FormData {
  patientInfo?: PatientGroupFormValues;
  providerSelection?: ProviderSelectionValues;
}

export function CreatePatientGroupModal({
  open,
  onOpenChange,
  locations,
  specialties,
  providers,
}: CreatePatientGroupModalProps) {
  const [currentStep, setCurrentStep] = useState<ModalStep>("patient-info");
  const [formData, setFormData] = useState<FormData>({});

  // Add useEffect to log step changes for debugging
  useEffect(() => {
    console.log("Current step changed to:", currentStep);
  }, [currentStep]);

  const handlePatientInfoNext = (data: PatientGroupFormValues) => {
    console.log("Patient info data:", data);
    setFormData((prev) => ({ ...prev, patientInfo: data }));
    setCurrentStep("provider-selection");
  };

  const handleProviderSelectionNext = async (data: ProviderSelectionValues) => {
    console.log("Provider selection data:", data);

    // Combine all form data properly
    const updatedFormData = { ...formData, providerSelection: data };
    const allData = { ...updatedFormData.patientInfo, ...data };

    console.log("Complete patient group data:", allData);
    console.log("All form data:", updatedFormData);

    // Update form data state
    setFormData(updatedFormData);

    // Here you would typically make an API call to create the patient group
    try {
      // await createPatientGroup(allData);
      console.log("Setting step to success...");
      setCurrentStep("success");
    } catch (error) {
      console.error("Failed to create patient group:", error);
      // Handle error appropriately
    }
  };

  const handleProviderSelectionBack = () => {
    setCurrentStep("patient-info");
  };

  const handleGoToAssignment = () => {
    console.log("Going to assignment...");
    onOpenChange(false);
    // Navigate to assignment page or perform other actions
    // router.push('/assignments');
  };

  const handleCancel = () => {
    setCurrentStep("patient-info");
    setFormData({});
    onOpenChange(false);
  };

  const getModalTitle = () => {
    switch (currentStep) {
      case "patient-info":
        return "Create new patient group";
      case "provider-selection":
        return "Create new patient group";
      case "success":
        return "";
      default:
        return "Create new patient group";
    }
  };

  const getModalSubtitle = () => {
    switch (currentStep) {
      case "patient-info":
        return "Complete all forms to continue!";
      case "provider-selection":
        return "Select your specialist provider";
      case "success":
        return "";
      default:
        return "";
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        {currentStep !== "success" && (
          <DialogHeader className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <DialogTitle className="text-xl font-semibold text-gray-900">
                  {getModalTitle()}
                </DialogTitle>
                {getModalSubtitle() && (
                  <p className="text-sm text-gray-600 mt-1">
                    {getModalSubtitle()}
                  </p>
                )}
              </div>
            </div>
          </DialogHeader>
        )}

        <div className={currentStep === "success" ? "" : "p-6"}>
          {currentStep === "patient-info" && (
            <PatientInfoForm
              onNext={handlePatientInfoNext}
              onCancel={handleCancel}
              initialData={formData.patientInfo}
              locations={locations}
            />
          )}

          {currentStep === "provider-selection" && (
            <ProviderSelectionForm
              onNext={handleProviderSelectionNext}
              onBack={handleProviderSelectionBack}
              specialties={specialties}
              providers={providers}
            />
          )}

          {currentStep === "success" && (
            <SuccessStep onGoToAssignment={handleGoToAssignment} />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
