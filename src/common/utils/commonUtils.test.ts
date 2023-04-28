import { PRODUCTION_MODE, TESTING_MODE } from "./commonUtils";

describe("commonUtils", () => {
  it("should check production mode", () => {
    expect(PRODUCTION_MODE).toBe(false);
  });

  it("should check testing mode", () => {
    expect(TESTING_MODE).toBe(true);
  });
});
