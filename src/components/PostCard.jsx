import React from 'react'
import { Link } from 'react-router-dom'
import storageService from '../appwrite/storage'

function PostCard({$id,title,featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-[300px] h-[250px] bg-gray-200 rounded-xl p-4 mx-1 my-2'>
            <div className='w-full mb-4 h-[80%]'>
                <img src={storageService.getFilePreview(featuredImage)} alt={title} className='rounded-xl h-full w-full'/>
            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard