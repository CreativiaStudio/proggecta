"use client";

import { useState, useEffect } from "react";
import { getUpcomingOpenDays, type DayOption } from "@/lib/openingDays";
import { cn } from "@/lib/cn";

interface DayChipsProps {
  value: string;
  onChange: (date: string) => void;
  count?: number;
}

export function DayChips({ value, onChange, count = 10 }: DayChipsProps) {
  const [days, setDays] = useState<DayOption[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setDays(getUpcomingOpenDays(count));
    setMounted(true);
  }, [count]);

  if (!mounted) {
    return (
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="w-20 h-16 rounded-xl bg-[#efe8dd] animate-pulse shrink-0"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none snap-x">
      {days.map((d) => {
        const isSelected = value === d.date;
        return (
          <button
            key={d.date}
            type="button"
            onClick={() => onChange(d.date)}
            className={cn(
              "flex flex-col items-center justify-center p-3 rounded-xl min-w-[76px] transition-all cursor-pointer snap-start border text-center",
              isSelected
                ? "bg-[#8a5a32] text-white border-[#8a5a32] shadow-sm"
                : "bg-white text-[#1f1b16] border-[#d9cfc1] hover:border-[#8a5a32]/60 hover:bg-[#faf7f2]"
            )}
          >
            <span
              className={cn(
                "text-xs font-semibold uppercase tracking-wider",
                isSelected ? "text-white/80" : "text-[#6f7a64]"
              )}
            >
              {d.weekday}
            </span>
            <span className="text-sm font-bold mt-0.5">{d.dayMonth}</span>
          </button>
        );
      })}

      {/* Opzione flessibile */}
      <button
        type="button"
        onClick={() => onChange("flessibile")}
        className={cn(
          "flex flex-col items-center justify-center p-3 rounded-xl min-w-[90px] transition-all cursor-pointer snap-start border text-center",
          value === "flessibile"
            ? "bg-[#8a5a32] text-white border-[#8a5a32] shadow-sm"
            : "bg-white text-[#1f1b16] border-[#d9cfc1] hover:border-[#8a5a32]/60 hover:bg-[#faf7f2]"
        )}
      >
        <span
          className={cn(
            "text-xs font-semibold uppercase tracking-wider",
            value === "flessibile" ? "text-white/80" : "text-[#6f7a64]"
          )}
        >
          Qualsiasi
        </span>
        <span className="text-sm font-bold mt-0.5">Flessibile</span>
      </button>
    </div>
  );
}
