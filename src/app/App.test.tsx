import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import App from "./App";

async function renderApp() {
  // TODO: Mock providers and api hook to can test without render entire app
  return await render(<App />);
}

const timeout = 30000;

describe("App", () => {
  beforeAll(() => cleanup());

  it("should render logo", async () => {
    await renderApp();
    await waitFor(() => {
      expect(screen.getByText(/Podcaster/i)).toBeVisible();
    });
  });

  it("should render loading message", async () => {
    await renderApp();
    await waitFor(() => {
      expect(screen.getByText(/Loading/i)).toBeVisible();
    });
  });

  it("should navigate for all pages to episode page", async () => {
    const { container } = await renderApp();
    // Navigate to first podcast details view
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

    // Navigate to episode view
    await waitFor(
      () => {
        expect(container.querySelector("a[role='episode']")).toBeVisible();
      },
      { timeout }
    );
    const firstEpisode = container.querySelector("a[role='episode']");
    if (firstEpisode) fireEvent.click(firstEpisode);

    // Check episode is loaded
    await waitFor(
      () => {
        expect(container.querySelector("div[role='article']")).toBeVisible();
      },
      { timeout }
    );
  });
});
