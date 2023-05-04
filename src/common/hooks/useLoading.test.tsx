import { fireEvent, render, screen } from "@testing-library/react";
import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { PodcasterContextProvider } from "@/common/context";
import { useLoading } from "./useLoading";

const Button: FC = () => {
  const { isLoading, setIsLoading } = useLoading();
  return (
    <>
      {isLoading && <span>Lorem ipsum</span>}
      <button role="button" onClick={() => setIsLoading(true)}>
        Click
      </button>
    </>
  );
};

describe("useLoading", () => {
  it("should use loading correctly", async () => {
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
