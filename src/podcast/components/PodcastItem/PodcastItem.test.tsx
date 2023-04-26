import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PODCAST_DETAIL_ROUTE, PODCAST_ID_PARAM } from "@/common/data";
import { mockedPodcast } from "@/test/mocks";
import PodcastItem from "./PodcastItem";

async function renderComponent() {
  return await render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PodcastItem podcast={mockedPodcast} />} />
        <Route
          path={PODCAST_DETAIL_ROUTE.replace(
            PODCAST_ID_PARAM,
            mockedPodcast.id
          )}
          element={<div>Lorem ipsum</div>}
        />
      </Routes>
    </BrowserRouter>
  );
}

describe("PodcastItem", () => {
  beforeEach(cleanup);

  it("should navigate on click", async () => {
    await renderComponent();
    const podcast = screen.getByRole("podcast");
    fireEvent.click(podcast);
    expect(screen.getByText(/Lorem ipsum/i)).toBeVisible();
  });
});
