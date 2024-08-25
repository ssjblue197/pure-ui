export interface CalendarDay {
  date: Date;
  isToday: boolean;
  isWeekday: boolean;
  isWeekend: boolean;
  isCurrentMonth: boolean;
  isPreviousMonth: boolean;
  isNextMonth: boolean;
}

export interface CalendarGridOptions {
  weekStartsWith: "sunday" | "monday";
}

/** Generates a calendar grid. Month should be 1-12, not 0-11. */
export function generateCalendarGrid(year: number, month: number, options?: Partial<CalendarGridOptions>) {
  const weekStartsWith = options?.weekStartsWith || "sunday";
  const today = new Date();
  const dayThisMonthStartsWith = new Date(year, month - 1, 1).getDay();
  const lastDayOfMonth = new Date(year, month, 0).getDate();
  const lastDayOfPreviousMonth =
    month === 1 ? new Date(year - 1, 1, 0).getDate() : new Date(year, month - 1, 0).getDate();
  const dayGrid: CalendarDay[] = [];
  let day = 1;

  do {
    const date = new Date(year, month - 1, day);
    let dayOfWeek = new Date(year, month - 1, day).getDay();

    if (weekStartsWith === "sunday") {
      //
      // TODO
      //
    }

    // Days in the previous month
    if (day === 1) {
      let lastMonthDay = lastDayOfPreviousMonth - dayThisMonthStartsWith + 1;
      for (let i = 0; i < dayThisMonthStartsWith; i++) {
        const dayOfLastMonth = new Date(year, month - 2, lastMonthDay);

        dayGrid.push({
          date: dayOfLastMonth,
          isToday: isSameDay(dayOfLastMonth, today),
          isWeekday: isWeekday(dayOfLastMonth),
          isWeekend: isWeekend(dayOfLastMonth),
          isCurrentMonth: false,
          isPreviousMonth: true,
          isNextMonth: false,
        });

        lastMonthDay++;
      }
    }

    dayGrid.push({
      date,
      isToday: isSameDay(date, today),
      isWeekday: isWeekday(date),
      isWeekend: isWeekend(date),
      isCurrentMonth: true,
      isPreviousMonth: false,
      isNextMonth: false,
    });

    // Days in the next month
    if (day === lastDayOfMonth) {
      let nextMonthDay = 1;
      for (dayOfWeek; dayOfWeek < 6; dayOfWeek++) {
        const dayOfNextMonth = new Date(year, month, nextMonthDay);

        dayGrid.push({
          date: dayOfNextMonth,
          isToday: isSameDay(dayOfNextMonth, today),
          isWeekday: isWeekday(dayOfNextMonth),
          isWeekend: isWeekend(dayOfNextMonth),
          isCurrentMonth: false,
          isPreviousMonth: false,
          isNextMonth: true,
        });

        nextMonthDay++;
      }
    }

    day++;
  } while (day <= lastDayOfMonth);

  return dayGrid;
}

/** Generates a localized array of day names. */
export function getAllDayNames(locale = "en", format: Intl.DateTimeFormatOptions["weekday"] = "long") {
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
export function getAllMonthNames(locale = "en", format: Intl.DateTimeFormatOptions["month"] = "long") {
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
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
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
export function getDayName(date: Date, locale = "en", format: Intl.DateTimeFormatOptions["weekday"] = "long") {
  return getAllDayNames(locale, format)[date.getDate() - 1];
}

/** Returns a localized, human-readable month name. */
export function getMonthName(date: Date, locale = "en", format: Intl.DateTimeFormatOptions["month"] = "long") {
  return getAllMonthNames(locale, format)[date.getMonth()];
}

export function getDateLabelWithFormat(date: Date, locale = "en", format?: Intl.DateTimeFormatOptions) {
  return new Intl.DateTimeFormat(locale, format).format(date);
}

export function getDateDifferentFrom(date: Date, days: number) {
  return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
}

export function padZero(num: number, length = 2) {
  return num.toString().padStart(length, "0");
}

export function getLocalizedNames(locale: string) {
  const dayNames = [];
  const dayShortNames = [];
  const dayMinNames = [];
  const monthNames = [];
  const monthShortNames = [];

  // Populate day names
  for (let i = 0; i < 7; i++) {
    const date = new Date(Date.UTC(2024, 1, 1 + i)); // Sunday to Saturday
    dayNames.push(new Intl.DateTimeFormat(locale, { weekday: "long" }).format(date));
    dayShortNames.push(new Intl.DateTimeFormat(locale, { weekday: "short" }).format(date));
    dayMinNames.push(new Intl.DateTimeFormat(locale, { weekday: "narrow" }).format(date));
  }

  // Populate month names
  for (let i = 0; i < 12; i++) {
    const date = new Date(Date.UTC(2024, i, 1));
    monthNames.push(new Intl.DateTimeFormat(locale, { month: "long" }).format(date));
    monthShortNames.push(new Intl.DateTimeFormat(locale, { month: "short" }).format(date));
  }

  return {
    dayNames,
    dayShortNames,
    dayMinNames,
    monthNames,
    monthShortNames,
  };
}

export function dateFormatter() {
  function fromDate(date: Date, format: string, locale = "en-US") {
    const { dayNames, dayShortNames, dayMinNames, monthNames, monthShortNames } = getLocalizedNames(locale);

    const day = date.getDate();
    const dayOfWeek = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const milliseconds = date.getMilliseconds();
    const timezoneOffset = -date.getTimezoneOffset();

    // Determine AM/PM
    const isPM = hours >= 12;
    const hour12 = hours % 12 || 12;

    const tokens: Record<string, string | number> = {
      YY: padZero(year % 100),
      YYYY: year,
      M: month + 1,
      MM: padZero(month + 1),
      MMM: monthShortNames[month],
      MMMM: monthNames[month],
      D: day,
      DD: padZero(day),
      d: dayOfWeek,
      dd: dayMinNames[dayOfWeek],
      ddd: dayShortNames[dayOfWeek],
      dddd: dayNames[dayOfWeek],
      H: hours,
      HH: padZero(hours),
      h: hour12,
      hh: padZero(hour12),
      m: minutes,
      mm: padZero(minutes),
      s: seconds,
      ss: padZero(seconds),
      SSS: padZero(milliseconds, 3),
      Z:
        (timezoneOffset >= 0 ? "+" : "-") +
        padZero(Math.floor(Math.abs(timezoneOffset) / 60)) +
        ":" +
        padZero(Math.abs(timezoneOffset) % 60),
      ZZ:
        (timezoneOffset >= 0 ? "+" : "-") +
        padZero(Math.floor(Math.abs(timezoneOffset) / 60)) +
        padZero(Math.abs(timezoneOffset) % 60),
      A: isPM ? "PM" : "AM",
      a: isPM ? "pm" : "am",
    };
    return format.replace(/YYYY|YY|MMMM|MMM|MM|M|DDD|DD|D|dddd|ddd|dd|d|HH|H|hh|h|mm|m|ss|s|SSS|ZZ|Z|A|a/g, match =>
      String(tokens[match]),
    );
  }
  function toDate(dateString: string, format: string, locale = "en-US") {
    const { dayNames, dayShortNames, dayMinNames, monthNames, monthShortNames } = getLocalizedNames(locale);

    // Sort tokens by length in descending order to prevent partial matches
    const formatTokens = [
      "YYYY",
      "YY",
      "MMMM",
      "MMM",
      "MM",
      "M",
      "DD",
      "D",
      "dddd",
      "ddd",
      "dd",
      "d",
      "HH",
      "H",
      "hh",
      "h",
      "mm",
      "m",
      "ss",
      "s",
      "SSS",
      "ZZ",
      "Z",
      "A",
      "a",
    ];
    formatTokens.sort((a, b) => b.length - a.length);

    // Escape regex special characters in format string except the format tokens
    let regexPattern = format;
    formatTokens.forEach(token => {
      switch (token) {
        case "YYYY":
          regexPattern = regexPattern.replace(token, "(\\d{4})");
          break;
        case "YY":
          regexPattern = regexPattern.replace(token, "(\\d{2})");
          break;
        case "MMMM":
          regexPattern = regexPattern.replace(
            token,
            "(" + monthNames.map(name => name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|") + ")",
          );
          break;
        case "MMM":
          regexPattern = regexPattern.replace(
            token,
            "(" + monthShortNames.map(name => name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|") + ")",
          );
          break;
        case "MM":
          regexPattern = regexPattern.replace(token, "(\\d{2})");
          break;
        case "M":
          regexPattern = regexPattern.replace(token, "(\\d{1,2})");
          break;
        case "DD":
          regexPattern = regexPattern.replace(token, "(\\d{2})");
          break;
        case "D":
          regexPattern = regexPattern.replace(token, "(\\d{1,2})");
          break;
        case "dddd":
          regexPattern = regexPattern.replace(
            token,
            "(" + dayNames.map(name => name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|") + ")",
          );
          break;
        case "ddd":
          regexPattern = regexPattern.replace(
            token,
            "(" + dayShortNames.map(name => name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|") + ")",
          );
          break;
        case "dd":
          regexPattern = regexPattern.replace(
            token,
            "(" + dayMinNames.map(name => name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|") + ")",
          );
          break;
        case "d":
          regexPattern = regexPattern.replace(token, "(\\d)");
          break;
        case "HH":
          regexPattern = regexPattern.replace(token, "(\\d{2})");
          break;
        case "H":
          regexPattern = regexPattern.replace(token, "(\\d{1,2})");
          break;
        case "hh":
          regexPattern = regexPattern.replace(token, "(\\d{2})");
          break;
        case "h":
          regexPattern = regexPattern.replace(token, "(\\d{1,2})");
          break;
        case "mm":
          regexPattern = regexPattern.replace(token, "(\\d{2})");
          break;
        case "m":
          regexPattern = regexPattern.replace(token, "(\\d{1,2})");
          break;
        case "ss":
          regexPattern = regexPattern.replace(token, "(\\d{2})");
          break;
        case "s":
          regexPattern = regexPattern.replace(token, "(\\d{1,2})");
          break;
        case "SSS":
          regexPattern = regexPattern.replace(token, "(\\d{3})");
          break;
        case "Z":
          regexPattern = regexPattern.replace(token, "([+-]\\d{2}:\\d{2})");
          break;
        case "ZZ":
          regexPattern = regexPattern.replace(token, "([+-]\\d{4})");
          break;
        case "A":
          regexPattern = regexPattern.replace(token, "(AM|PM)");
          break;
        case "a":
          regexPattern = regexPattern.replace(token, "(am|pm)");
          break;
        default:
          break;
      }
    });

    // Escape remaining regex special characters
    regexPattern = regexPattern.replace(/([.+?^=!:${}()|\\[\]\\/\\])/g, "\\$1");

    // Create the final regex with start and end anchors
    const regex = new RegExp("^" + regexPattern + "$", "i");

    const match = dateString.match(regex);

    if (!match) {
      throw new Error("Date string does not match format");
    }

    let year = 1970;
    let month = 0;
    let day = 1;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let milliseconds = 0;
    let isPM = false;
    let timezoneOffsetMinutes = 0;

    let matchIndex = 1;
    formatTokens.forEach(token => {
      if (matchIndex >= match.length) return;
      const value = match[matchIndex];
      switch (token) {
        case "YYYY":
          year = parseInt(value, 10);
          matchIndex++;
          break;
        case "YY":
          year = 2000 + parseInt(value, 10);
          matchIndex++;
          break;
        case "MMMM":
          month = monthNames.indexOf(value);
          matchIndex++;
          break;
        case "MMM":
          month = monthShortNames.indexOf(value);
          matchIndex++;
          break;
        case "MM":
        case "M":
          month = parseInt(value, 10) - 1;
          matchIndex++;
          break;
        case "dddd":
        case "ddd":
        case "dd":
        case "d":
          // These are day of week representations, which can be ignored for date construction
          matchIndex++;
          break;
        case "DD":
        case "D":
          day = parseInt(value, 10);
          matchIndex++;
          break;
        case "HH":
        case "H":
          hours = parseInt(value, 10);
          matchIndex++;
          break;
        case "hh":
        case "h":
          hours = parseInt(value, 10);
          matchIndex++;
          break;
        case "mm":
        case "m":
          minutes = parseInt(value, 10);
          matchIndex++;
          break;
        case "ss":
        case "s":
          seconds = parseInt(value, 10);
          matchIndex++;
          break;
        case "SSS":
          milliseconds = parseInt(value, 10);
          matchIndex++;
          break;
        case "Z":
          {
            const tzMatch = value.match(/([+-])(\d{2}):(\d{2})/);
            if (tzMatch) {
              const sign = tzMatch[1] === "+" ? 1 : -1;
              const tzHours = parseInt(tzMatch[2], 10);
              const tzMinutes = parseInt(tzMatch[3], 10);
              timezoneOffsetMinutes = sign * (tzHours * 60 + tzMinutes);
            }
            matchIndex++;
          }
          break;
        case "ZZ":
          {
            const tzMatch = value.match(/([+-])(\d{2})(\d{2})/);
            if (tzMatch) {
              const sign = tzMatch[1] === "+" ? 1 : -1;
              const tzHours = parseInt(tzMatch[2], 10);
              const tzMinutes = parseInt(tzMatch[3], 10);
              timezoneOffsetMinutes = sign * (tzHours * 60 + tzMinutes);
            }
            matchIndex++;
          }
          break;
        case "A":
        case "a":
          isPM = value.toLowerCase() === "pm";
          matchIndex++;
          break;
        default:
          break;
      }
    });

    // Adjust hours based on AM/PM
    if (format.includes("A") || format.includes("a")) {
      if (isPM && hours < 12) {
        hours += 12;
      } else if (!isPM && hours === 12) {
        hours = 0;
      }
    }

    // Create the Date object in UTC
    const date = new Date(Date.UTC(year, month, day, hours, minutes, seconds, milliseconds));

    // Adjust for timezone offset
    if (timezoneOffsetMinutes !== 0) {
      date.setUTCMinutes(date.getUTCMinutes() - timezoneOffsetMinutes);
    }

    return date;
  }

  return { fromDate, toDate };
}
