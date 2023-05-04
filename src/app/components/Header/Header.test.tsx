import { fireEvent, render, screen } from "@testing-library/react";
import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { PodcasterContextProvider } from "@/common/context";
import { HOME_ROUTE } from "@/common/data";
import { useLoading } from "@/common/hooks";
import Header from "./Header";

const Button: FC = () => {
  const { setIsLoading } = useLoading();
  return (
    <button data-testid="testBtn" onClick={() => setIsLoading(true)}>
      Click
    </button>
  );
};

async function renderComponent() {
  return await render(
    <BrowserRouter>
      <PodcasterContextProvider>
        <Header />
        <Button />
      </PodcasterContextProvider>
    </BrowserRouter>
  );
}

describe("Header", () => {
  it("should render component", async () => {
    const { container } = await renderComponent();
    expect(screen.getByRole("link").getAttribute("href")).toBe(HOME_ROUTE);

    const logo = container.getElementsByTagName("svg")?.[0];
    expect(logo.getAttribute("class")).toMatch(/podcast/i);
    expect(logo).toBeVisible();

    expect(screen.getByText(/Podcaster/i)).toBeInTheDocument();
  });

  it("should show loading icon", async () => {
    const { container } = await renderComponent();

    const button = screen.getByTestId("testBtn");
    fireEvent.click(button);

    const spinner = container.getElementsByTagName("svg")?.[1];
    expect(spinner.getAttribute("class")).toMatch(/spinner/i);
    expect(spinner).toBeVisible();
  });
});
