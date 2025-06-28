"use client";

import { PricingCard } from "@/components/organization/pricing-tiers/PricingCard";
import { PricingTiers } from "@/components/organization/pricing-tiers/PricingTiers";
import FeatureToggle from "@/components/organization/pricing-tiers/Toggle";
import { featureLabels } from "@/data";
import { FeatureKey } from "@/types";
import { useState } from "react";
// import { PricingTiers } from "@/data/pricingTiers";
// import { featureLabels } from "@/data/features";
// import { PricingCard } from "@/components/PricingCard";
// import { FeatureToggle } from "@/components/FeatureToggle";
// import { FeatureKey } from "@/types/pricing";

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
    <div className="bg-white rounded-2xl shadow p-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-1">
        PMPM Pricing Tiers
      </h2>
      <p className="text-gray-500 mb-6">
        Select below pricing tier to make changes.
      </p>
      <div className="flex gap-4 mb-8">
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
        <h3 className="font-semibold text-gray-900 mb-2">
          Toggle Feature Visibility
        </h3>
        <div className="divide-y divide-gray-100 bg-gray-50 rounded-xl px-4">
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
