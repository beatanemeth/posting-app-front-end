import { getPosts, getPost, createPost, updatePost, deletePost } from "../api/posts";


test("find all the posts", async () => {
    window.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve([
                { id: "p1", title: "First Post", content: "First Content" },
                { id: "p2", title: "Second Post", content: "Second Content" }
            ])
        }))

    const foundPosts = await getPosts()

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith("http://localhost:8000/api/post/", {
        method: "GET",
        mode: "cors",
    })

    expect(foundPosts).toHaveLength(2)
});


test("find one post", async () => {
    window.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve([
                { id: "p1", title: "First Post", content: "First Content" }
            ])
        }))

    const foundPost = await getPost(1)

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith("http://localhost:8000/api/post/1", {
        method: "GET",
        mode: "cors",
    })
    expect(foundPost).toHaveLength(1)
    expect(foundPost).not.toHaveLength(2)
});


test("create new post", async () => {
    window.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve([
                { id: "p1", title: "First Post", content: "First Content" }
            ])
        }))

    const newPost = {
        title: "First Post",
        content: "First Content"
    }

    await createPost(newPost)
    expect(fetch).toHaveBeenCalledTimes(1)
});


test("update post.", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
        json: async () => [{ id: "p1", title: "First Post", content: "First Content" }]
    })

    await updatePost()
    expect(fetch).toHaveBeenCalledTimes(1)
});


test("delete post.", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
        json: async () => [{ id: "p1", title: "First Post", content: "First Content" }]
    })

    await deletePost()
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).not.toHaveBeenCalledTimes(3)
});
