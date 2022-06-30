import { apiService } from "./api-service";

async function getAllUser(){
    const res = await apiService.get('/users');
    return res;
}


export const userService = {getAllUser}