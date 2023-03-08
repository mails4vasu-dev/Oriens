import axios from 'axios';
import { UserAPI } from '../config/apiUrl';
const responseBody = (response) => response.data;

const request = {
    get: (url) => axios.get(url).then(responseBody),
    post: (url, body) => axios.post(url, body, {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    }).then(responseBody),
    put: (url, body) => axios.put(url, body).then(responseBody),
    del: (url) => axios.delete(url).then(responseBody)
}

const Users = {
    signInUser: () => request.get(UserAPI.USER_SIGNIN),
    signOutUser: () => request.get(UserAPI.USER_SIGNOUT),
    updateUser: () => request.get(UserAPI.USER_UPDATE),
    getUserById: (Id) => request.get(UserAPI.USER_GET_ID(Id))
}

const Roles = {
    getRole: () => request.get(RoleAPI.ROLE_GET),
    createRole: () => request.get(RoleAPI.ROLE_CREATE),
    updateRole: () => request.get(RoleAPI.ROLE_UPDATE),
    getRoleById: (Id) => request.get(RoleAPI.ROLE_GET_ID(Id))
}

const AxiosService = {
    Users,
    Roles
}

export default AxiosService;
