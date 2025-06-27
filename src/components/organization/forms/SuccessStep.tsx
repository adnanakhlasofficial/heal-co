"use client";

import { Button } from "@/components/ui/button";

interface SuccessStepProps {
  onGoToAssignment: () => void;
}

export default function SuccessStep({ onGoToAssignment }: SuccessStepProps) {
  return (
    <div className="text-center py-12 px-8">
      <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 relative">
        <div className="w-16 h-16 bg-purple-100 rounded-full absolute"></div>
        <svg
          className="w-10 h-10 text-white relative z-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-3">
        Created Successfully !
      </h2>

      <p className="text-gray-600 mb-8 max-w-sm mx-auto leading-relaxed">
        The patient group has been successfully established based on the
        information you provided.
      </p>

      <Button
        onClick={onGoToAssignment}
        className="bg-purple-600 hover:bg-purple-700 px-8 py-3 text-base font-medium w-full max-w-xs"
      >
        Go to Assignment
      </Button>
    </div>
  );
}
