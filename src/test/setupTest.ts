import "@testing-library/jest-dom";
import "@/common/icons/font-awesome";
import { mockedUseLocation, mockedUseNavigate } from "./mocks";

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
