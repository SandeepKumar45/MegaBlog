import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import databaseService from '../appwrite/database'
import { useSelector } from 'react-redux'
import { Container,Button } from "../components/index"
import storageService from '../appwrite/storage'
import parse from "html-react-parser"


function Post() {
    const [post, setPost] = useState(null)
    const { slug } = useParams()
    const navigate = useNavigate()
    const userData = useSelector(state => state.userData)

    useEffect(() => {
        if (slug) {
            databaseService.getPost(slug).then((post) => {
                if (post) {
                    setPost(post)
                }
                else {
                    navigate("/")
                }
            })
        }
        else {
            navigate("/")
        }
    }, [slug, navigate])

    const isAuthor = post && userData ? post.userId === userData.$id : false


    const deletePost = () => {
        databaseService.deletePost(post.$id).then((status) => {
            if (status) {
                storageService.deleteFile(post.featuredImage)
                navigate("/")
            }
        })
    }
    return post ? (
        <div className='py-8'>
            <Container>
                <div className="w-full flex justify-center mb-4 relative p-2">
                    <img
                        src={storageService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold text-gray-100">{post.title}</h1>
                </div>
                <div className="browser-css text-gray-300">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : null
}

export default Post