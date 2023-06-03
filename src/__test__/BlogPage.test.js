import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom"
import BlogPage from "../pages/BlogPage";
import PostItem from "../components/PostItem";


describe("Behaviour of BlogPage in general.", () => {
    test("Page title should be rendered.", () => {
        render(<BlogPage />);

        const H1_ELEMENT = screen.getByText("Published Posts");
        expect(H1_ELEMENT).toBeInTheDocument();
    });


    test("Render the posts if request succeeds.", async () => {
        // mock fetch request for all blog posts
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{ id: "p1", title: "First Post", content: "First Content" }]
        })

        // mock PostItem component
        jest.mock("../components/PostItem")

        render(<BlogPage />)

        await waitFor(() => {
            expect(fetch).toHaveBeenCalledTimes(1);
        })

        await waitFor(() => {
            expect(PostItem).toHaveLength(1);
        })
    });
});
