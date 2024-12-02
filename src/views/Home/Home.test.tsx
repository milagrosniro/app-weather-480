import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Home from "./Home";

vi.mock("react-i18next", () => ({
    useTranslation: () => [key => key]
  }));
  const mockStore = {
    loading: true,
    weatherData: {},
  };

vi.mock("../../stores/useAppStore", () => ({
  useAppStore: vi.fn(() => mockStore),
}));
  
  
describe("Home Component", () => {
    it("renders Spinner when loading is true", () => {
      render(<Home />);
  
      expect(screen.getByTestId("spinner")).toBeInTheDocument();
    });
  });
  