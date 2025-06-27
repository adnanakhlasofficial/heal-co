import { Sparkles, Star, BadgeCheck, Crown } from "lucide-react";
import { PricingTier } from "@/types";

export const PricingTiers: PricingTier[] = [
  {
    name: "Free member",
    price: "$0 /month",
    color: "text-gray-700",
    icon: <Sparkles className="w-5 h-5 text-gray-400" />,
    features: {
      priorityAppointments: true,
      virtualConsultations: true,
      specialistReferrals: true,
      prescriptionDelivery: false,
      videoVisit: false,
    },
  },
  {
    name: "Basic member",
    price: "$10 /month",
    color: "text-blue-600",
    icon: <Star className="w-5 h-5 text-blue-400" />,
    features: {
      priorityAppointments: true,
      virtualConsultations: true,
      specialistReferrals: true,
      prescriptionDelivery: false,
      videoVisit: false,
    },
  },
  {
    name: "Standard member",
    price: "$39 /month",
    color: "text-purple-600",
    icon: <BadgeCheck className="w-5 h-5 text-purple-400" />,
    features: {
      priorityAppointments: true,
      virtualConsultations: true,
      specialistReferrals: true,
      prescriptionDelivery: true,
      videoVisit: false,
    },
  },
  {
    name: "Premium member",
    price: "$89 /month",
    color: "text-yellow-600",
    icon: <Crown className="w-5 h-5 text-yellow-400" />,
    features: {
      priorityAppointments: true,
      virtualConsultations: true,
      specialistReferrals: true,
      prescriptionDelivery: true,
      videoVisit: true,
    },
  },
];
