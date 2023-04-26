import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ScrollRestorator from "./ScrollRestorator";

describe("ScrollRestorator", () => {
  it("should redirect correctly", async () => {
    await render(
      <BrowserRouter>
        <ScrollRestorator />
      </BrowserRouter>
    );
    expect(window.scrollTo).toBeCalledWith({ top: 0 });
  });
});
