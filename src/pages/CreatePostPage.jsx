import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Editor from "../components/Editor";
import Card from "../components/Card";
import CardFormField from "../components/CardFormField";
import Modal from "../components/Modal";
import * as postAPI from "../api/posts";


function CreatePostPage() {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");


    function createPostHandler(e) {
        e.preventDefault();
        const newPost = { title, content };

        // POST new post
        postAPI.createPost(newPost)

        setTitle("");
        setContent("");
        navigate("/blog");
    };


    function titleHandleChange(e) {
        setTitle(e.target.value);
    };


    function contentHandleChange(content) {
        setContent(content);
    };


    function cancelPublishPostHandler() {
        setTitle("");
        setContent("");
        navigate("/blog");
    };


    function hideModalHandler() {
        navigate("/blog");
    };


    return (
        <Modal
            onClose={hideModalHandler}
        >
            <Card>
                <h1>Create & Publish New Post</h1>
                <p>Your post will be visible on&nbsp;
                    <Link to="/blog">
                        Blog Page
                    </Link>
                </p>
                <hr></hr>

                <form
                    className="form"
                    onSubmit={createPostHandler}
                >
                    <CardFormField>
                        <input
                            type="text"
                            name="title"
                            onChange={titleHandleChange}
                            placeholder="Post Title"
                            value={title}
                        />
                        <Editor
                            onHandleContent={contentHandleChange}
                            value={content}
                        />
                        <button
                            type="submit"
                            data-testid="publishPostBtn"
                            disabled={!title || !content}
                        >
                            Publish Post
                        </button>
                        <button
                            type="button"
                            data-testid="cancelPublishPostBtn"
                            onClick={cancelPublishPostHandler}
                        >
                            Cancel
                        </button>
                    </CardFormField>
                </form>
                <hr></hr>
                <p><Link to="/blog">Back to Blog Page</Link></p>
            </Card>
        </Modal>
    );
}

export default CreatePostPage;
