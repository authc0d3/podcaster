import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { FC, useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { PodcasterContext, PodcasterContextProvider } from "./PodcasterContext";

const Button: FC = () => {
  const { loadingView, setLoadingView } = useContext(PodcasterContext);
  return (
    <>
      {loadingView && <span>Lorem ipsum</span>}
      <button role="button" onClick={() => setLoadingView(true)}>
        Click
      </button>
    </>
  );
};

describe("PodcasterContext", () => {
  it("should modify context", async () => {
    // TODO: Mock podcaster context
    await render(
      <BrowserRouter>
        <PodcasterContextProvider>
          <Button />
        </PodcasterContextProvider>
      </BrowserRouter>
    );
    expect(screen.queryByText(/Lorem/i)).toBeNull();
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByText(/Lorem/i)).toBeVisible();
  });
});
