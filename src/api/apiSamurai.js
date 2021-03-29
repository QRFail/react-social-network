import axios from "axios";

const instance  = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'fb3e1a2e-65cf-4999-99c6-2afddd213bd6'
    }
})



export const UserApi = {
    getUsers(p = 1){
        return instance.get("users?page=" + p).then(response => response.data)
    },

    follow(id){
        return instance.post("follow/" + id ).then(response => response.data)
    },

    unfollow(id){
        return instance.delete("follow/" + id ).then(response => response.data)
    },

    getProfile(id){
        return instance.get("profile/" + id, ).then(response => response.data)
    }

}

export const AuthApi = {

    me(){
        return instance.get("auth/me" ).then(response => response.data)
    },
}