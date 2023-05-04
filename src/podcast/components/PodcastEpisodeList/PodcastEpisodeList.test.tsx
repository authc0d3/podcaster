import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PodcastEpisode } from "@/common/dtos";
import PodcastEpisodeList from "./PodcastEpisodeList";
import { mockedEpisode, mockedPodcast } from "@/test/mocks";
import {
  PODCAST_EPISODE_ID_PARAM,
  PODCAST_EPISODE_ROUTE,
  PODCAST_ID_PARAM,
} from "@/common/data";

const { id, title, date, duration } = mockedEpisode;
const routeToTest = PODCAST_EPISODE_ROUTE.replace(
  PODCAST_ID_PARAM,
  mockedPodcast.id
).replace(PODCAST_EPISODE_ID_PARAM, id.toString());

async function renderComponent(mockEpisodes?: Readonly<PodcastEpisode[]>) {
  return await render(
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PodcastEpisodeList
              podcastId={mockedPodcast.id}
              episodes={mockEpisodes || []}
            />
          }
        />
        <Route path={routeToTest} element={<div>Lorem ipsum</div>} />
      </Routes>
    </BrowserRouter>
  );
}

describe("PodcastEpisodeList", () => {
  it("should render component", async () => {
    await renderComponent([mockedEpisode]);
    expect(screen.getByText(/Episodes/i)).toBeVisible();
    expect(screen.getByRole("episode")).toBeVisible();
  });

  it("should show episodes number correctly", async () => {
    await renderComponent([mockedEpisode]);
    expect(screen.getByTestId("count")).toBeVisible();
  });

  it("should show episode data", async () => {
    await renderComponent([mockedEpisode]);
    expect(screen.getByText(title)).toBeVisible();
    expect(screen.getByText(date)).toBeVisible();
    expect(screen.getByText(duration)).toBeVisible();
  });

  it("should show no episodes message", async () => {
    await renderComponent();
    expect(screen.queryByRole("episode")).toBeNull();
    expect(screen.getByText(/no episodes/i)).toBeVisible();
  });

  it("should navigate on click", async () => {
    await renderComponent([mockedEpisode]);
    const button = screen.getByRole("episode");
    fireEvent.click(button);
    expect(screen.getByText(/Lorem ipsum/i)).toBeVisible();
  });
});
