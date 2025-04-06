import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Hello World text", () => {
  render(<App />);
  const helloWorldText = screen.getByText(/hello world./i);
  expect(helloWorldText).toBeInTheDocument();
});

test("renders Learn React link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute("href", "https://reactjs.org");
});
