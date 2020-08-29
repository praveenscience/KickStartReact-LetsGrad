import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App";

test("renders Hello LetsGrad", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hello LetsGrad/i);
  expect(linkElement).toBeInTheDocument();
});
