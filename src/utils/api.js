import axios from "axios";

const BASE_TWEET_URL =
    "https://64fe9394f8b9eeca9e28d2eb.mockapi.io/api/v1/tweet";
const BASE_USER_URL = "https://64fe9394f8b9eeca9e28d2eb.mockapi.io/api/v1/user";

const getTweets = async () => {
    try {
        const data = await axios.get(BASE_TWEET_URL);
        return { data: data.data };
    } catch (e) {
        console.log(e);
    }
};

const getUser = async () => {
    try {
        const data = await axios.get(BASE_USER_URL);
        return { data: data.data };
    } catch (e) {
        console.log(e);
    }
};

export { getTweets, getUser };
