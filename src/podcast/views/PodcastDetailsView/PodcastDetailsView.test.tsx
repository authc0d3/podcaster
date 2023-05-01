import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import App from "@/app/App";

const timeout = 30000;

describe("PodcastListView", () => {
  beforeEach(cleanup);

  it("should render podcast view", async () => {
    // TODO: Mock usePodcastApi instead of using root app
    const { container } = await render(<App />);

    // Wait for podcast list and click in first podcast
    await waitFor(
      () => {
        expect(screen.queryByText(/Loading podcasts/i)).toBeVisible();
      },
      { timeout }
    );
    await waitForElementToBeRemoved(screen.queryByText(/Loading podcasts/i), {
      timeout,
    });
    await waitFor(
      () => {
        expect(container.querySelector("a[role='podcast']")).toBeVisible();
      },
      { timeout }
    );
    const firstPodcast = container.querySelector("a[role='podcast']");
    if (firstPodcast) fireEvent.click(firstPodcast);

    // Wait for wrapper
    await waitFor(
      () => {
        expect(container.querySelector("div[role='details']")).toBeVisible();
      },
      { timeout }
    );

    // Check render podcast info and episode list
    expect(container.querySelector("div[role='podcast']")).toBeVisible();
    expect(container.querySelector("div[role='list']")).toBeVisible();
  });
});
