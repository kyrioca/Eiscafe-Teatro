"use client";

import { useEffect, useState } from "react";
import { getOpenStatus } from "@/lib/openingHours";

interface OpenNowProps {
  variant?: "header" | "contact";
}

export function OpenNow({ variant = "header" }: OpenNowProps) {
  const [status, setStatus] = useState<ReturnType<typeof getOpenStatus> | null>(null);

  useEffect(() => {
    // Avoid hydration mismatch by setting state only on client
    setStatus(getOpenStatus());
    const timer = setInterval(() => setStatus(getOpenStatus()), 60_000);
    return () => clearInterval(timer);
  }, []);

  if (!status) return null;

  if (variant === "contact") {
    return (
      <div className="flex items-center gap-2 mb-4">
        <span
          className={`pulse-dot inline-block w-2.5 h-2.5 rounded-full ${
            status.isOpen ? "bg-emerald-500" : "bg-gray-400"
          }`}
          aria-hidden="true"
        />
        <span
          className={`text-sm font-semibold ${
            status.isOpen ? "text-emerald-700" : "text-gray-500"
          }`}
        >
          {status.label}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide ${
        status.isOpen
          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
          : "bg-gray-100 text-gray-500 border border-gray-200"
      }`}
      role="status"
      aria-live="polite"
      aria-label={status.label}
    >
      <span
        className={`pulse-dot inline-block w-2 h-2 rounded-full ${
          status.isOpen ? "bg-emerald-500" : "bg-gray-400"
        }`}
        aria-hidden="true"
      />
      <span className="hidden sm:inline">{status.label}</span>
      <span className="sm:hidden">{status.isOpen ? "Geöffnet" : "Geschlossen"}</span>
    </div>
  );
}
