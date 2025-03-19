import { screen, render } from "@testing-library/react";
import BottomBar from "../../src/components/BottomBar";

describe("BottomBar component", () => {
  test("it renders the footer", () => {
    render(<BottomBar />);
    
    // for some reason, I cannot access name??????
    screen.getByRole("contentinfo");
  });
});