import { AxiosPromise } from "axios"
export interface RouterTypes {
    Home: string;
    Add: string;
    Action: string;
    Detail: string
}
export interface PostDataType {
    id: number | string;
    title: string;
    body: string;
    image: string;
    create_at: number
}
export interface InitialStateType extends Omit<PostDataType, "id"> { }

//ADD
export interface AddPost {
    (newPost: InitialStateType):AxiosPromise<PostDataType>
}
//GET
export interface GetPost extends AxiosPromise<PostDataType[]>{}