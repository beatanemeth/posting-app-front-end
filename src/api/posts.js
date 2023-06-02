const baseURL = "http://localhost:8000/api/post/";

// GET all posts
async function getPosts() {
    try {
        const response = await fetch(baseURL, {
            method: "GET",
            mode: "cors",
        });
        const result = await response.json();
        return result;

    } catch (error) {
        console.log(error);
    }
};


// GET selected post
const getPost = async (id) => {
    try {
        const response = await fetch(baseURL + id, {
            method: "GET",
            mode: "cors",
        });
        const postInfo = await response.json();
        return postInfo;

    } catch (error) {
        console.log(error);
    }
};


// POST new post
const createPost = async (newPost) => {
    try {
        await fetch(baseURL, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost),
            credentials: "include"
        });

    } catch (error) {
        console.error(error)

    }
};


// PUT existing post
const updatePost = async (id, updatedPost) => {
    try {
        await fetch(baseURL + id, {
            method: "PUT",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedPost),
            credentials: "include"
        });

    } catch (error) {
        console.log(error);
    }
};


// DELETE post
const deletePost = async (id) => {
    const response = await fetch(baseURL + id, {
        method: "DELETE",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include"
    });
    return response;
};


export { getPosts, getPost, createPost, updatePost, deletePost }
