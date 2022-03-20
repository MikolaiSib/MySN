import axios from "axios";
import {setDisabledBtn} from "../redux/users-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "512df9e6-af0a-402c-bd78-3d8951a152e2"
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    getUnfollow(id: number, func: any, func2: any){
        return instance.delete(`follow/${id}`)
            .then(response => {
                if (response.data.resultCode === 0) {
                    func(id)
                }
                func2(false, id)
            })},
    getFollow(id: number, func: any, func2: any){
        return instance.post(`follow/${id}`, {})
            .then(response => {
                if (response.data.resultCode === 0) {
                    func(id)
                }
                func2(false, id)
            })}
}



