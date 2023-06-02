import { useEffect, useState } from "react";
import Card from "../components/Card";
import CardFormField from "../components/CardFormField";
import LoadingIndicator from "../components/LoadingIndicator";
import PostItem from "../components/PostItem";
import SearchBar from "../components/SearchBar";
import * as postAPI from "../api/posts";


function SearchPage() {
    const [posts, setPosts] = useState([]);
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        // GET all posts
        postAPI.getPosts()
            .then((data) => setPosts(data))

    }, []);


    function queryHandler(userQuery) {
        setIsLoading(true);
        setQuery(userQuery);
        setTimeout(() => setIsLoading(false), 1500);
    };


    return (
        <Card>

            <h1>Here you can search among published posts</h1>
            <CardFormField>
                <SearchBar
                    onQuery={queryHandler}
                />
            </CardFormField>
            {isLoading && <LoadingIndicator />}
            <hr></hr>
            {posts
                .filter((item) => {
                    return query.toLowerCase() === ""
                        ? item
                        : item.title?.toLowerCase().includes(query.toLowerCase());
                })
                .map(post => (
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
    );
}

export default SearchPage;
