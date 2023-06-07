import React from "react";
import { render, screen } from "@testing-library/react";

import { Contact } from "./Contact";

it("renders contact data correctly", () => {
  render(<Contact name="John Doe" team="People" role="HR" />);

  expect(screen.getByText("John Doe")).toBeInTheDocument();
  expect(screen.getByText("People")).toBeInTheDocument();
});
