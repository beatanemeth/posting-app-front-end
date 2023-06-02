import { Fragment, useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Card from "../components/Card";
import Modal from "../components/Modal";
import { formatDate } from "../utils/dateFormat";
import * as postAPI from "../api/posts";


function PostPage() {
    const navigate = useNavigate();

    const { id } = useParams();
    const { userInfo } = useContext(UserContext);
    const [postInfo, setPostInfo] = useState(null);


    useEffect(() => {
        // GET selected post to edit
        postAPI.getPost(id)
            .then(data => {
                setPostInfo(data);
            })

    }, [id]);


    if (!postInfo) return "";


    function deletePostHandler() {
        // DELETE selected post
        postAPI.deletePost(id)
            .then(data => {
                if (data.ok) {
                    navigate("/blog")

                    console.log("post deleted");
                }
            })
    };

    const postDate = formatDate(postInfo.createdAt)


    function hideModalHandler() {
        navigate("/blog");
    };


    return (
        <Modal
            onClose={hideModalHandler}
        >
            <Card>
                <h1>{postInfo.title}</h1>
                <time>{postDate}</time>
                <div>by @{postInfo.author.name}</div>

                {userInfo.id === postInfo.author._id && (
                    <Fragment>
                        <Link to={`/blog/edit/${postInfo._id}`}>
                            <button>Edit Post</button>
                        </Link>

                        <button onClick={deletePostHandler}>Delete Post</button>
                    </Fragment>
                )}

                <div dangerouslySetInnerHTML={{ __html: postInfo.content }} />
                <hr></hr>
                <p><Link to=".." relative="path">Back to Blog Page</Link></p>
            </Card>
        </Modal>
    );
}

export default PostPage;
