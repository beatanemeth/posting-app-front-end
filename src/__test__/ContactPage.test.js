import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import ContactPage from "../pages/ContactPage";


describe("Behvaiour of Contact Page Component in general.", () => {
    test("Page title should be rendered.", () => {
        render(<ContactPage />);

        const H1_ELEMENT = screen.getByText("Contact", { exact: false });
        expect(H1_ELEMENT).toBeInTheDocument();
    });


    test("Paragraph text should be rendered.", () => {
        render(<ContactPage />);

        const TEXT = "Risus viverra adipiscing at in tellus integer";
        const PARAGRAPH_ELEMENT = screen.getByText(TEXT, { exact: false });
        expect(PARAGRAPH_ELEMENT).toBeInTheDocument();
    });
});
