import {
  cleanup,
  getByTestId,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import PodcastListView from "./PodcastListView";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { PodcasterContextProvider } from "@/common/context";
import { HelmetProvider } from "react-helmet-async";
import { queryClient, persister } from "@/app/apis";
import { BrowserRouter } from "react-router-dom";

const timeout = 30000;

async function renderComponent() {
  // TODO: Mock usePodcastApi hook instead of using providers
  return await render(
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      <PodcasterContextProvider>
        <HelmetProvider>
          <BrowserRouter>
            <PodcastListView />
          </BrowserRouter>
        </HelmetProvider>
      </PodcasterContextProvider>
    </PersistQueryClientProvider>
  );
}

describe("PodcastListView", () => {
  beforeEach(cleanup);

  it("should show and hide loading alert", async () => {
    await renderComponent();
    await waitFor(
      () => {
        expect(screen.queryByText(/Loading podcasts/i)).toBeVisible();
      },
      { timeout }
    );
    await waitForElementToBeRemoved(screen.queryByText(/Loading podcasts/i), {
      timeout,
    });
  });

  it("should render podcast list", async () => {
    const { container } = await renderComponent();
    await waitFor(
      () => {
        expect(container.querySelector("a[role='podcast']")).toBeVisible();
      },
      { timeout }
    );
  });
});
