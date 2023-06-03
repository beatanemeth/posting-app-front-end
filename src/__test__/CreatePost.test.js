import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import CreatePostPage from "../pages/CreatePostPage";
import { MemoryRouter } from "react-router-dom";


describe("Behaviour of the CreatePostPage in general.", () => {
    test("Page title should be rendered.", () => {
        render(
            <MemoryRouter>
                <CreatePostPage />
            </MemoryRouter>
        );

        const H1_ELEMENT = screen.getByText("Create & Publish New Post");
        expect(H1_ELEMENT).toBeInTheDocument();
    });


    test("Paragraph text should be rendered.", () => {
        render(
            <MemoryRouter>
                <CreatePostPage />
            </MemoryRouter>
        );

        const TEXT = "Your post will";
        const P_ELEMENT = screen.getByText(TEXT, { exact: false });
        expect(P_ELEMENT).toBeInTheDocument();
    });
});


describe("Behaviour of the form and input fields.", () => {
    test("Title input field should be rendered.", () => {
        render(
            <MemoryRouter>
                <CreatePostPage />
            </MemoryRouter>
        );

        const POST_TITLE_INPUT = screen.getByPlaceholderText("Post Title");
        expect(POST_TITLE_INPUT).toBeInTheDocument();
    });


    test("Title input field should be empty.", () => {
        render(
            <MemoryRouter>
                <CreatePostPage />
            </MemoryRouter>
        );

        const POST_TITLE_INPUT = screen.getByPlaceholderText("Post Title");
        expect(POST_TITLE_INPUT.value).toBe("");
    });


    test("Title input field should change.", () => {
        render(
            <MemoryRouter>
                <CreatePostPage />
            </MemoryRouter>
        );
        const POST_TITLE_INPUT = screen.getByPlaceholderText("Post Title");

        const testValue = "my text";

        fireEvent.change(POST_TITLE_INPUT, { target: { value: testValue } });

        expect(POST_TITLE_INPUT.value).toBe(testValue);
    });

});


describe("Behaviour of the buttons on the form.", () => {
    test("Submit button should be rendered.", () => {
        render(
            <MemoryRouter>
                <CreatePostPage />
            </MemoryRouter>
        );

        const PUBLISH_POST_BUTTON = screen.getByTestId("publishPostBtn");
        expect(PUBLISH_POST_BUTTON).toBeInTheDocument();
    });


    test("Cancel button should be rendered.", () => {
        render(
            <MemoryRouter>
                <CreatePostPage />
            </MemoryRouter>
        );

        const CANCEL_POST_BUTTON = screen.getByTestId("cancelPublishPostBtn");
        expect(CANCEL_POST_BUTTON).toBeInTheDocument();
    });
});
