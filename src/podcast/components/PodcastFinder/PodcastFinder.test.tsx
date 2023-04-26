import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import PodcastFinder from "./PodcastFinder";

const mockOnSearch = vi.fn();

async function renderComponent() {
  return await render(<PodcastFinder onSearch={mockOnSearch} />);
}

describe("PodcastFinder", () => {
  beforeEach(cleanup);

  it("should render component", async () => {
    const { container } = await renderComponent();
    const input = screen.getByPlaceholderText(/Search podcasts/i);
    expect(input).toBeVisible();
    const icon = container
      .getElementsByTagName("svg")?.[0]
      .getAttribute("class");
    expect(icon).toMatch(/magnifying-glass/i);
  });

  it("should call onSearch function", async () => {
    await renderComponent();

    const input = screen.getByPlaceholderText(/Search podcasts/i);
    const value = "my podcast";
    fireEvent.change(input, { target: { value } });

    expect(mockOnSearch).toBeCalledWith(value);
    expect(screen.getByDisplayValue(value)).toBeVisible();
  });
});
