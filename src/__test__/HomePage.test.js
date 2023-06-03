import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import HomePage from "../pages/HomePage";


describe("Behaviour of the HomePage in general.", () => {
    test("Page title should be rendered.", () => {
        render(<HomePage />);

        const H1_ELEMENT = screen.getByText("Welcome!");
        expect(H1_ELEMENT).toBeInTheDocument();
    });


    test("Paragraph text should be rendered.", () => {
        render(<HomePage />);

        const TEXT = "auctor neque vitae tempus";
        const PARAGRAPH_ELEMENT = screen.getByText(TEXT, { exact: false });
        expect(PARAGRAPH_ELEMENT).toBeInTheDocument();
    });


    test("Render 'Show Less' if the button was clicked.", async () => {
        render(<HomePage />);

        const READMORE_BUTTON = screen.getByTestId("readMoreBtn");
        userEvent.click(READMORE_BUTTON);

        await waitFor(() => {
            expect(screen.getByText("Show Less")).toBeInTheDocument();
        });
    });
});
