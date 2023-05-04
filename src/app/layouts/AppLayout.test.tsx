import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { PodcasterContextProvider } from "@/common/context";
import AppLayout from "./AppLayout";

async function renderComponent() {
  return await render(
    <BrowserRouter>
      <PodcasterContextProvider>
        <AppLayout>Lorem ipsum</AppLayout>
      </PodcasterContextProvider>
    </BrowserRouter>
  );
}

describe("AppLayout", () => {
  it("should render children", async () => {
    await renderComponent();
    expect(screen.getByText(/Lorem ipsum/i)).toBeVisible();
  });

  it("should render header and footer", async () => {
    await renderComponent();
    expect(screen.getByText(/Podcaster/i)).toBeVisible();
    expect(screen.getByText(/Dev. by/i)).toBeVisible();
  });
});
