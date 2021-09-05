import { render } from "@testing-library/react";
import Header from "./index";

test("renders the Button", () => {
    const button = render(<Header />);
    expect(button).toMatchSnapshot();
});
