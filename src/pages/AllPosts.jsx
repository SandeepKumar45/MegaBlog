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
                        <div className='flex flex-wrap'>
                            {posts.map((post)=>(
                                <div key={post.$id} className='p-2 w-1/4'>
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
            <div className='text-3xl text-black font-bold'>No Posts</div>
        )
    }
}

export default AllPosts