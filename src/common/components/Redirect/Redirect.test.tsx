import { render } from "@testing-library/react";
import Redirect from "./Redirect";
import { mockedUseNavigate } from "@/test/mocks";

describe("Redirect", () => {
  it("should redirect correctly", async () => {
    await render(<Redirect to="/alert" />);
    expect(mockedUseNavigate).toBeCalledWith("/alert", { replace: true });
  });
});
