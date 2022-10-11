// @packages
import { render, screen, fireEvent } from "@testing-library/react";

// @scripts
import AvailableChip from ".";

describe("<AvailableChip />", () => {
  test("clicking to the ExampleButton", () => {
    render(<AvailableChip isAvailable />);
    screen.getByText(/available/i)
  });
});