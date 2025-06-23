import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import welcomeImage from "@/assets/images/welcome.png";

export function WelcomeHero() {
  return (
    <div className="bg-[url('/images/welcome-bg.png')] bg-bottom-left rounded-lg border border-gray-200 relative overflow-hidden col-span-2">
      <div className="flex justify-between items-end">
        {/* Left Content */}
        <div className="flex-1 max-w-lg p-8">
          {/* Greeting */}
          <p className="text-gray-600 text-base mb-3">
            Welcome Back! Madun Laduni
          </p>

          {/* Main Heading */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
            Check Your Health Daily
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-base mb-8 leading-relaxed">
            Make sure to check your health every day to stay on top of your
            well-being!
          </p>

          {/* CTA Button */}
          <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl">
            Book Appointment
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Right Illustration */}
        <div className="hidden md:flex flex-1 justify-end pr-12">
          <Image src={welcomeImage} alt="welcome-image" />
        </div>
      </div>
    </div>
  );
}
