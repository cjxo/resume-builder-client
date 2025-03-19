import { render, screen, within } from "@testing-library/react";
import TopBar from "../../src/components/TopBar";

describe("TopBar component", () => {
  test("renders the heading", () => {
    render(<TopBar />);
    const nav = screen.getByRole("navigation");
    expect(within(nav).getByRole("heading", { name: "Resume.Builder" }));
  });
});