import Home from "@/pages/index";
import { render } from "@testing-library/react";

describe("test", () => {
  it("test", () => {
    const { getByText } = render(<Home />);
    getByText("Hello");
  });
});
