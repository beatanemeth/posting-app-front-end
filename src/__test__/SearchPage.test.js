import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import SearchPage from "../pages/SearchPage";


describe("Behaviour of SearchPage Component in general.", () => {
    test("Page title should be rendered.", () => {
        render(<SearchPage />);

        const H1_ELEMENT = screen.getByText("Here you can search among published posts");
        expect(H1_ELEMENT).toBeInTheDocument();
    });
});


describe("Behaviour of the input field.", () => {
    test("Search input field should be rendered.", () => {
        render(<SearchPage />);

        const TEXT = "Search";
        const SEARCH_INPUT = screen.getByPlaceholderText(TEXT, { exact: false });
        expect(SEARCH_INPUT).toBeInTheDocument();
    });


    test("Search input field should be empty.", () => {
        render(<SearchPage />);

        const TEXT = "Search";
        const SEARCH_INPUT = screen.getByPlaceholderText(TEXT, { exact: false });
        expect(SEARCH_INPUT.value).toBe("");
    });


    test("Search input field should change.", () => {
        render(<SearchPage />);
        const TEXT = "Search";
        const SEARCH_INPUT = screen.getByPlaceholderText(TEXT, { exact: false });

        const testValue = "my text";

        fireEvent.change(SEARCH_INPUT, { target: { value: testValue } });

        expect(SEARCH_INPUT.value).toBe(testValue);
    });
});


describe("Behvaiour of callback handler.", () => {
    test("Calls the callback handler on input field.", () => {
        const enteredQueryHandler = jest.fn();

        render(
            <input
                type="text"
                placeholder="Search Post Title"
                value=""
                onChange={enteredQueryHandler}
            />
        );

        const SEARCH_INPUT = screen.getByRole("textbox");

        const testValue = "my text";

        fireEvent.change(SEARCH_INPUT, { target: { value: testValue } });

        expect(enteredQueryHandler).toHaveBeenCalledTimes(1);
    });
});