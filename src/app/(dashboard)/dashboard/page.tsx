import { RPMEntry } from "@/components/dashboard/RPMEntry/RPMEntry";
import { WelcomeHero } from "@/components/dashboard/WelcomeHero/WelcomeHero";
import React from "react";

export default function page() {
  return (
    <section className="grid grid-cols-3 gap-6">
      <WelcomeHero />
      <RPMEntry />
    </section>
  );
}
