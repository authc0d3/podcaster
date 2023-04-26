import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { mockedPodcast, mockedUseNavigate } from "@/test/mocks";
import PodcastInfoCard from "./PodcastInfoCard";

async function renderComponent() {
  return await render(<PodcastInfoCard podcast={mockedPodcast} />);
}

const { imageUrl, name, author, summary } = mockedPodcast;

describe("PodcastInfoCard", () => {
  beforeEach(cleanup);

  it("should show podcast image", async () => {
    await renderComponent();
    const image = screen.getByRole("img");
    expect(image).toBeVisible();
    expect(image.getAttribute("src")).toEqual(imageUrl);
  });

  it("should show podcast info", async () => {
    await renderComponent();
    expect(screen.getByText(name)).toBeVisible();
    expect(screen.getByText(author)).toBeVisible();
    expect(screen.getByText(summary)).toBeVisible();
  });

  it("should call navigation on click podcast info", async () => {
    await renderComponent();
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockedUseNavigate).toBeCalledTimes(1);
  });
});
