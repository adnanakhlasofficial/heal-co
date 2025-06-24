"use client";

import ActionCard from "@/components/dashboard/ActionCard/ActionCard";
import { UpcomingSessions } from "@/components/dashboard/Appointment/UpcomingAppointments";
import { RecentConversation } from "@/components/dashboard/RecentConversation/RecentConversation";
import { RPMEntry } from "@/components/dashboard/RPMEntry/RPMEntry";
import { WelcomeHero } from "@/components/dashboard/WelcomeHero/WelcomeHero";
import {
  HeartPulse,
  MessageCircle,
  MessagesSquare,
  Radical,
} from "lucide-react";

export default function Home() {
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
      <RecentConversation />

      <UpcomingSessions />
    </section>
  );
}
