"use client";
import { Switch } from "@/components/ui/switch";

interface Props {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function FeatureToggle({ label, checked, onChange }: Props) {
  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-gray-800 text-sm">{label}</span>
      <Switch checked={checked} onCheckedChange={onChange} />
    </div>
  );
}
