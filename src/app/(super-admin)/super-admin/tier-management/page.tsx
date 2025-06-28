"use client";
import { useState } from "react";
import { Check } from "lucide-react";

// Types
interface TierFeature {
  name: string;
  enabled: boolean;
}

interface SubscriptionTier {
  id: string;
  name: string;
  price: number;
  color: string;
  iconBg: string;
  features: TierFeature[];
}

interface Feature {
  name: string;
  category?: string;
  tiers: {
    basic: boolean;
    standard: boolean;
    plus: boolean;
    pro: boolean;
    enterprise: boolean;
  };
}

// Subscription tiers data
const subscriptionTiers: SubscriptionTier[] = [
  {
    id: "basic",
    name: "Basic",
    price: 10,
    color: "text-gray-600",
    iconBg: "bg-gray-100",
    features: [
      { name: "AI features", enabled: true },
      { name: "Primary care", enabled: true },
      { name: "Geriatology & Pediatrics", enabled: false },
      { name: "Direct Primary care", enabled: false },
      { name: "Complete healthcare", enabled: false },
    ],
  },
  {
    id: "standard",
    name: "Standard",
    price: 59,
    color: "text-yellow-600",
    iconBg: "bg-yellow-100",
    features: [
      { name: "AI features", enabled: true },
      { name: "Primary care", enabled: true },
      { name: "Geriatology & Pediatrics", enabled: true },
      { name: "Direct Primary care", enabled: true },
      { name: "Complete healthcare", enabled: true },
    ],
  },
  {
    id: "plus",
    name: "Plus",
    price: 99,
    color: "text-green-600",
    iconBg: "bg-green-100",
    features: [
      { name: "AI features", enabled: true },
      { name: "Primary care", enabled: true },
      { name: "Geriatology & Pediatrics", enabled: true },
      { name: "Direct Primary care", enabled: true },
      { name: "Complete healthcare", enabled: true },
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: 110,
    color: "text-purple-600",
    iconBg: "bg-purple-100",
    features: [
      { name: "AI features", enabled: true },
      { name: "Primary care", enabled: true },
      { name: "Geriatology & Pediatrics", enabled: true },
      { name: "Direct Primary care", enabled: true },
      { name: "Complete healthcare", enabled: true },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 150,
    color: "text-orange-600",
    iconBg: "bg-orange-100",
    features: [
      { name: "AI features", enabled: true },
      { name: "Primary care", enabled: true },
      { name: "Geriatology & Pediatrics", enabled: true },
      { name: "Direct Primary care", enabled: true },
      { name: "Complete healthcare", enabled: true },
    ],
  },
];

// Feature comparison data
const features: Feature[] = [
  {
    name: "AI Symptom Checker",
    category: "AI Features",
    tiers: {
      basic: true,
      standard: true,
      plus: true,
      pro: true,
      enterprise: true,
    },
  },
  {
    name: "Health Insights",
    tiers: {
      basic: true,
      standard: true,
      plus: true,
      pro: true,
      enterprise: true,
    },
  },
  {
    name: "Virtual Consultations",
    category: "Primary Care",
    tiers: {
      basic: false,
      standard: true,
      plus: true,
      pro: true,
      enterprise: true,
    },
  },
  {
    name: "Prescription Management",
    tiers: {
      basic: false,
      standard: true,
      plus: true,
      pro: true,
      enterprise: true,
    },
  },
  {
    name: "Women's Health",
    category: "Geriatology & Pediatrics",
    tiers: {
      basic: false,
      standard: false,
      plus: true,
      pro: true,
      enterprise: true,
    },
  },
  {
    name: "Pediatric Care",
    tiers: {
      basic: false,
      standard: false,
      plus: true,
      pro: true,
      enterprise: true,
    },
  },
  {
    name: "In-Person Visits",
    category: "Direct Primary care",
    tiers: {
      basic: false,
      standard: false,
      plus: false,
      pro: true,
      enterprise: true,
    },
  },
  {
    name: "24/7 Access",
    tiers: {
      basic: false,
      standard: false,
      plus: false,
      pro: true,
      enterprise: true,
    },
  },
  {
    name: "Specialist Referrals",
    category: "Complete healthcare",
    tiers: {
      basic: false,
      standard: false,
      plus: false,
      pro: false,
      enterprise: true,
    },
  },
  {
    name: "Advanced Diagnostics",
    tiers: {
      basic: false,
      standard: false,
      plus: false,
      pro: false,
      enterprise: true,
    },
  },
];

// Toggle component
function Toggle({
  enabled,
  onChange,
}: {
  enabled: boolean;
  onChange: () => void;
}) {
  return (
    <button
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        enabled ? "bg-green-500" : "bg-gray-200"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          enabled ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
}

export default function SubscriptionTierManagement() {
  const [tierFeatures, setTierFeatures] = useState(() => {
    const initialState: Record<string, Record<string, boolean>> = {};
    features.forEach((feature) => {
      Object.keys(feature.tiers).forEach((tier) => {
        if (!initialState[tier]) initialState[tier] = {};
        initialState[tier][feature.name] =
          feature.tiers[tier as keyof typeof feature.tiers];
      });
    });
    return initialState;
  });

  const toggleFeature = (tier: string, feature: string) => {
    setTierFeatures((prev) => ({
      ...prev,
      [tier]: {
        ...prev[tier],
        [feature]: !prev[tier][feature],
      },
    }));
  };

  return (
    <div className="bg-gray-50">
      <div>
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
            Subscription Tier Management
          </h1>
          <p className="text-gray-600 text-sm lg:text-base">
            Configure feature access and pricing for each subscription tier.
            Changes will affect all new and existing subscriptions.
          </p>
        </div>

        {/* Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 lg:gap-6 mb-8">
          {subscriptionTiers.map((tier) => (
            <div
              key={tier.id}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              {/* Tier Header */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-8 h-8 rounded-full ${tier.iconBg} flex items-center justify-center`}
                >
                  <span className={`text-sm font-semibold ${tier.color}`}>
                    {tier.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className={`font-semibold ${tier.color}`}>{tier.name}</h3>
                  <p className="text-gray-500 text-sm">${tier.price}/month</p>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3">
                {tier.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center ${
                        feature.enabled ? "bg-green-100" : "bg-gray-100"
                      }`}
                    >
                      {feature.enabled && (
                        <Check className="w-3 h-3 text-green-600" />
                      )}
                    </div>
                    <span className="text-sm text-gray-700">
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 min-w-[200px]">
                    Features
                  </th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-gray-700 min-w-[100px]">
                    Basic
                  </th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-gray-700 min-w-[100px]">
                    Standard
                  </th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-gray-700 min-w-[100px]">
                    Plus
                  </th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-gray-700 min-w-[100px]">
                    Pro
                  </th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-gray-700 min-w-[100px]">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {/* Price Row */}
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    Set Price
                  </td>
                  <td className="px-4 py-4 text-center text-sm text-gray-900">
                    <span className="font-semibold">10</span>
                    <span className="text-gray-500 ml-1">$/month</span>
                  </td>
                  <td className="px-4 py-4 text-center text-sm text-gray-900">
                    <span className="font-semibold">59</span>
                    <span className="text-gray-500 ml-1">$/month</span>
                  </td>
                  <td className="px-4 py-4 text-center text-sm text-gray-900">
                    <span className="font-semibold">99</span>
                    <span className="text-gray-500 ml-1">$/month</span>
                  </td>
                  <td className="px-4 py-4 text-center text-sm text-gray-900">
                    <span className="font-semibold">110</span>
                    <span className="text-gray-500 ml-1">$/month</span>
                  </td>
                  <td className="px-4 py-4 text-center text-sm text-gray-900">
                    <span className="font-semibold">150</span>
                    <span className="text-gray-500 ml-1">$/month</span>
                  </td>
                </tr>

                {/* Category Headers */}
                <tr className="bg-gray-50">
                  <td
                    className="px-6 py-3 text-sm font-semibold text-gray-700"
                    colSpan={6}
                  >
                    AI Features
                  </td>
                </tr>

                {/* Feature Rows */}
                {features.map((feature, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {feature.name}
                    </td>
                    {(
                      [
                        "basic",
                        "standard",
                        "plus",
                        "pro",
                        "enterprise",
                      ] as const
                    ).map((tier) => (
                      <td key={tier} className="px-4 py-4 text-center">
                        <Toggle
                          enabled={
                            tierFeatures[tier]?.[feature.name] ??
                            feature.tiers[tier]
                          }
                          onChange={() => toggleFeature(tier, feature.name)}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
