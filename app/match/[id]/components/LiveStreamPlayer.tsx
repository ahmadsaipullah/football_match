"use client";

import { Tv, ExternalLink, Wifi, WifiOff, Zap } from "lucide-react";
import type { LiveStream } from "@/app/lib/types";

interface LiveStreamPlayerProps {
  streams: LiveStream[];
}

function QualityBadge({ quality }: { quality: string }) {
  const colors: Record<string, string> = {
    "4K": "bg-[#8b5cf6]/15 text-[#8b5cf6]",
    HD: "bg-[#10b981]/15 text-[#10b981]",
    SD: "bg-[#64748b]/15 text-[#64748b]",
  };
  return (
    <span
      className={`text-[0.6rem] font-bold px-2 py-0.5 rounded ${
        colors[quality] || colors.SD
      }`}
    >
      {quality}
    </span>
  );
}

export default function LiveStreamPlayer({ streams }: LiveStreamPlayerProps) {
  if (streams.length === 0) {
    return (
      <div className="card p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-[#1e2433] flex items-center justify-center mx-auto mb-4">
          <WifiOff size={28} className="text-[#64748b]" />
        </div>
        <h3 className="text-lg font-semibold mb-1">No Streams Available</h3>
        <p className="text-sm text-[#64748b] max-w-md mx-auto">
          There are no streaming links available for this match. Check back
          closer to kickoff or visit your local broadcaster.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        <Tv size={16} className="text-[#ef4444]" />
        <h3 className="text-sm font-semibold">
          Available Streams ({streams.length})
        </h3>
      </div>

      {/* Stream Cards */}
      <div className="grid gap-3">
        {streams.map((stream) => (
          <a
            key={stream.id}
            href={stream.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card flex items-center justify-between gap-4 px-5 py-4 group hover:border-[#10b981]/30 transition"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ef4444]/20 to-[#f97316]/20 flex items-center justify-center shrink-0">
                <Tv size={18} className="text-[#ef4444]" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-sm font-semibold group-hover:text-[#10b981] transition">
                    {stream.broadcaster}
                  </span>
                  <QualityBadge quality={stream.quality} />
                  {stream.isFree && (
                    <span className="text-[0.6rem] font-bold px-2 py-0.5 rounded bg-[#f59e0b]/15 text-[#f59e0b]">
                      FREE
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#64748b]">
                  {stream.language} •{" "}
                  {stream.isFree ? "Free to watch" : "Subscription required"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="hidden sm:flex items-center gap-1.5 px-4 py-2 bg-[#10b981] text-white rounded-lg text-sm font-medium group-hover:bg-[#059669] transition">
                <Zap size={14} />
                Watch
              </span>
              <ExternalLink
                size={14}
                className="text-[#64748b] group-hover:text-[#10b981] transition sm:hidden"
              />
            </div>
          </a>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="px-4 py-3 bg-[#f59e0b]/5 border border-[#f59e0b]/20 rounded-lg">
        <p className="text-xs text-[#f59e0b]">
          ⚠️ Streaming links redirect to official broadcasters. Availability may
          vary by region.
        </p>
      </div>
    </div>
  );
}
