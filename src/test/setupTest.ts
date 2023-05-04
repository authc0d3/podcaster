import "@testing-library/jest-dom";
import "@/common/icons/font-awesome";
import { mockApiServer, mockedUseLocation, mockedUseNavigate } from "./mocks";
import { cleanup } from "@testing-library/react";

/**
 * Mock functions
 */
window.scrollTo = vi.fn(() => undefined);

/**
 * Mocks for react-router-dom
 */
vi.mock("react-router-dom", async () => {
  const actual = (await vi.importActual("react-router-dom")) as object;
  return {
    ...actual,
    useNavigate: () => mockedUseNavigate,
    useLocation: mockedUseLocation,
  };
});

/**
 * Global config for test hooks
 */

beforeEach(cleanup);

beforeAll(() => {
  cleanup();
  mockApiServer.listen({ onUnhandledRequest: "error" });
});

afterAll(() => mockApiServer.close());

afterEach(() => mockApiServer.resetHandlers());
