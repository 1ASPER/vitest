import { render, screen } from "@testing-library/react"
import Greeting from "../components/Greeting";
import { expect } from "vitest";

test("Show button should be visible during first render", () =>  {
    render(<Greeting />);
    const button = screen.queryByText("Показать")
    expect(button).toBeInTheDocument();
});
