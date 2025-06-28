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

  // Reset modal state when it closes
  useEffect(() => {
    if (!open) {
      setCurrentStep("patient-info");
      setFormData({});
    }
  }, [open]);

  const handlePatientInfoNext = (data: PatientGroupFormValues) => {
    setFormData((prev) => ({ ...prev, patientInfo: data }));
    setCurrentStep("provider-selection");
  };

  const handleProviderSelectionNext = async (data: ProviderSelectionValues) => {
    setFormData((prev) => ({ ...prev, providerSelection: data }));
    // You can log or submit data here if needed
    setCurrentStep("success");
  };

  const handleProviderSelectionBack = () => {
    setCurrentStep("patient-info");
  };

  const handleGoToAssignment = () => {
    onOpenChange(false);
  };

  const handleCancel = () => {
    onOpenChange(false);
  };

  const getModalTitle = () => {
    switch (currentStep) {
      case "patient-info":
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
