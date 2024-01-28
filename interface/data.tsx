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
    (newPost: InitialStateType): AxiosPromise<PostDataType>
}
//GET
export interface GetPost extends AxiosPromise<PostDataType[]> { }

//GETSINGLE
export interface GetSinglePost {
    (id: string | number): AxiosPromise<PostDataType>
}
//EDIT
export interface EditPost {
    (id: string | number,
        updateProduct: Partial<InitialStateType>
    ): AxiosPromise<PostDataType>
}
//DELETE 
export interface DeletePost {
    (id: string | number): AxiosPromise<void>
}
