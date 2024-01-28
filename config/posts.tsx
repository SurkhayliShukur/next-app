import { ENDPOINT } from "../shared/constant/endpoint"
import { instanceAxios } from "../shared/api/instanceAxios"
import { AddPost, GetPost, GetSinglePost, EditPost, DeletePost } from "../interface/data"


//ADD
export const addPost: AddPost = (newPost) => {
    return instanceAxios({
        method: "POST",
        url: ENDPOINT.POSTS,
        data: newPost
    })
}
//GET
export const getPost = (): GetPost => {
    return instanceAxios({ method: "GET", url: ENDPOINT.POSTS })
}
//GET SINGLE 
export const getSinglePost: GetSinglePost = (id) => {
    return instanceAxios({
        method: "GET", url: ENDPOINT.POST_ID(id)
    })
}
//EDIT
export const editPost: EditPost = (id, updatePost) => {
    return instanceAxios({ method: "PUT", url: ENDPOINT.POST_ID(id), data: updatePost })
}
//DELETE
export const deletePost: DeletePost = (id) => {
    return instanceAxios({
        method: "DELETE", url: ENDPOINT.POST_ID(id)
    })
}