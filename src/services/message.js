import axios from "axios";

const data = JSON.parse(
    localStorage.getItem("sb-lfodunqhxvhczpjvpxnh-auth-token") ||
    JSON.parse(localStorage.getItem("sb-lfodunqhxvhczpjvpxnh-auth-token"))
);
const api = ({ headers = {}, params = {} } = {}) => {
    const instance = axios.create({
        baseURL: `${import.meta.env.VITE_BASE_API_URL}`,
        headers: {
            Authorization: `Bearer ${data.access_token}`,
            ...headers,
        },
        params,
    });
    return instance;
};

export const getMessage = () => {
    return api().get("/v1/chat");
};
