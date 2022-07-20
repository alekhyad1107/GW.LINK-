import { render, screen } from "@testing-library/react";
import { ConfigProvider } from "antd";
import App from "./App";

ConfigProvider.config({
  theme: {
    primaryColor: "#033c5a",
  },
});

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
