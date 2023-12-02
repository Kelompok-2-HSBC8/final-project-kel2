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

export const getTweet = () => {
    return api().get("/v1/tweet");
};

export const createTweet = (content, id) => {
    return api().post("/v1/tweet", { content, id });
};

export const getTweetById = (id) => {
    return api().get(`/v1/tweet/${id}`);
};
