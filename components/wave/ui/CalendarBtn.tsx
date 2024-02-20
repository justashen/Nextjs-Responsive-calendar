import React from "react";
import CalendarBtnDot from "./CalendarBtnDot";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface Props {
  day?: string | number;
  today?: boolean;
  special?: boolean;
  active?: boolean;
  key?: any | undefined;
  id?: string;
  className?:string;
  onClick?:() => void;
}

const CalendarBtn = ({ day,className, onClick, id, today, special, active = true }: Props) => {
  const varient = {
    // today: "text-[#fafafa] bg-[#18181B] hover:bg-[#18181B]",
    today: "font-bold",
    active: "text-[#09090B] hover:bg-[#f4f4f5]",
  };

  return (
    <div className="relative w-8 h-8 lg:w-16 lg:h-14">
      {day ? (
        <button
          id={id}
          onClick={onClick}
          className={cn(
            "w-full text-nowrap text-[#a5a5a5] h-full flex justify-center items-center text-sm rounded-md",
            active ? varient.active : "cursor-not-allowed",
            today && varient.today,
            className
          )}
        >
          {day}
        </button>
      ) : (
        <Skeleton className="w-8 h-8 rounded-md">{/* {day} */}</Skeleton>
      )}
      {special && <CalendarBtnDot />}
    </div>
  );
};

export default CalendarBtn;
