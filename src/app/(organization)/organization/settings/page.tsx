"use client";
import { useState } from "react";
import { Eye, Upload } from "lucide-react";
import Image from "next/image";

const defaultLogo =
  "https://pplx-res.cloudinary.com/image/private/user_uploads/67161697/9ab5077f-a3ab-41eb-809a-dd7441e5b45d/image.jpg";

const brandColors = [
  "#C800FF",
  "#00E1C3",
  "#FF3A3A",
  "#FFB800",
  "#FF6B00",
  "#0085FF",
  "conic-gradient(from 180deg at 50% 50%, #FF3A3A 0deg, #00E1C3 360deg)",
];

export default function BrandSettingsPage() {
  const [logo] = useState<string>(defaultLogo);
  const [color, setColor] = useState<string>("#C800FF");
  const [buttonActive, setButtonActive] = useState<boolean>(true);
  const [features, setFeatures] = useState({
    priority: true,
    virtual: true,
    referrals: true,
    delivery: false,
    video: false,
  });
  const [webhookUrl, setWebhookUrl] = useState<string>("");
  const [secretKey, setSecretKey] = useState<string>("");
  const [events, setEvents] = useState({
    appointment: false,
    patient: false,
    billing: false,
  });

  return (
    <div className="bg-gray-50">
      <div className="space-y-6">
        {/* Top Section - Two Cards Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Card - Brand/Logo/Color */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            {/* Logo Section */}
            <div className="flex items-center gap-4 mb-6">
              <Image
                src={logo}
                width={56}
                height={56}
                alt="Logo"
                className="w-14 h-14 rounded-full border border-gray-200"
              />
              <div className="flex-1">
                <div className="font-semibold text-lg text-gray-900">
                  Catalog Health
                </div>
                <div className="text-sm text-gray-500">
                  PNG, JPEG under 10MB
                </div>
              </div>
              <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-gray-50">
                <Upload className="w-4 h-4" />
                Upload new logo
              </button>
            </div>

            {/* Brand Color Section */}
            <div>
              <div className="font-semibold text-lg mb-2">Brand Color</div>
              <div className="text-sm text-gray-500 mb-4">
                Select a primary color for your branding.
              </div>

              {/* Color Palette */}
              <div className="flex items-center gap-3 mb-6">
                {brandColors.map((c, i) =>
                  c.startsWith("conic-gradient") ? (
                    <button
                      key={i}
                      className={`w-8 h-8 rounded-full border-2 cursor-pointer transition-all ${
                        color === "#C800FF"
                          ? "border-purple-500 scale-110"
                          : "border-gray-200"
                      }`}
                      style={{
                        background:
                          "conic-gradient(from 180deg at 50% 50%, #FF3A3A 0deg, #00E1C3 360deg)",
                      }}
                      onClick={() => setColor("#C800FF")}
                    />
                  ) : (
                    <button
                      key={i}
                      className={`w-8 h-8 rounded-full border-2 cursor-pointer transition-all ${
                        color === c
                          ? "border-purple-500 scale-110"
                          : "border-gray-200"
                      }`}
                      style={{ background: c }}
                      onClick={() => setColor(c)}
                    />
                  )
                )}
              </div>

              {/* Preview Section */}
              <div className="flex items-center gap-6">
                <div>
                  <div className="text-sm text-gray-500 mb-2">Preview</div>
                  <button
                    className="px-6 py-2 rounded-full font-semibold text-white text-sm"
                    style={{ background: color }}
                  >
                    Button
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500">Button</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={buttonActive}
                      onChange={() => setButtonActive(!buttonActive)}
                      className="sr-only peer"
                    />
                    <div
                      className={`w-11 h-6 rounded-full transition-colors ${
                        buttonActive ? "bg-purple-600" : "bg-gray-200"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${
                          buttonActive ? "translate-x-5" : "translate-x-0.5"
                        } mt-0.5`}
                      />
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card - Membership/Features */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            {/* Membership Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="text-purple-600">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span className="font-semibold text-purple-700">
                  Standard member
                </span>
              </div>
              <div className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                $39 <span className="text-gray-400">/month</span>
              </div>
            </div>

            {/* Feature Toggle Section */}
            <div>
              <div className="font-semibold text-lg mb-4">Feature Toggle</div>
              <div className="space-y-4">
                {[
                  { label: "Priority appointments", key: "priority" },
                  { label: "24/7 virtual consultations", key: "virtual" },
                  { label: "Specialist referrals", key: "referrals" },
                  { label: "Prescription delivery", key: "delivery" },
                  { label: "Video Visit", key: "video" },
                ].map((feature) => (
                  <div
                    key={feature.key}
                    className="flex items-center justify-between"
                  >
                    <span className="text-gray-900">{feature.label}</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={features[feature.key as keyof typeof features]}
                        onChange={() =>
                          setFeatures((prev) => ({
                            ...prev,
                            [feature.key]:
                              !prev[feature.key as keyof typeof features],
                          }))
                        }
                        className="sr-only peer"
                      />
                      <div
                        className={`w-11 h-6 rounded-full transition-colors ${
                          features[feature.key as keyof typeof features]
                            ? "bg-emerald-500"
                            : "bg-gray-200"
                        }`}
                      >
                        <div
                          className={`w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${
                            features[feature.key as keyof typeof features]
                              ? "translate-x-5"
                              : "translate-x-0.5"
                          } mt-0.5`}
                        />
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Webhook Integration */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="font-semibold text-lg mb-2">Webhook Integration</div>
          <div className="text-sm text-gray-500 mb-6">
            Configure webhooks to integrate with your existing systems.
          </div>

          {/* URL and Secret Key Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Webhook URL
              </label>
              <input
                type="text"
                placeholder="https://your-api-endpoint.com/webhook"
                value={webhookUrl}
                onChange={(e) => setWebhookUrl(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Secret Key
              </label>
              <input
                type="password"
                placeholder="https://your-api-endpoint.com/webhook"
                value={secretKey}
                onChange={(e) => setSecretKey(e.target.value)}
                className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <Eye className="w-4 h-4 absolute right-3 top-9 text-gray-400" />
            </div>
          </div>

          {/* Events to Send */}
          <div className="mb-6">
            <div className="text-sm font-medium text-gray-700 mb-3">
              Events to Send
            </div>
            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={events.appointment}
                  onChange={() =>
                    setEvents((prev) => ({
                      ...prev,
                      appointment: !prev.appointment,
                    }))
                  }
                  className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                />
                <span className="text-gray-900">
                  Appointment Created/Updated
                </span>
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={events.patient}
                  onChange={() =>
                    setEvents((prev) => ({ ...prev, patient: !prev.patient }))
                  }
                  className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                />
                <span className="text-gray-900">Patient Registration</span>
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={events.billing}
                  onChange={() =>
                    setEvents((prev) => ({ ...prev, billing: !prev.billing }))
                  }
                  className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                />
                <span className="text-gray-900">Billing Events</span>
              </label>
            </div>
          </div>

          {/* Test Button */}
          <button className="px-6 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            Test Webhooks
          </button>
        </div>
      </div>
    </div>
  );
}
