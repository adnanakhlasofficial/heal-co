import Header from "@/components/dashboard/Header/Header";
import HealthMetricsTimeline from "@/components/dashboard/RPMEntry/HealthMetricsTimeline";
import NewReading from "@/components/dashboard/RPMEntry/NewReading";
import SingleRPMCard from "@/components/dashboard/RPMEntry/SingleRPMCard";
import { format } from "date-fns";

interface VitalSign {
  type: "blood-pressure" | "glucose" | "temperature";
  value: string;
  unit: string;
}

export default function RPMEntryTracker() {
  const vitalSigns: VitalSign[] = [
    {
      type: "blood-pressure",
      value: "120/80",
      unit: "mmHG",
    },
    {
      type: "glucose",
      value: "98",
      unit: "mg/dl",
    },
    {
      type: "temperature",
      value: "98.6",
      unit: "°F",
    },
  ];

  return (
    <section>
      <Header
        title="Last Readings"
        description={`Last update at ${format(new Date(), "PP")}`}
      />

      <div className="flex flex-col md:flex-row gap-4 my-6">
        {vitalSigns.map((vital, index) => (
          <SingleRPMCard
            key={index}
            type={vital.type}
            value={vital.value}
            unit={vital.unit}
            className="flex-1"
          />
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <HealthMetricsTimeline />
        <NewReading />
      </div>
    </section>
  );
}
