import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ResumeForm, { ResumeInputField, ResumeCancelOk } from "../../src/components/ResumeForm";

describe("ResumeInputField component", () => {
  test("renders with correct label and attributes", () => {
    render(<ResumeInputField label="Full Name" name="full-name" />);
    
    const tbox = screen.getByRole("textbox", { name: "Full Name" });
    expect(tbox).toBeInTheDocument();
    expect(tbox).toHaveAttribute("type", "text");
    expect(tbox).toHaveAttribute("name", "full-name");
    expect(tbox).toHaveAttribute("id", "full-name");
  });
  
  test("allows user input", async () => {
    const user = userEvent.setup();
    render(<ResumeInputField label="Full Name" name="full-name" />);
    
    const tbox = screen.getByRole("textbox", { name: "Full Name" });
    await user.type(tbox, "My Full Name");
    expect(tbox).toHaveValue("My Full Name");
  });
});

describe("ResumeCancelOk component", () => {
  test("renders correctly", () => {
    render(<ResumeCancelOk />);
    
    const cancel = screen.getByRole("button", { name: "Cancel" });
    const ok = screen.getByRole("button", { name: "Ok" });
    
    expect(cancel).toBeInTheDocument();
    expect(cancel).toHaveAttribute("type", "button");
    expect(ok).toBeInTheDocument();
  });
  
  test("cancel callback works", async () => {
    const cancel = vi.fn();
    const user = userEvent.setup();
    
    render(<ResumeCancelOk onCancel={cancel} />);
    
    const cancelBtn = screen.getByRole("button", { name: "Cancel" });
    await user.click(cancelBtn);
    expect(cancel).toHaveBeenCalledTimes(1);
  });
});