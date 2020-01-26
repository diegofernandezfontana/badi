import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Option from "../";

const onSearchClick = jest.fn();
const onRemoveClick = jest.fn();

const mockedData = {
  onHandleSearch: onSearchClick,
  onHandleRemove: onRemoveClick,
  searchedValue: "Apple"
};

const closeIconTestId = "option-close-icon";

describe("DropDown Component", () => {
  it("should render option", () => {
    const { getByText } = render(<Option {...mockedData} />);

    const optionText = getByText("Apple");
    expect(optionText).toBeInTheDocument();
  });

  it("should be able to click the close icon to fire an event", () => {
    const { getByTestId } = render(<Option {...mockedData} />);

    const closeIcon = getByTestId(closeIconTestId);

    fireEvent.click(closeIcon);
    expect(onRemoveClick).toHaveBeenCalled();
  });

  it("should be able to click on the paragraph to fire an event", () => {
    const { getByText } = render(<Option {...mockedData} />);

    const optionText = getByText("Apple");

    fireEvent.click(optionText);
    expect(onSearchClick).toHaveBeenCalled();
  });
});
