import Layout from "@/shared/components/Layout"
import React from "react"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import Head from "next/head"
import Card from "@/shared/components/Card"
import { getPost } from "@/config/posts"
import {PostDataType} from "../interface/data"

const Home: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ data }) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Blog Page</title>
        </Head>
        {data && data.length>0 ? (
          <ul className="p-14 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {
              data.map((post:PostDataType) =>(
                <Card {...post} key={post.id}/>
              ) )
            }
          </ul>
        ):(
          <p className="text-center text-5xl pt-60 text-gray-500 capitalize font-extrabold">NO DATA</p>
        )}
      </Layout>
    </>
  )
}


export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await getPost()
    const data = response.data

    return {
      props: {
        data,
      }
    }
  }
  catch (error) {
    console.error("error fetching data", error)
    return {
      props: {
        data: [],
        isError: true
      }
    }
  }
}
export default Home
