// @packages
import { render, screen, fireEvent } from "@testing-library/react";

// @scripts
import ExampleButton from ".";

describe("<ExampleButton />", () => {
  test("clicking to the ExampleButton", () => {
    const handleClick = jest.fn();
    render(<ExampleButton />);
    fireEvent.click(screen.getByText(/Hello Button/i));
    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});
