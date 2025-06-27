"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star, Shield } from "lucide-react";
import {
  providerSelectionSchema,
  type ProviderSelectionValues,
} from "@/schemas";
import { type Provider, type Specialty } from "@/types";
import Image from "next/image";

interface ProviderSelectionFormProps {
  onNext: (data: ProviderSelectionValues) => void;
  onBack: () => void;
  specialties: Specialty[];
  providers: Provider[];
}

export default function ProviderSelectionForm({
  onNext,
  onBack,
  specialties,
  providers,
}: ProviderSelectionFormProps) {
  const [selectedProviderId, setSelectedProviderId] = useState<string>("");

  const form = useForm<ProviderSelectionValues>({
    resolver: zodResolver(providerSelectionSchema),
    defaultValues: {
      specialty: "neurology",
      providerId: "",
    },
  });

  const onSubmit = (data: ProviderSelectionValues) => {
    onNext({ ...data, providerId: selectedProviderId });
  };

  const selectedSpecialty = form.watch("specialty");
  const filteredProviders = providers.filter((provider) =>
    provider.specialty
      .toLowerCase()
      .includes(selectedSpecialty?.toLowerCase() || "")
  );

  return (
    <div className="flex gap-8">
      {/* Left Side - Steps */}
      <div className="w-64 space-y-6">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center">
              <CheckCircle className="w-4 h-4" />
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
            <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
              2
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-gray-900">
              Provider Information
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Select a doctor and specialty for the appointment.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="specialty"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    Specialist
                  </FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="mt-1 h-11 border-gray-300 rounded-lg">
                        <SelectValue placeholder="Select specialty" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {specialties.map((specialty) => (
                        <SelectItem key={specialty.id} value={specialty.id}>
                          {specialty.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-4">
                Select Provider
              </h4>
              <div className="grid grid-cols-2 gap-4 max-h-96 overflow-y-auto">
                {filteredProviders.map((provider) => (
                  <Card
                    key={provider.id}
                    className={`cursor-pointer transition-all border-2 ${
                      selectedProviderId === provider.id
                        ? "border-purple-600 shadow-md"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setSelectedProviderId(provider.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex flex-col items-center text-center space-y-3">
                        <div className="relative">
                          <Image
                            src={provider.avatar}
                            alt={provider.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          {provider.verified && (
                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                              <Shield className="w-3 h-3 text-white fill-current" />
                            </div>
                          )}
                        </div>

                        <div className="space-y-1">
                          <div className="flex items-center justify-center space-x-1">
                            <h5 className="font-semibold text-gray-900 text-sm">
                              {provider.name}
                            </h5>
                            <div className="flex items-center">
                              <Star className="w-3 h-3 text-yellow-400 fill-current" />
                              <span className="text-xs text-gray-600 ml-1">
                                {provider.rating}
                              </span>
                            </div>
                          </div>
                          <p className="text-xs text-gray-500">
                            {provider.specialty}
                          </p>
                        </div>

                        <div className="grid grid-cols-3 gap-2 text-xs w-full">
                          <div className="text-center">
                            <div className="font-semibold text-gray-900">
                              {provider.experience}
                            </div>
                            <div className="text-gray-500 text-[10px]">
                              Experience
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold text-gray-900">
                              {provider.priceChat}
                            </div>
                            <div className="text-gray-500 text-[10px]">
                              Price chat
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold text-gray-900">
                              {provider.satisfying}
                            </div>
                            <div className="text-gray-500 text-[10px]">
                              Satisfying
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="flex justify-end space-x-3 pt-6">
              <Button
                type="button"
                variant="outline"
                onClick={onBack}
                className="px-6 py-2 border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white"
                disabled={!selectedProviderId}
              >
                Create
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
