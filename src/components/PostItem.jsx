import { Link } from "react-router-dom";
import { formatDate } from "../utils/dateFormat";


function PostItem({ postTitle, postContent, postAuthor, postTime, id }) {
    const postDate = formatDate(postTime);

    return (
        <div
            className="post"
            data-testid="postItem"
        >
            <Link to={`/blog/${id}`}>
                <h2>{postTitle}</h2>
            </Link>
            <p><small>{postAuthor}&nbsp;|&nbsp;{postDate}</small></p>
            <p dangerouslySetInnerHTML={{ __html: postContent?.substring(0, 100) + "..." }} />
            <hr></hr>
        </div>
    );
}

export default PostItem;
