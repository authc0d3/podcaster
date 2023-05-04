import { toDate, toDuration } from "./dateTimeUtils";

describe("dateTimeUtils", () => {
  it("should transform ISO date to date-time", () => {
    expect(toDate("2023-04-25T23:30:00Z")).toBe("04/25/2023");
  });

  it("should transform milliseconds to duration without hours", () => {
    expect(toDuration(128000)).toBe("02:08");
  });

  it("should transform milliseconds to duration with hours", () => {
    expect(toDuration(4120000)).toBe("1:08:40");
  });
});
