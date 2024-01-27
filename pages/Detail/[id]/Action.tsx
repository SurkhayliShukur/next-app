import React, { useState } from 'react'
import { useRouter } from "next/router"
import { InitialStateType } from '@/interface/data'
import { useQuery, useMutation } from 'react-query'
import { editPost, getSinglePost } from '@/config/posts'
import { toast } from "react-toastify"
import { ROUTER } from "../../../shared/constant/router"
import moment from 'moment'
import Layout from '@/shared/components/Layout'

const Action: React.FC = () => {
    const createDate = moment().valueOf()
    const initialState: InitialStateType = {
        title: "",
        body: "",
        image: "",
        create_at: createDate
    }
    const { push, query } = useRouter()
    const [edit, setEdit] = useState<InitialStateType>(initialState)
    const postId = query.id as string | number

    const { data, isError, isLoading } = useQuery({
        queryKey: ["SinglePost", postId],
        queryFn: () => getSinglePost(postId)
    })
    const mutation = useMutation(() => editPost(postId, edit), {
        onSuccess: () => {
            setEdit(initialState);
            toast.success("edited successfully", {
                autoClose: 1000,
            })
            setTimeout(() => {
                push(ROUTER.Home)
            }, 1500)
        },
        onError: (error) => {
            console.error("Error updating post:", error);
            toast.error("Error updating post", {
                autoClose: 1000,
            });
        },
    })

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEdit((prevProduct) => ({
            ...prevProduct,
            [name]: value
        }))
    }

    return (
        <>
            <Layout>
                <div className='flex justify-center py-14'>
                    {isLoading && <p>Loading...</p>}
                    {isError && <p>Error loading post</p>}
                    <div>
                        <h1 className='mb-7 text-center text-blue-400  text-2xl '>
                            Update Product
                        </h1>
                        <div>
                            <div>
                                <input
                                    className='input  input-bordered join-item w-80 px-4'
                                    type="text"
                                    name='title'
                                    placeholder='Title'
                                    value={edit.title}
                                    onChange={handleChangeInput}
                                />
                            </div>
                            <div className='my-5'>
                                <input
                                    className='input input-bordered join-item w-80 px-4'
                                    type="text"
                                    name='body'
                                    placeholder='Body'
                                    value={edit.body}
                                    onChange={handleChangeInput}
                                />
                            </div>
                            <div>
                                <input
                                    className='input input-bordered join-item w-80 px-4'
                                    type="text"
                                    name='image'
                                    placeholder='ImageUrl'
                                    value={edit.image}
                                    onChange={handleChangeInput}
                                />
                            </div>
                        </div>
                        <button
                            className='btn btn-accent mt-5 w-full text-xl text-gray-800'
                            // disabled={!isFormValid()}
                            onClick={() => mutation.mutate}
                        >
                            {mutation.isLoading ? "Updating Post..." : "Update Post"}
                        </button>
                    </div>
                </div>

            </Layout>

        </>
    )

}

export default Action;