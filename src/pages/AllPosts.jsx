import React, { useEffect, useState } from 'react'
import databaseService from '../appwrite/database'
import { PostCard, Container } from "../components/index"


function AllPosts() {
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        databaseService.getPosts().then((posts)=>setPosts(posts.documents))
    },[])
    if (posts.length>0) {
        return (
            <div className='w-full py-8'>
                <Container>
                        <div className='flex flex-wrap justify-center'>
                            {posts.map((post)=>(
                                <div key={post.$id}>
                                    <PostCard $id={post.$id} title={post.title} featuredImage={post.featuredImage}/>
                                </div>
                            ))}
                        </div>
                </Container>
            </div>
          )
    }
    else{
        return (
            <div className="w-full min-h-[400px] py-8 mt-4 flex justify-center items-center">
            <h1 className="text-2xl font-bold text-gray-300 hover:text-gray-500">
                No Posts Avaliable
            </h1>
        </div>
        )
    }
}

export default AllPosts