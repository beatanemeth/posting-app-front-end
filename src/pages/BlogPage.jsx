import { Fragment, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Card from "../components/Card";
import PostItem from "../components/PostItem";
import { getPosts } from "../api/posts";


function BlogPage() {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        // GET all posts
        getPosts()
            .then((data) => setPosts(data))

    }, [posts]);


    return (
        <Fragment>
            <Outlet />
            <Card>
                <h1>Published Posts</h1>
                <hr></hr>
                {posts?.length > 0 && posts.map(post => (
                    <PostItem
                        postTitle={post.title}
                        postContent={post.content}
                        postAuthor={post.author?.name}
                        postTime={post.createdAt}
                        key={post._id}
                        id={post._id}
                    />
                ))}
            </Card>
        </Fragment>
    );
}

export default BlogPage;
