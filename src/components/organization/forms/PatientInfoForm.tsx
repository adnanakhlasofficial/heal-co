"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { patientGroupSchema, type PatientGroupFormValues } from "@/schemas";
import { type Location } from "@/types";

interface PatientInfoFormProps {
  onNext: (data: PatientGroupFormValues) => void;
  onCancel: () => void;
  initialData?: Partial<PatientGroupFormValues>;
  locations: Location[];
}

export default function PatientInfoForm({
  onNext,
  onCancel,
  initialData,
  locations,
}: PatientInfoFormProps) {
  const form = useForm<PatientGroupFormValues>({
    resolver: zodResolver(patientGroupSchema),
    defaultValues: {
      patientGroupName: initialData?.patientGroupName || "",
      location: initialData?.location || "",
      numberOfPatients:
        initialData?.numberOfPatients !== undefined
          ? initialData.numberOfPatients
          : 0, // FIXED: Use 0 instead of undefined
      priorityLevel: initialData?.priorityLevel || "", // FIXED: Use empty string instead of undefined
    },
  });

  const onSubmit = (data: PatientGroupFormValues) => {
    onNext(data);
  };

  return (
    <div className="flex gap-8">
      {/* Left Side - Steps */}
      <div className="w-64 space-y-6">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
              1
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-gray-900">
              Patient Group Information
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Give this information to create your patient group.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <div className="w-6 h-6 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center text-xs font-bold">
              2
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-medium text-gray-500">
              Provider Information
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              Select a doctor and specialty for the appointment.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="patientGroupName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    Patient Group Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your first name"
                      className="mt-1 h-11 border-gray-300 rounded-lg"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    Location
                  </FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="mt-1 h-11 border-gray-300 rounded-lg">
                        <SelectValue placeholder="Select a location" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {locations.map((location) => (
                        <SelectItem key={location.id} value={location.id}>
                          {location.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="numberOfPatients"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    Number of Patients*
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter the number of patients"
                      className="mt-1 h-11 border-gray-300 rounded-lg"
                      {...field}
                      value={field.value || ""} // FIXED: Ensure value is never undefined
                      onChange={(e) =>
                        field.onChange(parseInt(e.target.value) || 0)
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="priorityLevel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    Priority Level
                  </FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="mt-1 h-11 border-gray-300 rounded-lg">
                        <SelectValue placeholder="Select your priority" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Low">Low</SelectItem>
                      <SelectItem value="Medium">Medium</SelectItem>
                      <SelectItem value="High">High</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end space-x-3 pt-6">
              <Button
                type="button"
                variant="outline"
                onClick={onCancel}
                className="px-6 py-2 border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white"
              >
                Continue
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
