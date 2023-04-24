import { format, parseISO, addSeconds } from "date-fns";

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

export const toDateTime = (timestamp?: string): string =>
  format(timestamp ? parseISO(timestamp) : new Date(), dateTimeFormat.L);

export const toDuration = (milliseconds?: number): string =>
  format(addSeconds(new Date(0), milliseconds || 0), dateTimeFormat.MS);
