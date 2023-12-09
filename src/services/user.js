import axios from "axios";

const token = localStorage.getItem("token");
const api = ({ headers = {}, params = {} } = {}) => {
    const instance = axios.create({
        baseURL: `${import.meta.env.VITE_BASE_API_URL}`,
        headers: {
            Authorization: `Bearer ${token}`,
            ...headers,
        },
        params,
    });
    return instance;
};

export const getAllUsers = () => {
    return api().get("/v1/user");
};
export const getUserInfo = () => {
    return api().get(`/v1/info`);
};

export const followUser = (data) => {
    return api().post(`/v1/follow`, data);
}

export const getUserById = (id) => {
    return api().get(`/v1/user/${id}`);
}

export const createBio = (bio) => {
    return api().post(`/v1/profile/bio`, bio);
}