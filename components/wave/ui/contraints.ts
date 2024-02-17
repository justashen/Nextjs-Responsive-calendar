import { getYear, addYears } from "date-fns";

export const specialDates = [
  "Thu Feb 01 2024",
  "Fri Feb 02 2024",
  "Mon Feb 19 2024",
  "Mon Feb 26 2024",
  "Tue Feb 27 2024",
  "Sat Feb 17 2024",
];

// the titles of calendar
export const dayTitiles = [
  { title: "Su" },
  { title: "Mo" },
  { title: "Tu" },
  { title: "We" },
  { title: "Th" },
  { title: "Fr" },
  { title: "Sa" },
];

// the month displayed in the calendar top
export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const calendarStartDate = "Thu Feb 01 2024";

// automated the limit
const yearLimit = 5;
export const calendarEndtDate = addYears(new Date(), yearLimit);
