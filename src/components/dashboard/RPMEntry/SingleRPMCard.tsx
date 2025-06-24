import React from "react";
import {
  Heart,
  Activity,
  Thermometer,
  Weight,
  Droplet,
  LucideIcon,
} from "lucide-react";

// Define the config type
type CardConfig = {
  icon: LucideIcon;
  title: string;
  bgColor: string;
  iconBg: string;
  iconColor: string;
};

// Define the valid types
type RPMType =
  | "blood-pressure"
  | "heart-rate"
  | "temperature"
  | "weight"
  | "glucose";

interface RPMCardProps {
  type: RPMType;
  value: string;
  unit?: string;
  className?: string;
}

const SingleRPMCard: React.FC<RPMCardProps> = ({
  type,
  value,
  unit,
  className = "",
}) => {
  const getCardConfig = (type: RPMType): CardConfig => {
    const configs: Record<RPMType, CardConfig> = {
      "blood-pressure": {
        icon: Heart,
        title: "Blood Pressure",
        bgColor: "bg-red-50",
        iconBg: "bg-red-100",
        iconColor: "text-red-600",
      },
      "heart-rate": {
        icon: Activity,
        title: "Heart Rate",
        bgColor: "bg-blue-50",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
      },
      temperature: {
        icon: Thermometer,
        title: "Temperature",
        bgColor: "bg-orange-50",
        iconBg: "bg-orange-100",
        iconColor: "text-orange-600",
      },
      weight: {
        icon: Weight,
        title: "Weight",
        bgColor: "bg-green-50",
        iconBg: "bg-green-100",
        iconColor: "text-green-600",
      },
      glucose: {
        icon: Droplet,
        title: "Blood Glucose",
        bgColor: "bg-purple-50",
        iconBg: "bg-purple-100",
        iconColor: "text-purple-600",
      },
    };

    // Now properly typed
    return configs[type] || configs["blood-pressure"];
  };

  const config = getCardConfig(type);
  const IconComponent = config.icon;

  return (
    <div
      className={`${config.bgColor} rounded-lg p-4 flex items-center space-x-4 ${className}`}
    >
      <div
        className={`${config.iconBg} rounded-lg p-3 flex items-center justify-center`}
      >
        <IconComponent className={`w-6 h-6 ${config.iconColor}`} />
      </div>
      <div className="flex-1">
        <p className="text-sm text-gray-600 mb-1">{config.title}</p>
        <p className="text-xl font-bold text-gray-900">
          {value}{" "}
          {unit && (
            <span className="text-sm font-normal text-gray-600">{unit}</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default SingleRPMCard;
