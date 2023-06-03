import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import EditPost from "../pages/EditPost";
import { MemoryRouter } from "react-router-dom";


describe("Behaviour of the EditPost Component in general.", () => {
    test("Page title should be rendered.", () => {
        render(
            <MemoryRouter>
                <EditPost />
            </MemoryRouter>
        );

        const H1_ELEMENT = screen.getByText("Update your post");
        expect(H1_ELEMENT).toBeInTheDocument();
    });
});



describe("Behaviour of the form and input fields.", () => {
    test("Title input field should be rendered.", () => {
        render(
            <MemoryRouter>
                <EditPost />
            </MemoryRouter>
        );

        const POST_TITLE_INPUT = screen.getByPlaceholderText("Post Title");
        expect(POST_TITLE_INPUT).toBeInTheDocument();
    });


    test("Title input field should be empty.", () => {
        render(
            <MemoryRouter>
                <EditPost />
            </MemoryRouter>
        );

        const POST_TITLE_INPUT = screen.getByPlaceholderText("Post Title");
        expect(POST_TITLE_INPUT.value).toBe("");
    });


    test("Title input field should change.", () => {
        render(
            <MemoryRouter>
                <EditPost />
            </MemoryRouter>
        );
        const POST_TITLE_INPUT = screen.getByPlaceholderText("Post Title");

        const testValue = "my text"

        fireEvent.change(POST_TITLE_INPUT, { target: { value: testValue } });

        expect(POST_TITLE_INPUT.value).toBe(testValue);
    });

});


describe("Behaviour of the buttons on the form.", () => {
    test("Submit button should be rendered.", () => {
        render(
            <MemoryRouter>
                <EditPost />
            </MemoryRouter>
        );

        const UPDATE_POST_BUTTON = screen.getByTestId("updatePostBtn");
        expect(UPDATE_POST_BUTTON).toBeInTheDocument();
    });


    test("Cancel button should be rendered.", () => {
        render(
            <MemoryRouter>
                <EditPost />
            </MemoryRouter>
        );

        const CANCEL_POST_BUTTON = screen.getByTestId("cancelUpdatePostBtn");
        expect(CANCEL_POST_BUTTON).toBeInTheDocument();
    });
});
