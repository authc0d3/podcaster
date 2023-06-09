import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("should render component", async () => {
    await render(<Footer />);
    expect(screen.getByText(/Dev. by/i)).toBeVisible();
  });
});
