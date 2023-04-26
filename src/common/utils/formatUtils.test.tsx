import { render, screen } from "@testing-library/react";
import { sanitizeHtml } from "./formatUtils";

describe("formatUtils", () => {
  it("should sanitize html correctly", async () => {
    const rawHtml = `
      Lorem<a href="https://google.es" role="button">ipsum</a>
      <div role="alert">dolor</div>
    `;
    await render(<div dangerouslySetInnerHTML={sanitizeHtml(rawHtml)}></div>);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.queryByRole("alert")).toBeNull();
  });
});
