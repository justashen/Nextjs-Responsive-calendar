import React from "react";
import CalendarBtn from "./CalendarBtn";
import { addDays, clamp } from "date-fns";
import CalendarFrame from "./CalendarFrame";

const Calendar = () => {
  const date = new Date();
  return (
    <div className="flex justify-center items-center">
      <CalendarFrame />
    </div>
  );
};

export default Calendar;
