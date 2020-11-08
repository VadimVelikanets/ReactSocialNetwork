import Axios from 'axios';
const BaseUrl = 'https://social-network.samuraijs.com/api/1.0/';
const AxiosInstance = Axios.create({
    withCredentials: true, 
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY" : "d7f15595-8029-4163-bc7a-b9689407c707"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
    return AxiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response =>{
        return response.data
        });
    },
    followUsers(userId){
        return AxiosInstance.post(`follow/${userId}`, {})
        .then(response =>{
            return response.data
            });
        },
    unFollowUsers(userId){
            return AxiosInstance.delete(`follow/${userId}`)
            .then(response =>{
                return response.data
                });
            },  

    getProfile(userId){
        return AxiosInstance.get(`profile/${userId}`)
        .then(response =>{
            return response.data
            });
    }        
}


export const authAPI = {
    
    me(userId){
        return AxiosInstance.get(`auth/me`)
        .then(response =>{
            return response.data
            });
    }       
}