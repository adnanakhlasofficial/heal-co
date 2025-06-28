"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Eye, EyeOff } from "lucide-react";

const brandColors = [
  "#A259FF", // purple
  "#10B981", // green
  "#EF4444", // red
  "#F59E0B", // orange
  "#3B82F6", // blue
  "#EC4899", // pink
  "linear-gradient(90deg,#A259FF 0%,#F59E0B 100%)", // rainbow
];

const defaultToggles = {
  priority: true,
  virtual: true,
  specialist: true,
  delivery: false,
  video: false,
};

const defaultWebhookEvents = {
  appointment: false,
  registration: false,
  billing: false,
};

export default function CatalogHealthSettings() {
  const [selectedColor, setSelectedColor] = useState("#A259FF");
  const [showSecret, setShowSecret] = useState(false);
  const [featureToggles, setFeatureToggles] = useState(defaultToggles);
  const [webhookEvents, setWebhookEvents] = useState(defaultWebhookEvents);
  const [webhookUrl, setWebhookUrl] = useState("");
  const [secretKey, setSecretKey] = useState("");

  return (
    <div>
      <div className="space-y-6">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Left: Brand and Color */}
          <div className="md:col-span-2 h-full">
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-6 h-full">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#f4f2ff] flex items-center justify-center">
                    <span className="text-4xl font-bold text-[#A259FF]">C</span>
                  </div>
                  <div>
                    <div className="font-semibold text-lg text-gray-900">
                      Catalog Health
                    </div>
                    <div className="text-xs text-gray-500">
                      PNG, JPEG under 10MB
                    </div>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="rounded-full px-5 py-2 font-medium border border-gray-200"
                >
                  Upload new logo
                </Button>
              </div>
              <div className="mb-2 font-semibold text-base text-gray-900">
                Brand Color
              </div>
              <div className="text-sm text-gray-500 mb-3">
                Select a primary color for your branding.
              </div>
              <div className="flex items-center gap-4 mb-4">
                {brandColors.map((color) =>
                  color.startsWith("linear") ? (
                    <button
                      key={color}
                      className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                        selectedColor === color
                          ? "border-[#A259FF]"
                          : "border-transparent"
                      }`}
                      style={{
                        background: color,
                      }}
                      onClick={() => setSelectedColor(color)}
                    >
                      {selectedColor === color && (
                        <span className="block w-3 h-3 rounded-full bg-white" />
                      )}
                    </button>
                  ) : (
                    <button
                      key={color}
                      className={`w-8 h-8 rounded-full border-2 ${
                        selectedColor === color
                          ? "border-[#A259FF]"
                          : "border-transparent"
                      }`}
                      style={{ background: color }}
                      onClick={() => setSelectedColor(color)}
                    />
                  )
                )}
              </div>
              <div className="mb-2 font-medium text-sm text-gray-900">
                Preview
              </div>
              <div className="flex items-center gap-3">
                <Button
                  style={{
                    background: selectedColor.startsWith("linear")
                      ? undefined
                      : selectedColor,
                    backgroundImage: selectedColor.startsWith("linear")
                      ? selectedColor
                      : undefined,
                  }}
                  className="text-white font-semibold px-6"
                >
                  Button
                </Button>
                <Switch checked />
              </div>
            </div>
          </div>
          {/* Right: Feature Toggle */}
          <div>
            <div className="bg-white rounded-2xl shadow-sm p-8 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[#A259FF]">
                  <svg
                    width={18}
                    height={18}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.75L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </span>
                <span className="font-semibold text-[#A259FF]">
                  Standard member
                </span>
              </div>
              <div className="mb-6">
                <span className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-700 font-medium">
                  $39/month
                </span>
              </div>
              <div className="font-semibold text-base text-gray-900 mb-4">
                Feature Toggle
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <span className="text-gray-800 text-sm">
                    Priority appointments
                  </span>
                  <Switch
                    checked={featureToggles.priority}
                    onCheckedChange={() =>
                      setFeatureToggles((ft) => ({
                        ...ft,
                        priority: !ft.priority,
                      }))
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-800 text-sm">
                    24/7 virtual consultations
                  </span>
                  <Switch
                    checked={featureToggles.virtual}
                    onCheckedChange={() =>
                      setFeatureToggles((ft) => ({
                        ...ft,
                        virtual: !ft.virtual,
                      }))
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-800 text-sm">
                    Specialist referrals
                  </span>
                  <Switch
                    checked={featureToggles.specialist}
                    onCheckedChange={() =>
                      setFeatureToggles((ft) => ({
                        ...ft,
                        specialist: !ft.specialist,
                      }))
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-800 text-sm">
                    Prescription delivery
                  </span>
                  <Switch
                    checked={featureToggles.delivery}
                    onCheckedChange={() =>
                      setFeatureToggles((ft) => ({
                        ...ft,
                        delivery: !ft.delivery,
                      }))
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-800 text-sm">Video Visit</span>
                  <Switch
                    checked={featureToggles.video}
                    onCheckedChange={() =>
                      setFeatureToggles((ft) => ({ ...ft, video: !ft.video }))
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Webhook Integration */}
        <div className="bg-white rounded-2xl shadow-sm p-8 h-full">
          <div className="font-semibold text-base text-gray-900 mb-2">
            Webhook Integration
          </div>
          <div className="text-sm text-gray-500 mb-6">
            Configure webhooks to integrate with your existing systems.
          </div>
          <div className="mb-5">
            <label className="block text-sm text-gray-700 font-medium mb-1">
              Webhook URL
            </label>
            <Input
              placeholder="https://your-api-endpoint.com/webhook"
              value={webhookUrl}
              onChange={(e) => setWebhookUrl(e.target.value)}
              className="bg-[#fafbfc] border border-gray-200"
            />
          </div>
          <div className="mb-5">
            <label className="block text-sm text-gray-700 font-medium mb-1">
              Secret Key
            </label>
            <div className="relative">
              <Input
                placeholder="https://your-api-endpoint.com/webhook"
                type={showSecret ? "text" : "password"}
                value={secretKey}
                onChange={(e) => setSecretKey(e.target.value)}
                className="bg-[#fafbfc] border border-gray-200 pr-10"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                onClick={() => setShowSecret((s) => !s)}
                tabIndex={-1}
              >
                {showSecret ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
          <div className="mb-5">
            <div className="block text-sm text-gray-700 font-medium mb-2">
              Events to Send
            </div>
            <div className="flex flex-col gap-2">
              <label className="inline-flex items-center gap-2 text-gray-700 text-sm">
                <input
                  type="checkbox"
                  checked={webhookEvents.appointment}
                  onChange={() =>
                    setWebhookEvents((e) => ({
                      ...e,
                      appointment: !e.appointment,
                    }))
                  }
                  className="accent-[#A259FF] w-4 h-4 rounded"
                />
                Appointment Created/Updated
              </label>
              <label className="inline-flex items-center gap-2 text-gray-700 text-sm">
                <input
                  type="checkbox"
                  checked={webhookEvents.registration}
                  onChange={() =>
                    setWebhookEvents((e) => ({
                      ...e,
                      registration: !e.registration,
                    }))
                  }
                  className="accent-[#A259FF] w-4 h-4 rounded"
                />
                Patient Registration
              </label>
              <label className="inline-flex items-center gap-2 text-gray-700 text-sm">
                <input
                  type="checkbox"
                  checked={webhookEvents.billing}
                  onChange={() =>
                    setWebhookEvents((e) => ({ ...e, billing: !e.billing }))
                  }
                  className="accent-[#A259FF] w-4 h-4 rounded"
                />
                Billing Events
              </label>
            </div>
          </div>
          <Button
            variant="outline"
            className="rounded-lg px-6 py-2 font-medium border border-gray-200"
          >
            Test Webhooks
          </Button>
        </div>
      </div>
    </div>
  );
}
