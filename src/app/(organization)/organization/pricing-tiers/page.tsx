"use client";

import { PricingCard } from "@/components/organization/pricing-tiers/PricingCard";
import { PricingTiers } from "@/components/organization/pricing-tiers/PricingTiers";
import FeatureToggle from "@/components/organization/pricing-tiers/Toggle";
import { featureLabels } from "@/data";
import { FeatureKey } from "@/types";
import { useState } from "react";

export default function PricingTiersPage() {
  const [selectedIdx, setSelectedIdx] = useState(1); // Default to "Basic member"
  const [featureVisibility, setFeatureVisibility] = useState<
    Record<FeatureKey, boolean>
  >({
    priorityAppointments: true,
    virtualConsultations: true,
    specialistReferrals: true,
    prescriptionDelivery: false,
    videoVisit: false,
  });

  // Sync with selected tier
  const handleSelectTier = (idx: number) => {
    setSelectedIdx(idx);
    setFeatureVisibility({ ...PricingTiers[idx].features });
  };

  const handleToggle = (key: FeatureKey, value: boolean) => {
    setFeatureVisibility((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="bg-white rounded-2xl shadow px-2 py-4 sm:p-6 md:p-8">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
        PMPM Pricing Tiers
      </h2>
      <p className="text-gray-500 mb-6 text-sm sm:text-base">
        Select below pricing tier to make changes.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-8">
        {PricingTiers.map((tier, idx) => (
          <PricingCard
            key={tier.name}
            tier={tier}
            selected={selectedIdx === idx}
            onSelect={() => handleSelectTier(idx)}
          />
        ))}
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">
          Toggle Feature Visibility
        </h3>
        <div className="divide-y divide-gray-100 bg-gray-50 rounded-xl px-2 sm:px-4 py-2">
          {featureLabels.map((f) => (
            <FeatureToggle
              key={f.key}
              label={f.label}
              checked={!!featureVisibility[f.key]}
              onChange={(val) => handleToggle(f.key, val)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
