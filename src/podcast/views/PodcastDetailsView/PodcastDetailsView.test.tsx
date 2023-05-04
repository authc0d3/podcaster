import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import App from "@/app/App";
import { mockApiServer } from "@/test/mocks";

describe("PodcastListView", () => {
  // beforeAll(() => {
  //   cleanup();
  //   mockApiServer.listen({ onUnhandledRequest: "error" });
  // });
  // afterAll(() => mockApiServer.close());
  // afterEach(() => mockApiServer.resetHandlers());

  it("should render podcast view", async () => {
    const { container } = await render(<App />);

    // Wait for podcast list and click in first podcast
    await waitFor(() => {
      expect(screen.queryByText(/Loading podcasts/i)).toBeVisible();
    });
    await waitForElementToBeRemoved(screen.queryByText(/Loading podcasts/i));
    await waitFor(() => {
      expect(container.querySelector("a[role='podcast']")).toBeVisible();
    });
    const firstPodcast = container.querySelector("a[role='podcast']");
    if (firstPodcast) fireEvent.click(firstPodcast);

    // Wait for wrapper
    await waitFor(() => {
      expect(container.querySelector("div[role='details']")).toBeVisible();
    });

    // Check render podcast info and episode list
    expect(container.querySelector("div[role='podcast']")).toBeVisible();
    expect(container.querySelector("div[role='list']")).toBeVisible();
  });
});
