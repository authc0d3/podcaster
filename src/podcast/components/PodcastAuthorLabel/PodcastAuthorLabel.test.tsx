import { render, screen } from "@testing-library/react";
import PodcastAuthorLabel from "./PodcastAuthorLabel";

describe("PodcastAuthorLabel", () => {
  it("should render component", async () => {
    const { container } = await render(<PodcastAuthorLabel name="John Doe" />);
    expect(screen.getByText(/John Doe/i)).toBeVisible();
    expect(
      container.getElementsByTagName("svg")?.[0].getAttribute("class")
    ).toMatch(/microphone/i);
  });
});
