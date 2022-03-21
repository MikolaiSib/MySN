import axios from "axios";
import {acceptUnfollow, setDisabledBtn} from "../redux/users-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "512df9e6-af0a-402c-bd78-3d8951a152e2"
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    getUnfollow(id: number) {
        return instance.delete(`follow/${id}`)
    },
    getFollow(id: number) {
        return instance.post(`follow/${id}`)
    },
    getProfile(userId: any){
        return instance.get(`profile/${userId}`)
    },
}

export const authAPI = {
    getMe(){
        return instance.get(`auth/me`, )
    },
}



