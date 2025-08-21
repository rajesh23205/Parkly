// src/Greeting.test.tsx
import { render, screen } from "@testing-library/react";
import Greeting from "./components/Greeting";

test("renders greeting message", () => {
  render(<Greeting />);
  const linkElement = screen.getByText(/Hello, Parkly!/i);
  expect(linkElement).toBeInTheDocument();
});
