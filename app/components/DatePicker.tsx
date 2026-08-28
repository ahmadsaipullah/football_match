"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { format, addDays, subDays } from "date-fns";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";

export default function DatePicker() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dateParam = searchParams.get("date");
  const currentDate = dateParam ? new Date(dateParam) : new Date();

  const dates = Array.from({ length: 7 }, (_, i) =>
    addDays(new Date(), i - 3)
  );

  function goToDate(date: Date) {
    const params = new URLSearchParams(searchParams.toString());
    const formatted = format(date, "yyyy-MM-dd");
    const today = format(new Date(), "yyyy-MM-dd");
    if (formatted === today) {
      params.delete("date");
    } else {
      params.set("date", formatted);
    }
    // Preserve filter
    router.push(`/?${params.toString()}`);
  }

  const isToday = (date: Date) =>
    format(date, "yyyy-MM-dd") === format(new Date(), "yyyy-MM-dd");

  const isSelected = (date: Date) =>
    format(date, "yyyy-MM-dd") === format(currentDate, "yyyy-MM-dd");

  return (
    <div className="flex items-center gap-1 overflow-x-auto pb-1 no-scrollbar w-full sm:w-auto max-w-full">
      <button
        onClick={() => goToDate(subDays(currentDate, 1))}
        className="p-1.5 rounded-lg text-[#94a3b8] hover:text-white hover:bg-white/5 transition shrink-0"
        aria-label="Previous day"
      >
        <ChevronLeft size={16} />
      </button>

      <div className="flex items-center gap-1 shrink-0">
        {dates.map((date) => (
          <button
            key={date.toISOString()}
            onClick={() => goToDate(date)}
            className={`flex flex-col items-center px-3 py-1.5 rounded-lg text-xs font-medium transition-all shrink-0 ${
              isSelected(date)
                ? "bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/30"
                : "text-[#94a3b8] hover:text-white hover:bg-white/5"
            }`}
          >
            <span className="text-[0.6rem] uppercase">
              {isToday(date) ? "Today" : format(date, "EEE")}
            </span>
            <span className={isSelected(date) ? "font-bold" : ""}>
              {format(date, "dd MMM")}
            </span>
          </button>
        ))}
      </div>

      <button
        onClick={() => goToDate(addDays(currentDate, 1))}
        className="p-1.5 rounded-lg text-[#94a3b8] hover:text-white hover:bg-white/5 transition shrink-0"
        aria-label="Next day"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
}
