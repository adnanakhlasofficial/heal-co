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
    <section
      className="
        grid grid-cols-1 gap-4 
        md:grid-cols-2 md:gap-6 
        lg:grid-cols-3 lg:gap-6
        
      "
    >
      {/* WelcomeHero: spans 2 columns on desktop */}
      <div className="col-span-1 md:col-span-2 lg:col-span-2">
        <WelcomeHero />
      </div>

      {/* RPMEntry: right column on desktop */}
      <div className="col-span-1">
        <RPMEntry />
      </div>

      {/* Action Cards: side-by-side on desktop, stacked on mobile/tablet */}
      <div className="col-span-1">
        <ActionCard
          Icon={MessagesSquare}
          title="Start Chat"
          description="Make sure to check your health every day to stay on top of well-being!"
          buttonText="Chat"
          ButtonIcon={MessageCircle}
        />
      </div>
      <div className="col-span-1">
        <ActionCard
          Icon={Radical}
          title="Track My Health"
          description="Make sure to check your health every day to stay on top of your well-being!"
          buttonText="Track Now"
          ButtonIcon={HeartPulse}
        />
      </div>

      {/* RecentConversation: right column on desktop, full width on mobile/tablet */}
      <div className="col-span-1 md:col-span-2 lg:col-span-1 lg:row-span-2 *:h-full">
        <RecentConversation />
      </div>

      {/* UpcomingSessions: full width on mobile/tablet, spans all columns on desktop */}
      <div className="col-span-1 md:col-span-2 lg:col-span-2">
        <UpcomingSessions />
      </div>
    </section>
  );
}
