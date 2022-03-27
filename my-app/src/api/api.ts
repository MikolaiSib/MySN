import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "fa4fe252-44d3-4884-8ad2-2fd77330cbd5"
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
        return profileAPI.getProfile(userId)
    },
}

export const authAPI = {
    getMe(){
        return instance.get(`auth/me`, )
    },
}

export const profileAPI = {
    getProfile(userId: any){
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: any){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string){
        return instance.put(`profile/status`, {status: status})
    }
}


