import React from 'react'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next"
import { useRouter } from "next/router"


const Detail: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = () => {
    const { push, query } = useRouter()
    
    return (
        <>
        </>
    )
}

export default Detail;

export async function getServerSideProps(context: GetServerSidePropsContext) {

}