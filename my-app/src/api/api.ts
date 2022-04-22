import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "fb5369ea-26e1-40a3-a11c-bc228394f450"
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
    login(email: string, password: string, rememberMe: boolean = false){
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout(){
        return instance.delete(`auth/login`, )
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


