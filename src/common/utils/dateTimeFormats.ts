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
