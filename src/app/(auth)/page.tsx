"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDown, Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";

const countries = [
  { code: "US", flag: "🇺🇸", dialCode: "+1" },
  { code: "GB", flag: "🇬🇧", dialCode: "+44" },
  { code: "CA", flag: "🇨🇦", dialCode: "+1" },
  { code: "AU", flag: "🇦🇺", dialCode: "+61" },
];

type LoginFormData = {
  countryCode: string;
  phoneNumber: string;
  password: string;
  rememberMe?: boolean | undefined;
  organizationCode?: string;
};

const loginSchema = z.object({
  countryCode: z.string().min(1, "Country code is required"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().default(false),
  organizationCode: z.string().optional(),
});

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showOrgCode, setShowOrgCode] = useState(false);

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      countryCode: "US",
      phoneNumber: "",
      password: "",
      rememberMe: false,
      organizationCode: "",
    },
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("Form Data:", data);
  };

  const selectedCountry = countries.find(
    (country) => country.code === form.watch("countryCode")
  );

  const router = useRouter();

  const handleRoleRedirect = (
    role: "member" | "provider" | "organization" | "super-admin"
  ) => {
    setTimeout(() => {
      router.push(`/${role}`);
    }, 300); // 4 seconds delay
  };

  return (
    <section className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm max-w-lg mx-auto mt-10">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Take control of your health
        </h1>
        <p className="text-2xl font-semibold text-gray-900">with HealCo.</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Phone Number Field */}
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-900 font-medium">
                  Phone number
                </FormLabel>
                <div className="relative flex">
                  <FormField
                    control={form.control}
                    name="countryCode"
                    render={({ field: countryField }) => (
                      <Select
                        value={countryField.value}
                        onValueChange={countryField.onChange}
                      >
                        <SelectTrigger className="w-20 !h-11 border-r-0 border-gray-300 [&_svg]:hidden rounded-full rounded-r-none">
                          <div className="flex items-center gap-1 px-2">
                            <span className="text-base">
                              {selectedCountry?.flag}
                            </span>
                            <span className="text-sm font-medium">
                              {selectedCountry?.dialCode}
                            </span>
                            <span>
                              <ChevronDown />
                            </span>
                          </div>
                        </SelectTrigger>
                        <SelectContent>
                          {countries.map((country) => (
                            <SelectItem key={country.code} value={country.code}>
                              <div className="flex items-center gap-2">
                                <span>{country.flag}</span>
                                <span>{country.dialCode}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="Phone number"
                      className="flex-1 !rounded-l-none rounded-full border-l-0 border-gray-300 focus:border-purple-500 focus:ring-purple-500 h-11"
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password Field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-900 font-medium">
                  Password
                </FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="pr-10 border-gray-300 focus:border-purple-500 focus:ring-purple-500 h-11 rounded-full"
                      {...field}
                    />
                  </FormControl>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <FormField
              control={form.control}
              name="rememberMe"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <label className="text-sm font-medium text-gray-900">
                      Remember me
                    </label>
                  </div>
                </FormItem>
              )}
            />
            <button
              type="button"
              className="text-sm text-purple-600 hover:text-purple-700 font-medium"
            >
              Forget password?
            </button>
          </div>

          {/* Login Button */}
          <Button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium h-11"
          >
            Log In
          </Button>

          {/* Sign Up Link */}
          <div className="text-center">
            <span className="text-gray-600">Don&apos;t have an account? </span>
            <button
              type="button"
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              Sign Up
            </button>
          </div>

          {/* OR Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">OR</span>
            </div>
          </div>

          {/* Organization Code Toggle */}
          <div className="text-center">
            <button
              type="button"
              onClick={() => setShowOrgCode(!showOrgCode)}
              className="text-gray-900 font-medium hover:text-gray-700"
            >
              Enter Organization Invitation Code
            </button>
          </div>

          {/* Organization Code Field */}
          {showOrgCode && (
            <FormField
              control={form.control}
              name="organizationCode"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Enter invitation code"
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-500 h-11 rounded-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
        </form>
      </Form>
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <Button
          type="button"
          onClick={() => handleRoleRedirect("member")}
          className="px-6 py-2 rounded-full bg-purple-100 text-purple-700 hover:bg-purple-200"
        >
          Member
        </Button>
        <Button
          type="button"
          onClick={() => handleRoleRedirect("provider")}
          className="px-6 py-2 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200"
        >
          Provider
        </Button>
        <Button
          type="button"
          onClick={() => handleRoleRedirect("organization")}
          className="px-6 py-2 rounded-full bg-green-100 text-green-700 hover:bg-green-200"
        >
          Organization
        </Button>
        <Button
          type="button"
          onClick={() => handleRoleRedirect("super-admin")}
          className="px-6 py-2 rounded-full bg-red-100 text-red-700 hover:bg-red-200"
        >
          Super Admin
        </Button>
      </div>
    </section>
  );
}
