import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import AboutPage from "../pages/AboutPage";


describe("Behaviour of About Page Component in general.", () => {
    test("Page title should be rendered.", () => {
        render(<AboutPage />);

        const H1_ELEMENT = screen.getByText("About", { exact: false });
        expect(H1_ELEMENT).toBeInTheDocument();
    });


    test("Paragraph text should be rendered.", () => {
        render(<AboutPage />);

        const TEXT = "Hac habitasse platea dictumst vestibulum";
        const PARAGRAPH_ELEMENT = screen.getByText(TEXT, { exact: false });
        expect(PARAGRAPH_ELEMENT).toBeInTheDocument();
    });
});
