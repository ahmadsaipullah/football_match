"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-[#ef4444]/10 flex items-center justify-center mb-4">
        <AlertTriangle size={28} className="text-[#ef4444]" />
      </div>
      <h2 className="text-xl font-bold mb-2">Something went wrong!</h2>
      <p className="text-[#94a3b8] text-sm mb-6 max-w-md">
        An error occurred while loading this page. This could be due to a network issue or API limit.
      </p>
      <button
        onClick={reset}
        className="flex items-center gap-2 px-5 py-2.5 bg-[#10b981] text-white rounded-lg font-medium text-sm hover:bg-[#059669] transition"
      >
        <RefreshCw size={16} />
        Try again
      </button>
    </div>
  );
}
