"use client";

import ActionCard from "@/components/dashboard/ActionCard/ActionCard";
import { RPMEntry } from "@/components/dashboard/RPMEntry/RPMEntry";
import { WelcomeHero } from "@/components/dashboard/WelcomeHero/WelcomeHero";
import {
  HeartPulse,
  MessageCircle,
  MessagesSquare,
  Radical,
} from "lucide-react";
import React from "react";

// interface StartChatProps {
//   title?: string;
//   description?: string;
//   buttonText?: string;
//   className?: string;
//   Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
// }

export default function page() {
  return (
    <section className="grid grid-cols-3 gap-6">
      <WelcomeHero />
      <RPMEntry />
      <ActionCard
        Icon={MessagesSquare}
        title="Start Chat"
        description="Make sure to check your health every day to stay on top of well-being!"
        buttonText="Chat"
        ButtonIcon={MessageCircle}
      />
      <ActionCard
        Icon={Radical}
        title="Track My Health"
        description="Make sure to check your health every day to stay on top of your well-being!"
        buttonText="Track Now"
        ButtonIcon={HeartPulse}
      />
    </section>
  );
}
