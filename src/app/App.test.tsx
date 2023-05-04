import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";

async function renderApp() {
  return await render(<App />);
}

describe("App", () => {
  it("should render logo", async () => {
    await renderApp();
    await waitFor(() => {
      expect(screen.getByText(/Podcaster/i)).toBeVisible();
    });
  });

  it("should navigate for all pages to episode page", async () => {
    const { container } = await renderApp();

    // Wait for podcast list and click in first podcast
    await waitFor(() => {
      expect(container.querySelector("a[role='podcast']")).toBeVisible();
    });
    const firstPodcast = container.querySelector("a[role='podcast']");
    if (firstPodcast) fireEvent.click(firstPodcast);

    // Navigate to episode view
    await waitFor(() => {
      expect(container.querySelector("a[role='episode']")).toBeVisible();
    });
    const firstEpisode = container.querySelector("a[role='episode']");
    if (firstEpisode) fireEvent.click(firstEpisode);

    // Check episode is loaded
    await waitFor(() => {
      expect(container.querySelector("div[role='article']")).toBeVisible();
    });
  });
});
