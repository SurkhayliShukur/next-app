import { ENDPOINT } from "../shared/constant/endpoint"
import { instanceAxios } from "../shared/api/instanceAxios"
import { AddPost, GetPost, GetSinglePost } from "../interface/data"


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