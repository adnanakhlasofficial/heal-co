"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { useState } from "react";

const countries = [
  { code: "US", name: "United States", flag: "🇺🇸", label: "ENG" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧", label: "ENG" },
  { code: "CA", name: "Canada", flag: "🇨🇦", label: "ENG" },
  { code: "ES", name: "Spain", flag: "🇪🇸", label: "ESP" },
  { code: "FR", name: "France", flag: "🇫🇷", label: "FRA" },
  { code: "DE", name: "Germany", flag: "🇩🇪", label: "DEU" },
  { code: "IT", name: "Italy", flag: "🇮🇹", label: "ITA" },
  { code: "PT", name: "Portugal", flag: "🇵🇹", label: "POR" },
  { code: "NL", name: "Netherlands", flag: "🇳🇱", label: "NLD" },
  { code: "SE", name: "Sweden", flag: "🇸🇪", label: "SWE" },
];

export function CountrySelect() {
  const [selectedCountry, setSelectedCountry] = useState("US");

  const currentCountry = countries.find(
    (country) => country.code === selectedCountry
  );

  return (
    <Select value={selectedCountry} onValueChange={setSelectedCountry}>
      <SelectTrigger className="w-auto min-w-[100px] h-10 border border-gray-300 bg-white rounded-md px-3 py-2 focus:border-gray-400 focus:ring-0">
        <div className="flex items-center gap-2">
          <span className="text-base">{currentCountry?.flag}</span>
          <span className="text-sm font-medium text-gray-900">
            {currentCountry?.label}
          </span>
        </div>
      </SelectTrigger>
      <SelectContent className="min-w-[200px] bg-white border border-gray-200 rounded-md shadow-lg">
        {countries.map((country) => (
          <SelectItem
            key={country.code}
            value={country.code}
            className="cursor-pointer hover:bg-gray-50 focus:bg-gray-50"
          >
            <div className="flex items-center gap-3">
              <span className="text-base">{country.flag}</span>
              <span className="font-medium text-sm">{country.label}</span>
              <span className="text-gray-600 text-sm">({country.name})</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
