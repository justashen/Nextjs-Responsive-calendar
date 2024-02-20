import { cn } from "@/lib/utils";
import React from "react";

const CalendarBtnDot = ({ className }: { className?: string }) => {
  return (
    <span className={cn("absolute flex h-2 w-2 top-0 right-0 lg:top-1 lg:right-2", className)}>
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffca00] opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ffca00]"></span>
    </span>
  );
};

export default CalendarBtnDot;
