import React, { useState } from 'react'
import moment from 'moment'
import { toast } from "react-toastify"
import Layout from '@/shared/components/Layout'
import Head from 'next/head'
import { InitialStateType } from "../../interface/data"
import { useMutation } from 'react-query'
import { ROUTER } from "../../shared/constant/router"
import { addPost } from '@/config/posts'
import { useRouter } from 'next/router'


const Add = () => {
  const createDate = moment().valueOf()
  const { push } = useRouter()
  const initialState: InitialStateType = {
    title: "",
    body: "",
    image: "",
    create_at: createDate
  }
  const [newPost, setNewPost] = useState<InitialStateType>(initialState)
  const AddPostMutate = useMutation(() => addPost(newPost), {
    onSuccess: () => {
      setNewPost(initialState);
      toast.success("Added successfully", {
        autoClose: 1000,
      })
      setTimeout(() => {
        push(ROUTER.Home)
      }, 1500)
    },
    onError: (error) => {
      console.error("Error added post", error)
      toast.error("Error added post", {
        autoClose: 1000
      })
    }
  })
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewPost((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }))
  }
  const isFormValid = (): boolean => {
    return Object.values(newPost).every((value) => value !== "")
  }

  const handleAdd = async () => {
    AddPostMutate.mutate()
  }


  return (
    <>
      <Head>
        <title>Add Page</title>
      </Head>
      <Layout>
        <div className='flex justify-center py-14'>
          <div>
            <h1 className='mb-7 text-center text-blue-400  text-2xl '>
              Add Post
            </h1>
            <div>
              <div>
                <input
                  className='input  input-bordered join-item w-80 px-4'
                  type="text"
                  name='title'
                  placeholder='Title'
                  value={newPost.title}
                  onChange={handleChangeInput}
                />
              </div>
              <div className='my-5'>
                <input
                  className='input input-bordered join-item w-80 px-4'
                  type="text"
                  name='body'
                  placeholder='Body'
                  value={newPost.body}
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <input
                  className='input input-bordered join-item w-80 px-4'
                  type="text"
                  name='image'
                  placeholder='ImageUrl'
                  value={newPost.image}
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <button
              className='btn btn-accent mt-5 w-full text-xl text-gray-800'
              disabled = {!isFormValid()}
              onClick={handleAdd}
            >
              {AddPostMutate.isLoading ? "Adding Post..." : "Add Post"}
            </button>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Add