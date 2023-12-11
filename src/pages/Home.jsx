import React, { useEffect, useState } from "react";
import databaseService from "../appwrite/database";
import { PostCard, Container } from "../components/index";

function Home() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        databaseService.getPosts().then((post) => setPosts(post.documents));
    }, []);
    if (posts.length > 0) {
        return (
            <div className="w-full py-8">
                <Container>
                    <div className="flex flex-wrap justify-center">
                        {posts.map((post) => (
                            <div key={post.$id}>
                                <PostCard {...post} />
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        );
    }
    return (
        <div className="w-full min-h-[400px] py-8 mt-4 flex justify-center items-center">
            <h1 className="text-2xl font-bold text-gray-300 hover:text-gray-500">
                No Posts Avaliable
            </h1>
        </div>
    )
}

export default Home;
