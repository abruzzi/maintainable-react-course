import { render, screen } from "@testing-library/react";
import Avatar from "./Avatar";

describe("Avatar", () => {
  it("renders", () => {
      render(<Avatar size="small" title="avatar" shape="circle" src="https://img.url" />);
      const img = screen.getByAltText('avatar')
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('src', "https://img.url")
  });
});