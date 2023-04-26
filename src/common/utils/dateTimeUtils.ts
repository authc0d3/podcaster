import {
  format,
  parseISO,
  addSeconds,
  formatISO,
  milliseconds,
  intervalToDuration,
} from "date-fns";

export interface DateTimeFormat {
  readonly MS: string;
  readonly L: string;
  readonly DTM: string;
}

export const dateTimeFormat: DateTimeFormat = {
  MS: "mm:ss",
  L: "MM/dd/yyyy",
  DTM: "MM/dd/yyyy HH:mm",
};

export function toDate(timestamp?: string): string {
  const date = timestamp?.split("T").shift() || new Date();
  const isoDate = new Date(date).toISOString();
  return format(parseISO(isoDate), dateTimeFormat.L);
}

export function toDuration(milliseconds?: number): string {
  const { hours, minutes, seconds } = intervalToDuration({
    start: 0,
    end: milliseconds || 0,
  });

  const formatedHours = hours && hours > 0 ? `${hours}:` : "";
  const formatedMinutes = `${(minutes || 0).toString().padStart(2, "0")}:`;
  const formatedSeconds = (seconds || 0).toString().padStart(2, "0");

  return `${formatedHours}${formatedMinutes}${formatedSeconds}`;
}
