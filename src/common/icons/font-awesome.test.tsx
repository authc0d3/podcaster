import { render } from "@testing-library/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

describe("font-awesome", () => {
  it("should show icon", async () => {
    const { container } = await render(<FontAwesomeIcon icon="podcast" />);
    expect(container.getElementsByTagName("svg").length).toBe(1);
  });
});
