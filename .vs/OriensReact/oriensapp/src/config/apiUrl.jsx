import { Configuration } from ".";

const BASE_URL = (url) => Configuration.BASE_URL + url;

export const UserAPI = {
    USER_SIGNIN: BASE_URL('/users/signin'),
    USER_SIGNOUT: BASE_URL('/users/signout'),
    USER_UPDATE: BASE_URL('/users/update'),
    USER_GET_ID: (id) => BASE_URL(`/users/getbyid/${id}`),
}

export const RoleAPI = {
    ROLE_GET: BASE_URL('/roles/getall'),
    ROLE_CREATE: BASE_URL('/roles/create'),
    ROLE_UPDATE: (id) => BASE_URL(`/roles/${id}`),
    ROLE_GET_ID: (id) => BASE_URL(`/roles/getbyid/${id}`),
}