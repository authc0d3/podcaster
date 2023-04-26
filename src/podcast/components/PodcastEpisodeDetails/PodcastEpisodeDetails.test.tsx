import { render } from "@testing-library/react";
import { mockedEpisode } from "@/test/mocks";
import PodcastEpisodeComponent from "./PodcastEpisodeDetails";

describe("PodcastEpisode", () => {
  it("should render component", async () => {
    const { container, getByText } = await render(
      <PodcastEpisodeComponent episode={mockedEpisode} />
    );
    expect(getByText(/Lorem ipsum track/i)).toBeVisible();
    expect(getByText(/Lorem ipsum dolor/i)).toBeVisible();
    expect(container.getElementsByTagName("audio").length).toBe(1);
  });
});
