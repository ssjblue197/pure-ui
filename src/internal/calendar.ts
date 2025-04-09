import dateFormatter from "pure-date-format";

const dateFormat = dateFormatter();

export interface CalendarDay {
  date: Date;
  isToday: boolean;
  isWeekday: boolean;
  isWeekend: boolean;
  isCurrentMonth: boolean;
  isPreviousMonth: boolean;
  isNextMonth: boolean;
}

export type CalendarInterface = "day" | "month" | "year";

export interface CalendarGridOptions {
  weekStartsWith: string; //"sunday" | "monday"
  interface: CalendarInterface;
}

/** Generates a calendar grid. Month should be 1-12, not 0-11. */
export function generateCalendarGrid(year: number, month: number, options?: Partial<CalendarGridOptions>) {
  const weekStartsWith = options?.weekStartsWith || "sunday";
  const today = new Date();
  const firstOfMonth = new Date(year, month - 1, 1);
  const dayThisMonthStartsWith = weekStartsWith === "sunday" ? firstOfMonth.getDay() : (firstOfMonth.getDay() + 6) % 7;

  const lastDayOfMonth = new Date(year, month, 0).getDate();
  const lastDayOfPreviousMonth =
    month === 1 ? new Date(year - 1, 12, 0).getDate() : new Date(year, month - 1, 0).getDate();

  const calendarGrid: CalendarDay[] = [];
  let day = 1;

  switch (options?.interface) {
    case "day":
      do {
        const date = new Date(year, month - 1, day);
        // Fill in days from previous month
        if (day === 1) {
          let lastMonthDay = lastDayOfPreviousMonth - dayThisMonthStartsWith + 1;
          for (let i = 0; i < dayThisMonthStartsWith; i++) {
            const d = new Date(year, month - 2, lastMonthDay++);
            calendarGrid.push({
              date: d,
              isToday: isSameDay(d, today),
              isWeekday: isWeekday(d),
              isWeekend: isWeekend(d),
              isCurrentMonth: false,
              isPreviousMonth: true,
              isNextMonth: false,
            });
          }
        }

        // Current month
        calendarGrid.push({
          date,
          isToday: isSameDay(date, today),
          isWeekday: isWeekday(date),
          isWeekend: isWeekend(date),
          isCurrentMonth: true,
          isPreviousMonth: false,
          isNextMonth: false,
        });

        // Fill in days from next month
        if (day === lastDayOfMonth) {
          let nextMonthDay = 1;
          while (calendarGrid.length % 7 !== 0) {
            const d = new Date(year, month, nextMonthDay++);
            calendarGrid.push({
              date: d,
              isToday: isSameDay(d, today),
              isWeekday: isWeekday(d),
              isWeekend: isWeekend(d),
              isCurrentMonth: false,
              isPreviousMonth: false,
              isNextMonth: true,
            });
          }
        }

        day++;
      } while (day <= lastDayOfMonth);
      break;

    case "month":
      Array.from({ length: 12 }).forEach((_, idx) => {
        calendarGrid.push({
          date: new Date(year, idx, 1),
          isToday: false,
          isWeekday: false,
          isWeekend: false,
          isCurrentMonth: idx === month - 1,
          isPreviousMonth: false,
          isNextMonth: false,
        });
      });
      break;
  }

  return calendarGrid;
}

/** Generates a localized array of day names. */
export function getAllDayNames(locale = "en-GB", format: Intl.DateTimeFormatOptions["weekday"] = "long") {
  const formatter = new Intl.DateTimeFormat(locale, {
    weekday: format,
    timeZone: "UTC",
  });
  const days = [1, 2, 3, 4, 5, 6, 7].map(day => {
    const dd = day < 10 ? `0${day}` : day;
    return new Date(`2024-01-${dd}T00:00:00+00:00`);
  });
  return days.map(date => formatter.format(date));
}

/** Generates a localized array of month names. */
export function getAllMonthNames(locale = "en-GB", format: Intl.DateTimeFormatOptions["month"] = "long") {
  const formatter = new Intl.DateTimeFormat(locale, {
    month: format,
    timeZone: "UTC",
  });
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(month => {
    const mm = month < 10 ? `0${month}` : month;
    return new Date(`2024-${mm}-01T00:00:00+00:00`);
  });
  return months.map(date => formatter.format(date));
}

/** Determines if two dates are the same day. */
export function isSameDay(date1: Date, date2: Date) {
  return (
    date1?.getFullYear() === date2?.getFullYear() &&
    date1?.getMonth() === date2?.getMonth() &&
    date1?.getDate() === date2?.getDate()
  );
}

/** Determines if the date is a weekend. */
export function isWeekend(date: Date) {
  const day = date.getDay();
  return day === 0 || day === 6;
}

/** Determines if the date is a weekday. */
export function isWeekday(date: Date) {
  const day = date.getDay();
  return day > 0 && day < 6;
}

/** Returns a localized, human-readable day name. */
export function getDayName(date: Date, locale = "en-GB", format: Intl.DateTimeFormatOptions["weekday"] = "long") {
  return getAllDayNames(locale, format)[date.getDate() - 1];
}

/** Returns a localized, human-readable month name. */
export function getMonthName(date: Date, locale = "en-GB", format: Intl.DateTimeFormatOptions["month"] = "long") {
  return getAllMonthNames(locale, format)[date.getMonth()];
}

export function getDateLabelWithFormat(date: Date, locale = "en-GB", format?: Intl.DateTimeFormatOptions) {
  return new Intl.DateTimeFormat(locale, format).format(date);
}

export function getDateDifferentFrom(date: Date, days: number) {
  return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
}

export function getMonthDifferentFrom(date: Date, months: number) {
  return dateFormat.add(date, months, "months");
}
