import { CheckCircle, Lock } from "lucide-react";
import { PricingTier } from "@/types";
import { featureLabels } from "@/data";

interface Props {
  tier: PricingTier;
  selected: boolean;
  onSelect: () => void;
}

export function PricingCard({ tier, selected, onSelect }: Props) {
  return (
    <div
      className={`rounded-xl border p-5 bg-white cursor-pointer transition-all ${
        selected
          ? "border-purple-500 shadow-md ring-2 ring-purple-400"
          : "border-gray-200 hover:border-purple-300"
      }`}
      onClick={onSelect}
    >
      <div className="flex items-center gap-2 mb-2">
        {tier.icon}
        <span className={`font-semibold text-base ${tier.color}`}>
          {tier.name}
        </span>
      </div>
      <div className="mb-4">
        <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded">
          {tier.price}
        </span>
      </div>
      <ul className="space-y-2">
        {featureLabels.map((f) =>
          tier.features[f.key] ? (
            <li
              key={f.key}
              className="flex items-center gap-2 text-sm text-gray-800"
            >
              <CheckCircle className="w-4 h-4 text-green-500" />
              {f.label}
            </li>
          ) : (
            <li
              key={f.key}
              className="flex items-center gap-2 text-sm text-gray-400"
            >
              <Lock className="w-4 h-4" />
              {f.label}
            </li>
          )
        )}
      </ul>
    </div>
  );
}
