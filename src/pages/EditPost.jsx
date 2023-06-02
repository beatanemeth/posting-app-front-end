import "react-quill/dist/quill.snow.css";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Editor from "../components/Editor";
import Card from "../components/Card";
import CardFormField from "../components/CardFormField";
import Modal from "../components/Modal";
import * as postAPI from "../api/posts";


function EditPost() {
    const { id } = useParams();

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");


    useEffect(() => {
        // GET selected post to edit
        postAPI.getPost(id)
            .then(data => {
                setTitle(data.title);
                setContent(data.content);
            })

    }, [id]);


    function editPostHandler(e) {
        e.preventDefault();
        const updatedPost = { id, title, content };

        // PUT selected post
        postAPI.updatePost(id, updatedPost)

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


    function cancelUpdatePostHandler() {
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
                <h1>Update your post</h1>
                <hr></hr>

                <form
                    className="form"
                    onSubmit={editPostHandler}
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
                            data-testid="updatePostBtn"
                            type="submit"
                        >
                            Update Post
                        </button>
                        <button
                            type="button"
                            data-testid="cancelUpdatePostBtn"
                            onClick={cancelUpdatePostHandler}
                        >
                            Cancel
                        </button>
                    </CardFormField>
                </form>
                <hr></hr>
                <p><Link to="/blog">Back to Blog Page</Link></p>
            </Card>
        </Modal>
    )
}

export default EditPost;
