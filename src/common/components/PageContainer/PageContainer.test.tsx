import { cleanup, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { PodcasterContextProvider } from "@/common/context";
import PageContainer from "./PageContainer";
import { PageContainerProps } from "./types";

async function renderComponent(props?: Partial<PageContainerProps>) {
  return await render(
    <BrowserRouter>
      <PodcasterContextProvider>
        <PageContainer {...props} name="test">
          Lorem ipsum
        </PageContainer>
      </PodcasterContextProvider>
    </BrowserRouter>
  );
}

describe("PageContainer", () => {
  beforeEach(cleanup);

  it("should render component", async () => {
    await renderComponent();
    expect(screen.getByText(/Lorem ipsum/i)).toBeVisible();
    expect(screen.queryByRole("alert")).toBeNull();
  });

  it("should render component showing loading alert", async () => {
    await renderComponent({ isLoading: true });
    expect(screen.getByRole("alert")).toBeVisible();
    expect(screen.getByText(/Loading/i)).toBeVisible();
    expect(screen.queryByText(/Lorem/i)).toBeNull();
  });

  it("should render component showing error alert", async () => {
    await renderComponent({ isError: true });
    expect(screen.getByRole("alert")).toBeVisible();
    expect(screen.queryByText(/Lorem/i)).toBeNull();
  });
});
