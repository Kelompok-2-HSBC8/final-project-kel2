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

export const getMessage = () => {
    return api().get("/v1/chat");
};
