"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Header from "@/components/dashboard/Header/Header";

// Define Zod schema for form validation
const newReadingSchema = z.object({
  systolic: z
    .number({ required_error: "Systolic pressure is required" })
    .min(70, "Systolic pressure must be at least 70")
    .max(250, "Systolic pressure must not exceed 250"),
  glucose: z
    .number({ required_error: "Glucose level is required" })
    .min(50, "Glucose level must be at least 50")
    .max(400, "Glucose level must not exceed 400"),
  temperature: z
    .number({ required_error: "Temperature is required" })
    .min(95, "Temperature must be at least 95°F")
    .max(110, "Temperature must not exceed 110°F"),
});

// Infer TypeScript type from schema
type NewReadingFormData = z.infer<typeof newReadingSchema>;

const NewReading: React.FC = () => {
  const form = useForm<NewReadingFormData>({
    resolver: zodResolver(newReadingSchema),
    defaultValues: {
      systolic: undefined,
      glucose: undefined,
      temperature: undefined,
    },
  });

  const onSubmit = async (data: NewReadingFormData) => {
    try {
      console.log("Form submitted:", data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Handle successful submission here
      alert("Reading saved successfully!");
      form.reset(); // Reset form after successful submission
    } catch (error) {
      console.error("Error saving reading:", error);
      alert("Failed to save reading. Please try again.");
    }
  };

  return (
    <Card className="w-1/4 p-6 border-0">
      <Header
        title="Add new reading"
        description="Enter your latest health metrics"
      />

      <CardContent className="p-0">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Blood Pressure Section */}
            <div className="space-y-3">
              <h3 className="text-base font-medium text-gray-900">
                Blood Pressure
              </h3>
              <FormField
                control={form.control}
                name="systolic"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Input
                          {...field}
                          type="number"
                          placeholder="Systolic"
                          className="bg-gray-50 border-gray-200 pr-12"
                          onChange={(e) =>
                            field.onChange(Number(e.target.value) || undefined)
                          }
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500">
                          mmHg
                        </span>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Blood Glucose Section */}
            <div className="space-y-3">
              <h3 className="text-base font-medium text-gray-900">
                Blood Glucose
              </h3>
              <FormField
                control={form.control}
                name="glucose"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Input
                          {...field}
                          type="number"
                          placeholder="Glucose level"
                          className="bg-gray-50 border-gray-200 pr-12"
                          onChange={(e) =>
                            field.onChange(Number(e.target.value) || undefined)
                          }
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500">
                          mg/dl
                        </span>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Body Temperature Section */}
            <div className="space-y-3">
              <h3 className="text-base font-medium text-gray-900">
                Body Temperature
              </h3>
              <FormField
                control={form.control}
                name="temperature"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Input
                          {...field}
                          type="number"
                          step="0.1"
                          placeholder="Temperature"
                          className="bg-gray-50 border-gray-200 pr-8"
                          onChange={(e) =>
                            field.onChange(Number(e.target.value) || undefined)
                          }
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500">
                          °F
                        </span>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Saving..." : "Save Reading"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default NewReading;
