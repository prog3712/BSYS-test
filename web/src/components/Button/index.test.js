import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import Button from "./index";

describe("renders the Button component", () => {
  it("should match snapshot", () => {
    const button = render(<Button label="Test" />);
    expect(button).toMatchSnapshot();
  });

  it("should trigger the function passed", async () => {
    const mockCallBack = jest.fn();
    const button = shallow(<Button label="Test" onClick={mockCallBack} />);
    button.find("button").simulate("click");
    expect(mockCallBack).toHaveBeenCalled();
  });
});
