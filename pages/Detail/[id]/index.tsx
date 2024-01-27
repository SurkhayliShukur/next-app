import React from 'react'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next"
import { useRouter } from "next/router"
import { getSinglePost } from "../../../config/posts"
import  Head  from 'next/head'
import {ROUTER} from "../../../shared/constant/router"


const Detail: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({post}) => {
    const { push, query } = useRouter()
    return (
        <>
        <Head>
            Detail Page
        </Head>
        <div className='card lg:card-side bg-base-100 shadow-xl'>
        <figure className="w-4/6">
          <img
            src={post?.image}
            alt={post?.title}
            className="h-screen  object-cover"
          />
        </figure>
        <div className="card-body p-6">
          <h2 className="card-title text-3xl text-sky-300">
            {post?.title.slice(0, 16)}
          </h2>
          <p className="text-xl text-sky-300 my-4">{post?.body}</p>
          <div className="card-actions justify-end">
            <div className='flex justify-between items-center'>
            <button
              className="btn btn-secondary text-gray-200 px-10 text-3xl m-2"
              onClick={() => push(`${query.id}/${ROUTER.Action}`)}
            >
              Actions
            </button>
            <button
              className="btn btn-primary text-gray-200 px-10 text-3xl"
              onClick={() => push(`${ROUTER.Home}`)}
            >
              Back Home
            </button>
            </div>
          
          </div>
         
        </div>
        </div>
        </>
    )
}

export default Detail;

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const postId = context.query.id as string | number
    try {
        const response = await getSinglePost(postId)
        const post = response.data

        return{
            props: {
                post,
            }
        }
    }
    catch (error) {
        console.error("error fetching data", error)
        return {
            props: {
              post: null,
              isError: true,
            },
          };
    }
}