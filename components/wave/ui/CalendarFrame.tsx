"use client";
import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import CalendarBtn from "./CalendarBtn";

import { toast } from "sonner";

import {
  specialDates,
  dayTitiles,
  months,
  calendarStartDate,
  calendarEndtDate,
} from "./contraints";
import {
  clamp,
  getDate,
  isToday,
  getDay, //get day of week in given day
  getMonth,
  getYear,
  addMonths,
  addDays,
  subMonths,
  startOfMonth,
  lastDayOfMonth,
  getDaysInMonth,
  setDate,
} from "date-fns";

const CalendarFrame = () => {
  const today = new Date();
  const [trackDay, setTrackDay] = useState(today);
  const [selectedDate, setDate] = useState<string>();
  //   console.log(selectedDate);
  const thisMonth = getMonth(trackDay);
  const thisYear = getYear(trackDay);
  const firstDay = startOfMonth(trackDay);
  const lastDay = lastDayOfMonth(trackDay);
  const daysCount = getDaysInMonth(trackDay);

  const nextMonth = () => {
    setTrackDay(
      clamp(addMonths(trackDay, 1), {
        start: calendarStartDate,
        end: calendarEndtDate,
      })
    );
  };

  const preMonth = () => {
    setTrackDay(
      clamp(subMonths(trackDay, 1), {
        start: calendarStartDate,
        end: calendarEndtDate,
      })
    );
  };

  const datesOfMonth = [];
  //days count is number of days in month
  for (let i = 0; i < daysCount; i++) {
    const fDate = firstDay;
    const theDate = addDays(fDate, i);
    datesOfMonth.push(theDate);
    // datesOfMonth is a array of all dates in month
  }

  const handleCalendar = (i: Date) => {
    setDate(i.toDateString());
    toast(`Date Selected ${i.toDateString()}`);
  };
  return (
    <div className="flex flex-col p-3 gap-y-2 shadow-md rounded-md bg-white border-gray-50 select-none">
      <div className="flex justify-between items-center">
        <button
          onClick={preMonth}
          className="p-2 border border-gray-100 rounded-md text-gray-500 hover:text-gray-900 hover:bg-[#f4f4f5] hover:border-gray-200 ease-linear duration-150"
        >
          <ChevronLeftIcon />
        </button>
        <h5 className="text-[#09090B] text-sm font-medium">
          {months[thisMonth]} {thisYear}
        </h5>
        <button
          onClick={nextMonth}
          className="p-2 border border-gray-100 rounded-md text-gray-500 hover:text-gray-900 hover:bg-[#f4f4f5] hover:border-gray-200 ease-linear duration-150"
        >
          <ChevronRightIcon />
        </button>
      </div>

      <div className="flex flex-col gap-x-1">
        {/* disaply the day titles eg:- Tu,We */}
        <div className="flex gap-x-1">
          {dayTitiles.map((title) => (
            <div key={title.title} className="flex flex-col gap-y-1 ">
              <div className="w-8 h-8 lg:w-16 lg:h-14 flex justify-center items-center text-[0.8rem] text-gray-500">
                {title.title}
              </div>
            </div>
          ))}
        </div>
        <div className="grid gap-y-1 grid-cols-7">
          {/*  */}
          {[...Array(getDay(firstDay))].map((_, i) => (
            <CalendarBtn
              active={false}
              key={i}
              day={
                getDaysInMonth(subMonths(trackDay, 1)) -
                (getDay(firstDay) - i - 1)
              }
            />
          ))}

          {}

          {datesOfMonth.map((i, index) => (
            <CalendarBtn
              onClick={() => handleCalendar(i)}
              className={
                i.toDateString() === selectedDate
                  ? "bg-[#131313] border text-gray-50 hover:bg-[#131313] hover:text-gray-50"
                  : "kaputa"
              }
              key={index}
              day={getDate(i)}
              today={isToday(i.toDateString())}
              special={specialDates.includes(i.toDateString())}
            />
          ))}

          {[...Array(6 - getDay(lastDay))].map((_, i) => (
            <CalendarBtn key={i} day={i + 1} active={false}/>
          ))}
        </div>
        {/* <CalendarBtn day="20" />
          <CalendarBtn day="20" />
          <CalendarBtn /> */}
      </div>
    </div>
  );
};

export default CalendarFrame;
