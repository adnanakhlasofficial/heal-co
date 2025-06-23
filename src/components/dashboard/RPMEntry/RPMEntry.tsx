import { Heart, Droplets, Thermometer } from "lucide-react";

const healthMetrics = [
  {
    id: 1,
    icon: Heart,
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    label: "Blood Pressure",
    value: "120/80",
    unit: "mmHG",
  },
  {
    id: 2,
    icon: Droplets,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    label: "Blood Glucose",
    value: "98",
    unit: "mg/dl",
  },
  {
    id: 3,
    icon: Thermometer,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
    label: "Body Temperature",
    value: "98.6",
    unit: "°F",
  },
];

export function RPMEntry() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      {/* Header */}
      <h3 className="text-lg font-semibold text-gray-900 mb-6">RPM Entry</h3>

      {/* Metrics List */}
      <div className="space-y-4">
        {healthMetrics.map((metric) => (
          <div key={metric.id} className="flex items-center gap-4">
            {/* Icon */}
            <div
              className={`w-12 h-12 rounded-full ${metric.iconBg} flex items-center justify-center flex-shrink-0`}
            >
              <metric.icon className={`h-6 w-6 ${metric.iconColor}`} />
            </div>

            {/* Content */}
            <div className="flex-1">
              <p className="text-sm text-gray-600 mb-1">{metric.label}</p>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-bold text-gray-900">
                  {metric.value}
                </span>
                <span className="text-sm text-gray-600">{metric.unit}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
